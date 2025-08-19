#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Funkcija za popravak layout putanja
function fixLayoutPaths(filePath) {
  console.log(`🔧 Popravljam layout putanju: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Zamijeni @/layouts/ChapterLayout.astro s relativnom putanjom
  const fixedContent = content.replace(
    /layout: @\/layouts\/ChapterLayout\.astro/g,
    'layout: ../../../layouts/ChapterLayout.astro'
  );
  
  // Spremi popravljeni fajl
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log(`✅ Popravljen: ${filePath}`);
}

// Glavna funkcija
function main() {
  console.log('🔧 Započinjem popravak layout putanja...\n');
  
  // Pronađi sve MDX fajlove s problematičnim layout putanjom
  const mdxFiles = glob.sync('src/content/docs/poglavlje-*/**/*.mdx');
  
  let fixedCount = 0;
  
  for (const filePath of mdxFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Provjeri ima li problematičnu layout putanju
      if (content.includes('layout: @/layouts/ChapterLayout.astro')) {
        fixLayoutPaths(filePath);
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Greška pri čitanju ${filePath}:`, error.message);
    }
  }
  
  console.log('\n🎉 POPRAVAK LAYOUT PUTANJA ZAVRŠEN!');
  console.log(`✅ Popravljeno: ${fixedCount} fajlova`);
}

// Pokreni skriptu
if (require.main === module) {
  main();
}
