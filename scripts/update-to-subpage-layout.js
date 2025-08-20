const fs = require('fs');
const path = require('path');

// Lista svih podstranica u poglavlju 1
const subpages = [
  'osnovni-pojmovi',
  'pravila-ponasanja',
  'laboratorijski-pribor',
  'opce-tehnike-rada',
  'preuzimanje-radnog-mjesta',
  'prva-pomoc',
  'zbrinjavanje-materijala',
  'hranjivi-mediji',
  'ekstrakti',
  'dezinfekcija-i-antisepsa',
  'uredaji-u-laboratoriju',
  'vjezba-1',
  'vjezba-2',
  'vjezba-3',
  'vjezba-4',
  'vjezba-5'
];

// Redoslijed stranica za navigaciju
const pageOrder = [
  'osnovni-pojmovi',
  'pravila-ponasanja',
  'laboratorijski-pribor',
  'opce-tehnike-rada',
  'preuzimanje-radnog-mjesta',
  'prva-pomoc',
  'zbrinjavanje-materijala',
  'hranjivi-mediji',
  'ekstrakti',
  'dezinfekcija-i-antisepsa',
  'uredaji-u-laboratoriju',
  'vjezba-1',
  'vjezba-2',
  'vjezba-3',
  'vjezba-4',
  'vjezba-5'
];

// Naslovi stranica
const pageTitles = {
  'osnovni-pojmovi': 'Osnovni pojmovi u bakteriologiji',
  'pravila-ponasanja': 'Pravila reda i ponašanja',
  'laboratorijski-pribor': 'Laboratorijski pribor u bakteriologiji',
  'opce-tehnike-rada': 'Opće tehnike rada',
  'preuzimanje-radnog-mjesta': 'Preuzimanje radnog mjesta',
  'prva-pomoc': 'Prva pomoć pri nezgodama',
  'zbrinjavanje-materijala': 'Zbrinjavanje upotrijebljenog materijala u bakteriologiji',
  'hranjivi-mediji': 'Hranjive podloge',
  'ekstrakti': 'Ekstrakti i sastojci hranjivih podloga',
  'dezinfekcija-i-antisepsa': 'Dezinfekcija i antisepsa',
  'uredaji-u-laboratoriju': 'Uređaji u bakteriološkom laboratoriju',
  'vjezba-1': 'Vježba 1',
  'vjezba-2': 'Vježba 2',
  'vjezba-3': 'Vježba 3',
  'vjezba-4': 'Vježba 4',
  'vjezba-5': 'Vježba 5'
};

function getNavigationLinks(currentPage) {
  const currentIndex = pageOrder.indexOf(currentPage);
  if (currentIndex === -1) return { prev: null, next: null };
  
  const prev = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const next = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;
  
  return { prev, next };
}

function generateSubPageLayout(pageName) {
  const title = pageTitles[pageName];
  const { prev, next } = getNavigationLinks(pageName);
  
  return `---
import SubPageLayout from '../../components/SubPageLayout.astro';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = '${title}',
  description = 'Sadržaj poglavlja 1 - ${title}'
} = Astro.props;
---

<SubPageLayout 
  title={title} 
  description={description} 
  chapterNumber={1}
  primaryColor="green"
  breadcrumbPath={[
    { name: '${title}', url: '/poglavlje-1/${pageName}/' }
  ]}
>
  <!-- Main Content Section -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      
      <!-- Sadržaj stranice -->
      <div class="prose prose-lg max-w-none">
        <slot />
      </div>

    </div>
  </section>

  <!-- Navigacijski gumbovi -->
  <div class="flex justify-between mt-12 max-w-4xl mx-auto px-4 sm:px-6">
    ${prev ? `<!-- Prethodna stranica -->
    <a
      href="/poglavlje-1/${prev}/"
      class="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 no-underline"
      aria-label="Prijeđi na prethodnu stranicu: ${pageTitles[prev]}"
    >
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      <span>${pageTitles[prev]}</span>
    </a>` : '<!-- Prethodna stranica -->\n    <div></div>'}
    
    ${next ? `<!-- Iduća stranica -->
    <a
      href="/poglavlje-1/${next}/"
      class="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 no-underline"
      aria-label="Prijeđi na sljedeću stranicu: ${pageTitles[next]}"
    >
      <span>${pageTitles[next]}</span>
      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>` : '<!-- Iduća stranica -->\n    <div></div>'}
  </div>

</SubPageLayout>`;
}

// Ažuriraj svaku podstranicu
subpages.forEach(pageName => {
  const filePath = path.join(__dirname, '..', 'src', 'pages', 'poglavlje-1', `${pageName}.astro`);
  
  if (fs.existsSync(filePath)) {
    console.log(`Ažuriram ${pageName}.astro...`);
    
    // Pročitaj postojeći sadržaj
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Izvuci sadržaj iz postojećeg layouta (između ChapterLayout tagova)
    const contentMatch = content.match(/<ChapterLayout[^>]*>([\s\S]*?)<\/ChapterLayout>/);
    
    if (contentMatch) {
      const innerContent = contentMatch[1];
      
      // Generiraj novi layout
      const newContent = generateSubPageLayout(pageName);
      
      // Zamijeni sadržaj
      const updatedContent = newContent.replace('<slot />', innerContent);
      
      // Spremi datoteku
      fs.writeFileSync(filePath, updatedContent);
      console.log(`✅ ${pageName}.astro ažuriran`);
    } else {
      console.log(`⚠️  Nije moguće pronaći ChapterLayout u ${pageName}.astro`);
    }
  } else {
    console.log(`⚠️  Datoteka ${pageName}.astro ne postoji`);
  }
});

console.log('\n🎉 Ažuriranje završeno!');
