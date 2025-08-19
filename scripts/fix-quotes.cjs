#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Funkcija za popravak dodatnih navodnika
function fixQuotes(filePath) {
  console.log(`🔧 Popravljam navodnike: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Zamijeni layout putanje s dodatnim navodnicima
  const fixedContent = content.replace(
    /layout: (.*?)ChapterLayout\.astro"/g,
    'layout: $1ChapterLayout.astro'
  );
  
  // Spremi popravljeni fajl
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log(`✅ Popravljen: ${filePath}`);
}

// Glavna funkcija
function main() {
  console.log('🔧 Započinjem popravak navodnika...\n');
  
  // Pronađi sve MDX fajlove
  const mdxFiles = glob.sync('src/content/docs/poglavlje-*/**/*.mdx');
  
  let fixedCount = 0;
  
  for (const filePath of mdxFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Provjeri ima li dodatne navodnike u layout putanji
      if (content.includes('ChapterLayout.astro"')) {
        fixQuotes(filePath);
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Greška pri čitanju ${filePath}:`, error.message);
    }
  }
  
  console.log('\n🎉 POPRAVAK NAVODNIKA ZAVRŠEN!');
  console.log(`✅ Popravljeno: ${fixedCount} fajlova`);
}

// Pokreni skriptu
if (require.main === module) {
  main();
}
