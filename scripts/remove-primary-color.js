#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Funkcija za uklanjanje primaryColor prop-a
function removePrimaryColorProp(filePath) {
  console.log(`Ažuriram ${filePath}...`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Provjeri ima li primaryColor prop
  if (!content.includes('primaryColor=')) {
    console.log(`  - ${filePath} nema primaryColor prop, preskačem`);
    return;
  }
  
  // Ukloni primaryColor prop iz ChapterLayout poziva
  const updatedContent = content.replace(
    /primaryColor="[^"]*"/g,
    ''
  );
  
  // Očisti višestruke razmake
  const cleanedContent = updatedContent.replace(/\s+/g, ' ');
  
  fs.writeFileSync(filePath, cleanedContent);
  console.log(`  - ${filePath} ažuriran - uklonjen primaryColor prop`);
}

// Glavna funkcija
function main() {
  const pagesDir = path.join(__dirname, '../src/pages');
  
  // Pronađi sve stranice koje koriste ChapterLayout
  const files = fs.readdirSync(pagesDir);
  const chapterFiles = files.filter(file => 
    file.endsWith('.astro') && 
    fs.readFileSync(path.join(pagesDir, file), 'utf8').includes('ChapterLayout')
  );
  
  console.log('Pronađene stranice s ChapterLayout:');
  chapterFiles.forEach(file => {
    console.log(`  - ${file}`);
    removePrimaryColorProp(path.join(pagesDir, file));
  });
  
  console.log('\nUklanjanje primaryColor prop-a završeno!');
  console.log('Sada se boje automatski koriste iz chapters.ts konfiguracije.');
}

main().catch(console.error);
