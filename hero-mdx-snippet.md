# Hero komponenta - MDX fallback snippet

Ako želite uključiti Hero komponentu direktno u MDX datoteku:

```html
<section class="hero" role="banner" aria-labelledby="hero-title">
  <!-- Pozadinski dekorativni elementi -->
  <div class="hero-bg-pattern" aria-hidden="true"></div>
  <div class="hero-decoration" aria-hidden="true">
    <!-- Diskretna SVG ilustracija Petrijeve ploče -->
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="50" stroke="currentColor" stroke-width="2" opacity="0.2"/>
      <circle cx="60" cy="60" r="35" stroke="currentColor" stroke-width="1.5" opacity="0.15"/>
      <circle cx="60" cy="60" r="20" stroke="currentColor" stroke-width="1" opacity="0.1"/>
      <!-- Simbolične bakterijske kolonije -->
      <circle cx="45" cy="40" r="4" fill="currentColor" opacity="0.1"/>
      <circle cx="70" cy="35" r="3" fill="currentColor" opacity="0.08"/>
      <circle cx="55" cy="75" r="5" fill="currentColor" opacity="0.12"/>
      <circle cx="80" cy="65" r="3.5" fill="currentColor" opacity="0.09"/>
      <circle cx="40" cy="70" r="2.5" fill="currentColor" opacity="0.07"/>
    </svg>
  </div>

  <div class="hero-container">
    <header class="hero-content">
      <h1 id="hero-title" class="hero-title">Praktikum iz bakteriologije</h1>
      <p class="hero-subtitle">Sveobuhvatan praktični priručnik za studente biologije</p>
      
      <div class="hero-actions">
        <a href="/predgovor/" class="btn btn-primary" aria-label="Započni učenje bakteriologije s predgovorom">
          Započni učenje
        </a>
        <a href="/" class="btn btn-ghost" aria-label="Pregledaj sadržaj cijelog udžbenika">
          Sadržaj udžbenika
        </a>
      </div>
    </header>
  </div>
</section>
```

Stilovi su već uključeni u global.css, tako da ovaj HTML kod funkcionira u bilo kojoj MDX datoteci.
