const fs = require('fs');
const path = require('path');

// Popravi import putanje u svim glavnim stranicama poglavlja
for (let i = 3; i <= 23; i++) {
  const filePath = `src/pages/poglavlje-${i}.astro`;
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Zamijeni Layout import s ChapterLayout
    content = content.replace(
      "import Layout from '../layouts/Layout.astro';",
      "import ChapterLayout from '../components/ChapterLayout.astro';"
    );
    
    // Zamijeni Layout komponentu s ChapterLayout
    content = content.replace(
      /<Layout title="Poglavlje \d+">/g,
      `<ChapterLayout
  title="Poglavlje ${i}"
  description="Dobrodošli u poglavlje ${i}. Ovdje ćete pronaći sve potrebne informacije i vježbe."
  chapterNumber={${i}}
  primaryColor="blue"
  prevLink="/poglavlje-${i - 1}/"
  nextLink="/poglavlje-${i + 1}/"
  prevText="← Poglavlje ${i - 1}"
  nextText="Poglavlje ${i + 1} →"
  ctaTitle="Nastavi na sljedeće poglavlje"
  ctaDescription="Nastavite s učenjem."
  ctaPrimaryText="Poglavlje ${i + 1}"
  ctaPrimaryLink="/poglavlje-${i + 1}/"
  ctaSecondaryText="Povratak na sadržaj"
  ctaSecondaryLink="/sadrzaj/"
  showBreadcrumb={true}
  breadcrumbPath={[
    { name: 'Sadržaj', url: '/sadrzaj/' },
    { name: \`Poglavlje ${i}\`, url: \`/poglavlje-${i}/\` }
  ]}>`
    );
    
    // Zamijeni zatvarajući Layout tag
    content = content.replace('</Layout>', '</ChapterLayout>');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Popravljen import u ${filePath}`);
  }
}

console.log('🎉 Svi importovi su popravljeni!');

