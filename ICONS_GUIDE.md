# 🎨 Vodič za ikone - Tabler Icons

Ovaj vodič objašnjava kako koristiti Tabler Icons u projektu mrežnog udžbenika iz bakteriologije.

## 📋 Pregled

Projekt koristi **Tabler Icons** umjesto emoji ikona za:
- **Konzistentnost** - sve ikone imaju isti stil
- **Skalabilnost** - SVG format omogućava bilo koju veličinu
- **Pristupačnost** - screen readeri mogu čitati ikone
- **Optimizaciju** - manja veličina datoteka

## 🧩 Komponente

### 1. Icon.astro
Osnovna komponenta za renderiranje ikona:

```astro
---
import Icon from '../../components/ui/Icon.astro';
---

<Icon 
  name="IconFlame" 
  size="lg" 
  color="red" 
  className="mr-2" 
/>
```

**Parametri:**
- `name` - naziv ikone (obavezno)
- `size` - veličina: `sm`, `md`, `lg`, `xl`, `2xl`
- `color` - boja ikone (CSS boja ili Tailwind klasa)
- `className` - dodatne CSS klase
- `stroke` - debljina linije: `1`, `1.5`, `2`

### 2. ThemedIcon.astro
Komponenta za tematske ikone:

```astro
---
import ThemedIcon from '../../components/ui/ThemedIcon.astro';
---

<ThemedIcon 
  theme="laboratory" 
  type="flame" 
  size="lg" 
  color="red" 
/>
```

**Teme:**
- `laboratory` - laboratorijski pribor
- `safety` - sigurnost i upozorenja
- `analysis` - analiza i podaci
- `status` - status i potvrde
- `documentation` - dokumentacija
- `navigation` - navigacija

## 🎯 Dostupne ikone

### Laboratorijski (`laboratory`)
- `microscope` - mikroskop
- `flask` - epruveta
- `testTube` - test cijevi
- `petriDish` - Petri zdjelica
- `bacteria` - bakterija
- `dna` - DNA
- `flame` - plamen
- `thermometer` - termometar

### Sigurnost (`safety`)
- `warning` - upozorenje (trokut)
- `danger` - opasnost (krug)
- `safety` - štit
- `firstAid` - prva pomoć
- `info` - informacija

### Analiza (`analysis`)
- `chart` - grafikon
- `trending` - trend
- `search` - pretraživanje
- `data` - baza podataka

### Status (`status`)
- `success` - uspjeh
- `error` - greška
- `info` - informacija
- `loading` - učitavanje

### Dokumentacija (`documentation`)
- `notes` - bilješke
- `book` - knjiga
- `bulb` - žarulja

### Navigacija (`navigation`)
- `left` - lijevo
- `right` - desno
- `bookmark` - bookmark
- `bookmarkFilled` - popunjen bookmark

## 🎨 Primjeri korištenja

### 1. Osnovna ikona
```astro
<div class="flex items-center">
  <Icon name="IconFlame" class="w-6 h-6 text-red-600 mr-2" />
  <span>Spaljivanje</span>
</div>
```

### 2. Tematska ikona
```astro
<div class="flex items-center">
  <ThemedIcon 
    theme="laboratory" 
    type="flame" 
    size="lg" 
    color="red" 
    className="mr-2" 
  />
  <span>Spaljivanje</span>
</div>
```

### 3. Info box s ikonom
```astro
<div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
      <Icon name="IconFlame" class="w-8 h-8 text-white" />
    </div>
    <h3 class="text-xl font-bold text-red-900">Opis metode</h3>
  </div>
  <p class="text-gray-700">Sadržaj...</p>
</div>
```

### 4. Upozorenje s ikonom
```astro
<div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
  <div class="flex items-start">
    <Icon name="IconAlertTriangle" class="w-6 h-6 text-amber-600 mr-3 mt-1" />
    <div>
      <h4 class="font-bold text-amber-900 mb-2">Važna napomena</h4>
      <p class="text-amber-800">Sigurnosni postupci...</p>
    </div>
  </div>
</div>
```

### 5. Lista s ikonama
```astro
<div class="space-y-4">
  <div class="flex items-start">
    <Icon name="IconCheck" class="w-5 h-5 text-green-600 mr-3 mt-1" />
    <div>
      <h5 class="font-semibold">Naslov</h5>
      <p class="text-sm text-gray-600">Opis...</p>
    </div>
  </div>
</div>
```

## 🔄 Migracija s emoji ikona

### Prije (emoji)
```astro
<span class="text-3xl mr-4">🔥</span>
```

### Poslije (Tabler Icons)
```astro
<Icon name="IconFlame" class="w-8 h-8 mr-4" />
```

### Mapiranje emoji → Tabler Icons
```typescript
const emojiToTabler = {
  '🔥': 'IconFlame',
  '⚠️': 'IconAlertTriangle',
  '🧪': 'IconFlask',
  '🔬': 'IconMicroscope',
  '🦠': 'IconBug',
  '✅': 'IconCheck',
  '📊': 'IconChartBar',
  '🔍': 'IconSearch',
  '📝': 'IconNotes',
  '💡': 'IconBulb'
};
```

## 🎨 Boje i stilovi

### Preporučene boje po temama
- **Laboratorijski**: `red-600`, `blue-600`, `green-600`
- **Sigurnost**: `amber-600`, `red-600`, `yellow-600`
- **Analiza**: `blue-600`, `indigo-600`, `purple-600`
- **Status**: `green-600` (success), `red-600` (error), `blue-600` (info)
- **Dokumentacija**: `gray-600`, `blue-600`, `purple-600`

### Veličine
- `sm` - 16px (w-4 h-4)
- `md` - 24px (w-6 h-6) - **zadana**
- `lg` - 32px (w-8 h-8)
- `xl` - 48px (w-12 h-12)
- `2xl` - 64px (w-16 h-16)

## 🚀 Prednosti Tabler Icons

1. **Konzistentnost** - sve ikone imaju isti stil
2. **Skalabilnost** - SVG format omogućava bilo koju veličinu
3. **Pristupačnost** - screen readeri mogu čitati ikone
4. **Optimizacija** - manja veličina datoteka
5. **TypeScript podrška** - tipizirane ikone
6. **Tree-shaking** - uključuje samo korištene ikone

## 📝 Napomene

1. **Konzistentnost** - Koristite iste ikone za slične funkcionalnosti
2. **Pristupačnost** - Dodajte `aria-label` za složene ikone
3. **Veličine** - Prilagodite veličinu kontekstu
4. **Boje** - Koristite semantičke boje (crvena za opasnost, zelena za uspjeh)
5. **Spacing** - Dodajte odgovarajući margin/padding oko ikona

## 🔧 Dodavanje novih ikona

Za dodavanje nove ikone:

1. **Dodajte SVG path u `Icon.astro`:**
```typescript
const iconPaths = {
  // ... postojeće ikone
  'IconNovaIkona': 'M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83...'
};
```

2. **Dodajte u `ThemedIcon.astro` ako je potrebno:**
```typescript
const iconThemes = {
  laboratory: {
    // ... postojeće ikone
    novaIkona: 'IconNovaIkona'
  }
};
```

3. **Ažurirajte dokumentaciju**
