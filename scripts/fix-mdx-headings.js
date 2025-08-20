import fs from 'fs';
import path from 'path';

// Function to fix MDX headings by removing curly braces
function fixMDXHeadings(content) {
  // Remove curly braces from heading IDs
  return content.replace(/\{#([^}]+)\}/g, '');
}

// List of MDX files to fix
const mdxFiles = [
  'fizicka-sterilizacija.mdx',
  'flambiranje.mdx',
  'frakciona-sterilizacija.mdx',
  'hladna-sterilizacija.mdx',
  'kemijska-sterilizacija.mdx',
  'kuhanje.mdx',
  'opaljivanje.mdx',
  'pasterizacija.mdx',
  'spaljivanje.mdx',
  'sterilizacija-ultrazvukom.mdx',
  'sterilizacija-zracenjem.mdx',
  'suha-sterilizacija.mdx',
  'zarenje.mdx',
  'vjezba-2.mdx',
  'vjezba-2-2.mdx',
  'vjezba-2-3.mdx',
  'vjezba-2-4.mdx',
  'vjezba-2-5.mdx'
];

// Fix each MDX file
mdxFiles.forEach(file => {
  const filePath = `src/content/chapters/poglavlje-2/${file}`;
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixMDXHeadings(content);
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed ${file}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All MDX files have been fixed!');
