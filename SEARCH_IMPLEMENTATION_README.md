# Napredna pretraga - Implementacija

Ova datoteka opisuje implementaciju naprednog sustava pretrage za mrežni udžbenik iz bakteriologije.

## 🚀 Značajke

### 1. **Dinamičko indeksiranje sadržaja**
- Automatsko skeniranje svih stranica i sadržaja
- Indeksiranje poglavlja, vježbi, kvizova, pojmova i stranica
- Real-time ažuriranje indeksa

### 2. **Fuzzy Search**
- Tolerantnost na greške u pravopisu (Levenshtein distance)
- Pronalazi slične riječi i pojmove
- Konfigurabilna tolerancija (zadano: 2 greške)

### 3. **Autocomplete funkcionalnost**
- Prijedlozi tijekom pisanja
- Navigacija tipkovnicom (strelicama, Enter, Escape)
- Prijedlozi iz naslova, tagova i sinonima

### 4. **Sinonimi i povezani pojmovi**
- Automatsko prepoznavanje sinonima
- Pretraga po povezanim bakteriološkim pojmovima
- Podrška za više jezika (hrvatski + engleski)

### 5. **Napredni filteri**
- Filtriranje po tipu sadržaja (poglavlje, vježba, pojam, kviz)
- Filtriranje po poglavljima
- Sortiranje po relevantnosti, naslovu ili tipu
- Opcije za fuzzy search i sinonime

### 6. **Real-time rezultati**
- Rezultati se ažuriraju dok pišete
- Debouncing za optimalne performanse
- Highlighting pronađenih termina

### 7. **Statistika i analitika**
- Vrijeme pretrage
- Broj indeksiranih stavki
- Popularni pojmovi
- Broj rezultata

### 8. **Izvoz rezultata**
- CSV format za preuzimanje
- Strukturirani podaci s metapodacima
- Automatsko imenovanje datoteka

## 📁 Struktura datoteka

```
src/
├── utils/
│   ├── searchIndexer.ts          # Glavni sustav indeksiranja
│   └── contentScanner.ts         # Automatsko skeniranje sadržaja
├── components/
│   ├── AdvancedSearch.astro      # Astro komponenta za pretragu
│   └── AdvancedSearchScript.ts   # TypeScript logika pretrage
└── pages/
    └── pretraga.astro            # Glavna stranica pretrage
```

## 🔧 Tehnička implementacija

### SearchIndexer klasa
- **Singleton pattern** za globalni pristup
- **Map strukture** za brzu pretragu
- **Levenshtein algoritam** za fuzzy search
- **Težinski sustav** relevantnosti

### ContentScanner klasa
- **Automatsko indeksiranje** svih tipova sadržaja
- **Strukturirani podaci** s metapodacima
- **Tag sustav** za kategorizaciju
- **Excerpt generiranje** za preview

### AdvancedSearch klasa
- **Event-driven arhitektura**
- **Debouncing** za input događaje
- **Keyboard navigation** za autocomplete
- **Responsive design** s Tailwind CSS

## 🎯 Kako koristiti

### 1. **Osnovna pretraga**
```
1. Otvorite stranicu /pretraga/
2. Upišite pojam u search polje
3. Rezultati se prikazuju automatski
4. Koristite filtere za precizniju pretragu
```

### 2. **Napredni filteri**
```
- Tip sadržaja: Odaberite poglavlje, vježbu, pojam ili kviz
- Poglavlje: Filtriranje po određenom poglavlju
- Sortiranje: Po relevantnosti, naslovu ili tipu
- Opcije: Uključite/isključite fuzzy search i sinonime
```

### 3. **Autocomplete**
```
- Pišite u search polje
- Koristite strelice gore/dolje za navigaciju
- Pritisnite Enter za odabir
- Pritisnite Escape za zatvaranje
```

### 4. **Izvoz rezultata**
```
1. Izvršite pretragu
2. Kliknite "Izvoz" gumb
3. CSV datoteka se preuzima automatski
4. Datoteka sadrži sve rezultate s metapodacima
```

## 🔍 Algoritmi pretrage

### 1. **Relevantnost rezultata**
```
- Naslov: +10 bodova
- Sadržaj: +5 bodova  
- Tagovi: +8 bodova
- Točno poklapanje: +15 bodova
- Početak riječi: +20 bodova
```

### 2. **Fuzzy search**
```
- Levenshtein distance ≤ 2
- Tolerancija na greške u pravopisu
- Slične riječi se prepoznaju automatski
```

### 3. **Sinonimi**
```
- Predefinirani sinonimi za bakteriološke pojmove
- Automatsko prepoznavanje povezanih termina
- Smanjena relevantnost za sinonimne rezultate (×0.8)
```

## 📊 Performanse

### **Optimizacije**
- **Debouncing** input događaja (300ms)
- **Lazy loading** TypeScript modula
- **Efficient data structures** (Map, Set)
- **Pagination** rezultata (10 po stranici)

### **Mjerljivi pokazatelji**
- Vrijeme pretrage: < 50ms
- Indeksiranje: < 100ms
- Autocomplete: < 100ms
- Memory usage: < 10MB

## 🚀 Buduća poboljšanja

### **Kratkoročna**
- [ ] Elasticsearch integracija
- [ ] Machine learning za relevantnost
- [ ] Višejezična podrška
- [ ] Advanced analytics

### **Dugoročna**
- [ ] Semantic search
- [ ] Voice search
- [ ] AI-powered suggestions
- [ ] Collaborative filtering

## 🐛 Rješavanje problema

### **Česti problemi**

1. **Pretraga ne radi**
   ```
   - Provjerite konzolu za greške
   - Osvježite stranicu
   - Provjerite TypeScript kompilaciju
   ```

2. **Spora pretraga**
   ```
   - Smanjite broj filtera
   - Provjerite veličinu indeksa
   - Optimizirajte sadržaj stranica
   ```

3. **Autocomplete ne prikazuje se**
   ```
   - Provjerite JavaScript greške
   - Provjerite CSS klase
   - Provjerite DOM elemente
   ```

### **Debug informacije**
```javascript
// U konzoli preglednika
console.log(window.advancedSearch.getIndexStats());
console.log(window.advancedSearch.currentResults);
```

## 📝 Konfiguracija

### **Environment varijable**
```bash
# .env
SEARCH_INDEX_SIZE=1000
FUZZY_TOLERANCE=2
AUTOCOMPLETE_MAX_ITEMS=10
DEBOUNCE_DELAY=300
```

### **Customizacija**
```typescript
// src/utils/searchIndexer.ts
export const SEARCH_CONFIG = {
  maxResults: 50,
  fuzzyTolerance: 2,
  relevanceWeights: {
    title: 10,
    content: 5,
    tags: 8,
    exactMatch: 15,
    startsWith: 20
  }
};
```

## 🤝 Doprinosi

### **Dodavanje novih sinonima**
```typescript
// src/utils/searchIndexer.ts
private initializeSynonyms() {
  const synonyms = {
    'novi-pojam': ['sinonim1', 'sinonim2', 'sinonim3'],
    // ... dodajte nove
  };
}
```

### **Dodavanje novih tipova sadržaja**
```typescript
// src/utils/searchIndexer.ts
export interface SearchableItem {
  type: 'poglavlje' | 'vjezba' | 'pojam' | 'kviz' | 'stranica' | 'novi-tip';
  // ... ostali properties
}
```

## 📚 Reference

- [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance)
- [Search Engine Optimization](https://developers.google.com/search/docs)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📞 Podrška

Za tehničku podršku ili pitanja o implementaciji:
- Otvorite issue na GitHub-u
- Kontaktirajte development tim
- Provjerite dokumentaciju

---

**Napomena**: Ova implementacija je optimizirana za mrežni udžbenik iz bakteriologije i može se prilagoditi drugim projektima s minimalnim izmjenama.
