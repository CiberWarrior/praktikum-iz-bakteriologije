# Quiz Template Guide

Ovaj vodič objašnjava kako koristiti novi `QuizTemplate.astro` komponentu za kreiranje jedinstvenih kviz stranica u udžbeniku.

## Pregled

Novi `QuizTemplate.astro` komponenta omogućava:
- **Jedinstveni dizajn** za sve kvizove
- **Dinamičke boje** ovisno o poglavlju
- **Automatsko upravljanje rezultatima**
- **Responsive dizajn**
- **TypeScript podrška**

## Kako koristiti

### 1. Import komponente

```astro
---
import QuizTemplate from '../../components/QuizTemplate.astro';
---
```

### 2. Definiranje pitanja

```typescript
const questions = [
  {
    question: "Vaše pitanje ovdje?",
    options: {
      a: "Opcija A",
      b: "Opcija B", 
      c: "Opcija C",
      d: "Opcija D"
    },
    correctAnswer: "b" as const // Točan odgovor
  },
  // Dodajte više pitanja...
];
```

### 3. Definiranje breadcrumb putanje

```typescript
const breadcrumbPath = [
  { name: 'Sadržaj', url: '/sadrzaj/' },
  { name: 'Poglavlje X', url: '/poglavlje-x/' },
  { name: 'Quiz X', url: '/poglavlje-x/quiz-x/' }
];
```

### 4. Korištenje komponente

```astro
<QuizTemplate
  chapterNumber={1}
  chapterTitle="Naziv poglavlja"
  chapterDescription="Opis poglavlja"
  primaryColor="green" // green, blue, lime, amber
  questions={questions}
  prevLink="/poglavlje-1/"
  nextLink="/poglavlje-2/"
  prevText="← Povratak na Poglavlje 1"
  nextText="Poglavlje 2 →"
  ctaTitle="Nastavi na sljedeće poglavlje"
  ctaDescription="Opis sljedećeg poglavlja"
  ctaPrimaryText="Poglavlje 2"
  ctaPrimaryLink="/poglavlje-2/"
  ctaSecondaryText="Povratak na sadržaj"
  ctaSecondaryLink="/sadrzaj/"
  breadcrumbPath={breadcrumbPath}
/>
```

## Dostupne boje

- `green` - za poglavlja o sigurnosti i osnovama
- `blue` - za poglavlja o metodama i tehnikama
- `lime` - za poglavlja o specijaliziranim temama
- `amber` - za poglavlja o naprednim temama

## Primjeri

Pogledajte postojeće kviz stranice koje koriste novi predložak:
- `/src/pages/poglavlje-1/quiz-1.astro` - primjer s green bojom
- `/src/pages/poglavlje-7/quiz-7.astro` - primjer s blue bojom  
- `/src/pages/poglavlje-22/quiz-22.astro` - primjer s lime bojom

## Status migracije

✅ **Sve kviz stranice su već migrirane!**

Sve postojeće kviz stranice (quiz-1 do quiz-23) već koriste novi `QuizTemplate.astro` predložak.

## Prednosti novog predloška

### Prije (stare kviz stranice):
- ❌ 24 različite implementacije
- ❌ Dupliciranje koda
- ❌ Različiti stilovi
- ❌ TypeScript greške
- ❌ Teško održavanje

### Sada (novi predložak):
- ✅ Jedinstvena implementacija
- ✅ Bez dupliciranja koda
- ✅ Konzistentan dizajn
- ✅ TypeScript podrška
- ✅ Lako održavanje
- ✅ Dinamičke boje
- ✅ Automatsko upravljanje rezultatima

## Struktura komponente

```
QuizTemplate.astro
├── Props interface (TypeScript)
├── Color mapping system
├── ChapterLayout wrapper
├── Quiz header
├── Instructions
├── Questions form
├── Results section
└── JavaScript functionality
```

## Funkcionalnosti

- **Automatsko računanje rezultata**
- **Dinamičke poruke ovisno o postotku**
- **Reset funkcionalnost**
- **Smooth scrolling**
- **Responsive dizajn**
- **Accessibility podrška**

## Sljedeći koraci

1. **Testirajte postojeće kviz stranice** - sve već koriste novi predložak
2. **Ažurirajte linkove** u navigaciji ako je potrebno
3. **Dodajte nova pitanja** u postojeće kvizove ako je potrebno

## Podrška

Za pitanja ili probleme s novim predloškom, provjerite:
- TypeScript greške u konzoli
- Konzistentnost pitanja i odgovora
- Ispravnost breadcrumb putanje
- Odgovarajuće boje za poglavlja
