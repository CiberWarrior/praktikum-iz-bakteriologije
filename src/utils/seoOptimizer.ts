// SEO Optimization Utility
// Napredne SEO funkcionalnosti za e-udžbenik

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export interface ChapterSEOData extends SEOData {
  chapterNumber: number;
  chapterTitle: string;
  topics: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadTime: number;
  lastModified: string;
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  
  private constructor() {}
  
  static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  /**
   * Generira optimizirani title tag
   */
  generateTitle(title: string, siteName: string = 'Mrežni udžbenik iz bakteriologije'): string {
    const maxLength = 60;
    const separator = ' | ';
    
    if (title.length + separator.length + siteName.length <= maxLength) {
      return `${title}${separator}${siteName}`;
    }
    
    const availableLength = maxLength - separator.length - siteName.length;
    const truncatedTitle = title.substring(0, availableLength - 3) + '...';
    
    return `${truncatedTitle}${separator}${siteName}`;
  }

  /**
   * Generira optimizirani meta description
   */
  generateDescription(content: string, maxLength: number = 160): string {
    if (content.length <= maxLength) {
      return content;
    }
    
    // Pokušaj pronaći prirodnu točku za prekid
    const truncated = content.substring(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    
    if (lastSpace > maxLength * 0.8) {
      return content.substring(0, lastSpace) + '...';
    }
    
    return truncated + '...';
  }

  /**
   * Generira structured data za poglavlje
   */
  generateChapterStructuredData(data: ChapterSEOData): any {
    return {
      "@context": "https://schema.org",
      "@type": "Chapter",
      "name": data.title,
      "description": data.description,
      "url": data.canonical,
      "isPartOf": {
        "@type": "Book",
        "name": "Mrežni udžbenik iz bakteriologije",
        "url": "https://ciberwarrior.github.io"
      },
      "position": data.chapterNumber,
      "keywords": data.keywords?.join(', '),
      "educationalLevel": "Higher Education",
      "learningResourceType": "Textbook Chapter",
      "timeRequired": `PT${data.estimatedReadTime}M`,
      "dateModified": data.lastModified,
      "author": {
        "@type": "Organization",
        "name": "Tim za mrežni udžbenik iz bakteriologije"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Tim za mrežni udžbenik iz bakteriologije"
      },
      "inLanguage": "hr",
      "about": data.topics.map(topic => ({
        "@type": "Thing",
        "name": topic
      }))
    };
  }

  /**
   * Generira structured data za vježbu
   */
  generateExerciseStructuredData(data: SEOData & { exerciseType: string; duration: number }): any {
    return {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": data.title,
      "description": data.description,
      "url": data.canonical,
      "learningResourceType": "Exercise",
      "educationalLevel": "Higher Education",
      "timeRequired": `PT${data.duration}M`,
      "keywords": data.keywords?.join(', '),
      "author": {
        "@type": "Organization",
        "name": "Tim za mrežni udžbenik iz bakteriologije"
      },
      "inLanguage": "hr"
    };
  }

  /**
   * Generira breadcrumb structured data
   */
  generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>): any {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  }

  /**
   * Generira FAQ structured data
   */
  generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): any {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  /**
   * Generira sitemap podatke
   */
  generateSitemapData(pages: Array<{ url: string; lastmod: string; changefreq: string; priority: number }>): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  /**
   * Generira robots.txt sadržaj
   */
  generateRobotsTxt(siteUrl: string, allowIndexing: boolean = true): string {
    const content = allowIndexing ? 'Allow' : 'Disallow';
    
    return `User-agent: *
${content}: /

Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay za poštovanje servera
Crawl-delay: 1

# Blokiraj nepotrebne direktorije
Disallow: /admin/
Disallow: /api/
Disallow: /_astro/
Disallow: /node_modules/`;
  }

  /**
   * Analizira SEO metrike stranice
   */
  analyzePageSEO(): {
    title: { length: number; optimal: boolean };
    description: { length: number; optimal: boolean };
    headings: { h1: number; h2: number; h3: number };
    images: { total: number; withAlt: number; withoutAlt: number };
    links: { total: number; internal: number; external: number };
  } {
    if (typeof window === 'undefined') {
      return {
        title: { length: 0, optimal: false },
        description: { length: 0, optimal: false },
        headings: { h1: 0, h2: 0, h3: 0 },
        images: { total: 0, withAlt: 0, withoutAlt: 0 },
        links: { total: 0, internal: 0, external: 0 }
      };
    }

    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    
    const headings = {
      h1: document.querySelectorAll('h1').length,
      h2: document.querySelectorAll('h2').length,
      h3: document.querySelectorAll('h3').length
    };

    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]:not([alt=""])');
    
    const links = document.querySelectorAll('a[href]');
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="ciberwarrior.github.io"]');
    const externalLinks = links.length - internalLinks.length;

    return {
      title: {
        length: title.length,
        optimal: title.length >= 30 && title.length <= 60
      },
      description: {
        length: description.length,
        optimal: description.length >= 120 && description.length <= 160
      },
      headings,
      images: {
        total: images.length,
        withAlt: imagesWithAlt.length,
        withoutAlt: images.length - imagesWithAlt.length
      },
      links: {
        total: links.length,
        internal: internalLinks.length,
        external: externalLinks
      }
    };
  }
}

// Export singleton instance
export const seoOptimizer = SEOOptimizer.getInstance();
