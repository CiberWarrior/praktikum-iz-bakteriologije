import fs from 'fs';
import path from 'path';

export interface MDXContent {
  frontmatter: Record<string, any>;
  content: string;
  slug: string;
}

export interface ChapterStructure {
  chapterNumber: number;
  title: string;
  sections: MDXContent[];
}

// Konfiguracija poglavlja
const CHAPTER_CONFIG = {
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

// Funkcija za parsiranje MDX frontmatter-a
function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  const lines = content.split('\n');
  let frontmatter: Record<string, any> = {};
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
          frontmatter[key.trim()] = JSON.parse(value);
        } else if (value === 'true' || value === 'false') {
          frontmatter[key.trim()] = value === 'true';
        } else if (!isNaN(value) && value !== '') {
          frontmatter[key.trim()] = parseInt(value);
        } else {
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

// Funkcija za učitavanje MDX datoteke
export function loadMDXFile(filePath: string): MDXContent {
  const content = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, body } = parseFrontmatter(content);
  const slug = path.basename(filePath, '.mdx');
  
  return {
    frontmatter,
    content: body,
    slug
  };
}

// Funkcija za učitavanje cijelog poglavlja
export function loadChapter(chapterNumber: number): ChapterStructure {
  const chapterDir = path.join(process.cwd(), 'src/content/docs', `poglavlje-${chapterNumber}`);
  
  if (!fs.existsSync(chapterDir)) {
    throw new Error(`Poglavlje ${chapterNumber} ne postoji`);
  }
  
  const files = fs.readdirSync(chapterDir)
    .filter(file => file.endsWith('.mdx') && file !== 'index.mdx')
    .sort();
  
  const sections = files.map(file => {
    const filePath = path.join(chapterDir, file);
    return loadMDXFile(filePath);
  });
  
  const config = CHAPTER_CONFIG[chapterNumber as keyof typeof CHAPTER_CONFIG];
  
  return {
    chapterNumber,
    title: config?.title || `Poglavlje ${chapterNumber}`,
    sections
  };
}

// Funkcija za učitavanje specifične sekcije
export function loadSection(chapterNumber: number, sectionSlug: string): MDXContent {
  const chapterDir = path.join(process.cwd(), 'src/content/docs', `poglavlje-${chapterNumber}`);
  const filePath = path.join(chapterDir, `${sectionSlug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Sekcija ${sectionSlug} u poglavlju ${chapterNumber} ne postoji`);
  }
  
  return loadMDXFile(filePath);
}

// Funkcija za dohvaćanje liste svih poglavlja
export function getAllChapters(): Array<{ number: number; title: string; color: string }> {
  return Object.entries(CHAPTER_CONFIG).map(([number, config]) => ({
    number: parseInt(number),
    title: config.title,
    color: config.color
  }));
}

// Funkcija za dohvaćanje navigacije poglavlja
export function getChapterNavigation(chapterNumber: number) {
  const chapters = getAllChapters();
  const currentIndex = chapters.findIndex(ch => ch.number === chapterNumber);
  
  if (currentIndex === -1) {
    throw new Error(`Poglavlje ${chapterNumber} ne postoji`);
  }
  
  return {
    prev: currentIndex > 0 ? chapters[currentIndex - 1] : null,
    current: chapters[currentIndex],
    next: currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null
  };
}

// Funkcija za generiranje breadcrumb putanje
export function generateBreadcrumbPath(chapterNumber: number, sectionName?: string) {
  const config = CHAPTER_CONFIG[chapterNumber as keyof typeof CHAPTER_CONFIG];
  const breadcrumb = [
    { name: 'Sadržaj', url: '/sadrzaj/' },
    { name: `Poglavlje ${chapterNumber}`, url: `/poglavlje-${chapterNumber}/` }
  ];
  
  if (sectionName) {
    breadcrumb.push({
      name: sectionName,
      url: `/poglavlje-${chapterNumber}/${sectionName.toLowerCase().replace(/\s+/g, '-')}/`
    });
  }
  
  return breadcrumb;
}
