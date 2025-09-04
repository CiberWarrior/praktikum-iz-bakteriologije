# Plain Text / PDF / TXT Implementacija

## 📋 Pregled

Implementiran je univerzalni gumb "Plain text / PDF / TXT" koji se prikazuje **isključivo** na stranicama poglavlja (1-23) i njihovim podstranicama, prema specifikacijama korisnika.

## 🎯 Funkcionalnost

### Što radi gumb:
1. **Plain Text**: Dohvaća čisti tekst iz `#content` elementa
2. **PDF**: Otvara print dijalog za PDF generiranje
3. **TXT**: Automatski preuzima `.txt` datoteku

### Kako radi:
- Klonira sadržaj iz `#content` elementa
- Uklanja sve HTML tagove, ostavlja samo čisti tekst
- Otvara novi prozor s formatiranim plain text sadržajem
- Omogućava print/PDF preko browser print dijaloga
- Automatski preuzima TXT datoteku

## 🚫 Isključenja

Gumb se **NE prikazuje** na sljedećim stranicama:
- `/` (početna/indeks)
- `/predgovor`
- `/rječnik` ili `/rjecnik`
- `/o-nama`
- `/provjeri-znanje`
- `/pretraga`
- `/sadrzaj` ili `/sadržaj`
- **Naslovnice poglavlja** (npr. `/poglavlje-1/`, `/poglavlje-15/`, `/poglavlje-23/`)

**Zašto ne na naslovnicama?**
- Naslovnice poglavlja su pregledni sadržaj
- Gumb se prikazuje samo na konkretnim podstranicama s detaljnim sadržajem
- Omogućava korisnicima da preuzmu specifičan sadržaj koji ih zanima

## ✅ Uključenja

Gumb se **prikazuje** na sljedećim stranicama:
- **Samo podstranice poglavlja** (npr. `/poglavlje-1/vjezba-3/`)
- **NE na naslovnicama poglavlja** (npr. `/poglavlje-1/`)

**Primjeri podstranica:**
- `/poglavlje-1/preuzimanje-radnog-mjesta/`
- `/poglavlje-1/vjezba-3/`
- `/poglavlje-15/quiz-15`
- `/poglavlje-23/purpurne-sumporne-bakterije`

## 🏗️ Tehnička implementacija

### 1. PlainTextPrintButton komponenta
**Datoteka**: `src/components/PlainTextPrintButton.astro`

```astro
---
const { label = "Plain text / PDF / TXT" } = Astro.props;
---

<button id="plain-text-button" type="button" class="...">
  <svg>...</svg>
  <span>{label}</span>
</button>

<script>
  // JavaScript logika za plain text, PDF i TXT funkcionalnost
</script>
```

### 2. ChapterLayout modificiran
**Datoteka**: `src/components/ChapterLayout.astro`

```astro
---
import PlainTextPrintButton from './PlainTextPrintButton.astro';

const path = Astro.url.pathname.replace(/\/$/, "");
const EXCLUDE = new Set([...]);
const isChapter = /^\/poglavlje-(?:[1-9]|1[0-9]|2[0-3])\//.test(path);
const shouldShowPrint = isChapter && !EXCLUDE.has(path);
---

<!-- Gumb se prikazuje u breadcrumb sekciji -->
{shouldShowPrint && (
  <div class="flex items-center gap-2">
    <PlainTextPrintButton label="Plain text / PDF / TXT" />
  </div>
)}

<!-- Gumb se prikazuje u hero sekciji kada nema breadcrumb-a -->
{!finalConfig.showBreadcrumb && shouldShowPrint && (
  <div class="mt-8 flex justify-center">
    <PlainTextPrintButton label="Plain text / PDF / TXT" />
  </div>
)}

<!-- Glavni sadržaj ima id="content" -->
<article id="content" class="prose prose-lg max-w-none">
  <slot />
</article>
```

### 3. SubPageLayout kreiran
**Datoteka**: `src/layouts/SubPageLayout.astro`

```astro
---
import PlainTextPrintButton from "@/components/PlainTextPrintButton.astro";
const path = Astro.url.pathname.replace(/\/$/, "");
const isChapter = /^\/poglavlje-(?:[1-9]|1[0-9]|2[0-3])\//.test(path);
const shouldShowPrint = isChapter && !EXCLUDE.has(path);
---

<section class="no-print" data-role="nav">
  {shouldShowPrint && <PlainTextPrintButton label="Plain text / PDF / TXT" />}
</section>

<article id="content">
  <slot />
</article>
```

## 🔍 Path logika

### Regex za poglavlja:
```javascript
/^\/poglavlje-(?:[1-9]|1[0-9]|2[0-3])\//
```

**Objašnjenje**:
- `^\/poglavlje-` - počinje s `/poglavlje-`
- `(?:[1-9]|1[0-9]|2[0-3])` - broj 1-23
- `\/` - **MORA** imati `/` nakon broja (podstranica)

**Primjeri**:
- ❌ `/poglavlje-1` → gumb **NIJE** vidljiv (naslovnica)
- ✅ `/poglavlje-1/vjezba-3/` → gumb vidljiv (podstranica)
- ✅ `/poglavlje-15/quiz-15` → gumb vidljiv (podstranica)
- ✅ `/poglavlje-23/purpurne-sumporne-bakterije` → gumb vidljiv (podstranica)
- ❌ `/poglavlje-24` → gumb nije vidljiv
- ❌ `/predgovor` → gumb nije vidljiv

## 🧪 QA Checklist

### ✅ Treba biti vidljiv:
- `/poglavlje-1/vjezba-3/` → gumb vidljiv (podstranica)
- `/poglavlje-1/preuzimanje-radnog-mjesta/` → gumb vidljiv (podstranica)
- `/poglavlje-15/quiz-15` → gumb vidljiv (podstranica)
- `/poglavlje-23/purpurne-sumporne-bakterije` → gumb vidljiv (podstranica)

### ❌ Ne smije biti vidljiv:
- `/` → gumb nije vidljiv
- `/predgovor` → gumb nije vidljiv
- `/rječnik` → gumb nije vidljiv
- `/o-nama` → gumb nije vidljiv
- `/provjeri-znanje` → gumb nije vidljiv
- `/pretraga` → gumb nije vidljiv
- `/sadrzaj` → gumb nije vidljiv
- `/poglavlje-1` → gumb **NIJE** vidljiv (naslovnica poglavlja)
- `/poglavlje-15` → gumb **NIJE** vidljiv (naslovnica poglavlja)
- `/poglavlje-23` → gumb **NIJE** vidljiv (naslovnica poglavlja)

## 🎨 Stilizacija

### Gumb dizajn:
- **Pozadina**: Bijela (`#fff`) / Tamna (`#0b1220`)
- **Tekst**: Tamno plava (`#0f172a`) / Svijetlo siva (`#e5e7eb`)
- **Border**: Ring s `ring-black/10`
- **Hover**: Shadow efekt
- **Transition**: Smooth animacije

### Responsive:
- Gumb se prilagođava različitim veličinama ekrana
- Ikonica + tekst layout
- Gap između elemenata: `gap-2`

## 📱 Korištenje

### 1. Klik gumba:
- Otvara novi prozor s plain text sadržajem
- Automatski preuzima `.txt` datoteku
- Priprema print/PDF funkcionalnost

### 2. Novi prozor sadrži:
- **Sadržaj**: Plain text u `<pre>` tagu
- **Gumbi**: 
  - "Preuzmi .txt" - preuzima TXT datoteku
  - "Print / PDF" - otvara print dijalog

### 3. Print/PDF:
- Koristi browser print funkcionalnost
- Omogućava PDF export
- Zadržava plain text format

## 🚀 Deployment

### Build status:
- ✅ `npm run build` - uspješan
- ✅ Sve 189 stranice generirane
- ✅ Nema grešaka u kompilaciji

### Dev server:
- ✅ `npm run dev` - pokrenut
- ✅ Testiranje funkcionalnosti omogućeno

## 📝 Commit poruke

```
feat(print): conditional render PlainTextPrintButton only on /poglavlje-1..23 subpages
feat(layout): add path guards for excluded routes and chapter overviews
chore: normalize trailing slashes in path checks
chore: exclude chapter overview pages from print button display
```

## 🔧 Troubleshooting

### Problem: Gumb se ne prikazuje
**Rješenje**: Provjeri path regex i EXCLUDE set

### Problem: Nije pronađen #content
**Rješenje**: Provjeri da li layout ima `id="content"` na glavnom sadržaju

### Problem: JavaScript greška
**Rješenje**: Provjeri konzolu za detalje greške

## 📚 Dodatne informacije

- **Astro verzija**: 5.13.5
- **Build output**: Static
- **Komponente**: Astro + Tailwind CSS
- **Browser support**: Moderni browseri s ES6+ podrškom
