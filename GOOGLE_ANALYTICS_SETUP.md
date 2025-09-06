# 📊 Google Analytics 4 - Vodič za implementaciju

## 🎯 Što je implementirano

✅ **Google Analytics 4 kod** dodan u `BaseLayout.astro`
✅ **Konfiguracijska datoteka** `src/config/analytics.ts`
✅ **Event tracking funkcije** za edukativni sadržaj
✅ **TypeScript podrška** za gtag funkcije

## 🚀 Korak 1: Dobivanje Measurement ID-a

1. **Idite na [analytics.google.com](https://analytics.google.com)**
2. **Kliknite "Start measuring"**
3. **Unesite naziv svojstva**: `"Mrežni udžbenik iz bakteriologije"`
4. **Odaberite vremensku zonu**: `Croatia (GMT+1)`
5. **Odaberite valutu**: `Croatian Kuna (HRK)`
6. **Industry category**: `Education`
7. **Prihvatite uvjete** i kliknite "I Accept"
8. **Zapišite Measurement ID** koji izgleda ovako: `G-XXXXXXXXXX`

## 🔧 Korak 2: Konfiguracija

Otvorite datoteku `src/config/analytics.ts` i zamijenite:

```typescript
export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // ← Zamijenite ovdje
```

S vašim stvarnim ID-om:

```typescript
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // ← Vaš stvarni ID
```

## 📈 Korak 3: Event Tracking

### Automatski tracking
- ✅ **Page views** - automatski se prate
- ✅ **User sessions** - automatski se prate
- ✅ **Device/geografski podaci** - automatski se prate

### Ručni event tracking

#### Praćenje otvaranja poglavlja
```typescript
import { trackChapterView } from '../config/analytics';

// U poglavlju
trackChapterView(1, "Uvod u bakteriološki praktikum");
```

#### Praćenje kvizova
```typescript
import { trackQuizStart, trackQuizComplete } from '../config/analytics';

// Na početku kviza
trackQuizStart(1, "chapter_quiz");

// Na kraju kviza
trackQuizComplete(1, 8, 10, 120); // poglavlje, točni odgovori, ukupno pitanja, vrijeme u sekundama
```

#### Praćenje pretrage
```typescript
import { trackSearch } from '../config/analytics';

// U pretrazi
trackSearch("sterilizacija", 5); // pojam, broj rezultata
```

## 🎯 Specifične metrike za udžbenik

### Edukativne metrike
- **Chapter completion rate** - koliko korisnika završi poglavlje
- **Quiz success rate** - uspješnost po poglavljima
- **Time on page** - vrijeme učenja
- **Return visitors** - ponovni pristup sadržaju

### User experience metrike
- **Page load speed** - važno za edukativni sadržaj
- **Mobile vs desktop usage**
- **Bounce rate** po poglavljima
- **Navigation patterns** - kako korisnici prolaze kroz udžbenik

## 📊 Dashboard u Google Analytics

### Real-time podaci
- Trenutni korisnici na stranici
- Aktivne stranice
- Geografski podaci

### Pregledi (Reports)
- **Acquisition** - kako korisnici dolaze na stranicu
- **Engagement** - kako korisnici koriste sadržaj
- **Monetization** - (nije relevantno za edukativni sadržaj)
- **Retention** - koliko se korisnici vraćaju

### Custom Events
- `chapter_view` - otvaranje poglavlja
- `quiz_start` - pokretanje kviza
- `quiz_complete` - završetak kviza
- `search` - pretraga
- `file_download` - preuzimanje PDF-a
- `time_on_page` - vrijeme na stranici

## 🔍 Debugging

### Provjera implementacije
1. **Otvorite Developer Tools** (F12)
2. **Idite na Network tab**
3. **Osvježite stranicu**
4. **Tražite zahtjeve na** `google-analytics.com` ili `googletagmanager.com`

### Google Analytics DebugView
1. **Idite na Google Analytics**
2. **Configure → DebugView**
3. **Vidite real-time evente**

### Browser ekstenzije
- **Google Analytics Debugger** (Chrome)
- **GA4 Debug** (Firefox)

## 🚀 Deployment

### Vercel
- ✅ **Automatski deployment** - GA4 će raditi odmah
- ✅ **Environment variables** - možete koristiti za različite okruženja

### Lokalni development
- ✅ **Radi i lokalno** - eventi se šalju na Google Analytics
- ✅ **Testiranje** - možete testirati evente lokalno

## 📱 Mobile tracking

- ✅ **Automatski** - GA4 automatski prati mobile uređaje
- ✅ **Responsive** - radi na svim uređajima
- ✅ **App-like experience** - prati i PWA funkcionalnosti

## 🔒 Privacy & GDPR

### GDPR compliance
- ✅ **Anonimni podaci** - GA4 ne sprema osobne podatke
- ✅ **IP anonymization** - automatski aktivirano
- ✅ **Cookie consent** - možete dodati cookie banner

### Privacy settings
```typescript
// U analytics.ts možete dodati:
gtag('config', 'GA_MEASUREMENT_ID', {
  anonymize_ip: true,
  allow_google_signals: false, // onemogućava Google Signals
  allow_ad_personalization_signals: false
});
```

## 🎯 Sljedeći koraci

1. **✅ Implementirajte Measurement ID**
2. **🔄 Testirajte lokalno**
3. **🚀 Deploy na Vercel**
4. **📊 Pregledajte podatke u GA4**
5. **🎯 Dodajte custom evente** gdje je potrebno

## 📞 Podrška

- **Google Analytics Help**: [support.google.com/analytics](https://support.google.com/analytics)
- **GA4 Documentation**: [developers.google.com/analytics](https://developers.google.com/analytics)
- **Astro Documentation**: [docs.astro.build](https://docs.astro.build)

---

**💡 Savjet**: Počnite s osnovnim tracking-om, a zatim postupno dodajte custom evente kako budete vidjeli što vam je potrebno!
