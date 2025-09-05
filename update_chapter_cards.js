const fs = require('fs');
const path = require('path');

// Lista svih poglavlja
const chapters = [
  'poglavlje-2.astro', 'poglavlje-3.astro', 'poglavlje-4.astro', 'poglavlje-5.astro',
  'poglavlje-7.astro', 'poglavlje-8.astro', 'poglavlje-9.astro', 'poglavlje-10.astro',
  'poglavlje-11.astro', 'poglavlje-12.astro', 'poglavlje-13.astro', 'poglavlje-14.astro',
  'poglavlje-15.astro', 'poglavlje-16.astro', 'poglavlje-17.astro', 'poglavlje-18.astro',
  'poglavlje-19.astro', 'poglavlje-20.astro', 'poglavlje-21.astro', 'poglavlje-22.astro',
  'poglavlje-23.astro'
];

// Funkcija za stiliziranje kartice
function styleCard(cardHtml, color, link) {
  // Ekstraktiraj naslov iz postojeće kartice
  const titleMatch = cardHtml.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim() : '';
  
  // Ekstraktiraj SVG ikonu
  const svgMatch = cardHtml.match(/<svg[^>]*>[\s\S]*?<\/svg>/);
  const svg = svgMatch ? svgMatch[0] : '';
  
  return `<a href="${link}" class="group">
        <div class="bg-gray-800 rounded-xl shadow-lg border border-${color}-500/30 overflow-hidden">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-lg flex items-center justify-center">
                ${svg}
              </div>
              <svg class="w-6 h-6 text-gray-400 group-hover:text-${color}-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-${color}-400 transition-colors">
              ${title}
            </h3>
          </div>
        </div>
      </a>`;
}

// Funkcija za ažuriranje naslova
function updateTitles(content) {
  // Ažuriraj naslov "Sadržaj"
  content = content.replace(
    /<h2 class="text-3xl font-bold text-gray-900 mb-8">Sadržaj<\/h2>/g,
    '<h2 class="text-3xl font-bold mb-8" style="color: #f0f2f6;">Sadržaj</h2>'
  );
  
  // Ažuriraj naslov "Laboratorijske vježbe"
  content = content.replace(
    /<h2 class="text-3xl font-bold text-gray-900 mb-8">Laboratorijske vježbe<\/h2>/g,
    '<h2 class="text-3xl font-bold mb-8" style="color: #f0f2f6;">Laboratorijske vježbe</h2>'
  );
  
  return content;
}

// Glavna funkcija
async function updateChapters() {
  for (const chapter of chapters) {
    const filePath = path.join('src/pages', chapter);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Ažuriraj naslove
      content = updateTitles(content);
      
      // Spremi ažuriranu datoteku
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Ažurirano: ${chapter}`);
      
    } catch (error) {
      console.error(`❌ Greška pri ažuriranju ${chapter}:`, error.message);
    }
  }
}

// Pokreni skriptu
updateChapters();
