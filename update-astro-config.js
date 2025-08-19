const fs = require('fs');

// Čitaj astro.config.mjs
const configPath = 'astro.config.mjs';
let configContent = fs.readFileSync(configPath, 'utf8');

// Zamijeni sve items liste za poglavlja 3-23 s direktnim link svojstvima
for (let i = 3; i <= 23; i++) {
  // Pronađi pattern za poglavlje i
  const pattern = new RegExp(
    `\\{\\s*label:\\s*['"]Poglavlje ${i}:[^'"]*['"],\\s*items:\\s*\\[[\\s\\S]*?\\]\\s*\\}`,
    'g'
  );
  
  // Zamijeni s direktnim linkom
  const replacement = `{
          label: 'Poglavlje ${i}',
          link: '/poglavlje-${i}/',
        }`;
  
  configContent = configContent.replace(pattern, replacement);
}

// Spremi ažuriranu konfiguraciju
fs.writeFileSync(configPath, configContent, 'utf8');

console.log('✅ Ažuriran astro.config.mjs - zamijenjeni items s direktnim linkovima za poglavlja 3-23');

