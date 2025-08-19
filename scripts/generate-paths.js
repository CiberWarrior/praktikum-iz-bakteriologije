const fs = require('fs');
const path = require('path');

// Funkcija za generiranje svih mogućih putanja
function generateAllPaths() {
  const docsDir = path.join(process.cwd(), 'src/content/docs');
  const paths = [];
  
  // Pročitaj sva poglavlja
  const chapters = fs.readdirSync(docsDir)
    .filter(dir => dir.startsWith('poglavlje-'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/poglavlje-(\d+)/)[1]);
      const numB = parseInt(b.match(/poglavlje-(\d+)/)[1]);
      return numA - numB;
    });
  
  chapters.forEach(chapterDir => {
    const chapterMatch = chapterDir.match(/poglavlje-(\d+)/);
    const chapterNumber = chapterMatch[1];
    const chapterPath = path.join(docsDir, chapterDir);
    
    // Pročitaj sve MDX datoteke u poglavlju (osim index.mdx)
    const files = fs.readdirSync(chapterPath)
      .filter(file => file.endsWith('.mdx') && file !== 'index.mdx');
    
    files.forEach(file => {
      const sectionSlug = file.replace('.mdx', '');
      paths.push({
        params: {
          chapter: chapterNumber,
          section: sectionSlug
        }
      });
    });
  });
  
  return paths;
}

// Funkcija za generiranje TypeScript koda
function generatePathsCode() {
  const paths = generateAllPaths();
  
  const code = `// Auto-generirano - ne mijenjajte ručno
export async function getStaticPaths() {
  return ${JSON.stringify(paths, null, 2)};
}`;
  
  return code;
}

// Funkcija za ažuriranje Astro datoteke
function updateAstroFile() {
  const astroFilePath = path.join(process.cwd(), 'src/pages/poglavlje/[chapter]/[section].astro');
  const pathsCode = generatePathsCode();
  
  let content = fs.readFileSync(astroFilePath, 'utf8');
  
  // Zamijeni postojeći getStaticPaths
  const getStaticPathsRegex = /export async function getStaticPaths\(\) \{[\s\S]*?\}/;
  content = content.replace(getStaticPathsRegex, pathsCode);
  
  fs.writeFileSync(astroFilePath, content);
  console.log('✅ Ažurirana datoteka:', astroFilePath);
}

// Glavna funkcija
function main() {
  console.log('🚀 Generiram putanje za dinamičke stranice...\n');
  
  try {
    updateAstroFile();
    
    const paths = generateAllPaths();
    console.log(`📊 Generirano ${paths.length} putanja za ${paths.length} sekcija`);
    
    console.log('\n📝 Primjeri generiranih putanja:');
    paths.slice(0, 5).forEach(path => {
      console.log(`  - /poglavlje-${path.params.chapter}/${path.params.section}/`);
    });
    
    if (paths.length > 5) {
      console.log(`  ... i još ${paths.length - 5} putanja`);
    }
    
    console.log('\n🎉 Generiranje putanja završeno!');
    
  } catch (error) {
    console.error('❌ Greška pri generiranju putanja:', error.message);
    process.exit(1);
  }
}

// Pokreni skriptu
if (require.main === module) {
  main();
}

module.exports = { generateAllPaths, generatePathsCode };
