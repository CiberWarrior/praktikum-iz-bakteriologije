const fs = require('fs');

// Naslovi poglavlja
const chapterTitles = {
  3: 'Bojenje bakterija',
  4: 'Pokretljivost bakterija',
  5: 'Biokemijska svojstva bakterija',
  6: 'Određivanje broja bakterija u suspenziji',
  7: 'Određivanje broja bakterija direktnim metodama',
  8: 'Bakterije indikatori sanitarnog stanja sredine',
  9: 'Sanitarna bakteriološka analiza vode',
  10: 'Termofilne bakterije',
  11: 'Aerobne sporogene bakterije',
  12: 'Anaerobne bakterije',
  13: 'Testovi osjetljivosti na antibiotike',
  14: 'Testovi osjetljivosti na bakteriofage',
  15: 'Testovi za određivanje kvalitete mlijeka',
  16: 'Bakterije mliječne fermentacije',
  17: 'Biogeokemijski ciklus ugljika',
  18: 'Biogeokemijski ciklus dušika',
  19: 'Biogeokemijski ciklus sumpora',
  20: 'Biogeokemijski ciklus fosfora',
  21: 'Metoda otiska',
  22: 'Streptomiceti',
  23: 'Purpurne sumporne bakterije'
};

// Funkcija za kreiranje sadržaja stranice
function createChapterPageContent(chapterNumber) {
  const title = chapterTitles[chapterNumber];
  const prevChapter = chapterNumber - 1;
  const nextChapter = chapterNumber + 1;
  
  return `---
import ChapterLayout from '../components/ChapterLayout.astro';
import { getCollection } from 'astro:content';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = 'Poglavlje ${chapterNumber}: ${title}',
  description = 'Dobrodošli u poglavlje ${chapterNumber}. Ovdje ćete pronaći sve potrebne informacije i vježbe.'
} = Astro.props;

// Dohvati sve MDX datoteke iz chapters kolekcije za ovo poglavlje
const allDocs = await getCollection('chapters');
const poglavljeDocs = allDocs
  .filter(entry => entry.id.startsWith('poglavlje-${chapterNumber}/') && entry.id !== 'poglavlje-${chapterNumber}/index')
  .sort((a, b) => {
    // Sortiraj po chapterNumber iz frontmattera, ako ne postoji koristi 0
    const aOrder = (a.data as any).chapterNumber || 0;
    const bOrder = (b.data as any).chapterNumber || 0;
    return aOrder - bOrder;
  });
---

<ChapterLayout 
  title={title}
  description={description}
  chapterNumber={${chapterNumber}}
  primaryColor="blue"
  prevLink="/poglavlje-${prevChapter}/"
  nextLink="/poglavlje-${nextChapter}/" 
  prevText="← Poglavlje ${prevChapter}"
  nextText="Poglavlje ${nextChapter} →" 
  ctaTitle="Nastavi na sljedeće poglavlje" 
  ctaDescription="Nastavite s učenjem." 
  ctaPrimaryText="Poglavlje ${nextChapter}" 
  ctaPrimaryLink="/poglavlje-${nextChapter}/" 
  ctaSecondaryText="Povratak na sadržaj"
  ctaSecondaryLink="/sadrzaj/"
  showBreadcrumb={true}
  breadcrumbPath={[
    { name: 'Sadržaj', url: '/sadrzaj/' },
    { name: 'Poglavlje ${chapterNumber}', url: '/poglavlje-${chapterNumber}/' }
  ]}
>

<style>
  .chapter-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .chapter-links li {
    margin-bottom: 0.75rem;
  }
  
  .chapter-links a {
    text-decoration: none;
    color: inherit;
  }
</style>

  <!-- Uvod u poglavlje -->
  <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 mb-8 hover:shadow-lg transition-all duration-300">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold text-blue-900 mb-3 font-heading">Dobrodošli u Poglavlje ${chapterNumber}</h3>
        <p class="text-blue-800 text-lg leading-relaxed font-body">
          Ovo poglavlje vodi vas kroz ${title.toLowerCase()}. 
          Naučit ćete o ključnim konceptima, metodama i praktičnim vježbama.
        </p>
      </div>
    </div>
  </div>



  <!-- Sadržaj poglavlja - Svi dostupni linkovi -->
  <div class="mb-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-8">Teorijski sadržaj</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {poglavljeDocs.map((entry) => {
        const slug = entry.id.replace('poglavlje-${chapterNumber}/', '');
        const title = entry.data.title || slug;
        const description = entry.data.description || 'Pogledajte detaljne informacije o ovoj temi.';
        
        return (
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900">{title}</h3>
            </div>
            <p class="text-gray-600 mb-4">{description}</p>
            <a href={\`/poglavlje-${chapterNumber}/\${slug}/\`} class="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
              Pročitaj više →
            </a>
          </div>
        );
      })}
    </div>
  </div>

</ChapterLayout>`;
}

// Ažuriraj sve glavne stranice poglavlja
for (let i = 3; i <= 23; i++) {
  const filePath = `src/pages/poglavlje-${i}.astro`;
  
  if (fs.existsSync(filePath)) {
    const content = createChapterPageContent(i);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Ažurirana stranica poglavlja ${i}: ${chapterTitles[i]}`);
  }
}

console.log('🎉 Sve glavne stranice poglavlja su ažurirane s ispravnim dizajnom!');
