const fs = require('fs');
const path = require('path');

// Funkcija za konvertovanje tiskane reči u pisanu
function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Funkcija za konvertovanje slug-a u čitljiv naziv
function slugToTitle(slug) {
  // Prvo zameni crtice sa razmacima
  let title = slug.replace(/-/g, ' ');
  
  // Zameni specifične reči
  const replacements = {
    'test': 'test',
    'na': 'na',
    'u': 'u',
    'i': 'i',
    'za': 'za',
    'sa': 'sa',
    'iz': 'iz',
    'od': 'od',
    'do': 'do',
    'vjezba': 'vježba',
    'vjezbe': 'vježbe',
    'poglavlje': 'poglavlje',
    'bakterija': 'bakterija',
    'bakterije': 'bakterije',
    'koliformnih': 'koliformnih',
    'determinaciji': 'determinaciji',
    'vazni': 'važni',
    'testovi': 'testovi',
    'dvostrukom': 'dvostrukom',
    'seceru': 'šećeru',
    'kliglerovu': 'Kliglerovu',
    'metilno': 'metilno',
    'crvenilo': 'crvenilo',
    'voges': 'Voges',
    'proskauerov': 'Proskauerov',
    'oksidaza': 'oksidaza',
    'katalaza': 'katalaza',
    'razgradnja': 'razgradnja',
    'ugljikohidrata': 'ugljikohidrata',
    'ureje': 'ureje',
    'nitrata': 'nitrata',
    'nitrita': 'nitrita',
    'redukcija': 'redukcija',
    'stvaranje': 'stvaranje',
    'indola': 'indola',
    'amonijaka': 'amonijaka',
    'sumporovodika': 'sumporovodika',
    'uporaba': 'uporaba',
    'citrata': 'citrata',
    'biokemijska': 'biokemijska',
    'svojstva': 'svojstva',
    'biokemijskih': 'biokemijskih',
    'svojstava': 'svojstava'
  };
  
  // Primeni zamene
  Object.keys(replacements).forEach(key => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    title = title.replace(regex, replacements[key]);
  });
  
  // Konvertuj u title case
  return toTitleCase(title);
}

// Funkcija za popravljanje navigacijskih gumbova u fajlu
function fixNavigationButtons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pronađi sve navigacijske gumbe sa tiskanim slovima
    const navigationRegex = /<span class="text-lg">([^<]+)<\/span>/g;
    
    content = content.replace(navigationRegex, (match, text) => {
      // Preskoči ako je već u pravom formatu ili ako sadrži posebne karaktere
      if (text.includes('←') || text.includes('→') || text.includes('Povratak') || text.includes('Prijeđi')) {
        return match;
      }
      
      // Konvertuj u title case
      const newText = slugToTitle(text);
      if (newText !== text) {
        modified = true;
        console.log(`  ${text} → ${newText}`);
        return `<span class="text-lg">${newText}</span>`;
      }
      
      return match;
    });
    
    // Takođe popravi aria-label atribute
    const ariaLabelRegex = /aria-label="([^"]*?)"/g;
    
    content = content.replace(ariaLabelRegex, (match, label) => {
      if (label.includes('Test') || label.includes('Vježba') || label.includes('Bakterija')) {
        const newLabel = slugToTitle(label);
        if (newLabel !== label) {
          modified = true;
          console.log(`  aria-label: ${label} → ${newLabel}`);
          return `aria-label="${newLabel}"`;
        }
      }
      
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Greška pri čitanju fajla ${filePath}:`, error.message);
    return false;
  }
}

// Glavna funkcija
function main() {
  console.log('🔧 Popravljanje navigacijskih gumbova u poglavljima 5-23...\n');
  
  let totalFixed = 0;
  let totalFiles = 0;
  
  // Procesiraj poglavlja 5-23
  for (let chapter = 5; chapter <= 23; chapter++) {
    const chapterDir = path.join(__dirname, 'src', 'pages', `poglavlje-${chapter}`);
    
    if (!fs.existsSync(chapterDir)) {
      console.log(`⚠️  Direktorijum poglavlje-${chapter} ne postoji, preskačem...`);
      continue;
    }
    
    console.log(`📁 Poglavlje ${chapter}:`);
    
    try {
      const files = fs.readdirSync(chapterDir);
      const astroFiles = files.filter(file => file.endsWith('.astro'));
      
      for (const file of astroFiles) {
        const filePath = path.join(chapterDir, file);
        totalFiles++;
        
        console.log(`  📄 ${file}:`);
        const fixed = fixNavigationButtons(filePath);
        
        if (fixed) {
          totalFixed++;
          console.log(`  ✅ Popravljeno`);
        } else {
          console.log(`  ℹ️  Nema izmena`);
        }
      }
    } catch (error) {
      console.error(`❌ Greška pri čitanju poglavlja ${chapter}:`, error.message);
    }
    
    console.log('');
  }
  
  console.log(`🎉 Završeno!`);
  console.log(`📊 Ukupno fajlova: ${totalFiles}`);
  console.log(`🔧 Popravljeno fajlova: ${totalFixed}`);
}

// Pokreni skriptu
main();
