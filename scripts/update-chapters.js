#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Čitanje chapters.ts konfiguracije
const chaptersConfigPath = path.join(__dirname, '../src/config/chapters.ts');
const chaptersConfigContent = fs.readFileSync(chaptersConfigPath, 'utf8');

// Funkcija za ažuriranje stranice
function updateChapterPage(filePath, chapterNumber) {
  console.log(`Ažuriram ${filePath}...`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Provjeri već koristi li ChapterLayout
  if (content.includes('import ChapterLayout')) {
    console.log(`  - ${filePath} već koristi ChapterLayout, preskačem`);
    return;
  }
  
  // Ako je kompletan HTML, zamijeni s ChapterLayout
  if (content.includes('<!doctype html>')) {
    const newContent = `---
import ChapterLayout from '../components/ChapterLayout.astro';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = 'Poglavlje ${chapterNumber}',
  description = 'Opis poglavlja ${chapterNumber}'
} = Astro.props;
---

<ChapterLayout 
  title={title}
  description={description}
  chapterNumber={${chapterNumber}}
  primaryColor="green"
>
  <!-- Sadržaj poglavlja -->
  <div class="prose prose-lg max-w-none">
    <p>Sadržaj poglavlja ${chapterNumber} će biti dodan ovdje.</p>
  </div>
</ChapterLayout>`;
    
    fs.writeFileSync(filePath, newContent);
    console.log(`  - ${filePath} ažuriran s ChapterLayout`);
  }
}

// Glavna funkcija
function main() {
  const pagesDir = path.join(__dirname, '../src/pages');
  
  // Pronađi sve poglavlje stranice
  const files = fs.readdirSync(pagesDir);
  const chapterFiles = files.filter(file => 
    file.startsWith('poglavlje-') && file.endsWith('.astro')
  );
  
  console.log('Pronađene stranice poglavlja:');
  chapterFiles.forEach(file => {
    const chapterNumber = file.match(/poglavlje-(\d+)\.astro/)?.[1];
    if (chapterNumber) {
      console.log(`  - ${file} (poglavlje ${chapterNumber})`);
      updateChapterPage(path.join(pagesDir, file), chapterNumber);
    }
  });
  
  console.log('\nAžuriranje završeno!');
}

main().catch(console.error);
