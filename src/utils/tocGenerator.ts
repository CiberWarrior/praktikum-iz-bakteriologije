export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export function extractHeadingsFromMDX(content: string): TOCItem[] {
  // Match h2 and h3 headings
  const headingRegex = /^#{2,3}\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[0].startsWith('###') ? 3 : 2;
    const title = match[1].trim();
    
    // Generate ID from title
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    headings.push({
      id,
      title,
      level
    });
  }

  return headings;
}

export function extractHeadingsFromHTML(content: string): TOCItem[] {
  // Match h2 and h3 elements with or without IDs
  const headingRegex = /<h([23])[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h[23]>/g;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const id = match[2];
    const title = match[3].trim();

    if (id && title) {
      headings.push({
        id,
        title,
        level
      });
    }
  }

  return headings;
}

// Navigation structure for poglavlje-2
export const poglavlje2Navigation = [
  { slug: 'autoklaviranje', title: 'Autoklaviranje', prev: '/poglavlje-2/', next: '/poglavlje-2/fizicka-sterilizacija/' },
  { slug: 'fizicka-sterilizacija', title: 'Fizička sterilizacija', prev: '/poglavlje-2/autoklaviranje/', next: '/poglavlje-2/flambiranje/' },
  { slug: 'flambiranje', title: 'Flambiranje', prev: '/poglavlje-2/fizicka-sterilizacija/', next: '/poglavlje-2/frakciona-sterilizacija/' },
  { slug: 'frakciona-sterilizacija', title: 'Frakciona sterilizacija', prev: '/poglavlje-2/flambiranje/', next: '/poglavlje-2/hladna-sterilizacija/' },
  { slug: 'hladna-sterilizacija', title: 'Hladna sterilizacija', prev: '/poglavlje-2/frakciona-sterilizacija/', next: '/poglavlje-2/kemijska-sterilizacija/' },
  { slug: 'kemijska-sterilizacija', title: 'Kemijska sterilizacija', prev: '/poglavlje-2/hladna-sterilizacija/', next: '/poglavlje-2/kuhanje/' },
  { slug: 'kuhanje', title: 'Kuhanje', prev: '/poglavlje-2/kemijska-sterilizacija/', next: '/poglavlje-2/opaljivanje/' },
  { slug: 'opaljivanje', title: 'Opaljivanje', prev: '/poglavlje-2/kuhanje/', next: '/poglavlje-2/pasterizacija/' },
  { slug: 'pasterizacija', title: 'Pasterizacija', prev: '/poglavlje-2/opaljivanje/', next: '/poglavlje-2/spaljivanje/' },
  { slug: 'spaljivanje', title: 'Spaljivanje', prev: '/poglavlje-2/pasterizacija/', next: '/poglavlje-2/sterilizacija-ultrazvukom/' },
  { slug: 'sterilizacija-ultrazvukom', title: 'Sterilizacija ultrazvukom', prev: '/poglavlje-2/spaljivanje/', next: '/poglavlje-2/sterilizacija-zracenjem/' },
  { slug: 'sterilizacija-zracenjem', title: 'Sterilizacija zračenjem', prev: '/poglavlje-2/sterilizacija-ultrazvukom/', next: '/poglavlje-2/suha-sterilizacija/' },
  { slug: 'suha-sterilizacija', title: 'Suha sterilizacija', prev: '/poglavlje-2/sterilizacija-zracenjem/', next: '/poglavlje-2/zarenje/' },
  { slug: 'zarenje', title: 'Žarenje', prev: '/poglavlje-2/suha-sterilizacija/', next: '/poglavlje-2/vjezba-2/' },
  { slug: 'vjezba-2', title: 'Vježba 2', prev: '/poglavlje-2/zarenje/', next: '/poglavlje-2/vjezba-2-1/' },
  { slug: 'vjezba-2-1', title: 'Vježba 2.1', prev: '/poglavlje-2/vjezba-2/', next: '/poglavlje-2/vjezba-2-2/' },
  { slug: 'vjezba-2-2', title: 'Vježba 2.2', prev: '/poglavlje-2/vjezba-2-1/', next: '/poglavlje-2/vjezba-2-3/' },
  { slug: 'vjezba-2-3', title: 'Vježba 2.3', prev: '/poglavlje-2/vjezba-2-2/', next: '/poglavlje-2/vjezba-2-4/' },
  { slug: 'vjezba-2-4', title: 'Vježba 2.4', prev: '/poglavlje-2/vjezba-2-3/', next: '/poglavlje-2/vjezba-2-5/' },
  { slug: 'vjezba-2-5', title: 'Vježba 2.5', prev: '/poglavlje-2/vjezba-2-4/', next: '/poglavlje-3/' }
];

export function getNavigationForSlug(slug: string) {
  const currentIndex = poglavlje2Navigation.findIndex(item => item.slug === slug);
  if (currentIndex === -1) return null;
  
  const current = poglavlje2Navigation[currentIndex];
  const prev = currentIndex > 0 ? poglavlje2Navigation[currentIndex - 1] : null;
  const next = currentIndex < poglavlje2Navigation.length - 1 ? poglavlje2Navigation[currentIndex + 1] : null;
  
  return {
    current,
    prev: prev ? { link: prev.slug, text: prev.title } : null,
    next: next ? { link: next.slug, text: next.title } : null
  };
}
