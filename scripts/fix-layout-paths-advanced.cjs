#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Funkcija za izračunavanje relativne putanje do layouts direktorija
function calculateRelativePath(filePath) {
  const relativePath = path.relative(path.dirname(filePath), 'src/layouts');
  return relativePath.replace(/\\/g, '/'); // Zamijeni backslashes s forward slashes
}

// Funkcija za popravak layout putanja
function fixLayoutPaths(filePath) {
  console.log(`🔧 Popravljam layout putanju: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Izračunaj ispravnu relativnu putanju
  const relativePath = calculateRelativePath(filePath);
  const correctLayoutPath = `${relativePath}/ChapterLayout.astro`;
  
  // Zamijeni sve layout putanje s ispravnom putanjom
  const fixedContent = content.replace(
    /layout: .*ChapterLayout\.astro/g,
    `layout: ${correctLayoutPath}`
  );
  
  // Spremi popravljeni fajl
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log(`✅ Popravljen: ${filePath} -> ${correctLayoutPath}`);
}

// Glavna funkcija
function main() {
  console.log('🔧 Započinjem napredni popravak layout putanja...\n');
  
  // Pronađi sve MDX fajlove
  const mdxFiles = glob.sync('src/content/docs/poglavlje-*/**/*.mdx');
  
  let fixedCount = 0;
  
  for (const filePath of mdxFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Provjeri ima li layout putanju
      if (content.includes('layout:') && content.includes('ChapterLayout.astro')) {
        fixLayoutPaths(filePath);
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Greška pri čitanju ${filePath}:`, error.message);
    }
  }
  
  console.log('\n🎉 NAPREDNI POPRAVAK LAYOUT PUTANJA ZAVRŠEN!');
  console.log(`✅ Popravljeno: ${fixedCount} fajlova`);
}

// Pokreni skriptu
if (require.main === module) {
  main();
}
