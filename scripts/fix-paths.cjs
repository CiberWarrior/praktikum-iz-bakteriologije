const fs = require('fs');
const path = require('path');

// Funkcija za popravljanje putanja u Astro datoteci
function fixPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Izračunaj relativnu putanju do src direktorija
  const relativePath = path.relative(path.dirname(filePath), path.join(process.cwd(), 'src'));
  const componentsPath = path.join(relativePath, 'components').replace(/\\/g, '/');
  const configPath = path.join(relativePath, 'config').replace(/\\/g, '/');
  
  // Zamijeni putanje
  content = content.replace(
    /import ChapterLayout from '\.\.\/\.\.\/\.\.\/components\/ChapterLayout\.astro';/g,
    `import ChapterLayout from '${componentsPath}/ChapterLayout.astro';`
  );
  
  content = content.replace(
    /import ChapterNavigation from '\.\.\/\.\.\/\.\.\/components\/ChapterNavigation\.astro';/g,
    `import ChapterNavigation from '${componentsPath}/ChapterNavigation.astro';`
  );
  
  content = content.replace(
    /import \{ getChapterConfig \} from '\.\.\/\.\.\/\.\.\/config\/chapters';/g,
    `import { getChapterConfig } from '${configPath}/chapters';`
  );
  
  // Također popravi putanje s ../../components
  content = content.replace(
    /import ChapterLayout from '\.\.\/\.\.\/components\/ChapterLayout\.astro';/g,
    `import ChapterLayout from '${componentsPath}/ChapterLayout.astro';`
  );
  
  content = content.replace(
    /import ChapterNavigation from '\.\.\/\.\.\/components\/ChapterNavigation\.astro';/g,
    `import ChapterNavigation from '${componentsPath}/ChapterNavigation.astro';`
  );
  
  content = content.replace(
    /import \{ getChapterConfig \} from '\.\.\/\.\.\/config\/chapters';/g,
    `import { getChapterConfig } from '${configPath}/chapters';`
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Popravljena datoteka: ${filePath}`);
}

// Funkcija za popravljanje svih datoteka u direktoriju
function fixPathsInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixPathsInDirectory(filePath);
    } else if (file.endsWith('.astro')) {
      fixPathsInFile(filePath);
    }
  });
}

// Glavna funkcija
function main() {
  console.log('🔧 Popravljam putanje u Astro datotekama...\n');
  
  const pagesDir = path.join(process.cwd(), 'src/pages');
  
  // Popravi sve poglavlja
  for (let i = 1; i <= 23; i++) {
    const chapterDir = path.join(pagesDir, `poglavlje-${i}`);
    if (fs.existsSync(chapterDir)) {
      console.log(`📁 Popravljam poglavlje ${i}...`);
      fixPathsInDirectory(chapterDir);
    }
  }
  
  console.log('\n🎉 Popravljanje putanja završeno!');
}

// Pokreni skriptu
if (require.main === module) {
  main();
}

module.exports = { fixPathsInFile, fixPathsInDirectory };
