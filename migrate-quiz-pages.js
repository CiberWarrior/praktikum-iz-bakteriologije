#!/usr/bin/env node

/**
 * Script za migraciju postojećih kviz stranica na novi QuizTemplate
 * 
 * Ovaj script pomaže u migraciji postojećih kviz stranica na novi predložak.
 * 
 * Korištenje:
 * node migrate-quiz-pages.js
 */

const fs = require('fs');
const path = require('path');

// Mapa boja za različita poglavlja
const colorMapping = {
  1: 'green',   // Sigurnost i osnove
  2: 'green',   // Sterilizacija i dezinfekcija
  3: 'green',   // Hranjivi mediji
  4: 'blue',    // Osnovne tehnike
  5: 'blue',    // Mikroskopiranje
  6: 'blue',    // Bojenje bakterija
  7: 'blue',    // Direktne metode brojanja
  8: 'blue',    // Indirektne metode brojanja
  9: 'blue',    // Identifikacija bakterija
  10: 'blue',   // Kultivacija
  11: 'lime',   // Specijalizirane tehnike
  12: 'lime',   // Napredne metode
  13: 'lime',   // Molekularne tehnike
  14: 'lime',   // Genetske metode
  15: 'lime',   // Biokemijske testovi
  16: 'amber',  // Napredne analize
  17: 'amber',  // Specijalizirane analize
  18: 'amber',  // Kompleksne tehnike
  19: 'amber',  // Napredne identifikacije
  20: 'amber',  // Biogeokemijski ciklusi
  21: 'amber',  // Metoda otiska
  22: 'lime',   // Streptomiceti
  23: 'lime'    // Završna poglavlja
};

// Template za novu kviz stranicu
const quizTemplate = `---
import QuizTemplate from '../../components/QuizTemplate.astro';

const questions = [
  // TODO: Kopirajte pitanja iz postojeće stranice
  // {
  //   question: "Vaše pitanje ovdje?",
  //   options: {
  //     a: "Opcija A",
  //     b: "Opcija B", 
  //     c: "Opcija C",
  //     d: "Opcija D"
  //   },
  //   correctAnswer: "b" as const
  // },
];

const breadcrumbPath = [
  { name: 'Sadržaj', url: '/sadrzaj/' },
  { name: 'Poglavlje {CHAPTER_NUMBER}', url: '/poglavlje-{CHAPTER_NUMBER}/' },
  { name: 'Quiz {CHAPTER_NUMBER}', url: '/poglavlje-{CHAPTER_NUMBER}/quiz-{CHAPTER_NUMBER}/' }
];
---

<QuizTemplate
  chapterNumber={{CHAPTER_NUMBER}}
  chapterTitle="{CHAPTER_TITLE}"
  chapterDescription="{CHAPTER_DESCRIPTION}"
  primaryColor="{PRIMARY_COLOR}"
  questions={questions}
  prevLink="/poglavlje-{CHAPTER_NUMBER}/"
  nextLink="/poglavlje-{NEXT_CHAPTER}/"
  prevText="← Povratak na Poglavlje {CHAPTER_NUMBER}"
  nextText="Poglavlje {NEXT_CHAPTER} →"
  ctaTitle="Nastavi na sljedeće poglavlje"
  ctaDescription="Nastavite s učenjem."
  ctaPrimaryText="Poglavlje {NEXT_CHAPTER}"
  ctaPrimaryLink="/poglavlje-{NEXT_CHAPTER}/"
  ctaSecondaryText="Povratak na sadržaj"
  ctaSecondaryLink="/sadrzaj/"
  breadcrumbPath={breadcrumbPath}
/>`;

// Funkcija za kreiranje nove kviz stranice
function createNewQuizPage(chapterNumber) {
  const nextChapter = chapterNumber + 1;
  const primaryColor = colorMapping[chapterNumber] || 'blue';
  
  const template = quizTemplate
    .replace(/{CHAPTER_NUMBER}/g, chapterNumber)
    .replace(/{NEXT_CHAPTER}/g, nextChapter)
    .replace(/{PRIMARY_COLOR}/g, primaryColor)
    .replace(/{CHAPTER_TITLE}/g, `TODO: Dodajte naslov poglavlja ${chapterNumber}`)
    .replace(/{CHAPTER_DESCRIPTION}/g, `TODO: Dodajte opis poglavlja ${chapterNumber}`);
  
  const filePath = path.join(__dirname, 'src', 'pages', `poglavlje-${chapterNumber}`, `quiz-${chapterNumber}-migrated.astro`);
  
  // Kreiraj direktorij ako ne postoji
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, template);
  console.log(`✅ Kreirana nova kviz stranica: ${filePath}`);
}

// Funkcija za analizu postojeće kviz stranice
function analyzeExistingQuiz(chapterNumber) {
  const filePath = path.join(__dirname, 'src', 'pages', `poglavlje-${chapterNumber}`, `quiz-${chapterNumber}.astro`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Kviz stranica ne postoji: ${filePath}`);
    return null;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Ekstraktiraj pitanja iz postojeće stranice
  const questionMatches = content.match(/<h3[^>]*>(\d+)\.\s*([^<]+)<\/h3>/g);
  const questions = [];
  
  if (questionMatches) {
    questionMatches.forEach((match, index) => {
      const questionText = match.replace(/<h3[^>]*>\d+\.\s*/, '').replace(/<\/h3>/, '');
      questions.push({
        number: index + 1,
        text: questionText.trim()
      });
    });
  }
  
  // Ekstraktiraj opcije odgovora
  const optionMatches = content.match(/<span[^>]*>[a-d]\)\s*([^<]+)<\/span>/g);
  const options = [];
  
  if (optionMatches) {
    optionMatches.forEach(match => {
      const optionText = match.replace(/<span[^>]*>[a-d]\)\s*/, '').replace(/<\/span>/, '');
      options.push(optionText.trim());
    });
  }
  
  return {
    filePath,
    questions,
    options,
    content
  };
}

// Glavna funkcija
function main() {
  console.log('🚀 Početak migracije kviz stranica...\n');
  
  const chapters = Array.from({ length: 23 }, (_, i) => i + 1);
  
  chapters.forEach(chapterNumber => {
    console.log(`\n📋 Analiziranje poglavlja ${chapterNumber}...`);
    
    const analysis = analyzeExistingQuiz(chapterNumber);
    if (analysis) {
      console.log(`   ✅ Pronađena postojeća stranica`);
      console.log(`   📝 Broj pitanja: ${analysis.questions.length}`);
      console.log(`   🎨 Preporučena boja: ${colorMapping[chapterNumber]}`);
      
      // Kreiraj novu stranicu
      createNewQuizPage(chapterNumber);
    } else {
      console.log(`   ❌ Kviz stranica ne postoji`);
    }
  });
  
  console.log('\n🎉 Migracija završena!');
  console.log('\n📋 Sljedeći koraci:');
  console.log('1. Otvorite nove kviz stranice (quiz-{N}-migrated.astro)');
  console.log('2. Kopirajte pitanja iz postojećih stranica');
  console.log('3. Dodajte naslove i opise poglavlja');
  console.log('4. Testirajte nove stranice');
  console.log('5. Zamijenite stare stranice novima');
  console.log('6. Obrišite stare stranice');
}

// Pokreni skriptu
if (require.main === module) {
  main();
}

module.exports = {
  createNewQuizPage,
  analyzeExistingQuiz,
  colorMapping
};
