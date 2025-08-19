const fs = require('fs');
const path = require('path');

// Funkcija za kreiranje direktorija ako ne postoji
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Funkcija za premještanje MDX datoteka
function moveMdxFiles(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) {
    console.log(`Direktorij ${sourceDir} ne postoji, preskačem...`);
    return [];
  }
  
  const files = fs.readdirSync(sourceDir);
  const mdxFiles = files.filter(file => file.endsWith('.mdx'));
  
  mdxFiles.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Premješteno: ${file}`);
  });
  
  return mdxFiles;
}

// Funkcija za kreiranje dinamičke rute
function createDynamicRoute(chapterNumber) {
  const routeContent = `---
import ChapterLayout from '../../components/ChapterLayout.astro';
import { getEntryBySlug } from 'astro:content';

export async function getStaticPaths() {
  // Koristimo import.meta.glob da dobijemo sve MDX datoteke iz chapters/poglavlje-${chapterNumber}/
  const files = import.meta.glob('/src/content/chapters/poglavlje-${chapterNumber}/*.mdx');
  const paths = [];

  for (const path in files) {
    // Izvuci slug iz path-a (npr. "/src/content/chapters/poglavlje-${chapterNumber}/naziv.mdx" -> "naziv")
    const slug = path.split('/').pop()?.replace('.mdx', '');
    if (slug && slug !== 'index') {
      paths.push({
        params: { slug }
      });
    }
  }

  return paths;
}

const { slug } = Astro.params;

if (!slug) {
  throw new Error('Slug je obavezan');
}

// Dohvati MDX entry iz chapters kolekcije
// @ts-ignore
const entry = await getEntryBySlug('chapters', \`poglavlje-${chapterNumber}/\${slug}\`);

if (!entry) {
  throw new Error(\`Entry nije pronađen za slug: \${slug}\`);
}

// Renderiraj MDX sadržaj
// @ts-ignore
const { Content } = await entry.render();

// Izvuci podatke iz frontmattera
// @ts-ignore
const { data } = entry;

// Fallback za chapterNumber ako nije postavljen
const chapterNumber = (data as any).chapterNumber || ${chapterNumber};
---

<ChapterLayout
  title={(data as any).title || \`Poglavlje ${chapterNumber} - \${slug}\`}
  description={(data as any).description || ''}
  chapterNumber={chapterNumber}
  primaryColor={(data as any).primaryColor || 'blue'}
  prevLink={(data as any).prevLink || '/poglavlje-${chapterNumber - 1}/'}
  nextLink={(data as any).nextLink || '/poglavlje-${chapterNumber + 1}/'}
  prevText={(data as any).prevText || \`← Poglavlje ${chapterNumber - 1}\`}
  nextText={(data as any).nextText || \`Poglavlje ${chapterNumber + 1} →\`}
  ctaTitle={(data as any).ctaTitle || 'Nastavi na sljedeće poglavlje'}
  ctaDescription={(data as any).ctaDescription || 'Nastavite s učenjem.'}
  ctaPrimaryText={(data as any).ctaPrimaryText || \`Poglavlje ${chapterNumber + 1}\`}
  ctaPrimaryLink={(data as any).ctaPrimaryLink || '/poglavlje-${chapterNumber + 1}/'}
  ctaSecondaryText={(data as any).ctaSecondaryText || 'Povratak na sadržaj'}
  ctaSecondaryLink={(data as any).ctaSecondaryLink || '/sadrzaj/'}
  showBreadcrumb={(data as any).showBreadcrumb !== false}
  breadcrumbPath={(data as any).breadcrumbPath || [
    { name: 'Sadržaj', url: '/sadrzaj/' },
    { name: \`Poglavlje ${chapterNumber}\`, url: '/poglavlje-${chapterNumber}/' },
    { name: (data as any).title || slug, url: \`/poglavlje-${chapterNumber}/\${slug}/\` }
  ]}
>
  <!-- Renderiraj naslov ako postoji -->
  {(data as any).title && (
    <h1 class="text-4xl font-bold text-gray-900 mb-8">{(data as any).title}</h1>
  )}

  <!-- Renderiraj MDX sadržaj -->
  <div class="prose prose-slate max-w-none lg:prose-lg prose-h2:scroll-mt-28 prose-h3:scroll-mt-28 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-hr:border-slate-200">
    <Content />
  </div>
</ChapterLayout>`;

  return routeContent;
}

// Funkcija za ažuriranje glavne stranice poglavlja
function updateMainChapterPage(chapterNumber) {
  const pageContent = `---
import Layout from '../layouts/Layout.astro';
import { getCollection } from 'astro:content';

// Dohvati sve MDX datoteke iz chapters kolekcije za ovo poglavlje
const poglavljeDocs = await getCollection('chapters', ({ id }) => id.startsWith(\`poglavlje-${chapterNumber}/\`));
// Sortiraj po chapterNumber iz frontmattera
poglavljeDocs.sort((a, b) => (a.data.chapterNumber || 0) - (b.data.chapterNumber || 0));
---

<Layout title="Poglavlje ${chapterNumber}">
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Poglavlje ${chapterNumber}</h1>
    
    <!-- Uvodni tekst -->
    <div class="prose prose-slate max-w-none lg:prose-lg mb-8">
      <p>Dobrodošli u poglavlje ${chapterNumber}. Ovdje ćete pronaći sve potrebne informacije i vježbe.</p>
    </div>

    <!-- Dinamički generirani linkovi -->
    <div class="chapter-links">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Sadržaj poglavlja:</h2>
      <ul class="space-y-2">
        {poglavljeDocs.map((doc) => (
          <li>
            <a href={\`/poglavlje-${chapterNumber}/\${doc.slug}/\`} class="text-blue-600 hover:text-blue-800 underline">
              {doc.data.title || doc.slug}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </main>
</Layout>

<style>
  .chapter-links {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 0.5rem;
  }
  
  .chapter-links ul {
    list-style: none;
    padding: 0;
  }
  
  .chapter-links li {
    margin-bottom: 0.5rem;
  }
</style>`;

  return pageContent;
}

// Glavna funkcija za migraciju
async function migrateChapters() {
  console.log('🚀 Započinjem migraciju poglavlja 3-23...\n');

  for (let i = 3; i <= 23; i++) {
    console.log(`📁 Migriram poglavlje ${i}...`);
    
    const sourceDir = `src/content/docs/poglavlje-${i}`;
    const targetDir = `src/content/chapters/poglavlje-${i}`;
    const routeDir = `src/pages/poglavlje-${i}`;
    const routeFile = `src/pages/poglavlje-${i}/[slug].astro`;
    const mainPageFile = `src/pages/poglavlje-${i}.astro`;

    try {
      // 1. Kreiraj target direktorij
      ensureDir(targetDir);
      
      // 2. Premjesti MDX datoteke
      const movedFiles = moveMdxFiles(sourceDir, targetDir);
      
      if (movedFiles.length > 0) {
        // 3. Kreiraj direktorij za dinamičku rutu
        ensureDir(routeDir);
        
        // 4. Kreiraj dinamičku rutu
        const routeContent = createDynamicRoute(i);
        fs.writeFileSync(routeFile, routeContent);
        console.log(`✅ Kreirana dinamička ruta: ${routeFile}`);
        
        // 5. Ažuriraj glavnu stranicu poglavlja
        const mainPageContent = updateMainChapterPage(i);
        fs.writeFileSync(mainPageFile, mainPageContent);
        console.log(`✅ Ažurirana glavna stranica: ${mainPageFile}`);
        
        // 6. Obriši originalni direktorij
        if (fs.existsSync(sourceDir)) {
          fs.rmSync(sourceDir, { recursive: true, force: true });
          console.log(`🗑️ Obrisan originalni direktorij: ${sourceDir}`);
        }
      } else {
        console.log(`⚠️ Nema MDX datoteka u ${sourceDir}, preskačem...`);
      }
      
    } catch (error) {
      console.error(`❌ Greška pri migraciji poglavlja ${i}:`, error.message);
    }
    
    console.log(`✅ Poglavlje ${i} završeno\n`);
  }

  console.log('🎉 Migracija završena!');
  console.log('📝 Sljedeći koraci:');
  console.log('1. Ažuriraj astro.config.mjs da ukloni Starlight sidebar reference za poglavlja 3-23');
  console.log('2. Testiraj sve nove rute');
  console.log('3. Provjeri da li sve linkovi rade ispravno');
}

// Pokreni migraciju
migrateChapters().catch(console.error);
