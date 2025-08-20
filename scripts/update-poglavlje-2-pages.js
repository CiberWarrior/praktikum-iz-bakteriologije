import fs from 'fs';
import path from 'path';

// Navigation structure for poglavlje-2
const poglavlje2Navigation = [
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

function getNavigationForSlug(slug) {
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

function generatePageContent(slug, title) {
  const navigation = getNavigationForSlug(slug);
  const displayTitle = title || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  
  return `---
import EnhancedSubPageLayout from '../../components/EnhancedSubPageLayout.astro';
import { getEntryBySlug } from 'astro:content';
import { extractHeadingsFromMDX, getNavigationForSlug } from '../../utils/tocGenerator';

// Dohvati MDX entry iz chapters kolekcije
// @ts-ignore
const entry = await getEntryBySlug('chapters', 'poglavlje-2/${slug}');

if (!entry) {
  throw new Error('Entry nije pronađen za ${slug}');
}

// Renderiraj MDX sadržaj
// @ts-ignore
const { Content } = await entry.render();

// Izvuci podatke iz frontmattera
// @ts-ignore
const { data } = entry;

// Fallback za chapterNumber ako nije postavljen
const chapterNumber = (data as any).chapterNumber || 2;

// Generiraj breadcrumb path
const breadcrumbPath = (data as any).breadcrumbPath || [
  { name: (data as any).title || '${displayTitle}', url: '/poglavlje-2/${slug}/' }
];

// Extract TOC items from MDX content
// @ts-ignore
const tocItems = extractHeadingsFromMDX(entry.body || '');

// Get navigation
const navigation = getNavigationForSlug('${slug}');
---

<EnhancedSubPageLayout
  title={(data as any).title || '${displayTitle}'}
  description={(data as any).description || ''}
  chapterNumber={chapterNumber}
  primaryColor={(data as any).primaryColor || 'blue'}
  prevLink={navigation?.prev ? \`/poglavlje-2/\${navigation.prev.link}/\` : '/poglavlje-2/'}
  nextLink={navigation?.next ? \`/poglavlje-2/\${navigation.next.link}/\` : '/poglavlje-3/'}
  prevText={navigation?.prev ? navigation.prev.text : 'Poglavlje 2'}
  nextText={navigation?.next ? navigation.next.text : 'Poglavlje 3'}
  breadcrumbPath={breadcrumbPath}
  tocItems={tocItems}
>
  <!-- Renderiraj MDX sadržaj s poboljšanim stilovima -->
  <div class="prose prose-slate max-w-none lg:prose-lg xl:prose-xl prose-headings:scroll-mt-28 prose-h1:text-3xl prose-h1:font-bold prose-h1:text-gray-900 prose-h1:mb-6 prose-h1:mt-8 prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-gray-800 prose-h2:mb-4 prose-h2:mt-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-gray-700 prose-h3:mb-3 prose-h3:mt-5 prose-h4:text-lg prose-h4:font-medium prose-h4:text-gray-700 prose-h4:mb-2 prose-h4:mt-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-img:rounded-xl prose-img:shadow-lg prose-img:my-6 prose-hr:border-gray-300 prose-hr:my-8 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-table:border-collapse prose-table:w-full prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:p-3 prose-th:text-left prose-td:border prose-td:border-gray-300 prose-td:p-3">
    <Content />
  </div>
</EnhancedSubPageLayout>

<style>
  /* Dodatni stilovi za specifične elemente */
  .prose h1, .prose h2, .prose h3, .prose h4 {
    color: #1f2937;
    font-weight: 600;
  }
  
  .prose h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .prose h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #374151;
  }
  
  .prose h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
    color: #4b5563;
  }
  
  .prose p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #374151;
    margin-bottom: 1rem;
  }
  
  .prose ul, .prose ol {
    margin-bottom: 1rem;
  }
  
  .prose li {
    margin-bottom: 0.5rem;
    color: #374151;
  }
  
  .prose img {
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin: 1.5rem 0;
    max-width: 100%;
    height: auto;
  }
  
  .prose blockquote {
    border-left: 4px solid #3b82f6;
    padding-left: 1rem;
    font-style: italic;
    color: #374151;
    background-color: #f8fafc;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }
  
  .prose code {
    background-color: #f1f5f9;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    color: #1e293b;
  }
  
  .prose pre {
    background-color: #1e293b;
    color: #f1f5f9;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
  }
  
  .prose table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }
  
  .prose th {
    border: 1px solid #d1d5db;
    background-color: #f9fafb;
    padding: 0.75rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
  }
  
  .prose td {
    border: 1px solid #d1d5db;
    padding: 0.75rem;
    color: #374151;
  }
  
  /* Hover efekti za slike */
  .prose img:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
  
  /* Stilovi za linkove */
  .prose a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
  }
  
  .prose a:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
  
  /* Stilovi za liste */
  .prose ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }
  
  .prose ol {
    list-style-type: decimal;
    padding-left: 1.5rem;
  }
  
  .prose li {
    margin-bottom: 0.5rem;
  }
  
  /* Stilovi za horizontalnu liniju */
  .prose hr {
    border: none;
    border-top: 2px solid #e5e7eb;
    margin: 2rem 0;
  }
</style>`;
}

// List of all poglavlje-2 pages to update
const pagesToUpdate = [
  'fizicka-sterilizacija',
  'flambiranje',
  'frakciona-sterilizacija',
  'hladna-sterilizacija',
  'kemijska-sterilizacija',
  'kuhanje',
  'opaljivanje',
  'pasterizacija',
  'spaljivanje',
  'sterilizacija-ultrazvukom',
  'sterilizacija-zracenjem',
  'suha-sterilizacija',
  'zarenje',
  'vjezba-2',
  'vjezba-2-1',
  'vjezba-2-2',
  'vjezba-2-3',
  'vjezba-2-4',
  'vjezba-2-5'
];

// Update each page
pagesToUpdate.forEach(slug => {
  const filePath = `src/pages/poglavlje-2/${slug}.astro`;
  const content = generatePageContent(slug);
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
});

console.log('All poglavlje-2 pages have been updated!');
