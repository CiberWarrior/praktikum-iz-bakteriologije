# Vodič za stilizaciju - Mrežni udžbenik iz bakteriologije

Ovaj vodič objašnjava kako koristiti novi stil stilizacije koji je primijenjen na naslovnicu, sadržaj i kontakt stranice za sve ostale stranice u temi.

## 📋 Pregled

Novi stil koristi:
- **Hero sekcije** s gradijentnim pozadinama i pozadinskim uzorcima
- **Moderne kartice** s hover efektima i transformacijama
- **Gradijentne pozadine** za različite sekcije
- **Call-to-action sekcije** s gradijentima
- **Konzistentan dizajn** s Tailwind CSS klasama

## 🧩 Komponente

### 1. HeroSection.astro
Komponenta za hero sekciju koja se koristi na svim stranicama poglavlja.

```astro
<HeroSection 
  title="Naslov poglavlja"
  subtitle="Poglavlje X"
  description="Opis poglavlja"
  primaryColor="green"
  prevLink="/prethodno/"
  nextLink="/sljedece/"
  prevText="← Prethodno"
  nextText="Sljedeće →"
/>
```

**Dostupne boje:** `green`, `blue`, `purple`, `red`, `orange`, `teal`, `indigo`, `pink`

### 2. CallToAction.astro
Komponenta za call-to-action sekciju.

```astro
<CallToAction 
  title="Spreman za sljedeće poglavlje?"
  description="Opis akcije"
  primaryButtonText="Sljedeće poglavlje"
  primaryButtonLink="/sljedece/"
  secondaryButtonText="Povratak na sadržaj"
  secondaryButtonLink="/sadrzaj/"
  primaryColor="purple"
/>
```

### 3. Footer.astro
Komponenta za footer koji se koristi na svim stranicama.

```astro
<Footer showSocialLinks={true} />
```

### 4. ChapterLayout.astro
Predložak za stranice poglavlja koji koristi sve gore navedene komponente.

### 5. SubPageLayout.astro
Layout za podstranice unutar poglavlja.

### 6. EnhancedSubPageLayout.astro
Napredni layout za podstranice s dodatnim funkcionalnostima.

## 🎨 Kako koristiti novi stil

### Za postojeće stranice poglavlja:

1. **Zamijenite postojeći kod** s novim predloškom:

```astro
---
import ChapterLayout from '../components/ChapterLayout.astro';
import { getChapterConfig } from '../config/chapters';

export interface Props {
  title?: string;
  description?: string;
}

const { 
  title = 'Poglavlje X - Naslov',
  description = 'Opis poglavlja'
} = Astro.props;

const chapterConfig = getChapterConfig(X); // X = broj poglavlja
---

<ChapterLayout 
  title={title}
  description={description}
  chapterNumber={X}
  primaryColor="green" // odaberite boju
  prevLink="/prethodno/"
  nextLink="/sljedece/"
  prevText="← Prethodno poglavlje"
  nextText="Sljedeće poglavlje →"
  ctaTitle={chapterConfig?.ctaTitle}
  ctaDescription={chapterConfig?.ctaDescription}
  ctaPrimaryText={chapterConfig?.ctaPrimaryText}
  ctaPrimaryLink={chapterConfig?.ctaPrimaryLink}
  ctaSecondaryText={chapterConfig?.ctaSecondaryText}
  ctaSecondaryLink={chapterConfig?.ctaSecondaryLink}
>
  
  <!-- Vaš sadržaj ovdje -->
  
</ChapterLayout>
```

### Za nove stranice:

1. **Koristite ChapterLayout predložak** kao osnovu
2. **Dodajte svoj sadržaj** unutar `<ChapterLayout>` komponente
3. **Koristite postojeće CSS klase** za konzistentnost

## 🎯 Preporučeni elementi sadržaja

### 1. Glavna slika
```astro
<div class="text-center mb-12">
  <img 
    src="/Images/slikaX.jpg" 
    alt="Opis slike" 
    class="max-w-4xl w-full rounded-2xl shadow-2xl border-4 border-{color}-100"
    loading="lazy"
    width="800"
    height="600"
    decoding="async"
  />
  <p class="text-gray-600 text-lg mt-4 font-medium">
    Slika X. Opis slike.
  </p>
</div>
```

### 2. Uvodni tekst
```astro
<div class="bg-gradient-to-br from-{color}-50 to-{color}-100 rounded-xl p-8 border border-{color}-200 mb-8">
  <div class="flex items-start">
    <div class="flex-shrink-0 w-12 h-12 bg-{color}-600 rounded-lg flex items-center justify-center mr-4">
      <!-- SVG ikona -->
    </div>
    <div>
      <h3 class="text-xl font-bold text-{color}-900 mb-3 font-heading">Naslov</h3>
      <p class="text-{color}-800 text-lg leading-relaxed font-body">
        Tekst...
      </p>
    </div>
  </div>
</div>
```

### 3. Kartice s linkovima
```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
  <a href="/link/" class="group">
    <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden">
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-gradient-to-br from-{color}-400 to-{color}-600 rounded-lg flex items-center justify-center">
            <!-- SVG ikona -->
          </div>
          <svg class="w-6 h-6 text-gray-400 group-hover:text-{color}-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-{color}-600 transition-colors">
          Naslov kartice
        </h3>
        <p class="text-gray-600 text-sm">
          Opis kartice
        </p>
      </div>
    </div>
  </a>
</div>
```

### 4. Važne napomene
```astro
<div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 border border-yellow-200 mb-8">
  <div class="flex items-start">
    <div class="flex-shrink-0 w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
      <!-- SVG ikona -->
    </div>
    <div>
      <h3 class="text-xl font-bold text-yellow-900 mb-3 font-heading">Važna napomena</h3>
      <p class="text-yellow-800 text-lg leading-relaxed font-body">
        Tekst napomene...
      </p>
    </div>
  </div>
</div>
```

### 5. Laboratorijske vježbe
```astro
<div class="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl p-8 border border-emerald-200 mb-8">
  <div class="flex items-start">
    <div class="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
      <!-- SVG ikona -->
    </div>
    <div class="flex-1">
      <h3 class="text-xl font-bold text-emerald-900 mb-4 font-heading">Laboratorijske vježbe</h3>
      <p class="text-emerald-800 mb-6 leading-relaxed font-body">
        Opis vježbi...
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <!-- Kartice vježbi -->
      </div>
      
      <div class="text-center">
        <a href="/vjezba/" class="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          Započni vježbe
          <!-- SVG ikona -->
        </a>
      </div>
    </div>
  </div>
</div>
```

## 🎨 Dostupne boje

Za `primaryColor` parametar možete koristiti:

- `green` - za osnovne teme
- `blue` - za sterilizaciju i sigurnost
- `purple` - za metode bojenja
- `red` - za važne napomene
- `orange` - za termofilne bakterije
- `teal` - za sanitarnu analizu
- `indigo` - za brojanje bakterija
- `pink` - za direktne metode
- `cyan` - za analizu vode
- `lime` - za sporogene bakterije
- `emerald` - za anaerobne bakterije
- `violet` - za antibiograme
- `rose` - za testove toksičnosti
- `sky` - za kvalitetu namirnica
- `amber` - za mliječnu fermentaciju

## 🔧 Ručno ažuriranje

Za ažuriranje postojećih stranica poglavlja, ručno primijenite nove stilove koristeći `ChapterLayout` komponentu i vodiče u ovom dokumentu.

## 📝 Napomene

1. **Konzistentnost** - Koristite iste CSS klase i strukture za slične elemente
2. **Responsivnost** - Svi elementi su već responzivni s Tailwind CSS klasama
3. **Performanse** - Slike imaju `loading="lazy"` i `decoding="async"` za bolje performanse
4. **Pristupačnost** - Koristite `alt` atribute za slike i `aria-label` za interaktivne elemente

## 🚀 Primjeri

Pogledajte postojeće stranice za primjere:
- `src/pages/poglavlje-1.astro` - Osnovni layout
- `src/pages/poglavlje-22/streptomiceti.astro` - Podstranica s SubPageLayout
- `src/pages/poglavlje-23/purpurne-sumporne-bakterije.astro` - Napredni layout

Ove stranice pokazuju kako koristiti različite layout komponente u praksi.
