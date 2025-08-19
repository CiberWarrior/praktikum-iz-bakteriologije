# Skripte za konverziju MDX sadržaja

Ove skripte omogućavaju automatiziranu konverziju MDX sadržaja u Astro komponente.

## Dostupne skripte

### 1. `convert-mdx-to-astro.js`
**Kompletna konverzija MDX datoteka u Astro komponente**

```bash
npm run convert-mdx
```

**Što radi:**
- Čita sve MDX datoteke iz `src/content/docs/`
- Konvertira ih u Astro komponente s `ChapterLayout`
- Kreira direktorije u `src/pages/poglavlje-X/`
- Automatski postavlja boje i navigaciju za svako poglavlje

**Rezultat:**
- Svaka MDX datoteka postaje `.astro` datoteka
- Zadržava frontmatter podatke
- Dodaje stiliziranje i navigaciju

### 2. `generate-paths.js`
**Generiranje putanja za dinamičke stranice**

```bash
npm run generate-paths
```

**Što radi:**
- Skenira sve MDX datoteke
- Generira putanje za dinamičke stranice
- Ažurira `[section].astro` datoteku

## Pristupi konverzije

### Pristup 1: Potpuna konverzija (Preporučeno)
```bash
npm run convert-mdx
```

**Prednosti:**
- ✅ Potpuno kontrolirate stiliziranje
- ✅ Brže učitavanje (statičke stranice)
- ✅ Lakše SEO optimizacija
- ✅ Mogućnost dodavanja interaktivnih komponenti

**Nedostaci:**
- ❌ Veći broj datoteka
- ❌ Potrebno ručno ažuriranje kada se mijenja sadržaj

### Pristup 2: Dinamičko učitavanje
```bash
npm run generate-paths
```

**Prednosti:**
- ✅ Zadržava MDX format
- ✅ Automatsko ažuriranje kada se mijenja sadržaj
- ✅ Manji broj datoteka

**Nedostaci:**
- ❌ Sporije učitavanje (runtime parsing)
- ❌ Ograničenije stiliziranje
- ❌ Kompleksnija implementacija

### Pristup 3: Hibridni pristup
Kombinacija oba pristupa - koristite dinamičko učitavanje za razvoj, a potpunu konverziju za produkciju.

## Struktura direktorija

### Nakon konverzije:
```
src/
├── pages/
│   ├── poglavlje-1/
│   │   ├── osnovni-pojmovi.astro
│   │   ├── laboratorijski-pribor.astro
│   │   └── ...
│   ├── poglavlje-2/
│   │   └── ...
│   └── ...
├── content/docs/ (zadržava se kao backup)
└── components/
    ├── ChapterLayout.astro
    ├── ChapterNavigation.astro
    └── mdx/
        └── ChapterContent.astro
```

## Konfiguracija

### Boje poglavlja
Boju svakog poglavlja možete mijenjati u `scripts/convert-mdx-to-astro.js`:

```javascript
const CHAPTERS_CONFIG = {
  1: { color: 'emerald', title: 'Osnove laboratorijskog rada' },
  2: { color: 'blue', title: 'Mikroskopija' },
  // ...
};
```

### Stiliziranje
Stiliziranje možete prilagoditi u:
- `src/components/ChapterLayout.astro` - glavni layout
- `src/components/mdx/ChapterContent.astro` - stiliziranje sadržaja

## Napomene

1. **Backup:** Uvijek napravite backup prije pokretanja skripti
2. **Testiranje:** Testirajte na manjem broju datoteka prije pokretanja na svim poglavljima
3. **Ažuriranje:** Nakon konverzije možda ćete trebati ručno prilagoditi neke stilove
4. **Navigacija:** Provjerite da li navigacija radi ispravno nakon konverzije

## Troubleshooting

### Problem: Skripta ne pronalazi MDX datoteke
**Rješenje:** Provjerite putanju u `MDX_SOURCE_DIR` varijabli

### Problem: Greška pri parsiranju frontmatter-a
**Rješenje:** Provjerite sintaksu frontmatter-a u MDX datotekama

### Problem: Stiliziranje se ne primjenjuje
**Rješenje:** Provjerite da li su svi komponenti ispravno importani

## Dodatne opcije

### Konverzija samo jednog poglavlja
```javascript
// U convert-mdx-to-astro.js
const chapters = ['poglavlje-16']; // Samo poglavlje 16
```

### Dodavanje custom komponenti
Možete dodati custom komponente u `convertMDXToAstro` funkciju:

```javascript
const astroTemplate = `---
// ... postojeći kod ...
---

<ChapterLayout>
  <CustomComponent />
  <div class="prose prose-lg max-w-none">
    ${mdxContent}
  </div>
</ChapterLayout>`;
```
