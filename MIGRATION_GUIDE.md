# 🔄 Vodič za migraciju na Tabler Icons

Ovaj vodič objašnjava kako migrirati postojeći projekt s emoji ikona na Tabler Icons.

## 📋 Što je migrirano

### Emoji ikone → Tabler Icons
- `🔥` → `IconFlame` (plamen)
- `⚠️` → `IconAlertTriangle` (upozorenje)
- `🧪` → `IconFlask` (epruveta)
- `🔬` → `IconMicroscope` (mikroskop)
- `🦠` → `IconBug` (bakterija)
- `✅` → `IconCheck` (potvrda)
- `📊` → `IconChartBar` (grafikon)
- `🔍` → `IconSearch` (pretraživanje)
- `📝` → `IconNotes` (bilješke)
- `💡` → `IconBulb` (žarulja)
- `🧬` → `IconBug` (DNA)
- `🧫` → `IconFlask` (Petri zdjelica)
- `💊` → `IconFirstAidKit` (lijek)
- `⚡` → `IconBolt` (električna energija)
- `📚` → `IconBook` (knjige)
- `📖` → `IconBook` (otvorena knjiga)

### SVG ikone → Tabler Icons
- Bookmark ikona → `IconBookmark`
- Chevron left → `IconChevronLeft`
- Chevron right → `IconChevronRight`
- Dokument ikona → `IconNotes`
- Vanjska strelica → `IconExternalLink`

## 🚀 Kako pokrenuti migraciju

### Automatska migracija
```bash
npm run migrate-icons
```

### Ručna migracija
```bash
node scripts/migrate-to-tabler-icons.js
```

## 📊 Što se događa tijekom migracije

1. **Skeniranje datoteka** - Pronalazi sve `.astro` datoteke u `src/` direktoriju
2. **Dodavanje importa** - Dodaje `import Icon from '../../components/ui/Icon.astro';` ako ne postoji
3. **Zamjena emoji ikona** - Zamjenjuje emoji ikone s Tabler Icons komponentama
4. **Zamjena SVG ikona** - Zamjenjuje inline SVG ikone s Tabler Icons komponentama
5. **Ažuriranje stilova** - Prilagođava CSS klase za nove ikone

## 🎨 Primjeri prije i poslije

### Prije migracije
```astro
<div class="flex items-center mb-4">
  <span class="text-3xl mr-4">🧪</span>
  <h3 class="text-2xl font-bold text-blue-900">Opis metode</h3>
</div>
```

### Poslije migracije
```astro
<div class="flex items-center mb-4">
  <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
    <Icon name="IconFlask" className="w-8 h-8 text-white" />
  </div>
  <h3 class="text-2xl font-bold text-blue-900">Opis metode</h3>
</div>
```

### Prije migracije (SVG)
```astro
<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
</svg>
```

### Poslije migracije
```astro
<Icon name="IconChevronLeft" className="w-5 h-5 mr-3" />
```

## 🔧 Ručne izmjene

Ako migracija ne pokrije sve slučajeve, možete ručno dodati ikone:

### 1. Dodajte import
```astro
---
import SubPageLayout from '../../components/SubPageLayout.astro';
import Icon from '../../components/ui/Icon.astro';
---
```

### 2. Zamijenite emoji
```astro
<!-- Umjesto -->
<span class="text-3xl mr-4">🔥</span>

<!-- Koristite -->
<Icon name="IconFlame" className="w-8 h-8 mr-4" />
```

### 3. Zamijenite SVG
```astro
<!-- Umjesto -->
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path d="M5 13l4 4L19 7"></path>
</svg>

<!-- Koristite -->
<Icon name="IconCheck" className="w-5 h-5" />
```

## 🎯 Dostupne ikone

Nakon migracije možete koristiti sve ikone iz `Icon.astro` komponente:

### Laboratorijski
- `IconFlask` - epruveta
- `IconMicroscope` - mikroskop
- `IconTestPipe` - test cijevi
- `IconBug` - bakterija
- `IconFlame` - plamen
- `IconThermometer` - termometar

### Sigurnost
- `IconAlertTriangle` - upozorenje
- `IconAlertCircle` - opasnost
- `IconShield` - štit
- `IconFirstAidKit` - prva pomoć
- `IconInfoCircle` - informacija

### Status
- `IconCheck` - uspjeh
- `IconX` - greška
- `IconClock` - učitavanje

### Navigacija
- `IconChevronLeft` - lijevo
- `IconChevronRight` - desno
- `IconBookmark` - bookmark
- `IconBookmarkFilled` - popunjen bookmark

### Dokumentacija
- `IconNotes` - bilješke
- `IconBook` - knjiga
- `IconBulb` - žarulja

### Analiza
- `IconChartBar` - grafikon
- `IconSearch` - pretraživanje
- `IconDatabase` - baza podataka

## 🎨 Stilizacija

### Veličine
- `sm` - 16px (w-4 h-4)
- `md` - 24px (w-6 h-6) - **zadana**
- `lg` - 32px (w-8 h-8)
- `xl` - 48px (w-12 h-12)
- `2xl` - 64px (w-16 h-16)

### Boje
```astro
<Icon name="IconFlame" className="w-8 h-8 text-red-600" />
<Icon name="IconCheck" className="w-6 h-6 text-green-600" />
<Icon name="IconAlertTriangle" className="w-6 h-6 text-amber-600" />
```

### Pozadinske boje
```astro
<div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
  <Icon name="IconFlame" className="w-8 h-8 text-white" />
</div>
```

## 🔍 Provjera migracije

Nakon migracije provjerite:

1. **Import komponente** - `import Icon from '../../components/ui/Icon.astro';`
2. **Zamjena emoji** - sve emoji ikone su zamijenjene
3. **Zamjena SVG** - sve inline SVG ikone su zamijenjene
4. **Funkcionalnost** - bookmark i navigacija rade
5. **Stilizacija** - ikone imaju odgovarajuće boje i veličine

## 🚨 Rješavanje problema

### Problem: Ikone se ne prikazuju
**Rješenje:** Provjerite da li je import dodan i da li je putanja ispravna.

### Problem: Stilizacija nije ispravna
**Rješenje:** Provjerite da li koristite `className` umjesto `class`.

### Problem: Neke ikone nisu migrirane
**Rješenje:** Ručno dodajte ikone koje migracija nije pokrila.

## 📝 Napomene

1. **Backup** - Napravite backup prije migracije
2. **Testiranje** - Testirajte stranice nakon migracije
3. **Konzistentnost** - Koristite iste ikone za slične funkcionalnosti
4. **Pristupačnost** - Dodajte `aria-label` za složene ikone
5. **Performanse** - Tabler Icons su optimizirane i manje od emoji ikona

## 🎉 Prednosti nakon migracije

1. **Konzistentnost** - sve ikone imaju isti stil
2. **Skalabilnost** - SVG format omogućava bilo koju veličinu
3. **Pristupačnost** - screen readeri mogu čitati ikone
4. **Optimizacija** - manja veličina datoteka
5. **TypeScript podrška** - tipizirane ikone
6. **Tree-shaking** - uključuje samo korištene ikone
