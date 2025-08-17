# Template za primjenu Lively UI sloja na vježbe

## Osnovni template za vježbe

Za svaku MDX datoteku vježbe, dodaj sljedeći wrapper:

```mdx
---
title: [POSTOJEĆI NASLOV]
description: [POSTOJEĆI OPIS]
---

<div class="page-lively">
  <section class="hero-edu">
    <div class="hero-edu__eyebrow">Laboratorijske vježbe</div>
    <h1 class="hero-edu__title">[POSTOJEĆI NASLOV]</h1>
    <p class="hero-edu__tagline">[POSTOJEĆI OPIS ILI UVODNI PARAGRAF]</p>
    <div class="hero-edu__meta">
      <span class="pill">⏱ 60–90 min</span>
      <span class="pill">👥 Parovi</span>
      <span class="pill pill--accent">🎯 [KLJUČNE RIJEČI]</span>
    </div>
    <div class="progress" aria-label="Napredak">
      <div class="progress__bar" style="--v:[PROCENAT]%"></div>
      <span class="progress__label">[PROCENAT]%</span>
    </div>
  </section>

  <!-- POSTOJEĆI SADRŽAJ OVDJE -->

  <section class="quiz-lite">
    <h3>Mini kviz</h3>
    <p>[PITANJE]</p>
    <label class="quiz-opt">
      <input type="radio" name="q[ID]" />
      [ODGOVOR 1]
    </label>
    <label class="quiz-opt">
      <input type="radio" name="q[ID]" />
      [ODGOVOR 2]
    </label>
    <label class="quiz-opt is-correct">
      <input type="radio" name="q[ID]" />
      [TOČAN ODGOVOR]
    </label>
    <div class="quiz-reveal">✅ Točno: [OBJAŠNJENJE]</div>
  </section>
</div>
```

## Konverzija različitih sadržaja

### 1. Za jednostavne liste (kao vjezbe-2.mdx)
```mdx
<section class="cards-grid">
  <article class="card-sheen">
    <h3 class="card-sheen__title">1. [NASLOV]</h3>
    <p>[OPIS]</p>
  </article>
  <!-- Ponovi za svaki item -->
</section>
```

### 2. Za korake/procedure
```mdx
<section class="timeline">
  <h2>Koraci</h2>
  
  <details class="t-step" open>
    <summary>
      <span class="t-step__num">1</span>
      [NASLOV KORAKA]
    </summary>
    <div class="t-step__body">
      <p>[OPIS KORAKA]</p>
    </div>
  </details>
  <!-- Ponovi za svaki korak -->
</section>
```

### 3. Za slike
```mdx
<figure class="image-figure">
  <img src="[POSTOJEĆI SRC]" alt="[POSTOJEĆI ALT]" />
  <figcaption>
    <span class="chip">[BROJ SLIKE]</span> [POSTOJEĆI OPIS]
  </figcaption>
</figure>
```

### 4. Za napomene/upozorenja
```mdx
<aside class="callout-edu callout-edu--warn">
  <strong>⚠️ [NASLOV]:</strong> [SADRŽAJ]
</aside>
```

### 5. Za materijale/opremu
```mdx
<article class="card-sheen">
  <h3 class="card-sheen__title">Potrebni materijali</h3>
  <ul class="list-ticks">
    <li>[MATERIJAL 1]</li>
    <li>[MATERIJAL 2]</li>
    <!-- Ponovi za svaki materijal -->
  </ul>
</article>
```

## Važne napomene za MDX sintaksu

### Input elementi
U MDX-u svi `<input>` elementi moraju biti self-closing:
```mdx
<!-- ISPRAVNO -->
<input type="radio" name="q1" />

<!-- POGREŠNO -->
<input type="radio" name="q1">
```

### Slike
```mdx
<!-- ISPRAVNO -->
<img src="/path/to/image.jpg" alt="Opis" />

<!-- POGREŠNO -->
<img src="/path/to/image.jpg" alt="Opis">
```

## Postupak za masovnu konverziju

1. **Pronađi sve vježbe:**
   ```bash
   find src/content/docs -name "*vjezbe*" -o -name "*vjezba*" > exercise_files.txt
   ```

2. **Za svaku datoteku:**
   - Dodaj `<div class="page-lively">` na početak sadržaja
   - Dodaj hero-edu sekciju s odgovarajućim podacima
   - Konvertiraj postojeći sadržaj u odgovarajuće komponente
   - Dodaj quiz sekciju na kraju
   - Zatvori s `</div>`

3. **Varijable za hero sekciju:**
   - **Procenat napretka:** 35% (poglavlje 1), 45% (poglavlje 2), 55% (poglavlje 3), itd.
   - **Ključne riječi:** Uzorkovanje, Izolacija, Bojenje, Sterilizacija, itd.
   - **Vrijeme:** 60-90 min za jednostavne, 120-150 min za složene vježbe

## Primjeri za različite tipove vježbi

### Vježbe s koracima (kao vjezbe-1.mdx)
- Hero s opisom cilja
- Cards-grid za materijale i cilj
- Timeline za korake
- Cards-grid za rezultate
- Image-figure za slike
- Quiz na kraju

### Vježbe s listom (kao vjezbe-2.mdx)
- Hero s opisom
- Cards-grid za sve stavke
- Quiz na kraju

### Vježbe s linkovima (kao vjezbe-3.mdx)
- Hero s opisom
- Cards-grid s linkovima na podvježbe
- Callout za napomene
- Quiz na kraju

## Napomene

- **Zadrži sav postojeći tekst** - samo dodaj strukturu
- **Ne mijenjaj frontmatter** - samo dodaj wrapper
- **Prilagodi pill bedževe** prema sadržaju vježbe
- **Koristi odgovarajuće ikone** u pill bedževima
- **Dodaj relevantne quizove** vezane za sadržaj vježbe
- **Koristi self-closing tagove** za input i img elemente
