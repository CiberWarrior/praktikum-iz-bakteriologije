/**
 * Google Analytics 4 Configuration
 * 
 * Zamijenite 'GA_MEASUREMENT_ID' s vašim stvarnim Measurement ID-om
 * koji dobijete nakon kreiranja Google Analytics svojstva.
 * 
 * Format: G-XXXXXXXXXX
 */

export const GA_MEASUREMENT_ID = 'G-W56ZY2SD2F'; // Vaš Google Analytics Measurement ID - ažurirajte ako se promijeni

/**
 * Google Analytics 4 Event Tracking
 * 
 * Ove funkcije omogućavaju praćenje specifičnih događaja
 * vezanih za edukativni sadržaj.
 */

// Praćenje otvaranja poglavlja
export function trackChapterView(chapterNumber: number, chapterTitle: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'chapter_view', {
      chapter_number: chapterNumber,
      chapter_title: chapterTitle,
      page_title: `Poglavlje ${chapterNumber}: ${chapterTitle}`,
      page_location: window.location.href
    });
  }
}

// Praćenje pokretanja kviza
export function trackQuizStart(chapterNumber: number, quizType: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_start', {
      chapter_number: chapterNumber,
      quiz_type: quizType,
      page_title: `Kviz - Poglavlje ${chapterNumber}`,
      page_location: window.location.href
    });
  }
}

// Praćenje završetka kviza
export function trackQuizComplete(chapterNumber: number, score: number, totalQuestions: number, timeSpent: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    window.gtag('event', 'quiz_complete', {
      chapter_number: chapterNumber,
      score,
      total_questions: totalQuestions,
      percentage,
      time_spent: timeSpent,
      page_title: `Kviz završen - Poglavlje ${chapterNumber}`,
      page_location: window.location.href
    });
  }
}

// Praćenje pretrage
export function trackSearch(searchTerm: string, resultsCount: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      results_count: resultsCount,
      page_title: 'Pretraga',
      page_location: window.location.href
    });
  }
}

// Praćenje preuzimanja PDF-a
export function trackPDFDownload(chapterNumber: number, fileName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: fileName,
      file_type: 'pdf',
      chapter_number: chapterNumber,
      page_title: `PDF preuzet - Poglavlje ${chapterNumber}`,
      page_location: window.location.href
    });
  }
}

// Praćenje vremena provedenog na stranici
export function trackTimeOnPage(pageTitle: string, timeSpent: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'time_on_page', {
      page_title: pageTitle,
      time_spent: timeSpent,
      page_location: window.location.href
    });
  }
}

// TypeScript tipovi za gtag
declare global {
  interface Window {
    gtag: (command: 'config' | 'event', ...args: unknown[]) => void;
  }
}
