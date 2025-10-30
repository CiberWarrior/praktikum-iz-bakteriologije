// Napredna pretraga - TypeScript modul
import type { SearchResult, SearchFilters } from '../utils/searchIndexer';
import { logger } from '../utils/logger.js';

// Interface za autocomplete item
interface AutocompleteItem {
  text: string;
  type: 'title' | 'tag' | 'synonym';
  relevance: number;
}

// Extend Window interface to include advancedSearch
declare global {
  interface Window {
    advancedSearch: AdvancedSearch;
  }
}

// Glavna klasa za naprednu pretragu
export class AdvancedSearch {
  private searchInput!: HTMLInputElement;
  private autocompleteDropdown!: HTMLDivElement;
  private resultsContainer!: HTMLDivElement;
  private initialContent!: HTMLDivElement;
  private noResults!: HTMLDivElement;
  private searchStats!: HTMLDivElement;
  
  private currentResults: SearchResult[] = [];
  private currentPage: number = 1;
  private resultsPerPage: number = 10;
  private searchTimeout: ReturnType<typeof setTimeout> | null = null;
  private selectedAutocompleteIndex: number = -1;
  private autocompleteItems: AutocompleteItem[] = [];

  constructor() {
    this.initializeElements();
    this.bindEvents();
    this.initializeSearch();
  }

  // Inicijalizacija DOM elemenata
  private initializeElements(): void {
    this.searchInput = document.getElementById('advancedSearchInput') as HTMLInputElement;
    this.autocompleteDropdown = document.getElementById('autocompleteDropdown') as HTMLDivElement;
    this.resultsContainer = document.getElementById('resultsContainer') as HTMLDivElement;
    this.initialContent = document.getElementById('initialContent') as HTMLDivElement;
    this.noResults = document.getElementById('noResults') as HTMLDivElement;
    this.searchStats = document.getElementById('searchStats') as HTMLDivElement;

    if (!this.searchInput || !this.autocompleteDropdown || !this.resultsContainer || 
        !this.initialContent || !this.noResults || !this.searchStats) {
      logger.error('Nedostaju potrebni DOM elementi za pretragu');
      return;
    }
  }

  // Povezivanje event listenera
  private bindEvents(): void {
    // Search input events
    this.searchInput.addEventListener('input', this.handleSearchInput.bind(this));
    this.searchInput.addEventListener('keydown', this.handleSearchKeydown.bind(this));
    this.searchInput.addEventListener('focus', this.handleSearchFocus.bind(this));
    this.searchInput.addEventListener('blur', this.handleSearchBlur.bind(this));

    // Filter events
    document.getElementById('typeFilter')?.addEventListener('change', this.handleFilterChange.bind(this));
    document.getElementById('chapterFilter')?.addEventListener('change', this.handleFilterChange.bind(this));
    document.getElementById('sortFilter')?.addEventListener('change', this.handleFilterChange.bind(this));
    document.getElementById('fuzzySearch')?.addEventListener('change', this.handleFilterChange.bind(this));
    document.getElementById('synonymSearch')?.addEventListener('change', this.handleFilterChange.bind(this));

    // Button events
    document.getElementById('clearSearch')?.addEventListener('click', this.clearSearch.bind(this));
    document.getElementById('exportResults')?.addEventListener('click', this.exportResults.bind(this));

    // Click outside autocomplete
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  // Inicijalizacija pretrage
  private async initializeSearch(): Promise<void> {
    try {
      // Inicijaliziraj search indexer
      const { contentScanner } = await import('../utils/contentScanner');
      await contentScanner.indexAllContent();
      
      // Prikaži statistiku
      this.updateSearchStats();
      
      // Prikaži popularne pojmove
      this.showPopularTerms();
      
    } catch (error) {
      logger.logError(error as Error, { context: 'AdvancedSearch.initializeSearch' });
    }
  }

  // Rukovanje input događajem
  private handleSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const query = target.value.trim();

    // Očisti prethodni timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Sakrij autocomplete ako je query prazan
    if (query.length === 0) {
      this.hideAutocomplete();
      this.showInitialContent();
      return;
    }

    // Prikaži loading indikator
    this.showLoading(true);

    // Postavi timeout za pretragu (debouncing)
    this.searchTimeout = setTimeout(async () => {
      if (query.length >= 2) {
        await this.performSearch(query);
        this.showAutocomplete(query);
      }
      this.showLoading(false);
    }, 300);
  }

  // Rukovanje keydown događajem
  private handleSearchKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.navigateAutocomplete(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.navigateAutocomplete(-1);
        break;
      case 'Enter':
        event.preventDefault();
        this.selectAutocompleteItem();
        break;
      case 'Escape':
        this.hideAutocomplete();
        this.searchInput.blur();
        break;
    }
  }

  // Rukovanje focus događajem
  private handleSearchFocus(): void {
    const query = this.searchInput.value.trim();
    if (query.length >= 2) {
      this.showAutocomplete(query);
    }
  }

  // Rukovanje blur događajem
  private handleSearchBlur(): void {
    // Odgodi sakrivanje autocomplete-a da se može kliknuti na item
    setTimeout(() => {
      if (!this.autocompleteDropdown.contains(document.activeElement)) {
        this.hideAutocomplete();
      }
    }, 150);
  }

  // Rukovanje filter promjenama
  private handleFilterChange(): void {
    const query = this.searchInput.value.trim();
    if (query.length >= 2) {
      this.performSearch(query);
    }
  }

  // Rukovanje klikom izvan autocomplete-a
  private handleClickOutside(event: Event): void {
    const target = event.target as Node;
    if (!this.searchInput.contains(target) && !this.autocompleteDropdown.contains(target)) {
      this.hideAutocomplete();
    }
  }

  // Izvršavanje pretrage
  private async performSearch(query: string): Promise<void> {
    try {
      const startTime = performance.now();
      
      // Dohvati filtere
      const filters = this.getCurrentFilters();
      
      // Izvrši pretragu
      const { searchIndexer } = await import('../utils/searchIndexer');
      const results = searchIndexer.search(query, filters);
      
      const searchTime = performance.now() - startTime;
      
      // Ažuriraj rezultate
      this.currentResults = results;
      this.currentPage = 1;
      
      // Prikaži rezultate
      this.displayResults(results, query, searchTime);
      
    } catch (error) {
      logger.logError(error as Error, { context: 'AdvancedSearch.performSearch' });
      this.showError('Greška tijekom pretrage. Pokušajte ponovno.');
    }
  }

  // Dohvaćanje trenutnih filtera
  private getCurrentFilters(): SearchFilters {
    const typeFilter = (document.getElementById('typeFilter') as HTMLSelectElement)?.value;
    const chapterFilter = (document.getElementById('chapterFilter') as HTMLSelectElement)?.value;
    const sortBy = (document.getElementById('sortFilter') as HTMLSelectElement)?.value;

    return {
      type: typeFilter === 'all' ? undefined : typeFilter as 'poglavlje' | 'vjezba' | 'pojam' | 'kviz' | 'stranica',
      poglavlje: chapterFilter === 'all' ? undefined : chapterFilter,
      sortBy: sortBy === 'all' ? undefined : sortBy as 'title' | 'relevance' | 'type'
    };
  }

  // Prikaz autocomplete-a
  private async showAutocomplete(query: string): Promise<void> {
    try {
      const { searchIndexer } = await import('../utils/searchIndexer');
      const suggestions = searchIndexer.getAutocompleteSuggestions(query, 8);
      
      this.autocompleteItems = suggestions.map(suggestion => ({
        text: suggestion,
        type: 'title' as const,
        relevance: 1
      }));

      if (this.autocompleteItems.length > 0) {
        this.renderAutocomplete();
        this.autocompleteDropdown.classList.remove('hidden');
      } else {
        this.hideAutocomplete();
      }
      
    } catch (error) {
      logger.logError(error as Error, { context: 'AdvancedSearch.updateAutocomplete' });
    }
  }

  // Renderiranje autocomplete-a
  private renderAutocomplete(): void {
    this.autocompleteDropdown.innerHTML = this.autocompleteItems
      .map((item, index) => `
        <div class="autocomplete-item ${index === this.selectedAutocompleteIndex ? 'selected' : ''}" 
             data-index="${index}">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span class="text-gray-900">${this.highlightText(item.text, this.searchInput.value)}</span>
          </div>
        </div>
      `)
      .join('');

    // Dodaj click evente
    this.autocompleteDropdown.querySelectorAll('.autocomplete-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        this.selectAutocompleteItem(index);
      });
    });
  }

  // Navigacija kroz autocomplete
  private navigateAutocomplete(direction: number): void {
    const newIndex = this.selectedAutocompleteIndex + direction;
    
    if (newIndex >= 0 && newIndex < this.autocompleteItems.length) {
      this.selectedAutocompleteIndex = newIndex;
      this.renderAutocomplete();
    }
  }

  // Odabir autocomplete item-a
  private selectAutocompleteItem(index?: number): void {
    const selectedIndex = index !== undefined ? index : this.selectedAutocompleteIndex;
    
    if (selectedIndex >= 0 && selectedIndex < this.autocompleteItems.length) {
      const selectedItem = this.autocompleteItems[selectedIndex];
      if (!selectedItem || !selectedItem.text) {
        return;
      }
      this.searchInput.value = selectedItem.text;
      this.hideAutocomplete();
      void this.performSearch(selectedItem.text);
    }
  }

  // Sakrivanje autocomplete-a
  private hideAutocomplete(): void {
    this.autocompleteDropdown.classList.add('hidden');
    this.selectedAutocompleteIndex = -1;
  }

  // Prikaz rezultata
  private displayResults(results: SearchResult[], query: string, searchTime: number): void {
    // Sakrij početni sadržaj
    this.initialContent.classList.add('hidden');
    this.noResults.classList.add('hidden');

    if (results.length === 0) {
      this.noResults.classList.remove('hidden');
      this.resultsContainer.classList.add('hidden');
      return;
    }

    // Prikaži rezultate
    this.resultsContainer.classList.remove('hidden');
    
    // Ažuriraj header
    this.updateResultsHeader(results.length, query);
    
    // Renderiraj rezultate
    this.renderResults(results);
    
    // Ažuriraj statistiku
    this.updateSearchStats(searchTime);
    
    // Prikaži paginaciju
    this.renderPagination(results.length);
  }

  // Ažuriranje header-a rezultata
  private updateResultsHeader(resultCount: number, query: string): void {
    const resultsCount = document.getElementById('resultsCount');
    const searchQuery = document.getElementById('searchQuery');
    
    if (resultsCount) {
      resultsCount.textContent = `${resultCount} rezultat${resultCount === 1 ? '' : resultCount < 5 ? 'a' : 'a'}`;
    }
    
    if (searchQuery) {
      searchQuery.textContent = `Pretraga: "${query}"`;
    }
  }

  // Renderiranje rezultata
  private renderResults(results: SearchResult[]): void {
    const resultsList = document.getElementById('resultsList');
    if (!resultsList) return;

    const startIndex = (this.currentPage - 1) * this.resultsPerPage;
    const endIndex = startIndex + this.resultsPerPage;
    const pageResults = results.slice(startIndex, endIndex);

    resultsList.innerHTML = pageResults.map(result => `
      <a href="${result.url}" class="search-result-item">
        <div class="flex items-start">
          <div class="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            ${this.getTypeIcon(result.type)}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-gray-900 text-lg">${result.highlightedTitle}</h4>
              ${this.getTypeBadge(result.type)}
            </div>
            <p class="text-gray-600 mb-3">${result.highlightedContent}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Otvori ${this.getTypeLabel(result.type)}
              </div>
              <div class="text-xs text-gray-400">
                Relevantnost: ${result.relevance}
              </div>
            </div>
          </div>
        </div>
      </a>
    `).join('');
  }

  // Renderiranje paginacije
  private renderPagination(totalResults: number): void {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(totalResults / this.resultsPerPage);
    
    if (totalPages <= 1) {
      pagination.innerHTML = '';
      return;
    }

    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
      <button class="pagination-item ${this.currentPage === 1 ? 'disabled' : ''}" 
              ${this.currentPage === 1 ? 'disabled' : ''} 
              onclick="window.advancedSearch.goToPage(${this.currentPage - 1})">
        Prethodna
      </button>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
        paginationHTML += `
          <button class="pagination-item ${i === this.currentPage ? 'active' : ''}" 
                  onclick="window.advancedSearch.goToPage(${i})">
            ${i}
          </button>
        `;
      } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
        paginationHTML += '<span class="px-3 py-2 text-gray-400">...</span>';
      }
    }

    // Next button
    paginationHTML += `
      <button class="pagination-item ${this.currentPage === totalPages ? 'disabled' : ''}" 
              ${this.currentPage === totalPages ? 'disabled' : ''} 
              onclick="window.advancedSearch.goToPage(${this.currentPage + 1})">
        Sljedeća
      </button>
    `;

    pagination.innerHTML = paginationHTML;
  }

  // Idite na određenu stranicu
  public goToPage(page: number): void {
    const totalPages = Math.ceil(this.currentResults.length / this.resultsPerPage);
    
    if (page >= 1 && page <= totalPages) {
      this.currentPage = page;
      this.renderResults(this.currentResults);
      this.renderPagination(this.currentResults.length);
      
      // Scroll to top of results
      this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Ažuriranje statistike pretrage
  private updateSearchStats(searchTime?: number): void {
    const totalResults = document.getElementById('totalResults');
    const searchTimeElement = document.getElementById('searchTime');
    const indexedItems = document.getElementById('indexedItems');
    const popularTerms = document.getElementById('popularTerms');

    if (totalResults) {
      totalResults.textContent = this.currentResults.length.toString();
    }

    if (searchTime !== undefined && searchTimeElement) {
      searchTimeElement.textContent = `${Math.round(searchTime)}ms`;
    }

    // Dohvati statistiku indeksa
    this.getIndexStats().then(stats => {
      if (indexedItems) {
        indexedItems.textContent = stats.totalItems.toString();
      }
      if (popularTerms) {
        popularTerms.textContent = stats.popularTerms.length.toString();
      }
    });

    this.searchStats.classList.remove('hidden');
  }

  // Dohvaćanje statistike indeksa
  private async getIndexStats(): Promise<{ totalItems: number; popularTerms: string[] }> {
    try {
      const { contentScanner } = await import('../utils/contentScanner');
      const stats = contentScanner.getIndexStats();
      return {
        totalItems: stats.totalItems,
        popularTerms: stats.popularTerms
      };
    } catch (error) {
      logger.logError(error as Error, { context: 'AdvancedSearch.getSearchStats' });
      return { totalItems: 0, popularTerms: [] };
    }
  }

  // Prikaz popularnih pojmova
  private async showPopularTerms(): Promise<void> {
    try {
      const stats = await this.getIndexStats();
      if (stats.popularTerms.length > 0) {
        // Možete implementirati prikaz popularnih pojmova kao tagove
        logger.debug('Popularni pojmovi:', stats.popularTerms);
      }
    } catch (error) {
      logger.logError(error as Error, { context: 'AdvancedSearch.showPopularTerms' });
    }
  }

  // Prikaz loading indikatora
  private showLoading(show: boolean): void {
    const loading = document.getElementById('searchLoading');
    if (loading) {
      loading.classList.toggle('hidden', !show);
    }
  }

  // Prikaz greške
  private showError(message: string): void {
    // Implementirajte prikaz greške (toast, alert, itd.)
    logger.error(message);
  }

  // Očisti pretragu
  private clearSearch(): void {
    this.searchInput.value = '';
    this.currentResults = [];
    this.currentPage = 1;
    
    this.hideAutocomplete();
    this.initialContent.classList.remove('hidden');
    this.resultsContainer.classList.add('hidden');
    this.noResults.classList.add('hidden');
    this.searchStats.classList.add('hidden');
  }

  // Izvoz rezultata
  private exportResults(): void {
    if (this.currentResults.length === 0) return;

    const csvContent = this.convertToCSV(this.currentResults);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `pretraga_rezultati_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  // Konverzija rezultata u CSV
  private convertToCSV(results: SearchResult[]): string {
    const headers = ['Naslov', 'Tip', 'URL', 'Sadržaj', 'Tagovi', 'Relevantnost'];
    const rows = results.map(result => [
      result.title,
      result.type,
      result.url,
      result.excerpt,
      result.tags.join(', '),
      result.relevance
    ]);

    return [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
  }

  // Highlighting teksta
  private highlightText(text: string, searchTerm: string): string {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  }

  // Dohvaćanje ikone za tip
  private getTypeIcon(type: string): string {
    const icons = {
      poglavlje: `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>`,
      vjezba: `<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>`,
      pojam: `<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>`,
      kviz: `<svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>`,
      stranica: `<svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>`
    };

    return icons[type as keyof typeof icons] || icons.stranica;
  }

  // Dohvaćanje badge-a za tip
  private getTypeBadge(type: string): string {
    const types = {
      poglavlje: { label: 'Poglavlje', class: 'type-badge poglavlje' },
      vjezba: { label: 'Vježba', class: 'type-badge vjezba' },
      pojam: { label: 'Pojam', class: 'type-badge pojam' },
      kviz: { label: 'Kviz', class: 'type-badge kviz' },
      stranica: { label: 'Stranica', class: 'type-badge stranica' }
    };
    
    const typeInfo = types[type as keyof typeof types] || { label: type, class: 'type-badge stranica' };
    return `<span class="${typeInfo.class}">${typeInfo.label}</span>`;
  }

  // Dohvaćanje label-a za tip
  private getTypeLabel(type: string): string {
    const labels = {
      poglavlje: 'poglavlje',
      vjezba: 'vježbu',
      pojam: 'pojam',
      kviz: 'kviz',
      stranica: 'stranicu'
    };
    
    return labels[type as keyof typeof labels] || 'sadržaj';
  }

  // Prikaz početnog sadržaja
  private showInitialContent(): void {
    this.initialContent.classList.remove('hidden');
    this.resultsContainer.classList.add('hidden');
    this.noResults.classList.add('hidden');
    this.searchStats.classList.add('hidden');
  }
}

// Inicijalizacija kada je DOM spreman
document.addEventListener('DOMContentLoaded', () => {
  // Stvori globalnu instancu za pristup iz HTML-a
  window.advancedSearch = new AdvancedSearch();
});
