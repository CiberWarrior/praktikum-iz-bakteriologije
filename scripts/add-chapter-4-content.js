#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chapter 4 content structure
const chapter4Content = [
  {
    slug: 'flagele-struktura',
    title: 'Struktura i funkcija flagela',
    description: 'Detaljna analiza strukture bakterijskih flagela i njihove funkcije',
    content: `---
title: 'Struktura i funkcija flagela'
description: 'Detaljna analiza strukture bakterijskih flagela i njihove funkcije'
chapterNumber: 4
primaryColor: blue
showBreadcrumb: true
breadcrumbPath:
  - name: "Poglavlje 4"
    url: "/poglavlje-4/"
  - name: "Struktura i funkcija flagela"
    url: "/poglavlje-4/flagele-struktura/"
---

<div style="background: linear-gradient(135deg, #e8f4fd 0%, #d1ecf1 100%); border-radius: 15px; padding: 25px; margin: 20px 0;">
  
  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">🔬</span>
      <h3 style="margin: 0; color: #1565c0; font-size: 1.3rem; font-weight: 600;">Struktura flagela</h3>
    </div>
    <p style="margin: 0; color: #2d3748; line-height: 1.6;">
      Bakterijska flagela su složene strukture sastavljene od više proteina. Osnovna struktura uključuje filament, kuku i bazalno tijelo koje je ugrađeno u staničnu stijenku i membranu.
    </p>
  </div>

  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #ff9800;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">⚙️</span>
      <h3 style="margin: 0; color: #f57c00; font-size: 1.3rem; font-weight: 600;">Komponente flagela</h3>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h4 style="margin: 0 0 10px 0; color: #f57c00; font-size: 1.1rem;">1. Filament</h4>
      <p style="margin: 0; color: #2d3748;">Najduži dio flagela, sastavljen od flagelina</p>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h4 style="margin: 0 0 10px 0; color: #f57c00; font-size: 1.1rem;">2. Kuka</h4>
      <p style="margin: 0; color: #2d3748;">Povezuje filament s bazalnim tijelom</p>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <h4 style="margin: 0 0 10px 0; color: #f57c00; font-size: 1.1rem;">3. Bazalno tijelo</h4>
      <p style="margin: 0; color: #2d3748;">Motor koji pokreće flagela, ugrađen u staničnu stijenku</p>
    </div>
  </div>

  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #4caf50;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">🏃‍♂️</span>
      <h3 style="margin: 0; color: #388e3c; font-size: 1.3rem; font-weight: 600;">Mehanizam pokretanja</h3>
    </div>
    <p style="margin: 0; color: #2d3748; line-height: 1.6;">
      Flagela se pokreću rotacijom bazalnog tijela. Protonski gradijent ili Na+ gradijent pogonjeni ATP-om stvara energiju potrebnu za rotaciju. Smjer rotacije određuje smjer kretanja bakterije.
    </p>
  </div>

  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; border-left: 4px solid #9c27b0;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">🧬</span>
      <h3 style="margin: 0; color: #7b1fa2; font-size: 1.3rem; font-weight: 600;">Genetska kontrola</h3>
    </div>
    <p style="margin: 0; color: #2d3748; line-height: 1.6;">
      Biosinteza flagela kontrolirana je kompleksnim genetskim sustavom koji uključuje više od 50 gena. Ti geni su organizirani u operone i regulirani su hijerarhijski.
    </p>
  </div>

</div>`
  },
  {
    slug: 'metode-ispitivanja',
    title: 'Metode ispitivanja pokretljivosti',
    description: 'Različite metode za ispitivanje pokretljivosti bakterija',
    content: `---
title: 'Metode ispitivanja pokretljivosti'
description: 'Različite metode za ispitivanje pokretljivosti bakterija'
chapterNumber: 4
primaryColor: blue
showBreadcrumb: true
breadcrumbPath:
  - name: "Poglavlje 4"
    url: "/poglavlje-4/"
  - name: "Metode ispitivanja pokretljivosti"
    url: "/poglavlje-4/metode-ispitivanja/"
---

<div style="background: linear-gradient(135deg, #e8f4fd 0%, #d1ecf1 100%); border-radius: 15px; padding: 25px; margin: 20px 0;">
  
  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">🔬</span>
      <h3 style="margin: 0; color: #1565c0; font-size: 1.3rem; font-weight: 600;">Mikroskopske metode</h3>
    </div>
    <p style="margin: 0; color: #2d3748; line-height: 1.6;">
      Direktno promatranje pokretljivosti bakterija pod mikroskopom koristeći različite tehnike i boje.
    </p>
  </div>

  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #ff9800;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">🧪</span>
      <h3 style="margin: 0; color: #f57c00; font-size: 1.3rem; font-weight: 600;">Kulturne metode</h3>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h4 style="margin: 0 0 10px 0; color: #f57c00; font-size: 1.1rem;">1. TTC metoda</h4>
      <p style="margin: 0; color: #2d3748;">Polukruti agar s trifeniltetrazolium kloridom</p>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h4 style="margin: 0 0 10px 0; color: #f57c00; font-size: 1.1rem;">2. Craigie tuba</h4>
      <p style="margin: 0; color: #2d3748;">U-tuba s polukrutim agarom</p>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <h4 style="margin: 0 0 10px 0; color: #f57c00; font-size: 1.1rem;">3. Motility test medium</h4>
      <p style="margin: 0; color: #2d3748;">Specijalizirani mediji za testiranje pokretljivosti</p>
    </div>
  </div>

  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #4caf50;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">📊</span>
      <h3 style="margin: 0; color: #388e3c; font-size: 1.3rem; font-weight: 600;">Interpretacija rezultata</h3>
    </div>
    <p style="margin: 0; color: #2d3748; line-height: 1.6;">
      Različite metode daju različite vrste informacija o pokretljivosti. Mikroskopske metode omogućuju direktno promatranje, dok kulturne metode daju indirektne dokaze pokretljivosti.
    </p>
  </div>

</div>`
  },
  {
    slug: 'vjezba-4-1',
    title: 'Vježba 4.1: Mikroskopska metoda',
    description: 'Praktična vježba za mikroskopsko ispitivanje pokretljivosti',
    content: `---
title: 'Vježba 4.1: Mikroskopska metoda ispitivanja pokretljivosti'
description: 'Praktična vježba za mikroskopsko ispitivanje pokretljivosti bakterija'
chapterNumber: 4
primaryColor: blue
showBreadcrumb: true
breadcrumbPath:
  - name: "Poglavlje 4"
    url: "/poglavlje-4/"
  - name: "Vježba 4.1"
    url: "/poglavlje-4/vjezba-4-1/"
---

<div style="background: linear-gradient(135deg, #e8f4fd 0%, #d1ecf1 100%); border-radius: 15px; padding: 25px; margin: 20px 0;">
  
  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">🔬</span>
      <h3 style="margin: 0; color: #1565c0; font-size: 1.3rem; font-weight: 600;">Mikroskopska metoda ispitivanja pokretljivosti</h3>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h4 style="margin: 0 0 10px 0; color: #1565c0; font-size: 1.1rem;">Postupak:</h4>
      <p style="margin: 0 0 10px 0; color: #2d3748; line-height: 1.6;">
        Pripremiti suspenziju bakterija u fiziološkoj otopini. Staviti kap otopine na stakalce i pokriti pokrovnim stakalcem. Promatrati pod mikroskopom s 400x povećanjem.
      </p>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h4 style="margin: 0 0 10px 0; color: #1565c0; font-size: 1.1rem;">Oprema:</h4>
      <ul style="margin: 0; padding-left: 20px; color: #2d3748;">
        <li>Mikroskop</li>
        <li>Stakalci i pokrovna stakalca</li>
        <li>Fiziološka otopina</li>
        <li>Bakterijske kulture</li>
      </ul>
    </div>
  </div>

  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #ff9800;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">⚠️</span>
      <h3 style="margin: 0; color: #f57c00; font-size: 1.3rem; font-weight: 600;">Važne napomene</h3>
    </div>
    <ul style="margin: 0; padding-left: 20px; color: #2d3748;">
      <li>Promatrati brzo nakon pripreme preparata</li>
      <li>Izbjegavati zagrijavanje preparata</li>
      <li>Koristiti svjetlosni mikroskop s kondenzorom</li>
      <li>Paziti na Brownovo gibanje čestica</li>
    </ul>
  </div>

</div>`
  },
  {
    slug: 'vjezba-4-2',
    title: 'Vježba 4.2: Craigie tuba',
    description: 'Praktična vježba za ispitivanje pokretljivosti u Craigie tubi',
    content: `---
title: 'Vježba 4.2: Ispitivanje pokretljivosti u Craigie tubi'
description: 'Praktična vježba za ispitivanje pokretljivosti bakterija u Craigie tubi'
chapterNumber: 4
primaryColor: blue
showBreadcrumb: true
breadcrumbPath:
  - name: "Poglavlje 4"
    url: "/poglavlje-4/"
  - name: "Vježba 4.2"
    url: "/poglavlje-4/vjezba-4-2/"
---

<div style="background: linear-gradient(135deg, #e8f4fd 0%, #d1ecf1 100%); border-radius: 15px; padding: 25px; margin: 20px 0;">
  
  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">🧪</span>
      <h3 style="margin: 0; color: #1565c0; font-size: 1.3rem; font-weight: 600;">Craigie tuba metoda</h3>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h4 style="margin: 0 0 10px 0; color: #1565c0; font-size: 1.1rem;">Postupak:</h4>
      <p style="margin: 0 0 10px 0; color: #2d3748; line-height: 1.6;">
        Pripremiti U-tubu s polukrutim agarom. Inokulirati jedan krak tuba s bakterijskom kulturom. Inkubirati na 37°C/24 h. Promatrati širenje kroz agar.
      </p>
    </div>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h4 style="margin: 0 0 10px 0; color: #1565c0; font-size: 1.1rem;">Oprema:</h4>
      <ul style="margin: 0; padding-left: 20px; color: #2d3748;">
        <li>Craigie tuba</li>
        <li>Polukruti agar</li>
        <li>Bakterijske kulture</li>
        <li>Inokulacijska igla</li>
      </ul>
    </div>
  </div>

  <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #ff9800;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <span style="font-size: 20px; margin-right: 10px;">📊</span>
      <h3 style="margin: 0; color: #f57c00; font-size: 1.3rem; font-weight: 600;">Interpretacija</h3>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
      <h4 style="margin: 0 0 8px 0; color: #f57c00; font-size: 1.1rem;">Pokretne bakterije</h4>
      <p style="margin: 0; color: #2d3748;">Šire se kroz agar u oba kraka tuba</p>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <h4 style="margin: 0 0 8px 0; color: #f57c00; font-size: 1.1rem;">Nepokretne bakterije</h4>
      <p style="margin: 0; color: #2d3748;">Ostaju na mjestu inokulacije</p>
    </div>
  </div>

</div>`
  }
];

// Function to create MDX files
function createMDXFiles() {
  const contentDir = path.join(__dirname, '../src/content/chapters/poglavlje-4');
  
  // Ensure directory exists
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }
  
  chapter4Content.forEach(item => {
    const filePath = path.join(contentDir, `${item.slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, item.content);
      console.log(`Created: ${item.slug}.mdx`);
    } else {
      console.log(`File already exists: ${item.slug}.mdx`);
    }
  });
}

// Run the script
createMDXFiles();
console.log('Chapter 4 content creation completed!');
