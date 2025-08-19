const fs = require('fs');
const path = require('path');

// Konfiguracija
const MDX_SOURCE_DIR = 'src/content/docs';
const ASTRO_OUTPUT_DIR = 'src/pages';
const CHAPTERS_CONFIG = {
  1: { color: 'emerald', title: 'Osnove laboratorijskog rada' },
  2: { color: 'blue', title: 'Mikroskopija' },
  3: { color: 'purple', title: 'Bojanje mikroorganizama' },
  4: { color: 'indigo', title: 'Kultivacija mikroorganizama' },
  5: { color: 'cyan', title: 'Identifikacija bakterija' },
  6: { color: 'teal', title: 'Antibiotici i antimikrobna sredstva' },
  7: { color: 'green', title: 'Bakterijske infekcije' },
  8: { color: 'lime', title: 'Virusi' },
  9: { color: 'yellow', title: 'Gljivice' },
  10: { color: 'amber', title: 'Paraziti' },
  11: { color: 'orange', title: 'Imunologija' },
  12: { color: 'red', title: 'Epidemiologija' },
  13: { color: 'pink', title: 'Higijena i dezinfekcija' },
  14: { color: 'rose', title: 'Kontrola kvalitete' },
  15: { color: 'slate', title: 'Molekularna biologija' },
  16: { color: 'sky', title: 'Bakterije mliječne fermentacije' },
  17: { color: 'violet', title: 'Biogeokemijski ciklusi' },
  18: { color: 'fuchsia', title: 'Biotehnologija' },
  19: { color: 'emerald', title: 'GMO' },
  20: { color: 'blue', title: 'Biofilmovi' },
  21: { color: 'purple', title: 'Antibiotička rezistencija' },
  22: { color: 'indigo', title: 'Novi antibiotici' },
  23: { color: 'cyan', title: 'Zaključak' }
};

// Funkcija za čitanje MDX datoteke i izvlačenje frontmatter-a
function parseMDXFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let frontmatter = {};
  let bodyStart = 0;
  
  if (lines[0].trim() === '---') {
    let i = 1;
    while (i < lines.length && lines[i].trim() !== '---') {
      const line = lines[i];
      if (line.includes(':')) {
        const [key, ...valueParts] = line.split(':');
        const value = valueParts.join(':').trim();
        
        // Parsiranje različitih tipova vrijednosti
        if (value.startsWith('[') && value.endsWith(']')) {
          // Array
          frontmatter[key.trim()] = JSON.parse(value);
        } else if (value === 'true' || value === 'false') {
          // Boolean
          frontmatter[key.trim()] = value === 'true';
        } else if (!isNaN(value) && value !== '') {
          // Number
          frontmatter[key.trim()] = parseInt(value);
        } else {
          // String (uklanjamo navodnike)
          frontmatter[key.trim()] = value.replace(/^["']|["']$/g, '');
        }
      }
      i++;
    }
    bodyStart = i + 1;
  }
  
  const body = lines.slice(bodyStart).join('\n');
  return { frontmatter, body };
}

// Funkcija za konverziju MDX sadržaja u Astro komponentu
function convertMDXToAstro(mdxContent, chapterNumber, sectionName) {
  const config = CHAPTERS_CONFIG[chapterNumber];
  
  // Osnovni Astro template
  const astroTemplate = `---
import ChapterLayout from '../../../components/ChapterLayout.astro';
import ChapterNavigation from '../../../components/ChapterNavigation.astro';
import { getChapterConfig } from '../../../config/chapters';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = '${sectionName}',
  description = 'Sadržaj poglavlja ${chapterNumber} - ${sectionName}'
} = Astro.props;

const chapterConfig = getChapterConfig(${chapterNumber});
---

<ChapterLayout 
  title={title} 
  description={description} 
  chapterNumber={${chapterNumber}}
  primaryColor="${config.color}"
  prevLink="/poglavlje-${chapterNumber}/" 
  nextLink="/poglavlje-${chapterNumber + 1}/" 
  prevText="← Poglavlje ${chapterNumber}" 
  nextText="Poglavlje ${chapterNumber + 1} →" 
  ctaTitle="Nastavi na sljedeće poglavlje" 
  ctaDescription="Nastavite s učenjem i upoznajte ${CHAPTERS_CONFIG[chapterNumber + 1]?.title || 'sljedeće poglavlje'}." 
  ctaPrimaryText="Poglavlje ${chapterNumber + 1}" 
  ctaPrimaryLink="/poglavlje-${chapterNumber + 1}/" 
  ctaSecondaryText="Povratak na pregled" 
  ctaSecondaryLink="/poglavlje-${chapterNumber}/"
  showBreadcrumb={true}
  breadcrumbPath={[
    { name: 'Sadržaj', url: '/sadrzaj/' },
    { name: 'Poglavlje ${chapterNumber}', url: '/poglavlje-${chapterNumber}/' },
    { name: '${sectionName}', url: '/poglavlje-${chapterNumber}/${sectionName.toLowerCase().replace(/\\s+/g, '-')}/' }
  ]}
>
  <!-- Navigacija kroz poglavlje -->
  <ChapterNavigation 
    chapterNumber={${chapterNumber}} 
    currentSection="${sectionName.toLowerCase().replace(/\s+/g, '-')}" 
    chapterTitle="${config.title}"
  />

  <!-- Sadržaj poglavlja -->
  <div class="prose prose-lg max-w-none">
    ${mdxContent}
  </div>

</ChapterLayout>`;

  return astroTemplate;
}

// Funkcija za kreiranje direktorija
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Glavna funkcija za konverziju
function convertChapter(chapterDir) {
  const chapterMatch = chapterDir.match(/poglavlje-(\d+)/);
  if (!chapterMatch) return;
  
  const chapterNumber = parseInt(chapterMatch[1]);
  const chapterPath = path.join(MDX_SOURCE_DIR, chapterDir);
  const outputPath = path.join(ASTRO_OUTPUT_DIR, `poglavlje-${chapterNumber}`);
  
  // Kreiraj output direktorij
  ensureDirectoryExists(outputPath);
  
  // Pročitaj sve MDX datoteke u poglavlju
  const files = fs.readdirSync(chapterPath);
  
  files.forEach(file => {
    if (file.endsWith('.mdx') && file !== 'index.mdx') {
      const filePath = path.join(chapterPath, file);
      const { frontmatter, body } = parseMDXFile(filePath);
      
      // Generiraj ime sekcije
      const sectionName = frontmatter.title || file.replace('.mdx', '').replace(/-/g, ' ');
      
      // Konvertiraj u Astro
      const astroContent = convertMDXToAstro(body, chapterNumber, sectionName);
      
      // Kreiraj output datoteku
      const outputFileName = file.replace('.mdx', '.astro');
      const outputFilePath = path.join(outputPath, outputFileName);
      
      fs.writeFileSync(outputFilePath, astroContent);
      console.log(`✅ Konvertirano: ${file} -> ${outputFileName}`);
    }
  });
  
  console.log(`\n📁 Poglavlje ${chapterNumber} konvertirano u: ${outputPath}\n`);
}

// Glavna funkcija
function main() {
  console.log('🚀 Započinjem konverziju MDX datoteka u Astro komponente...\n');
  
  // Pročitaj sve poglavlja
  const chapters = fs.readdirSync(MDX_SOURCE_DIR)
    .filter(dir => dir.startsWith('poglavlje-'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/poglavlje-(\d+)/)[1]);
      const numB = parseInt(b.match(/poglavlje-(\d+)/)[1]);
      return numA - numB;
    });
  
  console.log(`📚 Pronađeno ${chapters.length} poglavlja za konverziju:\n`);
  
  chapters.forEach(chapter => {
    console.log(`🔄 Konvertiram ${chapter}...`);
    convertChapter(chapter);
  });
  
  console.log('🎉 Konverzija završena!');
  console.log('\n📝 Napomene:');
  console.log('- Provjerite generirane Astro datoteke i prilagodite stilove prema potrebi');
  console.log('- Možda ćete trebati ručno dodati dodatne komponente ili stilove');
  console.log('- Provjerite navigaciju i breadcrumb putanje');
}

// Pokreni skriptu
if (require.main === module) {
  main();
}

module.exports = { convertChapter, parseMDXFile, convertMDXToAstro };
