#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapiranje emoji → Tabler Icons
const emojiToTabler = {
  '🔥': 'IconFlame',
  '⚠️': 'IconAlertTriangle',
  '🧪': 'IconFlask',
  '🔬': 'IconMicroscope',
  '🦠': 'IconBug',
  '✅': 'IconCheck',
  '📊': 'IconChartBar',
  '📈': 'IconChartBar',
  '📉': 'IconChartBar',
  '🔍': 'IconSearch',
  '📝': 'IconNotes',
  '💡': 'IconBulb',
  '🧬': 'IconBug',
  '🧫': 'IconFlask',
  '💊': 'IconFirstAidKit',
  '⚡': 'IconBolt',
  '📚': 'IconBook',
  '📖': 'IconBook'
};

// Mapiranje SVG ikona → Tabler Icons
const svgToTabler = {
  // Bookmark ikona
  'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z': 'IconBookmark',
  
  // Chevron left
  'M15 19l-7-7 7-7': 'IconChevronLeft',
  
  // Chevron right
  'M9 5l7 7-7 7': 'IconChevronRight',
  
  // Dokument ikona
  'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2': 'IconNotes',
  
  // Vanjska strelica
  'M7 17l9.2-9.2M17 17V7H7': 'IconExternalLink'
};

function migrateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Dodaj import ako ne postoji
    if (!content.includes('import Icon from') && (content.includes('🧪') || content.includes('🔥') || content.includes('⚠️'))) {
      content = content.replace(
        'import SubPageLayout from',
        'import SubPageLayout from\nimport Icon from \'../../components/ui/Icon.astro\';'
      );
      modified = true;
    }
    
    // Zamijeni emoji ikone
    Object.entries(emojiToTabler).forEach(([emoji, iconName]) => {
      const emojiRegex = new RegExp(`<span class="text-\\d+xl mr-\\d+">${emoji}</span>`, 'g');
      if (emojiRegex.test(content)) {
        content = content.replace(emojiRegex, `<div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">\n                  <Icon name="${iconName}" className="w-8 h-8 text-white" />\n                </div>`);
        modified = true;
      }
    });
    
    // Zamijeni SVG ikone
    Object.entries(svgToTabler).forEach(([svgPath, iconName]) => {
      const svgRegex = new RegExp(`<svg[^>]*>\\s*<path[^>]*d="${svgPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>\\s*</svg>`, 'g');
      if (svgRegex.test(content)) {
        content = content.replace(svgRegex, `<Icon name="${iconName}" className="w-5 h-5" />`);
        modified = true;
      }
    });
    
    // Zamijeni bookmark ikonu
    const bookmarkRegex = /<svg id="bookmark-icon"[^>]*>[\s\S]*?<\/svg>/g;
    if (bookmarkRegex.test(content)) {
      content = content.replace(bookmarkRegex, '<Icon name="IconBookmark" className="w-5 h-5" />');
      modified = true;
    }
    
    // Zamijeni chevron ikone u navigaciji
    const chevronLeftRegex = /<svg class="w-5 h-5 mr-3"[^>]*>[\s\S]*?d="M15 19l-7-7 7-7"[\s\S]*?<\/svg>/g;
    if (chevronLeftRegex.test(content)) {
      content = content.replace(chevronLeftRegex, '<Icon name="IconChevronLeft" className="w-5 h-5 mr-3" />');
      modified = true;
    }
    
    const chevronRightRegex = /<svg class="w-5 h-5 ml-3"[^>]*>[\s\S]*?d="M9 5l7 7-7 7"[\s\S]*?<\/svg>/g;
    if (chevronRightRegex.test(content)) {
      content = content.replace(chevronRightRegex, '<Icon name="IconChevronRight" className="w-5 h-5 ml-3" />');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Migrirano: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Greška pri migraciji ${filePath}:`, error.message);
    return false;
  }
}

function findAstroFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.astro')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  console.log('🔥 Započinjem migraciju na Tabler Icons...\n');
  
  const srcDir = path.join(process.cwd(), 'src');
  const astroFiles = findAstroFiles(srcDir);
  
  let migratedCount = 0;
  let totalCount = 0;
  
  for (const file of astroFiles) {
    totalCount++;
    if (migrateFile(file)) {
      migratedCount++;
    }
  }
  
  console.log(`\n📊 Rezultat migracije:`);
  console.log(`   - Ukupno datoteka: ${totalCount}`);
  console.log(`   - Migrirano: ${migratedCount}`);
  console.log(`   - Bez promjena: ${totalCount - migratedCount}`);
  
  if (migratedCount > 0) {
    console.log('\n🎉 Migracija uspješno završena!');
    console.log('💡 Sada možete koristiti Tabler Icons u cijelom projektu.');
  } else {
    console.log('\nℹ️  Nema datoteka za migraciju.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { migrateFile, emojiToTabler, svgToTabler };
