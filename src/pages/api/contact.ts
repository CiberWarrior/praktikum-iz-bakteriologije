export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { z } from 'zod';

const {
  RESEND_API_KEY,
  EMAIL_FROM, // e.g. 'Udžbenik <onboarding@resend.dev>' or verified domain sender
  EMAIL_TO,   // recipient inbox
  NODE_ENV,
} = import.meta.env as Record<string, string | undefined>;

if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
  console.error('Contact API (Resend): missing RESEND_API_KEY / EMAIL_FROM / EMAIL_TO.');
}

const resend = new Resend(RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(120).optional(),
  message: z.string().min(10).max(5000),
  website: z.string().optional(), // honeypot — must remain empty
});

const WINDOW_MS = 60_000; // 1 min window
const MAX_PER_WINDOW = 5;
const bucket = new Map<string, number[]>();

function rateLimit(key: string) {
  const now = Date.now();
  const winStart = now - WINDOW_MS;
  const hits = (bucket.get(key) || []).filter((t) => t > winStart);
  hits.push(now);
  bucket.set(key, hits);
  return hits.length <= MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const ct = request.headers.get('content-type') || '';
    if (!ct.includes('application/json')) {
      return new Response(JSON.stringify({ ok: false, error: 'Nepodržan format.' }), {
        status: 415, headers: { 'Content-Type': 'application/json' },
      });
    }

    const ip = clientAddress || 'unknown';
    if (!rateLimit(ip)) {
      return new Response(JSON.stringify({ ok: false, error: 'Previše zahtjeva. Pokušajte kasnije.' }), {
        status: 429, headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ ok: false, error: 'Nevažeći podaci', details: parsed.error.flatten() }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const { name, email, subject, message, website } = parsed.data;

    // Honeypot filled -> silently succeed
    if (website && website.trim() !== '') {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200, headers: { 'Content-Type': 'application/json' },
      });
    }

    const subj = subject ? `[Kontakt] ${subject}` : `[Kontakt] Nova poruka`;
    const html =
      `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto">
        <p><strong>Ime:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${subject ? `<p><strong>Tema:</strong> ${escapeHtml(subject)}</p>` : ''}
        <hr/>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      </div>`;

    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM!,
      to: [EMAIL_TO!],
      reply_to: email,
      subject: subj,
      html,
      text: `Ime: ${name}\nEmail: ${email}\n${subject ? `Tema: ${subject}\n` : ''}\nPoruka:\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ ok: false, error: 'Greška pri slanju.' }), {
        status: 500, headers: { 'Content-Type': 'application/json' },
      });
    }

    if (NODE_ENV !== 'production') {
      console.log('Contact email sent via Resend:', data?.id);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('Contact API error:', e);
    return new Response(JSON.stringify({ ok: false, error: 'Greška pri slanju.' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
};