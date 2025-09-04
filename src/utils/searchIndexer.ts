// Search Indexer - TypeScript modul

// Interface za indeksirani sadržaj
export interface SearchableItem {
  id: string;
  title: string;
  content: string;
  type: 'poglavlje' | 'vjezba' | 'pojam' | 'kviz' | 'stranica';
  url: string;
  tags: string[];
  excerpt: string;
  lastModified?: Date;
  relevance?: number;
}

// Interface za search rezultate
export interface SearchResult extends SearchableItem {
  relevance: number;
  highlightedTitle: string;
  highlightedContent: string;
  matchedTerms: string[];
}

// Glavna klasa za indeksiranje
export class SearchIndexer {
  private searchIndex: Map<string, SearchableItem> = new Map();
  private fuzzyIndex: Map<string, string[]> = new Map(); // za fuzzy search
  private synonymIndex: Map<string, string[]> = new Map(); // za sinonime

  constructor() {
    this.initializeSynonyms();
  }

  // Inicijalizacija sinonima za bakteriološke pojmove
  private initializeSynonyms() {
    const synonyms = {
      'e.coli': ['escherichia coli', 'e coli', 'colibacil'],
      'gram': ['gram bojenje', 'gram pozitivne', 'gram negativne'],
      'sterilizacija': ['steriliziranje', 'sterilnost', 'aseptika'],
      'aseptika': ['aseptički', 'sterilnost', 'čistoća'],
      'bakterije': ['bakterija', 'mikroorganizmi', 'mikrobi'],
      'podloge': ['mediji', 'agar', 'hranjive podloge'],
      'endospore': ['endospore', 'spore', 'rezistentne forme'],
      'kapsule': ['kapsula', 'sluzni omotač'],
      'flagele': ['flagela', 'bičevi', 'pokretljivost'],
      'cfu': ['colony forming unit', 'kolonije', 'brojanje'],
      'titar': ['titar', 'koncentracija', 'razrjeđenje'],
      'nitrifikacija': ['nitrifikacija', 'amonijak', 'nitrit', 'nitrat'],
      'denitrifikacija': ['denitrifikacija', 'nitrat redukcija'],
      'fototrofne': ['fototrofija', 'fotosinteza', 'purpurne bakterije'],
      'aktinomiceti': ['streptomiceti', 'antibiotici', 'micelij']
    };

    Object.entries(synonyms).forEach(([term, syns]) => {
      this.synonymIndex.set(term.toLowerCase(), syns.map(s => s.toLowerCase()));
    });
  }

  // Dodavanje sadržaja u indeks
  addToIndex(item: SearchableItem) {
    this.searchIndex.set(item.id, item);
    
    // Dodaj u fuzzy indeks
    const words = this.extractWords(item.title + ' ' + item.content);
    words.forEach(word => {
      if (!this.fuzzyIndex.has(word)) {
        this.fuzzyIndex.set(word, []);
      }
      this.fuzzyIndex.get(word)!.push(item.id);
    });
  }

  // Ekstrakcija riječi iz teksta
  private extractWords(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\w\sčćđšž]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2)
      .filter(word => !this.isStopWord(word));
  }

  // Stop riječi koje se ne indeksiraju
  private isStopWord(word: string): boolean {
    const stopWords = [
      'i', 'u', 'na', 'sa', 'za', 'od', 'do', 'iz', 'koji', 'koja', 'koje',
      'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
      'je', 'su', 'bi', 'će', 'da', 'ne', 'li', 'kako', 'gdje', 'kada'
    ];
    return stopWords.includes(word);
  }

  // Glavna funkcija pretrage
  search(query: string, filters: SearchFilters = {}): SearchResult[] {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return [];

    const results: SearchResult[] = [];
    const matchedTerms = new Set<string>();

    // 1. Direktna pretraga
    this.searchIndex.forEach(item => {
      if (this.matchesFilters(item, filters)) {
        const result = this.calculateRelevance(item, searchTerm, matchedTerms);
        if (result.relevance > 0) {
          results.push(result);
        }
      }
    });

    // 2. Fuzzy search za slične riječi
    if (results.length < 5) {
      const fuzzyResults = this.fuzzySearch(searchTerm, filters);
      fuzzyResults.forEach(result => {
        if (!results.find(r => r.id === result.id)) {
          results.push(result);
        }
      });
    }

    // 3. Sinonim search
    const synonymResults = this.synonymSearch(searchTerm, filters);
    synonymResults.forEach(result => {
      if (!results.find(r => r.id === result.id)) {
        results.push(result);
      }
    });

    // Sortiranje po relevantnosti
    return results
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 50); // Maksimalno 50 rezultata
  }

  // Direktna pretraga kroz indeks
  private calculateRelevance(item: SearchableItem, searchTerm: string, matchedTerms: Set<string>): SearchResult {
    let relevance = 0;
    const matchedWords: string[] = [];

    // Pretraga po naslovu (najviša težina)
    const titleWords = this.extractWords(item.title);
    titleWords.forEach(word => {
      if (word.includes(searchTerm) || searchTerm.includes(word)) {
        relevance += 10;
        matchedWords.push(word);
        matchedTerms.add(word);
      }
    });

    // Pretraga po sadržaju
    const contentWords = this.extractWords(item.content);
    contentWords.forEach(word => {
      if (word.includes(searchTerm) || searchTerm.includes(word)) {
        relevance += 5;
        matchedWords.push(word);
        matchedTerms.add(word);
      }
    });

    // Pretraga po tagovima
    item.tags.forEach(tag => {
      if (tag.toLowerCase().includes(searchTerm)) {
        relevance += 8;
        matchedWords.push(tag);
        matchedTerms.add(tag);
      }
    });

    // Bonus za točno poklapanje
    if (item.title.toLowerCase().includes(searchTerm)) {
      relevance += 15;
    }

    // Bonus za početak riječi
    if (item.title.toLowerCase().startsWith(searchTerm)) {
      relevance += 20;
    }

    return {
      ...item,
      relevance,
      highlightedTitle: this.highlightText(item.title, searchTerm),
      highlightedContent: this.highlightText(item.excerpt, searchTerm),
      matchedTerms: Array.from(matchedTerms)
    };
  }

  // Fuzzy search - tolerantnost na greške u pravopisu
  private fuzzySearch(searchTerm: string, filters: SearchFilters): SearchResult[] {
    const results: SearchResult[] = [];
    const searchWords = searchTerm.split(/\s+/);

    this.searchIndex.forEach(item => {
      if (!this.matchesFilters(item, filters)) return;

      let fuzzyRelevance = 0;
      const matchedWords: string[] = [];

      searchWords.forEach(searchWord => {
        // Levenshtein distance za fuzzy matching
        const bestMatch = this.findBestFuzzyMatch(searchWord, item);
        if (bestMatch.distance <= 2) { // Tolerancija na 2 greške
          fuzzyRelevance += Math.max(0, 10 - bestMatch.distance);
          matchedWords.push(bestMatch.word);
        }
      });

      if (fuzzyRelevance > 0) {
        results.push({
          ...item,
          relevance: fuzzyRelevance,
          highlightedTitle: this.highlightText(item.title, searchTerm),
          highlightedContent: this.highlightText(item.excerpt, searchTerm),
          matchedTerms: matchedWords
        });
      }
    });

    return results.sort((a, b) => b.relevance - a.relevance);
  }

  // Pronalazi najbolje fuzzy poklapanje
  private findBestFuzzyMatch(searchWord: string, item: SearchableItem): { word: string; distance: number } {
    let bestMatch = { word: '', distance: Infinity };
    const allWords = this.extractWords(item.title + ' ' + item.content);

    allWords.forEach(word => {
      const distance = this.levenshteinDistance(searchWord, word);
      if (distance < bestMatch.distance) {
        bestMatch = { word, distance };
      }
    });

    return bestMatch;
  }

  // Levenshtein distance algoritam
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }

    return matrix[str2.length][str1.length];
  }

  // Pretraga po sinonimima
  private synonymSearch(searchTerm: string, filters: SearchFilters): SearchResult[] {
    const results: SearchResult[] = [];

    this.synonymIndex.forEach((synonyms, term) => {
      if (term.includes(searchTerm) || searchTerm.includes(term)) {
        synonyms.forEach(synonym => {
          const synonymResults = this.search(synonym, filters);
          synonymResults.forEach(result => {
            if (!results.find(r => r.id === result.id)) {
              results.push({
                ...result,
                relevance: result.relevance * 0.8 // Smanjena relevantnost za sinonime
              });
            }
          });
        });
      }
    });

    return results;
  }

  // Provjera filtera
  private matchesFilters(item: SearchableItem, filters: SearchFilters): boolean {
    if (filters.type && item.type !== filters.type) {
      return false;
    }
    if (filters.poglavlje && !item.url.includes(filters.poglavlje)) {
      return false;
    }
    return true;
  }

  // Highlighting teksta
  private highlightText(text: string, searchTerm: string): string {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  }

  // Autocomplete prijedlozi
  getAutocompleteSuggestions(query: string, maxResults: number = 10): string[] {
    const suggestions = new Set<string>();
    const searchTerm = query.toLowerCase().trim();

    if (searchTerm.length < 2) return [];

    // Prijedlozi iz naslova
    this.searchIndex.forEach(item => {
      const titleWords = this.extractWords(item.title);
      titleWords.forEach(word => {
        if (word.startsWith(searchTerm) && suggestions.size < maxResults) {
          suggestions.add(word);
        }
      });
    });

    // Prijedlozi iz tagova
    this.searchIndex.forEach(item => {
      item.tags.forEach(tag => {
        if (tag.toLowerCase().startsWith(searchTerm) && suggestions.size < maxResults) {
          suggestions.add(tag);
        }
      });
    });

    // Prijedlozi iz sinonima
    this.synonymIndex.forEach((synonyms, term) => {
      if (term.startsWith(searchTerm) && suggestions.size < maxResults) {
        suggestions.add(term);
      }
    });

    return Array.from(suggestions).slice(0, maxResults);
  }

  // Popularni pojmovi za prikaz
  getPopularTerms(): string[] {
    const termFrequency = new Map<string, number>();

    this.searchIndex.forEach(item => {
      const words = this.extractWords(item.title + ' ' + item.content);
      words.forEach(word => {
        termFrequency.set(word, (termFrequency.get(word) || 0) + 1);
      });
    });

    return Array.from(termFrequency.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([term]) => term);
  }

  // Broj indeksiranih stavki
  getIndexSize(): number {
    return this.searchIndex.size;
  }

  // Očisti indeks
  clearIndex(): void {
    this.searchIndex.clear();
    this.fuzzyIndex.clear();
  }
}

// Interface za search filtere
export interface SearchFilters {
  type?: 'poglavlje' | 'vjezba' | 'pojam' | 'kviz' | 'stranica';
  poglavlje?: string;
  sortBy?: 'title' | 'relevance' | 'type';
}

// Singleton instanca
export const searchIndexer = new SearchIndexer();
