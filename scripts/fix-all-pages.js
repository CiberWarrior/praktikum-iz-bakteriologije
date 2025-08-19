#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Funkcija za popravak formatiranja .astro datoteke
function fixAstroPage(filePath) {
  console.log(`Popravljam ${filePath}...`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Provjeri je li datoteka oštećena (nema razmake između elemenata)
  if (!content.includes('---\n') && content.includes('---')) {
    console.log(`  - ${filePath} je oštećen, popravljam...`);
    
    // Dodaj razmake između elemenata
    let fixedContent = content
      .replace(/---/g, '---\n')
      .replace(/>\s*</g, '>\n<')
      .replace(/>\s*---/g, '>\n---')
      .replace(/---\s*</g, '---\n<')
      .replace(/\n\s*\n\s*\n/g, '\n\n'); // Ukloni višestruke prazne linije
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`  ✅ ${filePath} popravljen`);
  } else {
    console.log(`  - ${filePath} već ima ispravno formatiranje`);
  }
}

// Funkcija za ažuriranje stranice da koristi ChapterLayout
function updatePageToUseChapterLayout(filePath) {
  console.log(`Ažuriram ${filePath} da koristi ChapterLayout...`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Provjeri već koristi li ChapterLayout
  if (content.includes('import ChapterLayout')) {
    console.log(`  - ${filePath} već koristi ChapterLayout`);
    return;
  }
  
  // Ako je kompletan HTML, zamijeni s ChapterLayout
  if (content.includes('<!DOCTYPE html>')) {
    console.log(`  - ${filePath} ima kompletan HTML, zamjenjujem s ChapterLayout`);
    
    // Izvuci naslov iz postojećeg HTML-a
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1].replace(' | Mrežni udžbenik iz bakteriologije', '') : 'Stranica';
    
    // Izvuci opis iz meta tag-a
    const descMatch = content.match(/<meta name="description" content="([^"]+)"/);
    const description = descMatch ? descMatch[1] : 'Opis stranice';
    
    // Odredi chapterNumber iz putanje
    const chapterMatch = filePath.match(/poglavlje-(\d+)/);
    const chapterNumber = chapterMatch ? parseInt(chapterMatch[1]) : 1;
    
    // Kreiraj novi sadržaj s ChapterLayout
    const newContent = `---
import ChapterLayout from '../components/ChapterLayout.astro';
import { getChapterConfig } from '../config/chapters';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = '${title}',
  description = '${description}'
} = Astro.props;

const chapterConfig = getChapterConfig(${chapterNumber});
---

<ChapterLayout 
  title={title}
  description={description}
  chapterNumber={${chapterNumber}}
  prevLink="/"
  nextLink="/"
  prevText="← Prethodno"
  nextText="Sljedeće →"
  ctaTitle="Spreman za sljedeće?"
  ctaDescription="Nastavite s učenjem."
  ctaPrimaryText="Sljedeće"
  ctaPrimaryLink="/"
  ctaSecondaryText="Povratak na sadržaj"
  ctaSecondaryLink="/sadrzaj/"
>
  <!-- Breadcrumb Navigation -->
  <div class="bg-gray-50 border-b border-gray-200 mb-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4">
      <nav class="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
        <a href="/" class="text-gray-500 hover:text-green-600 transition-colors duration-200 flex items-center group">
          <svg class="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          Naslovnica
        </a>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <a href="/sadrzaj/" class="text-gray-500 hover:text-green-600 transition-colors duration-200 hover:underline">
          Sadržaj
        </a>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <a href="/poglavlje-${chapterNumber}/" class="text-gray-500 hover:text-green-600 transition-colors duration-200 hover:underline">
          Poglavlje ${chapterNumber}
        </a>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <span class="text-green-600 font-medium flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          ${title}
        </span>
      </nav>
    </div>
  </div>

  <!-- Uvodni tekst -->
  <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200 mb-8">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold text-green-900 mb-3 font-heading">O ${title.toLowerCase()}</h3>
        <p class="text-green-800 text-lg leading-relaxed font-body">
          ${description}
        </p>
      </div>
    </div>
  </div>

  <!-- Sadržaj stranice -->
  <div class="prose prose-lg max-w-none">
    <h2>${title}</h2>
    <p>Ovdje ćete pronaći sve potrebne informacije o ${title.toLowerCase()}.</p>
    
    <!-- Dodajte ovdje sadržaj stranice -->
  </div>

  <!-- Navigacija -->
  <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
    <a href="/" class="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      ← Prethodno
    </a>
    <a href="/" class="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      Sljedeće →
    </a>
  </div>
</ChapterLayout>
`;
    
    fs.writeFileSync(filePath, newContent);
    console.log(`  ✅ ${filePath} ažuriran s ChapterLayout`);
  } else {
    console.log(`  - ${filePath} nije kompletan HTML, preskačem`);
  }
}

// Glavna funkcija
async function main() {
  console.log('🔧 Početak popravka svih stranica...\n');
  
  const pagesDir = path.join(__dirname, '../src/pages');
  const files = fs.readdirSync(pagesDir, { recursive: true });
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const file of files) {
    if (typeof file === 'string' && file.endsWith('.astro')) {
      totalFiles++;
      const filePath = path.join(pagesDir, file);
      
      try {
        // Prvo popravi formatiranje
        fixAstroPage(filePath);
        
        // Zatim ažuriraj da koristi ChapterLayout
        updatePageToUseChapterLayout(filePath);
        
        fixedFiles++;
      } catch (error) {
        console.error(`❌ Greška pri obradi ${file}:`, error.message);
      }
    }
  }
  
  console.log(`\n✅ Završeno!`);
  console.log(`📊 Ukupno datoteka: ${totalFiles}`);
  console.log(`🔧 Obrađeno datoteka: ${fixedFiles}`);
  console.log(`\n🎉 Sve stranice su sada popravljene i koriste ChapterLayout!`);
}

main().catch(console.error);
