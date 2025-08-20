import fs from 'fs';
import path from 'path';

// Function to add headings to MDX content
function addHeadingsToMDX(content, title) {
  // If content already has headings, return as is
  if (content.includes('## ')) {
    return content;
  }

  // Split content into frontmatter and body
  const frontmatterEnd = content.indexOf('---', 3);
  const frontmatter = content.substring(0, frontmatterEnd + 3);
  const body = content.substring(frontmatterEnd + 3).trim();

  // Create main heading from title
  const mainHeading = `## ${title} {#${title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}}`;

  // Add some basic sections if content is substantial
  let enhancedBody = mainHeading + '\n\n';
  
  if (body.length > 200) {
    // Add sections based on content type
    if (body.includes('vježba') || body.includes('Vježba')) {
      enhancedBody += '## Cilj vježbe {#cilj-vjezbe}\n\n';
      enhancedBody += 'Praktična vježba iz sterilizacije.\n\n';
      enhancedBody += '## Postupak {#postupak}\n\n';
      enhancedBody += body + '\n\n';
      enhancedBody += '## Rezultati {#rezultati}\n\n';
      enhancedBody += 'Analizirati dobivene rezultate.\n\n';
    } else {
      enhancedBody += '## Opis metode {#opis-metode}\n\n';
      enhancedBody += body + '\n\n';
      enhancedBody += '## Primjena {#primjena}\n\n';
      enhancedBody += 'Metoda se koristi za sterilizaciju različitih materijala.\n\n';
    }
  } else {
    enhancedBody += body + '\n\n';
  }

  return frontmatter + '\n\n' + enhancedBody;
}

// List of MDX files to update with their titles
const mdxFiles = [
  { file: 'fizicka-sterilizacija.mdx', title: 'Fizička sterilizacija' },
  { file: 'flambiranje.mdx', title: 'Flambiranje' },
  { file: 'frakciona-sterilizacija.mdx', title: 'Frakciona sterilizacija' },
  { file: 'hladna-sterilizacija.mdx', title: 'Hladna sterilizacija' },
  { file: 'kemijska-sterilizacija.mdx', title: 'Kemijska sterilizacija' },
  { file: 'kuhanje.mdx', title: 'Kuhanje' },
  { file: 'opaljivanje.mdx', title: 'Opaljivanje' },
  { file: 'pasterizacija.mdx', title: 'Pasterizacija' },
  { file: 'spaljivanje.mdx', title: 'Spaljivanje' },
  { file: 'sterilizacija-ultrazvukom.mdx', title: 'Sterilizacija ultrazvukom' },
  { file: 'sterilizacija-zracenjem.mdx', title: 'Sterilizacija zračenjem' },
  { file: 'suha-sterilizacija.mdx', title: 'Suha sterilizacija' },
  { file: 'zarenje.mdx', title: 'Žarenje' },
  { file: 'vjezba-2.mdx', title: 'Vježba 2' },
  { file: 'vjezba-2-2.mdx', title: 'Vježba 2.2' },
  { file: 'vjezba-2-3.mdx', title: 'Vježba 2.3' },
  { file: 'vjezba-2-4.mdx', title: 'Vježba 2.4' },
  { file: 'vjezba-2-5.mdx', title: 'Vježba 2.5' }
];

// Update each MDX file
mdxFiles.forEach(({ file, title }) => {
  const filePath = `src/content/chapters/poglavlje-2/${file}`;
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = addHeadingsToMDX(content, title);
    
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All MDX files have been updated with headings!');
