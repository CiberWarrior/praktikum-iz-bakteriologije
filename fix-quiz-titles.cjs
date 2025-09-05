#!/usr/bin/env node

/**
 * Script za popravljanje naslova kviz stranica
 * Uklanja "Quiz - Poglavlje X" i stavlja pravi naslov poglavlja
 */

const fs = require('fs');
const path = require('path');

// Mapa naslova poglavlja
const chapterTitles = {
  1: "Sigurnost, oprema i osnovne tehnike rada",
  2: "Sterilizacija i dezinfekcija", 
  3: "Bojenje bakterija",
  4: "Hranjivi mediji",
  5: "Mikroskopiranje",
  6: "Osnovne tehnike rada",
  7: "Direktne metode brojanja bakterija",
  8: "Indirektne metode brojanja bakterija",
  9: "Identifikacija bakterija",
  10: "Kultivacija bakterija",
  11: "Specijalizirane tehnike",
  12: "Napredne metode",
  13: "Molekularne tehnike",
  14: "Genetske metode",
  15: "Biokemijski testovi",
  16: "Napredne analize",
  17: "Specijalizirane analize",
  18: "Kompleksne tehnike",
  19: "Napredne identifikacije",
  20: "Biogeokemijski ciklusi",
  21: "Metoda otiska",
  22: "Streptomiceti i razgradnja celuloze",
  23: "Završna poglavlja"
};

// Glavna funkcija
function main() {
  console.log('🔧 Popravljanje naslova kviz stranica...\n');
  
  const chapters = Array.from({ length: 23 }, (_, i) => i + 1);
  let fixedCount = 0;
  
  chapters.forEach(chapterNumber => {
    const filePath = path.join(__dirname, 'src', 'pages', `poglavlje-${chapterNumber}`, `quiz-${chapterNumber}.astro`);
    
    if (fs.existsSync(filePath)) {
      console.log(`📋 Popravljam poglavlje ${chapterNumber}...`);
      
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const chapterTitle = chapterTitles[chapterNumber] || `Poglavlje ${chapterNumber}`;
        
        // Zamijeni "Quiz - Poglavlje X" s pravim naslovom
        const oldTitlePattern = /chapterTitle="Quiz - Poglavlje \d+"/;
        const newTitle = `chapterTitle="${chapterTitle}"`;
        
        if (oldTitlePattern.test(content)) {
          content = content.replace(oldTitlePattern, newTitle);
          fs.writeFileSync(filePath, content);
          console.log(`   ✅ Popravljeno: "${chapterTitle}"`);
          fixedCount++;
        } else {
          console.log(`   ⚠️  Već je ispravno ili nema "Quiz - Poglavlje X"`);
        }
        
      } catch (error) {
        console.log(`   ❌ Greška: ${error.message}`);
      }
    } else {
      console.log(`   ⚠️  Kviz stranica ne postoji: poglavlje-${chapterNumber}/quiz-${chapterNumber}.astro`);
    }
  });
  
  console.log(`\n🎉 Popravljanje završeno!`);
  console.log(`📊 Popravljeno: ${fixedCount} stranica`);
}

// Pokreni skriptu
if (require.main === module) {
  main();
}

module.exports = {
  chapterTitles
};
