#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Funkcija za popravak YAML frontmatter-a
function fixYamlFrontmatter(filePath) {
  console.log(`🔧 Popravljam: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Zamijeni problematični breadcrumbPath format
  const fixedContent = content.replace(
    /breadcrumbPath: \[(.*?)\]/s,
    (match, jsonContent) => {
      try {
        const breadcrumbData = JSON.parse(`[${jsonContent}]`);
        const yamlBreadcrumb = breadcrumbData.map(item => 
          `  - name: "${item.name}"\n    url: "${item.url}"`
        ).join('\n');
        
        return `breadcrumbPath:\n${yamlBreadcrumb}`;
      } catch (error) {
        console.error(`❌ Greška pri parsiranju JSON-a u ${filePath}:`, error.message);
        return match; // Zadrži original ako ne može parsirati
      }
    }
  );
  
  // Spremi popravljeni fajl
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log(`✅ Popravljen: ${filePath}`);
}

// Glavna funkcija
function main() {
  console.log('🔧 Započinjem popravak YAML formatiranja...\n');
  
  // Pronađi sve MDX fajlove s problematičnim formatiranjem
  const mdxFiles = glob.sync('src/content/docs/poglavlje-*/**/*.mdx');
  
  let fixedCount = 0;
  
  for (const filePath of mdxFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Provjeri ima li problematični breadcrumbPath format
      if (content.includes('breadcrumbPath: [') && content.includes('}]')) {
        fixYamlFrontmatter(filePath);
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Greška pri čitanju ${filePath}:`, error.message);
    }
  }
  
  console.log('\n🎉 POPRAVAK ZAVRŠEN!');
  console.log(`✅ Popravljeno: ${fixedCount} fajlova`);
}

// Pokreni skriptu
if (require.main === module) {
  main();
}
