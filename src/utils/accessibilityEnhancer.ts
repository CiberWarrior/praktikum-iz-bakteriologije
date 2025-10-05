// Accessibility Enhancement Utility
// Poboljšanja pristupačnosti za e-udžbenik

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
  enableSkipLinks?: boolean;
}

export class AccessibilityEnhancer {
  private static instance: AccessibilityEnhancer;
  private options: AccessibilityOptions;
  
  private constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: true,
      enableFocusIndicators: true,
      enableSkipLinks: true,
      ...options
    };
  }
  
  static getInstance(options?: AccessibilityOptions): AccessibilityEnhancer {
    if (!AccessibilityEnhancer.instance) {
      AccessibilityEnhancer.instance = new AccessibilityEnhancer(options);
    }
    return AccessibilityEnhancer.instance;
  }

  /**
   * Inicijalizira sve accessibility poboljšanja
   */
  initialize(): void {
    if (typeof window === 'undefined') return;

    this.addSkipLinks();
    this.enhanceKeyboardNavigation();
    this.addFocusIndicators();
    this.enhanceScreenReaderSupport();
    this.addHighContrastMode();
    this.enhanceFormAccessibility();
    this.addAriaLabels();
    this.improveColorContrast();
  }

  /**
   * Dodaje skip linkove za navigaciju
   */
  private addSkipLinks(): void {
    if (!this.options.enableSkipLinks) return;

    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Preskoči na glavni sadržaj</a>
      <a href="#navigation" class="skip-link">Preskoči na navigaciju</a>
      <a href="#search" class="skip-link">Preskoči na pretragu</a>
    `;

    document.body.insertBefore(skipLinks, document.body.firstChild);

    // Dodaj CSS za skip linkove
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 0 0 4px 0;
        transform: translateY(-100%);
        transition: transform 0.3s;
      }
      
      .skip-link:focus {
        transform: translateY(0);
        outline: 2px solid #fff;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Poboljšava keyboard navigaciju
   */
  private enhanceKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    // Dodaj keyboard event listenere
    document.addEventListener('keydown', (e) => {
      // ESC za zatvaranje modala/menija
      if (e.key === 'Escape') {
        this.closeAllModals();
      }

      // Tab za navigaciju kroz fokusirane elemente
      if (e.key === 'Tab') {
        this.enhanceTabNavigation();
      }

      // Enter/Space za aktivaciju gumbova
      if ((e.key === 'Enter' || e.key === ' ') && e.target instanceof HTMLElement) {
        if (e.target.getAttribute('role') === 'button' || e.target.tagName === 'BUTTON') {
          e.preventDefault();
          e.target.click();
        }
      }
    });

    // Dodaj ARIA live region za keyboard navigaciju
    this.addAriaLiveRegion();
  }

  /**
   * Dodaje focus indikatore
   */
  private addFocusIndicators(): void {
    if (!this.options.enableFocusIndicators) return;

    const style = document.createElement('style');
    style.textContent = `
      /* Poboljšani focus indikatori */
      *:focus {
        outline: 3px solid #3b82f6 !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;
      }
      
      /* Focus za interaktivne elemente */
      button:focus,
      a:focus,
      input:focus,
      select:focus,
      textarea:focus,
      [tabindex]:focus {
        outline: 3px solid #3b82f6 !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;
      }
      
      /* Focus za custom komponente */
      .quiz-option:focus,
      .chapter-card:focus,
      .search-result:focus {
        outline: 3px solid #3b82f6 !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;
        transform: scale(1.02);
        transition: transform 0.2s ease;
      }
      
      /* Visoki kontrast focus */
      @media (prefers-contrast: high) {
        *:focus {
          outline: 4px solid #000 !important;
          outline-offset: 3px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Poboljšava screen reader podršku
   */
  private enhanceScreenReaderSupport(): void {
    if (!this.options.enableScreenReader) return;

    // Dodaj ARIA live region
    const liveRegion = document.createElement('div');
    liveRegion.id = 'aria-live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);

    // Dodaj screen reader only CSS
    const style = document.createElement('style');
    style.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .sr-only-focusable:focus {
        position: static;
        width: auto;
        height: auto;
        padding: inherit;
        margin: inherit;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);

    // Dodaj ARIA oznake za interaktivne elemente
    this.addAriaLabels();
  }

  /**
   * Dodaje high contrast mode
   */
  private addHighContrastMode(): void {
    if (!this.options.enableHighContrast) return;

    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        /* Visoki kontrast za tekst */
        body {
          background: #000 !important;
          color: #fff !important;
        }
        
        /* Visoki kontrast za linkove */
        a {
          color: #00ffff !important;
          text-decoration: underline !important;
        }
        
        a:visited {
          color: #ff00ff !important;
        }
        
        /* Visoki kontrast za gumbove */
        button {
          background: #fff !important;
          color: #000 !important;
          border: 2px solid #000 !important;
        }
        
        button:hover {
          background: #000 !important;
          color: #fff !important;
        }
        
        /* Visoki kontrast za input polja */
        input, select, textarea {
          background: #fff !important;
          color: #000 !important;
          border: 2px solid #000 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Poboljšava pristupačnost formi
   */
  private enhanceFormAccessibility(): void {
    // Dodaj error handling za forme
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', () => {
        this.validateFormAccessibility(form as HTMLFormElement);
      });
    });

    // Dodaj label povezivanje
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
          input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
        }
      }
    });
  }

  /**
   * Dodaje ARIA oznake
   */
  private addAriaLabels(): void {
    // Dodaj ARIA oznake za navigaciju
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('aria-label')) {
      nav.setAttribute('aria-label', 'Glavna navigacija');
    }

    // Dodaj ARIA oznake za main content
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }

    // Dodaj ARIA oznake za search
    const searchInput = document.querySelector('input[type="search"], input[placeholder*="pretraga"]');
    if (searchInput) {
      searchInput.setAttribute('aria-label', 'Pretraži sadržaj');
      searchInput.setAttribute('role', 'searchbox');
    }

    // Dodaj ARIA oznake za quiz opcije
    const quizOptions = document.querySelectorAll('.quiz-option, [role="radio"]');
    quizOptions.forEach((option, index) => {
      if (!option.getAttribute('aria-label')) {
        option.setAttribute('aria-label', `Opcija ${index + 1}`);
      }
    });
  }

  /**
   * Poboljšava kontrast boja
   */
  private improveColorContrast(): void {
    const style = document.createElement('style');
    style.textContent = `
      /* Poboljšan kontrast za tekst */
      .text-gray-300 {
        color: #d1d5db !important; /* WCAG AA compliant */
      }
      
      .text-gray-400 {
        color: #9ca3af !important; /* WCAG AA compliant */
      }
      
      /* Poboljšan kontrast za linkove */
      .text-blue-400 {
        color: #60a5fa !important; /* WCAG AA compliant */
      }
      
      /* Poboljšan kontrast za gumbove */
      .bg-blue-600 {
        background-color: #2563eb !important;
      }
      
      .bg-blue-600:hover {
        background-color: #1d4ed8 !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Pomoćne metode
   */
  private closeAllModals(): void {
    const modals = document.querySelectorAll('[role="dialog"], .modal');
    modals.forEach(modal => {
      if (modal instanceof HTMLElement) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  private enhanceTabNavigation(): void {
    // Dodaj tabindex za custom komponente
    const customElements = document.querySelectorAll('.quiz-option, .chapter-card, .search-result');
    customElements.forEach((element) => {
      if (!element.getAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
    });
  }

  private addAriaLiveRegion(): void {
    const liveRegion = document.createElement('div');
    liveRegion.id = 'keyboard-navigation-announcer';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }

  private validateFormAccessibility(form: HTMLFormElement): void {
    const requiredFields = form.querySelectorAll('[required]');
    let hasErrors = false;

    requiredFields.forEach(field => {
      if (!(field as HTMLInputElement).value) {
        hasErrors = true;
        field.setAttribute('aria-invalid', 'true');
        
        // Dodaj error poruku
        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.setAttribute('role', 'alert');
        errorMsg.textContent = 'Ovo polje je obavezno';
        field.parentNode?.appendChild(errorMsg);
      }
    });

    if (hasErrors) {
      this.announceToScreenReader('Forma sadrži greške. Molimo provjerite sva obavezna polja.');
    }
  }

  private announceToScreenReader(message: string): void {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }
}

// Export singleton instance
export const accessibilityEnhancer = AccessibilityEnhancer.getInstance();
