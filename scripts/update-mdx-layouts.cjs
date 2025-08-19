#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Konfiguracija boja po poglavljima
const chapterConfigs = {
  'poglavlje-1': { primaryColor: 'green', chapterNumber: 1 },
  'poglavlje-2': { primaryColor: 'blue', chapterNumber: 2 },
  'poglavlje-3': { primaryColor: 'red', chapterNumber: 3 },
  'poglavlje-4': { primaryColor: 'purple', chapterNumber: 4 },
  'poglavlje-5': { primaryColor: 'orange', chapterNumber: 5 },
  'poglavlje-6': { primaryColor: 'teal', chapterNumber: 6 },
  'poglavlje-7': { primaryColor: 'indigo', chapterNumber: 7 },
  'poglavlje-8': { primaryColor: 'green', chapterNumber: 8 },
  'poglavlje-9': { primaryColor: 'blue', chapterNumber: 9 },
  'poglavlje-10': { primaryColor: 'red', chapterNumber: 10 },
  'poglavlje-11': { primaryColor: 'purple', chapterNumber: 11 },
  'poglavlje-12': { primaryColor: 'orange', chapterNumber: 12 },
  'poglavlje-13': { primaryColor: 'teal', chapterNumber: 13 },
  'poglavlje-14': { primaryColor: 'indigo', chapterNumber: 14 },
  'poglavlje-15': { primaryColor: 'green', chapterNumber: 15 },
  'poglavlje-16': { primaryColor: 'blue', chapterNumber: 16 },
  'poglavlje-17': { primaryColor: 'red', chapterNumber: 17 },
  'poglavlje-18': { primaryColor: 'purple', chapterNumber: 18 },
  'poglavlje-19': { primaryColor: 'orange', chapterNumber: 19 },
  'poglavlje-20': { primaryColor: 'teal', chapterNumber: 20 },
  'poglavlje-21': { primaryColor: 'indigo', chapterNumber: 21 },
  'poglavlje-22': { primaryColor: 'green', chapterNumber: 22 },
  'poglavlje-23': { primaryColor: 'blue', chapterNumber: 23 }
};

// Funkcija za parsiranje frontmatter-a
function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return { frontmatter: '', content: content };
  
  const frontmatter = frontmatterMatch[1];
  const restContent = content.substring(frontmatterMatch[0].length);
  
  return { frontmatter, content: restContent };
}

// Funkcija za parsiranje YAML frontmatter-a
function parseYaml(yaml) {
  const lines = yaml.split('\n');
  const result = {};
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      result[key] = value;
    }
  }
  
  return result;
}

// Funkcija za generiranje YAML frontmatter-a
function generateYaml(data) {
  return Object.entries(data)
    .map(([key, value]) => {
      if (key === 'breadcrumbPath') {
        // Formatiraj breadcrumbPath kao multiline YAML
        return `${key}:\n  ${JSON.stringify(value).replace(/"/g, '')}`;
      }
      return `${key}: ${value}`;
    })
    .join('\n');
}

// Funkcija za ažuriranje MDX fajla
function updateMdxFile(filePath) {
  console.log(`🔄 Ažuriram: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, content: mdxContent } = parseFrontmatter(content);
  
  // Parsiraj postojeći frontmatter
  const existingData = parseYaml(frontmatter);
  
  // Odredi poglavlje iz putanje
  const pathParts = filePath.split('/');
  const chapterDir = pathParts.find(part => part.startsWith('poglavlje-'));
  const chapterConfig = chapterConfigs[chapterDir] || { primaryColor: 'green', chapterNumber: 1 };
  
  // Generiraj breadcrumb putanju
  const breadcrumbPath = [];
  if (chapterDir) {
    breadcrumbPath.push({ name: `Poglavlje ${chapterConfig.chapterNumber}`, url: `/${chapterDir}/` });
  }
  
  // Ako nije index.mdx, dodaj breadcrumb za trenutnu stranicu
  const fileName = path.basename(filePath, '.mdx');
  if (fileName !== 'index') {
    const pageName = existingData.title || fileName.replace(/-/g, ' ');
    breadcrumbPath.push({ name: pageName, url: `/${chapterDir}/${fileName}/` });
  }
  
  // Novi frontmatter
  const newFrontmatter = {
    layout: '@/layouts/ChapterLayout.astro',
    title: existingData.title || 'Untitled',
    description: existingData.description || 'Opis stranice',
    chapterNumber: chapterConfig.chapterNumber,
    primaryColor: chapterConfig.primaryColor,
    showBreadcrumb: 'true',
    breadcrumbPath: JSON.stringify(breadcrumbPath)
  };
  
  // Zadrži postojeće ključeve koji nisu u novom frontmatter-u
  Object.keys(existingData).forEach(key => {
    if (!newFrontmatter.hasOwnProperty(key)) {
      newFrontmatter[key] = existingData[key];
    }
  });
  
  // Generiraj novi sadržaj
  const newYaml = generateYaml(newFrontmatter);
  const newContent = `---\n${newYaml}\n---\n${mdxContent}`;
  
  // Spremi fajl
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✅ Ažuriran: ${filePath}`);
}

// Glavna funkcija
function main() {
  console.log('🚀 Započinjem ažuriranje MDX fajlova...\n');
  
  // Pronađi sve MDX fajlove
  const mdxFiles = glob.sync('src/content/docs/poglavlje-*/**/*.mdx');
  
  console.log(`📁 Pronađeno ${mdxFiles.length} MDX fajlova\n`);
  
  let updatedCount = 0;
  let skippedCount = 0;
  
  for (const filePath of mdxFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Provjeri već ima li layout
      if (content.includes('layout: "@/layouts/ChapterLayout.astro"')) {
        console.log(`⏭️  Preskačem (već ima layout): ${filePath}`);
        skippedCount++;
        continue;
      }
      
      updateMdxFile(filePath);
      updatedCount++;
    } catch (error) {
      console.error(`❌ Greška pri ažuriranju ${filePath}:`, error.message);
    }
  }
  
  console.log('\n🎉 AŽURIRANJE ZAVRŠENO!');
  console.log(`✅ Ažurirano: ${updatedCount} fajlova`);
  console.log(`⏭️  Preskočeno: ${skippedCount} fajlova`);
  console.log(`📊 Ukupno: ${mdxFiles.length} fajlova`);
}

// Pokreni skriptu
if (require.main === module) {
  main();
}

module.exports = { updateMdxFile, chapterConfigs };
