import { Resend } from 'resend';
import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://ciberwarrior.github.io", "SSR": true};
const prerender = false;
const {
  RESEND_API_KEY,
  EMAIL_FROM,
  // e.g. 'Udžbenik <onboarding@resend.dev>' or verified domain sender
  EMAIL_TO,
  // recipient inbox
  NODE_ENV
} = Object.assign(__vite_import_meta_env__, { RESEND_API_KEY: "re_iBdo4CjM_ArfRxeqJgwV9HBR1meXwyS4A", EMAIL_FROM: "Bakteriologija PMF <onboarding@resend.dev>", EMAIL_TO: "bakteriologijapmf@gmail.com", NODE: process.env.NODE, _: process.env._, NODE_ENV: process.env.NODE_ENV });
if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
  console.error("Contact API (Resend): missing RESEND_API_KEY / EMAIL_FROM / EMAIL_TO.");
}
const resend = new Resend(RESEND_API_KEY);
const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(120).optional(),
  message: z.string().min(10).max(5e3),
  website: z.string().optional()
  // honeypot — must remain empty
});
const WINDOW_MS = 6e4;
const MAX_PER_WINDOW = 5;
const bucket = /* @__PURE__ */ new Map();
function rateLimit(key) {
  const now = Date.now();
  const winStart = now - WINDOW_MS;
  const hits = (bucket.get(key) || []).filter((t) => t > winStart);
  hits.push(now);
  bucket.set(key, hits);
  return hits.length <= MAX_PER_WINDOW;
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
const POST = async ({ request, clientAddress }) => {
  try {
    const ct = request.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return new Response(JSON.stringify({ ok: false, error: "Nepodržan format." }), {
        status: 415,
        headers: { "Content-Type": "application/json" }
      });
    }
    const ip = clientAddress || "unknown";
    if (!rateLimit(ip)) {
      return new Response(JSON.stringify({ ok: false, error: "Previše zahtjeva. Pokušajte kasnije." }), {
        status: 429,
        headers: { "Content-Type": "application/json" }
      });
    }
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ ok: false, error: "Nevažeći podaci", details: parsed.error.flatten() }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { name, email, subject, message, website } = parsed.data;
    if (website && website.trim() !== "") {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const subj = subject ? `[Kontakt] ${subject}` : `[Kontakt] Nova poruka`;
    const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto">
        <p><strong>Ime:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${subject ? `<p><strong>Tema:</strong> ${escapeHtml(subject)}</p>` : ""}
        <hr/>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>`;
    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      reply_to: email,
      subject: subj,
      html,
      text: `Ime: ${name}
Email: ${email}
${subject ? `Tema: ${subject}
` : ""}
Poruka:
${message}`
    });
    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ ok: false, error: "Greška pri slanju." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (NODE_ENV !== "production") {
      console.log("Contact email sent via Resend:", data?.id);
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error("Contact API error:", e);
    return new Response(JSON.stringify({ ok: false, error: "Greška pri slanju." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
