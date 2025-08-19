#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Funkcija za popravak formatiranja .astro datoteke
function fixAstroFormatting(filePath) {
  console.log(`Popravljam formatiranje ${filePath}...`);
  
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
      .replace(/>\s*<!--/g, '>\n<!--')
      .replace(/-->\s*</g, '-->\n<')
      .replace(/>\s*<\/ChapterLayout>/g, '>\n</ChapterLayout>');
    
    // Dodaj razmake u frontmatter
    fixedContent = fixedContent.replace(
      /---\n([^-]+)---/,
      (match, frontmatter) => {
        const formattedFrontmatter = frontmatter
          .replace(/([a-zA-Z]+):/g, '\n$1:')
          .replace(/\n\s*\n/g, '\n')
          .trim();
        return `---\n${formattedFrontmatter}\n---`;
      }
    );
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`  - ${filePath} popravljen`);
  } else {
    console.log(`  - ${filePath} je već ispravno formatiran`);
  }
}

// Glavna funkcija
function main() {
  const pagesDir = path.join(__dirname, '../src/pages');
  
  // Pronađi sve .astro datoteke
  const astroFiles = fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.astro'))
    .map(file => path.join(pagesDir, file));
  
  console.log('Pronađene .astro datoteke:');
  astroFiles.forEach(file => {
    const relativePath = path.relative(process.cwd(), file);
    console.log(`  - ${relativePath}`);
    fixAstroFormatting(file);
  });
  
  console.log('\nPopravak formatiranja završen!');
  console.log('Sve .astro datoteke sada imaju ispravno formatiranje.');
}

main().catch(console.error);
