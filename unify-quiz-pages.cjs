#!/usr/bin/env node

/**
 * Script za ujednačavanje postojećih kviz stranica koristeći QuizTemplate
 * Zadržava postojeće boje i sadržaj, samo mijenja strukturu
 */

const fs = require('fs');
const path = require('path');

// Mapa postojećih boja za svako poglavlje (iz postojećih stranica)
const existingColors = {
  1: 'green',
  2: 'blue', 
  3: 'green',
  4: 'purple',
  5: 'red',
  6: 'orange',
  7: 'blue',
  8: 'green',
  9: 'indigo',
  10: 'teal',
  11: 'lime',
  12: 'amber',
  13: 'rose',
  14: 'cyan',
  15: 'sky',
  16: 'slate',
  17: 'stone',
  18: 'stone',
  19: 'stone',
  20: 'stone',
  21: 'amber',
  22: 'lime',
  23: 'rose'
};

// Template za ujednačenu kviz stranicu
function createUnifiedQuizTemplate(chapterNumber, existingContent) {
  const primaryColor = existingColors[chapterNumber] || 'blue';
  const nextChapter = chapterNumber + 1;
  
  // Ekstraktiraj postojeće podatke
  const titleMatch = existingContent.match(/title\s*=\s*['"`]([^'"`]+)['"`]/);
  const descriptionMatch = existingContent.match(/description\s*=\s*['"`]([^'"`]+)['"`]/);
  const prevLinkMatch = existingContent.match(/prevLink\s*=\s*['"`]([^'"`]+)['"`]/);
  const nextLinkMatch = existingContent.match(/nextLink\s*=\s*['"`]([^'"`]+)['"`]/);
  const prevTextMatch = existingContent.match(/prevText\s*=\s*['"`]([^'"`]+)['"`]/);
  const nextTextMatch = existingContent.match(/nextText\s*=\s*['"`]([^'"`]+)['"`]/);
  const ctaTitleMatch = existingContent.match(/ctaTitle\s*=\s*['"`]([^'"`]+)['"`]/);
  const ctaDescriptionMatch = existingContent.match(/ctaDescription\s*=\s*['"`]([^'"`]+)['"`]/);
  const ctaPrimaryTextMatch = existingContent.match(/ctaPrimaryText\s*=\s*['"`]([^'"`]+)['"`]/);
  const ctaPrimaryLinkMatch = existingContent.match(/ctaPrimaryLink\s*=\s*['"`]([^'"`]+)['"`]/);
  const ctaSecondaryTextMatch = existingContent.match(/ctaSecondaryText\s*=\s*['"`]([^'"`]+)['"`]/);
  const ctaSecondaryLinkMatch = existingContent.match(/ctaSecondaryLink\s*=\s*['"`]([^'"`]+)['"`]/);

  // Ekstraktiraj breadcrumb putanju
  const breadcrumbMatch = existingContent.match(/breadcrumbPath\s*=\s*\[([\s\S]*?)\]/);
  let breadcrumbPath = `[
    { name: 'Sadržaj', url: '/sadrzaj/' },
    { name: 'Poglavlje ${chapterNumber}', url: '/poglavlje-${chapterNumber}/' },
    { name: 'Quiz ${chapterNumber}', url: '/poglavlje-${chapterNumber}/quiz-${chapterNumber}/' }
  ]`;
  
  if (breadcrumbMatch) {
    breadcrumbPath = breadcrumbMatch[0];
  }

  // Ekstraktiraj pitanja iz postojeće stranice
  const questions = extractQuestions(existingContent);

  return `---
import QuizTemplate from '../../components/QuizTemplate.astro';

const questions = ${JSON.stringify(questions, null, 2)};

const breadcrumbPath = ${breadcrumbPath};
---

<QuizTemplate
  chapterNumber={${chapterNumber}}
  chapterTitle="${titleMatch ? titleMatch[1] : `Quiz - Poglavlje ${chapterNumber}`}"
  chapterDescription="${descriptionMatch ? descriptionMatch[1] : `Provjeri svoje znanje iz poglavlja ${chapterNumber}`}"
  primaryColor="${primaryColor}"
  questions={questions}
  prevLink="${prevLinkMatch ? prevLinkMatch[1] : `/poglavlje-${chapterNumber}/`}"
  nextLink="${nextLinkMatch ? nextLinkMatch[1] : `/poglavlje-${nextChapter}/`}"
  prevText="${prevTextMatch ? prevTextMatch[1] : `← Povratak na Poglavlje ${chapterNumber}`}"
  nextText="${nextTextMatch ? nextTextMatch[1] : `Poglavlje ${nextChapter} →`}"
  ctaTitle="${ctaTitleMatch ? ctaTitleMatch[1] : 'Nastavi na sljedeće poglavlje'}"
  ctaDescription="${ctaDescriptionMatch ? ctaDescriptionMatch[1] : 'Nastavite s učenjem.'}"
  ctaPrimaryText="${ctaPrimaryTextMatch ? ctaPrimaryTextMatch[1] : `Poglavlje ${nextChapter}`}"
  ctaPrimaryLink="${ctaPrimaryLinkMatch ? ctaPrimaryLinkMatch[1] : `/poglavlje-${nextChapter}/`}"
  ctaSecondaryText="${ctaSecondaryTextMatch ? ctaSecondaryTextMatch[1] : 'Povratak na sadržaj'}"
  ctaSecondaryLink="${ctaSecondaryLinkMatch ? ctaSecondaryLinkMatch[1] : '/sadrzaj/'}"
  breadcrumbPath={breadcrumbPath}
/>`;
}

// Funkcija za ekstraktiranje pitanja iz postojeće stranice
function extractQuestions(content) {
  const questions = [];
  
  // Pronađi sva pitanja
  const questionMatches = content.match(/<h3[^>]*>(\d+)\.\s*([^<]+)<\/h3>/g);
  
  if (questionMatches) {
    questionMatches.forEach((match, index) => {
      const questionText = match.replace(/<h3[^>]*>\d+\.\s*/, '').replace(/<\/h3>/, '').trim();
      
      // Pronađi opcije za ovo pitanje
      const questionSection = content.split(match)[1];
      const nextQuestionMatch = questionSection.match(/<h3[^>]*>(\d+)\.\s*([^<]+)<\/h3>/);
      const sectionEnd = nextQuestionMatch ? questionSection.indexOf(nextQuestionMatch[0]) : questionSection.length;
      const questionContent = questionSection.substring(0, sectionEnd);
      
      // Ekstraktiraj opcije
      const optionMatches = questionContent.match(/<span[^>]*>[a-d]\)\s*([^<]+)<\/span>/g);
      const options = { a: '', b: '', c: '', d: '' };
      
      if (optionMatches) {
        optionMatches.forEach(optionMatch => {
          const optionText = optionMatch.replace(/<span[^>]*>[a-d]\)\s*/, '').replace(/<\/span>/, '').trim();
          const optionLetter = optionMatch.match(/[a-d]\)/)[0].replace(')', '');
          options[optionLetter] = optionText;
        });
      }
      
      // Pronađi točan odgovor iz JavaScript koda
      const correctAnswerMatch = content.match(/q${index + 1}:\s*['"`]([a-d])['"`]/);
      const correctAnswer = correctAnswerMatch ? correctAnswerMatch[1] : 'a';
      
      questions.push({
        question: questionText,
        options: options,
        correctAnswer: correctAnswer
      });
    });
  }
  
  return questions;
}

// Glavna funkcija
function main() {
  console.log('🔄 Ujednačavanje postojećih kviz stranica...\n');
  
  const chapters = Array.from({ length: 23 }, (_, i) => i + 1);
  let processedCount = 0;
  
  chapters.forEach(chapterNumber => {
    const filePath = path.join(__dirname, 'src', 'pages', `poglavlje-${chapterNumber}`, `quiz-${chapterNumber}.astro`);
    
    if (fs.existsSync(filePath)) {
      console.log(`📋 Obrađujem poglavlje ${chapterNumber}...`);
      
      try {
        const existingContent = fs.readFileSync(filePath, 'utf8');
        const unifiedContent = createUnifiedQuizTemplate(chapterNumber, existingContent);
        
        // Kreiraj backup
        const backupPath = filePath.replace('.astro', '-backup.astro');
        fs.writeFileSync(backupPath, existingContent);
        
        // Zapiši novu verziju
        fs.writeFileSync(filePath, unifiedContent);
        
        console.log(`   ✅ Ujednačeno (boja: ${existingColors[chapterNumber]})`);
        console.log(`   💾 Backup kreiran: ${path.basename(backupPath)}`);
        processedCount++;
        
      } catch (error) {
        console.log(`   ❌ Greška: ${error.message}`);
      }
    } else {
      console.log(`   ⚠️  Kviz stranica ne postoji: poglavlje-${chapterNumber}/quiz-${chapterNumber}.astro`);
    }
  });
  
  console.log(`\n🎉 Ujednačavanje završeno!`);
  console.log(`📊 Obrađeno: ${processedCount} stranica`);
  console.log(`\n📋 Sljedeći koraci:`);
  console.log(`1. Testirajte ujednačene stranice`);
  console.log(`2. Ako je sve u redu, obrišite backup fajlove`);
  console.log(`3. Ako ima problema, vratite iz backup-a`);
}

// Pokreni skriptu
if (require.main === module) {
  main();
}

module.exports = {
  createUnifiedQuizTemplate,
  extractQuestions,
  existingColors
};
