#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Funkcija za ažuriranje MDX datoteke
function updateMdxLayout(filePath) {
  console.log(`Ažuriram ${filePath}...`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Provjeri koristi li stari layout
  if (!content.includes('layout: ../../../layouts/ChapterLayout.astro') && 
      !content.includes('layout: ../../../../layouts/ChapterLayout.astro')) {
    console.log(`  - ${filePath} ne koristi stari layout, preskačem`);
    return;
  }
  
  // Zamijeni stari layout s novim
  let updatedContent = content.replace(
    /layout: \.\.\/\.\.\/\.\.\/layouts\/ChapterLayout\.astro/g,
    'layout: ../../../components/ChapterLayout.astro'
  );
  
  updatedContent = updatedContent.replace(
    /layout: \.\.\/\.\.\/\.\.\/\.\.\/layouts\/ChapterLayout\.astro/g,
    'layout: ../../../../components/ChapterLayout.astro'
  );
  
  fs.writeFileSync(filePath, updatedContent);
  console.log(`  - ${filePath} ažuriran s novim layout putanjom`);
}

// Glavna funkcija
function main() {
  const contentDir = path.join(__dirname, '../src/content/docs');
  
  // Rekurzivno pronađi sve MDX datoteke
  function findMdxFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...findMdxFiles(fullPath));
      } else if (item.endsWith('.mdx')) {
        files.push(fullPath);
      }
    }
    
    return files;
  }
  
  const mdxFiles = findMdxFiles(contentDir);
  
  console.log('Pronađene MDX datoteke:');
  mdxFiles.forEach(file => {
    const relativePath = path.relative(process.cwd(), file);
    console.log(`  - ${relativePath}`);
    updateMdxLayout(file);
  });
  
  console.log('\nAžuriranje MDX layout-a završeno!');
  console.log('Sve MDX datoteke sada koriste novi ChapterLayout iz components direktorija.');
}

main().catch(console.error);
