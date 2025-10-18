#!/usr/bin/env node

/**
 * Cleanup Script for Mrežni udžbenik iz bakteriologije
 * Automatski uklanja console.log statements i optimizira kod
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfiguracija
const CONFIG = {
  // Direktoriji za čišćenje
  sourceDirs: ['src/**/*.{ts,js,astro}'],
  // Direktoriji za ignoriranje
  ignoreDirs: ['node_modules/**', 'dist/**', '.astro/**'],
  // Console.log patterns za uklanjanje
  consolePatterns: [
    /^\s*console\.(log|warn|error|info|debug)\s*\(/gm,
    /^\s*console\.(log|warn|error|info|debug)\s*\(/gm
  ],
  // Development-only console patterns (zadržati u development)
  devConsolePatterns: [
    /if\s*\(\s*process\.env\.NODE_ENV\s*===\s*['"]development['"]\s*\)\s*\{[\s\S]*?console\.(log|warn|error|info|debug)[\s\S]*?\}/gm
  ]
};

class CodeCleaner {
  constructor() {
    this.cleanedFiles = 0;
    this.totalFiles = 0;
    this.errors = [];
  }

  /**
   * Glavna metoda za čišćenje
   */
  async cleanup(): Promise<void> {
    console.log('🧹 Počinjem čišćenje koda...\n');
    
    try {
      // Pronađi sve datoteke
      const files = await this.findFiles();
      this.totalFiles = files.length;
      
      console.log(`📁 Pronađeno ${this.totalFiles} datoteka za provjeru\n`);
      
      // Očisti svaku datoteku
      for (const file of files) {
        await this.cleanFile(file);
      }
      
      // Prikaži rezultate
      this.showResults();
      
    } catch (error) {
      console.error('❌ Greška tijekom čišćenja:', error);
      process.exit(1);
    }
  }

  /**
   * Pronađi sve datoteke za čišćenje
   */
  async findFiles(): Promise<string[]> {
    const files: string[] = [];
    
    for (const pattern of CONFIG.sourceDirs) {
      const matches = await glob(pattern, {
        ignore: CONFIG.ignoreDirs,
        cwd: path.join(__dirname, '..')
      });
      files.push(...matches);
    }
    
    return files;
  }

  /**
   * Očisti pojedinu datoteku
   */
  async cleanFile(filePath: string): Promise<void> {
    try {
      const fullPath = path.join(__dirname, '..', filePath);
      
      if (!existsSync(fullPath)) {
        return;
      }
      
      const content = readFileSync(fullPath, 'utf8');
      const originalContent = content;
      let cleanedContent = content;
      
      // Ukloni console.log statements (osim development ones)
      for (const pattern of CONFIG.consolePatterns) {
        cleanedContent = cleanedContent.replace(pattern, (match, method) => {
          // Provjeri je li u development bloku
          const beforeMatch = cleanedContent.substring(0, cleanedContent.indexOf(match));
          const hasDevCheck = beforeMatch.includes('process.env.NODE_ENV') && 
                             beforeMatch.includes('development');
          
          if (hasDevCheck) {
            return match; // Zadržati development console.log
          }
          
          // Ukloniti production console.log
          return `// ${method} statement removed by cleanup script`;
        });
      }
      
      // Ukloni prazne linije koje su nastale
      cleanedContent = cleanedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      // Spremi samo ako je sadržaj promijenjen
      if (cleanedContent !== originalContent) {
        writeFileSync(fullPath, cleanedContent, 'utf8');
        this.cleanedFiles++;
        console.log(`✅ Očišćeno: ${filePath}`);
      }
      
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      console.error(`❌ Greška u datoteci ${filePath}:`, error.message);
    }
  }

  /**
   * Prikaži rezultate čišćenja
   */
  showResults(): void {
    console.log(`\n${  '='.repeat(50)}`);
    console.log('📊 REZULTATI ČIŠĆENJA');
    console.log('='.repeat(50));
    console.log(`📁 Ukupno datoteka: ${this.totalFiles}`);
    console.log(`✅ Očišćeno datoteka: ${this.cleanedFiles}`);
    console.log(`❌ Grešaka: ${this.errors.length}`);
    
    if (this.errors.length > 0) {
      console.log('\n🚨 GREŠKE:');
      this.errors.forEach(({ file, error }) => {
        console.log(`  • ${file}: ${error}`);
      });
    }
    
    if (this.cleanedFiles > 0) {
      console.log('\n🎉 Čišćenje završeno uspješno!');
      console.log('💡 Preporučujemo pokretanje ESLint-a za provjeru: npm run lint');
    } else {
      console.log('\n✨ Kod je već čist - nema potrebe za čišćenjem!');
    }
    
    console.log('='.repeat(50));
  }
}

// Pokreni čišćenje
if (import.meta.url === `file://${process.argv[1]}`) {
  const cleaner = new CodeCleaner();
  cleaner.cleanup().catch(console.error);
}

export { CodeCleaner };
