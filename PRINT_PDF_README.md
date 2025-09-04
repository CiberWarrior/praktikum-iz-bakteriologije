# Plain Text Export + Print Button - Dokumentacija

## 📋 **Opis funkcionalnosti**

Univerzalni gumb s **ikonom printera** koji se prikazuje isključivo na stranicama poglavlja (1-23) i njihovim podstranicama. Gumb omogućava:

1. **Preuzimanje sadržaja** kao `.txt` datoteka (plain text)
2. **Print dijalog** za PDF generiranje (ikona printera jasno označava funkcionalnost)

## 🎯 **Pravila prikazivanja**

### **Gumb se PRIKAZUJE na:**
- ✅ Podstranicama poglavlja: `/poglavlje-1/vjezba-3/`
- ✅ Podstranicama poglavlja: `/poglavlje-15/quiz-15`
- ✅ Podstranicama poglavlja: `/poglavlje-23/purpurne-sumporne-bakterije`

### **Gumb se NE prikazuje na:**
- ❌ Naslovnicama poglavlja: `/poglavlje-1/`, `/poglavlje-15/`
- ❌ Početnoj stranici: `/`, `/index`
- ❌ Predgovoru: `/predgovor`
- ❌ Rječniku: `/rječnik`, `/rjecnik`
- ❌ O nama: `/o-nama`
- ❌ Provjeri znanje: `/provjeri-znanje`
- ❌ Pretrazi: `/pretraga`
- ❌ Sadržaju: `/sadrzaj`, `/sadržaj`

## 🔧 **Tehnički detalji**

### **Regex logika:**
```javascript
const isChapter = /^\/poglavlje-(?:[1-9]|1[0-9]|2[0-3])\/.+/.test(path);
```

**Objašnjenje:**
- `^\/poglavlje-` - path počinje s `/poglavlje-`
- `(?:[1-9]|1[0-9]|2[0-3])` - broj poglavlja 1-23
- `\/` - obavezni `/` nakon broja poglavlja
- `.+` - **barem jedan dodatni karakter** (osigurava da nije naslovnica)

**Primjeri:**
- `/poglavlje-1/` → `false` (naslovnica - nema dodatnih karaktera)
- `/poglavlje-1/abc` → `true` (podstranica - ima dodatne karaktere)
- `/poglavlje-15/quiz-15` → `true` (podstranica)

### **Implementirane datoteke:**
1. **`src/components/PlainTextPrintButton.astro`** - glavna komponenta
2. **`src/components/ChapterLayout.astro`** - layout za poglavlja
3. **`src/layouts/SubPageLayout.astro`** - layout za podstranice
4. **`src/components/SubPageLayoutWithBase.astro`** - layout za podstranice s breadcrumb-om

## 🧪 **QA Checklist**

### **Vidljivost gumba:**
- [x] `/poglavlje-1/vjezba-3/` → **MORA imati gumb**
- [x] `/poglavlje-15/quiz-15` → **MORA imati gumb**
- [x] `/poglavlje-1/` → **NE smije imati gumb**
- [x] `/poglavlje-15/` → **NE smije imati gumb**
- [x] `/predgovor` → **NE smije imati gumb**
- [x] `/sadrzaj` → **NE smije imati gumb**

### **Funkcionalnost:**
- [x] Klik gumba preuzima `.txt` datoteku
- [x] Klik gumba otvara print dijalog
- [x] Sadržaj se ekstrahira iz `#content` elementa
- [x] Fallback na `main, article` ako `#content` ne postoji

## 🎨 **Stiliziranje**

### **Gumb:**
- Plavi gumb s ikonom printera
- Hover efekti i tranzicije
- Responsive dizajn
- Dark mode podrška

### **Pozicioniranje:**
- **Breadcrumb sekcija**: desno od breadcrumb-a
- **Hero sekcija**: centrirano (kada nema breadcrumb-a)

## 📱 **Korištenje**

### **Korisnik:**
1. **Klikne gumb** s ikonom printera
2. **Automatski se preuzima** `.txt` datoteka
3. **Otvara se print dijalog** za PDF generiranje

### **Developer:**
1. **Dodaje `id="content"`** na glavni sadržaj
2. **Koristi layout** koji uključuje `PlainTextPrintButton`
3. **Gumb se automatski prikazuje** na podstranicama poglavlja

## 🚀 **Implementacija**

### **Dodavanje gumba na novu stranicu:**
```astro
---
import PlainTextPrintButton from '@/components/PlainTextPrintButton.astro';
---

<article id="content">
  <!-- Sadržaj stranice -->
</article>

{shouldShowPrint && <PlainTextPrintButton />}
```

### **Path logika:**
```javascript
const path = Astro.url.pathname.replace(/\/$/, "");
const EXCLUDE = new Set([
  "", "/", "/index", "/predgovor", "/rjecnik", "/rječnik",
  "/o-nama", "/provjeri-znanje", "/pretraga", "/sadrzaj", "/sadržaj"
]);

const isChapter = /^\/poglavlje-(?:[1-9]|1[0-9]|2[0-3])\/.+/.test(path);
const shouldShowPrint = isChapter && !EXCLUDE.has(path);
```

## 🔍 **Troubleshooting**

### **Gumb se ne prikazuje:**
1. **Provjeri path**: mora biti `/poglavlje-X/...` (ne `/poglavlje-X/`)
2. **Provjeri layout**: stranica mora koristiti jedan od implementiranih layouta
3. **Provjeri `id="content"`**: glavni sadržaj mora imati ovaj ID

### **Gumb se prikazuje na krivim stranicama:**
1. **Provjeri regex**: `/^\/poglavlje-(?:[1-9]|1[0-9]|2[0-3])\/.+/`
2. **Provjeri EXCLUDE set**: dodaj nove path-ove ako je potrebno

### **Funkcionalnost ne radi:**
1. **Provjeri konzolu** browsera za JavaScript greške
2. **Provjeri `#content` element**: mora postojati u DOM-u
3. **Provjeri build**: pokreni `npm run build` za provjeru grešaka

## 📝 **Commit poruke**

```bash
feat(export): implement print icon button for chapter subpages
feat(layout): add conditional rendering logic for export button
feat(component): create simplified PlainTextPrintButton component
docs: update README with print icon functionality
```

## 🎯 **Zaključak**

Implementacija uspješno omogućava korisnicima da:
- **Preuzmu sadržaj** kao `.txt` datoteku
- **Generiraju PDF** kroz print dijalog
- **Koriste funkcionalnost** samo na relevantnim stranicama

Gumb se prikazuje **inteligentno** - samo na podstranicama poglavlja, ne na naslovnicama ili ostalim stranicama.
