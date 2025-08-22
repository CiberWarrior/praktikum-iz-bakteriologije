const fs = require('fs');
const path = require('path');

// Define the correct order based on the card layout on poglavlje-1.astro
const correctOrder = [
  'preuzimanje-radnog-mjesta',
  'pravila-ponasanja',
  'opce-tehnike-rada',
  'dezinfekcija-i-antisepsa',
  'prva-pomoc',
  'zbrinjavanje-materijala',
  'uredaji-u-laboratoriju',
  'laboratorijski-pribor',
  'hranjivi-mediji',
  'ekstrakti',
  'bakterioloske-tehnike',
  'osnovni-pojmovi',
  'vjezba-1',
  'vjezba-2',
  'vjezba-3',
  'vjezba-4',
  'vjezba-5'
];

// Navigation mappings for each page
const navigationMappings = {
  'preuzimanje-radnog-mjesta': {
    prev: null, // First page
    next: 'pravila-ponasanja'
  },
  'pravila-ponasanja': {
    prev: 'preuzimanje-radnog-mjesta',
    next: 'opce-tehnike-rada'
  },
  'opce-tehnike-rada': {
    prev: 'pravila-ponasanja',
    next: 'dezinfekcija-i-antisepsa'
  },
  'dezinfekcija-i-antisepsa': {
    prev: 'opce-tehnike-rada',
    next: 'prva-pomoc'
  },
  'prva-pomoc': {
    prev: 'dezinfekcija-i-antisepsa',
    next: 'zbrinjavanje-materijala'
  },
  'zbrinjavanje-materijala': {
    prev: 'prva-pomoc',
    next: 'uredaji-u-laboratoriju'
  },
  'uredaji-u-laboratoriju': {
    prev: 'zbrinjavanje-materijala',
    next: 'laboratorijski-pribor'
  },
  'laboratorijski-pribor': {
    prev: 'uredaji-u-laboratoriju',
    next: 'hranjivi-mediji'
  },
  'hranjivi-mediji': {
    prev: 'laboratorijski-pribor',
    next: 'ekstrakti'
  },
  'ekstrakti': {
    prev: 'hranjivi-mediji',
    next: 'bakterioloske-tehnike'
  },
  'bakterioloske-tehnike': {
    prev: 'ekstrakti',
    next: 'osnovni-pojmovi'
  },
  'osnovni-pojmovi': {
    prev: 'bakterioloske-tehnike',
    next: 'vjezba-1'
  },
  'vjezba-1': {
    prev: 'osnovni-pojmovi',
    next: 'vjezba-2'
  },
  'vjezba-2': {
    prev: 'vjezba-1',
    next: 'vjezba-3'
  },
  'vjezba-3': {
    prev: 'vjezba-2',
    next: 'vjezba-4'
  },
  'vjezba-4': {
    prev: 'vjezba-3',
    next: 'vjezba-5'
  },
  'vjezba-5': {
    prev: 'vjezba-4',
    next: null // Last page
  }
};

// Page titles for navigation
const pageTitles = {
  'preuzimanje-radnog-mjesta': 'Preuzimanje radnog mjesta',
  'pravila-ponasanja': 'Pravila ponašanja',
  'opce-tehnike-rada': 'Opće tehnike rada',
  'dezinfekcija-i-antisepsa': 'Dezinfekcija i antisepsa',
  'prva-pomoc': 'Prva pomoć',
  'zbrinjavanje-materijala': 'Zbrinjavanje materijala',
  'uredaji-u-laboratoriju': 'Uređaji u laboratoriju',
  'laboratorijski-pribor': 'Laboratorijski pribor',
  'hranjivi-mediji': 'Hranjivi mediji',
  'ekstrakti': 'Ekstrakti',
  'bakterioloske-tehnike': 'Bakteriološke tehnike rada',
  'osnovni-pojmovi': 'Osnovni pojmovi',
  'vjezba-1': 'Vježba 1',
  'vjezba-2': 'Vježba 2',
  'vjezba-3': 'Vježba 3',
  'vjezba-4': 'Vježba 4',
  'vjezba-5': 'Vježba 5'
};

function updateNavigationLinks() {
  const pagesDir = path.join(__dirname, '../src/pages/poglavlje-1');
  
  correctOrder.forEach(pageSlug => {
    const filePath = path.join(pagesDir, `${pageSlug}.astro`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    const mapping = navigationMappings[pageSlug];
    
    if (!mapping) {
      console.log(`⚠️  No mapping found for: ${pageSlug}`);
      return;
    }
    
    // Update previous page link
    if (mapping.prev) {
      const prevTitle = pageTitles[mapping.prev];
      const prevPattern = /href="\/poglavlje-1\/[^"]*\/".*?>\s*<svg[^>]*>\s*<path[^>]*>\s*<\/svg>\s*<span[^>]*>[^<]*<\/span>/s;
      const prevReplacement = `href="/poglavlje-1/${mapping.prev}/" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 no-underline transform hover:-translate-y-1" aria-label="Prijeđi na prethodnu stranicu: ${prevTitle}">
      <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      <span class="text-lg">${prevTitle}</span>`;
      
      content = content.replace(prevPattern, prevReplacement);
    } else {
      // Remove previous link for first page
      const prevPattern = /<a[^>]*href="\/poglavlje-1\/[^"]*\/"[^>]*>[\s\S]*?<\/a>\s*<!-- Iduća stranica -->/s;
      content = content.replace(prevPattern, '<!-- Iduća stranica -->');
    }
    
    // Update next page link
    if (mapping.next) {
      const nextTitle = pageTitles[mapping.next];
      const nextPattern = /href="\/poglavlje-1\/[^"]*\/".*?>\s*<span[^>]*>[^<]*<\/span>\s*<svg[^>]*>\s*<path[^>]*>\s*<\/svg>\s*<\/a>/s;
      const nextReplacement = `href="/poglavlje-1/${mapping.next}/" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 no-underline transform hover:-translate-y-1" aria-label="Prijeđi na sljedeću stranicu: ${nextTitle}">
      <span class="text-lg">${nextTitle}</span>
      <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>`;
      
      content = content.replace(nextPattern, nextReplacement);
    } else {
      // Remove next link for last page
      const nextPattern = /<!-- Iduća stranica -->\s*<a[^>]*href="\/poglavlje-1\/[^"]*\/"[^>]*>[\s\S]*?<\/a>/s;
      content = content.replace(nextPattern, '<!-- Iduća stranica -->');
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated navigation for: ${pageSlug}`);
  });
}

updateNavigationLinks();
console.log('🎉 Navigation links updated successfully!');
