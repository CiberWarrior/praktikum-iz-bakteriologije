const fs = require('fs');
const path = require('path');

// Konfiguracija za svako poglavlje
const chapters = [
  {
    number: 17,
    title: 'Biogeokemijski ciklus ugljika',
    color: 'green',
    theoryContent: 'Detaljna teorija o biogeokemijskom ciklusu ugljika',
    exercisesContent: 'Praktične vježbe za proučavanje ciklusa ugljika',
    labContent: 'Laboratorijski protokoli za analizu ugljika'
  },
  {
    number: 18,
    title: 'Biogeokemijski ciklus dušika',
    color: 'blue',
    theoryContent: 'Detaljna teorija o biogeokemijskom ciklusu dušika',
    exercisesContent: 'Praktične vježbe za proučavanje ciklusa dušika',
    labContent: 'Laboratorijski protokoli za analizu dušika'
  },
  {
    number: 19,
    title: 'Biogeokemijski ciklus sumpora',
    color: 'purple',
    theoryContent: 'Detaljna teorija o biogeokemijskom ciklusu sumpora',
    exercisesContent: 'Praktične vježbe za proučavanje ciklusa sumpora',
    labContent: 'Laboratorijski protokoli za analizu sumpora'
  },
  {
    number: 20,
    title: 'Biogeokemijski ciklus fosfora',
    color: 'yellow',
    theoryContent: 'Detaljna teorija o biogeokemijskom ciklusu fosfora',
    exercisesContent: 'Praktične vježbe za proučavanje ciklusa fosfora',
    labContent: 'Laboratorijski protokoli za analizu fosfora'
  },
  {
    number: 21,
    title: 'Metoda otiska',
    color: 'red',
    theoryContent: 'Detaljna teorija o metodi otiska',
    exercisesContent: 'Praktične vježbe s metodom otiska',
    labContent: 'Laboratorijski protokoli za metodu otiska'
  },
  {
    number: 22,
    title: 'Streptomiceti',
    color: 'indigo',
    theoryContent: 'Detaljna teorija o streptomicetima',
    exercisesContent: 'Praktične vježbe za identifikaciju streptomiceta',
    labContent: 'Laboratorijski protokoli za rad sa streptomicetima'
  },
  {
    number: 23,
    title: 'Izolacija anaerobnih fototrofnih bakterija',
    color: 'pink',
    theoryContent: 'Detaljna teorija o anaerobnim fototrofnim bakterijama',
    exercisesContent: 'Praktične vježbe za izolaciju anaerobnih bakterija',
    labContent: 'Laboratorijski protokoli za anaerobne tehnike'
  }
];

// Funkcija za kreiranje direktorija
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Kreiran direktorij: ${dirPath}`);
  }
}

// Funkcija za kreiranje teorijske stranice
function createTheoryPage(chapter) {
  const content = `---
import ChapterLayout from '../../../components/ChapterLayout.astro';
import ChapterNavigation from '../../../components/ChapterNavigation.astro';
import { getChapterConfig } from '../../../config/chapters';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = 'Teorija - ${chapter.title}',
  description = '${chapter.theoryContent}'
} = Astro.props;

const chapterConfig = getChapterConfig(${chapter.number});
---

<ChapterLayout 
  title={title} 
  description={description} 
  chapterNumber={${chapter.number}}
  primaryColor="${chapter.color}"
  prevLink="/poglavlje-${chapter.number}/" 
  nextLink="/poglavlje-${chapter.number}/vjezbe/" 
  prevText="← Pregled poglavlja" 
  nextText="Vježbe →" 
  ctaTitle="Spreman za praktične vježbe?" 
  ctaDescription="Primijenite stečeno znanje u praktičnim laboratorijskim vježbama." 
  ctaPrimaryText="Praktične vježbe" 
  ctaPrimaryLink="/poglavlje-${chapter.number}/vjezbe/" 
  ctaSecondaryText="Povratak na pregled" 
  ctaSecondaryLink="/poglavlje-${chapter.number}/"
  showBreadcrumb={true}
  breadcrumbPath={[
    { name: 'Sadržaj', url: '/sadrzaj/' },
    { name: 'Poglavlje ${chapter.number}', url: '/poglavlje-${chapter.number}/' },
    { name: 'Teorija', url: '/poglavlje-${chapter.number}/teorija/' }
  ]}
>
  <!-- Navigacija kroz poglavlje -->
  <ChapterNavigation 
    chapterNumber={${chapter.number}} 
    currentSection="theory" 
    chapterTitle="${chapter.title}"
  />

  <!-- Glavni teorijski sadržaj -->
  <div class="space-y-8">
    
    <!-- Uvod u teoriju -->
    <section class="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="w-8 h-8 bg-${chapter.color}-600 rounded-lg flex items-center justify-center mr-3">
          <span class="text-white font-bold">1</span>
        </span>
        Uvod u ${chapter.title}
      </h2>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-700 mb-4">
          Ova sekcija sadrži detaljnu teoriju o ${chapter.title.toLowerCase()}. 
          Naučit ćete o temeljnim principima, metodama i praktičnim primjenama.
        </p>
        
        <div class="bg-${chapter.color}-50 rounded-lg p-4 border-l-4 border-${chapter.color}-500">
          <h4 class="font-semibold text-${chapter.color}-800 mb-2">💡 Ključni koncepti:</h4>
          <ul class="list-disc list-inside space-y-1 text-${chapter.color}-700">
            <li>Temeljni principi</li>
            <li>Metode istraživanja</li>
            <li>Praktične primjene</li>
            <li>Važnost u prirodi</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Dodatni sadržaj -->
    <section class="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
          <span class="text-white font-bold">2</span>
        </span>
        Dodatni teorijski sadržaj
      </h2>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-700 mb-4">
          Ovdje će biti dodan detaljniji teorijski sadržaj specifičan za ${chapter.title.toLowerCase()}.
        </p>
        
        <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
          <h4 class="font-semibold text-gray-800 mb-2">📚 Literatura:</h4>
          <p class="text-gray-700">
            Preporučena literatura za dodatno proučavanje ove teme.
          </p>
        </div>
      </div>
    </section>

  </div>
</ChapterLayout>`;

  return content;
}

// Funkcija za kreiranje stranice vježbi
function createExercisesPage(chapter) {
  const content = `---
import ChapterLayout from '../../../components/ChapterLayout.astro';
import ChapterNavigation from '../../../components/ChapterNavigation.astro';
import { getChapterConfig } from '../../../config/chapters';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = 'Vježbe - ${chapter.title}',
  description = '${chapter.exercisesContent}'
} = Astro.props;

const chapterConfig = getChapterConfig(${chapter.number});
---

<ChapterLayout 
  title={title} 
  description={description} 
  chapterNumber={${chapter.number}}
  primaryColor="${chapter.color}"
  prevLink="/poglavlje-${chapter.number}/teorija/" 
  nextLink="/poglavlje-${chapter.number}/laboratorij/" 
  prevText="← Teorija" 
  nextText="Laboratorij →" 
  ctaTitle="Spreman za laboratorij?" 
  ctaDescription="Upoznajte sigurnosne mjere i laboratorijsku opremu." 
  ctaPrimaryText="Laboratorij" 
  ctaPrimaryLink="/poglavlje-${chapter.number}/laboratorij/" 
  ctaSecondaryText="Povratak na teoriju" 
  ctaSecondaryLink="/poglavlje-${chapter.number}/teorija/"
  showBreadcrumb={true}
  breadcrumbPath={[
    { name: 'Sadržaj', url: '/sadrzaj/' },
    { name: 'Poglavlje ${chapter.number}', url: '/poglavlje-${chapter.number}/' },
    { name: 'Vježbe', url: '/poglavlje-${chapter.number}/vjezbe/' }
  ]}
>
  <!-- Navigacija kroz poglavlje -->
  <ChapterNavigation 
    chapterNumber={${chapter.number}} 
    currentSection="exercises" 
    chapterTitle="${chapter.title}"
  />

  <!-- Uvod u vježbe -->
  <div class="bg-gradient-to-br from-${chapter.color}-50 to-${chapter.color}-100 rounded-xl p-8 border border-${chapter.color}-200 mb-8">
    <h2 class="text-2xl font-bold text-${chapter.color}-900 mb-4">Praktične vježbe</h2>
    <p class="text-${chapter.color}-800 text-lg leading-relaxed">
      Ove vježbe će vas uputiti kroz praktične metode proučavanja ${chapter.title.toLowerCase()}. 
      Svaka vježba uključuje detaljne korake i očekivane rezultate.
    </p>
  </div>

  <!-- Lista vježbi -->
  <div class="space-y-6">
    
    <!-- Vježba 1 -->
    <div class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-${chapter.color}-600 text-white p-6">
        <h3 class="text-xl font-bold flex items-center">
          <span class="w-8 h-8 bg-white text-${chapter.color}-600 rounded-lg flex items-center justify-center mr-3 font-bold">1</span>
          Vježba 1: Osnovne metode
        </h3>
      </div>
      
      <div class="p-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">Cilj vježbe:</h4>
            <p class="text-gray-700 mb-4">
              Naučiti osnovne metode proučavanja ${chapter.title.toLowerCase()}.
            </p>
            
            <h4 class="font-semibold text-gray-800 mb-3">Potrebni materijali:</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Laboratorijska oprema</li>
              <li>Kemikalije i reagensi</li>
              <li>Uzorci za analizu</li>
              <li>Zaštitna oprema</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">Koraci:</h4>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>Priprema radne površine</li>
              <li>Priprema uzoraka</li>
              <li>Provođenje analize</li>
              <li>Bilježenje rezultata</li>
              <li>Interpretacija rezultata</li>
            </ol>
          </div>
        </div>
        
        <div class="mt-6 pt-4 border-t border-gray-200">
          <a href="/poglavlje-${chapter.number}/vjezbe/vjezba-1/" class="inline-flex items-center px-4 py-2 bg-${chapter.color}-600 text-white rounded-lg hover:bg-${chapter.color}-700 transition-colors">
            Detaljna vježba →
          </a>
        </div>
      </div>
    </div>

  </div>

  <!-- Napomene za vježbe -->
  <div class="mt-8 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
    <h3 class="text-lg font-bold text-yellow-800 mb-3">⚠️ Važne napomene za vježbe:</h3>
    <ul class="list-disc list-inside space-y-2 text-yellow-700">
      <li>Uvijek radite aseptički</li>
      <li>Koristite odgovarajuću zaštitnu opremu</li>
      <li>Pravilno odlagajte kontaminirani materijal</li>
      <li>Bilježite sve rezultate u laboratorijski dnevnik</li>
      <li>U slučaju nesreće, odmah obavijestite nastavnika</li>
    </ul>
  </div>

</ChapterLayout>`;

  return content;
}

// Funkcija za kreiranje laboratorijske stranice
function createLaboratoryPage(chapter) {
  const content = `---
import ChapterLayout from '../../../components/ChapterLayout.astro';
import ChapterNavigation from '../../../components/ChapterNavigation.astro';
import { getChapterConfig } from '../../../config/chapters';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = 'Laboratorij - ${chapter.title}',
  description = '${chapter.labContent}'
} = Astro.props;

const chapterConfig = getChapterConfig(${chapter.number});
---

<ChapterLayout 
  title={title} 
  description={description} 
  chapterNumber={${chapter.number}}
  primaryColor="${chapter.color}"
  prevLink="/poglavlje-${chapter.number}/vjezbe/" 
  nextLink="/poglavlje-${chapter.number + 1}/" 
  prevText="← Vježbe" 
  nextText="Poglavlje ${chapter.number + 1} →" 
  ctaTitle="Spreman za sljedeće poglavlje?" 
  ctaDescription="Nastavite s učenjem i upoznajte sljedeće teme." 
  ctaPrimaryText="Poglavlje ${chapter.number + 1}" 
  ctaPrimaryLink="/poglavlje-${chapter.number + 1}/" 
  ctaSecondaryText="Povratak na pregled" 
  ctaSecondaryLink="/poglavlje-${chapter.number}/"
  showBreadcrumb={true}
  breadcrumbPath={[
    { name: 'Sadržaj', url: '/sadrzaj/' },
    { name: 'Poglavlje ${chapter.number}', url: '/poglavlje-${chapter.number}/' },
    { name: 'Laboratorij', url: '/poglavlje-${chapter.number}/laboratorij/' }
  ]}
>
  <!-- Navigacija kroz poglavlje -->
  <ChapterNavigation 
    chapterNumber={${chapter.number}} 
    currentSection="laboratory" 
    chapterTitle="${chapter.title}"
  />

  <!-- Uvod u laboratorij -->
  <div class="bg-gradient-to-br from-${chapter.color}-50 to-${chapter.color}-100 rounded-xl p-8 border border-${chapter.color}-200 mb-8">
    <h2 class="text-2xl font-bold text-${chapter.color}-900 mb-4">Laboratorijski rad</h2>
    <p class="text-${chapter.color}-800 text-lg leading-relaxed">
      Ova sekcija sadrži sve potrebne informacije za siguran i uspješan rad u laboratoriju 
      s ${chapter.title.toLowerCase()}.
    </p>
  </div>

  <!-- Sigurnosne mjere -->
  <section class="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
        <span class="text-white font-bold">⚠️</span>
      </span>
      Sigurnosne mjere
    </h2>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Osobna zaštitna oprema:</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Laboratorijski mantil</strong> - obavezan za sve radnje</li>
          <li><strong>Rukavice</strong> - jednokratne, latex ili nitril</li>
          <li><strong>Zaštitne naočale</strong> - kod rada s kemikalijama</li>
          <li><strong>Zaštitna maska</strong> - kod rada s prašinama</li>
          <li><strong>Zatvorena obuća</strong> - obavezna</li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Opće sigurnosne mjere:</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Nikad ne jedite ili pijete u laboratoriju</li>
          <li>Ne stavljajte ruke u usta, nos ili oči</li>
          <li>Redovito perite ruke</li>
          <li>Pravilno odlagajte kontaminirani materijal</li>
          <li>Održavajte čistoću radne površine</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Laboratorijska oprema -->
  <section class="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
        <span class="text-white font-bold">🔬</span>
      </span>
      Laboratorijska oprema
    </h2>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-blue-50 rounded-lg p-4">
        <h3 class="font-semibold text-blue-800 mb-3">Osnovna oprema:</h3>
        <ul class="list-disc list-inside space-y-1 text-blue-700 text-sm">
          <li>Mikroskop</li>
          <li>Inkubator</li>
          <li>Autoklav</li>
          <li>Laminarni ormarić</li>
          <li>Vortex mikser</li>
          <li>Centrifuga</li>
        </ul>
      </div>
      
      <div class="bg-green-50 rounded-lg p-4">
        <h3 class="font-semibold text-green-800 mb-3">Pomoćna oprema:</h3>
        <ul class="list-disc list-inside space-y-1 text-green-700 text-sm">
          <li>Petrijeve zdjelice</li>
          <li>Epruvete i vrčići</li>
          <li>Pipete i vrčići</li>
          <li>Staklene pločice</li>
          <li>Filtri i membrane</li>
        </ul>
      </div>
      
      <div class="bg-purple-50 rounded-lg p-4">
        <h3 class="font-semibold text-purple-800 mb-3">Kemikalije:</h3>
        <ul class="list-disc list-inside space-y-1 text-purple-700 text-sm">
          <li>Razni reagensi</li>
          <li>Podloge za kultivaciju</li>
          <li>Fiziološka otopina</li>
          <li>Etanol (96%)</li>
          <li>Distilirana voda</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Protokoli rada -->
  <section class="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
    <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
        <span class="text-white font-bold">📋</span>
      </span>
      Protokoli rada
    </h2>
    
    <div class="space-y-6">
      <div class="border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">1. Priprema radne površine</h3>
        <ol class="list-decimal list-inside space-y-2 text-gray-700">
          <li>Očistite radnu površinu dezinfekcijskim sredstvom</li>
          <li>Postavite potrebnu opremu</li>
          <li>Provjerite funkcionalnost opreme</li>
          <li>Pripremite sterilne materijale</li>
        </ol>
      </div>
      
      <div class="border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">2. Aseptički rad</h3>
        <ol class="list-decimal list-inside space-y-2 text-gray-700">
          <li>Uklonite sve nakite i sat</li>
          <li>Obucite zaštitnu opremu</li>
          <li>Dezinfekcirajte ruke</li>
          <li>Radite u blizini plamenika</li>
          <li>Često dezinfekcirajte ruke</li>
        </ol>
      </div>
      
      <div class="border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">3. Završetak rada</h3>
        <ol class="list-decimal list-inside space-y-2 text-gray-700">
          <li>Dezinfekcirajte radnu površinu</li>
          <li>Pravilno odlagajte otpad</li>
          <li>Očistite opremu</li>
          <li>Skinite zaštitnu opremu</li>
          <li>Operite ruke</li>
        </ol>
      </div>
    </div>
  </section>

</ChapterLayout>`;

  return content;
}

// Glavna funkcija
function createChapterStructure() {
  console.log('🚀 Počinjem kreiranje strukture poglavlja...\n');

  chapters.forEach(chapter => {
    console.log(`📖 Kreiranje strukture za Poglavlje ${chapter.number}: ${chapter.title}`);
    
    // Kreiranje direktorija
    const chapterDir = `src/pages/poglavlje-${chapter.number}`;
    const theoryDir = `${chapterDir}/teorija`;
    const exercisesDir = `${chapterDir}/vjezbe`;
    const labDir = `${chapterDir}/laboratorij`;
    
    createDirectory(chapterDir);
    createDirectory(theoryDir);
    createDirectory(exercisesDir);
    createDirectory(labDir);
    
    // Kreiranje datoteka
    const theoryContent = createTheoryPage(chapter);
    const exercisesContent = createExercisesPage(chapter);
    const labContent = createLaboratoryPage(chapter);
    
    fs.writeFileSync(`${theoryDir}/index.astro`, theoryContent);
    fs.writeFileSync(`${exercisesDir}/index.astro`, exercisesContent);
    fs.writeFileSync(`${labDir}/index.astro`, labContent);
    
    console.log(`✅ Kreirane datoteke za Poglavlje ${chapter.number}`);
    console.log(`   - ${theoryDir}/index.astro`);
    console.log(`   - ${exercisesDir}/index.astro`);
    console.log(`   - ${labDir}/index.astro\n`);
  });
  
  console.log('🎉 Struktura poglavlja uspješno kreirana!');
  console.log('\n📝 Sljedeći koraci:');
  console.log('1. Premjestite postojeće poglavlje-*.astro datoteke u odgovarajuće direktorije kao index.astro');
  console.log('2. Ažurirajte import putanje u svim datotekama');
  console.log('3. Dodajte ChapterNavigation komponentu u glavne stranice poglavlja');
  console.log('4. Testirajte navigaciju kroz poglavlja');
}

// Pokretanje skripte
createChapterStructure();
