# 📚 Vodič za strukturu projekta - Mrežni udžbenik iz bakteriologije

## 🏗️ Arhitektura projekta

### Struktura direktorija
```
src/
├── components/          # Astro komponente
│   ├── ChapterLayout.astro    # Glavni layout za poglavlja
│   ├── HeroSection.astro      # Hero sekcija
│   ├── CallToAction.astro     # CTA sekcija
│   ├── Footer.astro          # Footer komponenta
│   └── FeaturesSection.astro # Features sekcija
├── config/
│   └── chapters.ts           # Konfiguracija svih poglavlja
├── pages/               # Astro stranice
│   ├── index.astro           # Početna stranica
│   ├── sadrzaj.astro         # Sadržaj udžbenika
│   ├── poglavlje-*.astro     # Stranice poglavlja
│   └── ...                   # Ostale stranice
├── styles/              # CSS stilovi
│   ├── global.css            # Globalni stilovi
│   └── tailwind.css          # Tailwind CSS
└── layouts/             # Layout komponente (NE KORISTITI)
    └── (prazno - uklonjeno)
```

## 🎯 Konvencije i pravila

### 1. **Layout komponente**
- **KORISTITI:** `src/components/ChapterLayout.astro`
- **NE KORISTITI:** `src/layouts/ChapterLayout.astro` (uklonjeno)

### 2. **Stranice poglavlja**
Svaka stranica poglavlja treba koristiti `ChapterLayout` komponentu:

```astro
---
import ChapterLayout from '../components/ChapterLayout.astro';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = 'Poglavlje X - Naslov',
  description = 'Opis poglavlja'
} = Astro.props;
---

<ChapterLayout 
  title={title}
  description={description}
  chapterNumber={X}  // Broj poglavlja
  primaryColor="green"  // Boja teme
>
  <!-- Sadržaj poglavlja ovdje -->
</ChapterLayout>
```

### 3. **Konfiguracija poglavlja**
Sva konfiguracija poglavlja se nalazi u `src/config/chapters.ts`:

```typescript
export interface ChapterConfig {
  number: number;
  title: string;
  description: string;
  primaryColor: string;
  prevLink?: string;
  nextLink?: string;
  prevText?: string;
  nextText?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}
```

### 4. **Boje tema**
Dostupne boje za `primaryColor`:
- `green` - Zelena tema
- `blue` - Plava tema  
- `red` - Crvena tema
- `purple` - Ljubičasta tema
- `orange` - Narančasta tema
- `teal` - Teal tema
- `indigo` - Indigo tema

## 🔧 Održavanje

### Dodavanje novog poglavlja

1. **Dodaj konfiguraciju u `chapters.ts`:**
```typescript
{
  number: 24,
  title: "Novo poglavlje",
  description: "Opis novog poglavlja",
  primaryColor: "green",
  // ... ostale opcije
}
```

2. **Kreiraj stranicu `src/pages/poglavlje-24.astro`:**
```astro
---
import ChapterLayout from '../components/ChapterLayout.astro';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = 'Poglavlje 24 - Novo poglavlje',
  description = 'Opis novog poglavlja'
} = Astro.props;
---

<ChapterLayout 
  title={title}
  description={description}
  chapterNumber={24}
  primaryColor="green"
>
  <!-- Sadržaj poglavlja -->
</ChapterLayout>
```

### Ažuriranje postojećih stranica

Koristi skriptu `scripts/update-chapters.js` za automatsko ažuriranje:
```bash
node scripts/update-chapters.js
```

## 🚨 Česti problemi i rješenja

### Problem: Stranica ne koristi ChapterLayout
**Rješenje:** Dodaj import i koristi ChapterLayout komponentu umjesto kompletnog HTML-a.

### Problem: Nekonzistentne boje tema
**Rješenje:** Provjeri `primaryColor` u `chapters.ts` i u stranici.

### Problem: Neispravne navigacijske veze
**Rješenje:** Provjeri `prevLink` i `nextLink` u `chapters.ts`.

### Problem: CallToAction ne radi
**Rješenje:** Provjeri jesu li prop nazivi ispravni (`primaryText`, `primaryLink`, itd.).

## 📋 Checklist za novu stranicu

- [ ] Stranica koristi `ChapterLayout` komponentu
- [ ] `chapterNumber` je ispravno postavljen
- [ ] `primaryColor` odgovara temi poglavlja
- [ ] Konfiguracija je dodana u `chapters.ts`
- [ ] Navigacijske veze su ispravne
- [ ] Meta tagovi su ispravni
- [ ] Sadržaj je strukturiran konzistentno

## 🎨 Stilovi i komponente

### Dostupne komponente
- `ChapterLayout` - Glavni layout za poglavlja
- `HeroSection` - Hero sekcija s naslovom
- `CallToAction` - CTA sekcija na dnu
- `Footer` - Footer komponenta
- `FeaturesSection` - Features sekcija

### CSS klase
- `chapter-card` - Kartica za sadržaj poglavlja
- `chapter-card-{color}` - Boja kartice
- `prose` - Tipografija za sadržaj
- `bg-gradient-to-br` - Gradient pozadine

## 🔗 Korisni linkovi

- [Astro dokumentacija](https://docs.astro.build/)
- [Tailwind CSS dokumentacija](https://tailwindcss.com/docs)
- [TypeScript dokumentacija](https://www.typescriptlang.org/docs/)
