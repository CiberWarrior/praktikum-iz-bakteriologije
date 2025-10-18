// Performance Monitoring Utility
// Praćenje performansi e-udžbenika
import { logger } from './logger.js';

export interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  totalBlockingTime: number;
}

export interface UserInteractionMetrics {
  clickEvents: number;
  scrollEvents: number;
  searchQueries: number;
  quizAttempts: number;
  timeOnPage: number;
  bounceRate: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics;
  private interactionMetrics: UserInteractionMetrics;
  private startTime: number;
  
  private constructor() {
    this.metrics = {
      pageLoadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: 0,
      totalBlockingTime: 0
    };
    
    this.interactionMetrics = {
      clickEvents: 0,
      scrollEvents: 0,
      searchQueries: 0,
      quizAttempts: 0,
      timeOnPage: 0,
      bounceRate: 0
    };
    
    this.startTime = performance.now();
  }
  
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Inicijalizira monitoring performansi
   */
  initialize(): void {
    if (typeof window === 'undefined') return;

    try {
      this.measureCoreWebVitals();
      this.trackUserInteractions();
      this.monitorResourceLoading();
      this.trackPageVisibility();
      this.setupPerformanceObserver();
    } catch (error) {
      logger.logError(error as Error, { context: 'performanceMonitor.initialize' });
    }
  }

  /**
   * Mjeri Core Web Vitals
   */
  private measureCoreWebVitals(): void {
    // First Contentful Paint (FCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        this.metrics.firstContentfulPaint = fcpEntry.startTime;
        this.reportMetric('FCP', fcpEntry.startTime);
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        this.metrics.largestContentfulPaint = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
        this.reportMetric('FID', this.metrics.firstInputDelay);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.cumulativeLayoutShift = clsValue;
      this.reportMetric('CLS', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to Interactive (TTI)
    this.measureTimeToInteractive();
  }

  /**
   * Mjeri Time to Interactive
   */
  private measureTimeToInteractive(): void {
    const ttiThreshold = 5000; // 5 seconds
    let tti = 0;
    
    const checkTTI = () => {
      const now = performance.now();
      if (now - this.startTime > ttiThreshold) {
        tti = now - this.startTime;
        this.metrics.timeToInteractive = tti;
        this.reportMetric('TTI', tti);
      } else {
        requestAnimationFrame(checkTTI);
      }
    };
    
    requestAnimationFrame(checkTTI);
  }

  /**
   * Prati korisničke interakcije
   */
  private trackUserInteractions(): void {
    // Click events
    document.addEventListener('click', (e) => {
      this.interactionMetrics.clickEvents++;
      this.trackClickEvent(e);
    });

    // Scroll events (throttled)
    let scrollTimeout: ReturnType<typeof setTimeout>;
    document.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.interactionMetrics.scrollEvents++;
        this.trackScrollEvent();
      }, 100);
    });

    // Search queries
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="pretraga"]');
    searchInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        if ((e.target as HTMLInputElement).value.length > 2) {
          this.interactionMetrics.searchQueries++;
          this.trackSearchQuery((e.target as HTMLInputElement).value);
        }
      });
    });

    // Quiz attempts
    const quizForms = document.querySelectorAll('form[id*="quiz"], form[class*="quiz"]');
    quizForms.forEach(form => {
      form.addEventListener('submit', () => {
        this.interactionMetrics.quizAttempts++;
        this.trackQuizAttempt();
      });
    });

    // Time on page
    this.trackTimeOnPage();
  }

  /**
   * Prati vrijeme provedeno na stranici
   */
  private trackTimeOnPage(): void {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - startTime;
      this.interactionMetrics.timeOnPage = timeOnPage;
      this.reportMetric('TimeOnPage', timeOnPage);
    });

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        const timeOnPage = Date.now() - startTime;
        this.interactionMetrics.timeOnPage = timeOnPage;
      }
    });
  }

  /**
   * Prati učitavanje resursa
   */
  private monitorResourceLoading(): void {
    const resources = performance.getEntriesByType('resource');
    
    resources.forEach(resource => {
      const loadTime = resource.responseEnd - resource.startTime;
      
      // Track slow resources
      if (loadTime > 1000) { // 1 second
        this.reportSlowResource(resource.name, loadTime);
      }
    });

    // Monitor new resources
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        const loadTime = entry.responseEnd - entry.startTime;
        if (loadTime > 1000) {
          this.reportSlowResource(entry.name, loadTime);
        }
      });
    }).observe({ entryTypes: ['resource'] });
  }

  /**
   * Prati promjene vidljivosti stranice
   */
  private trackPageVisibility(): void {
    let isVisible = true;
    let hiddenTime = 0;
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isVisible = false;
        hiddenTime = Date.now();
      } else if (!isVisible) {
        isVisible = true;
        const timeHidden = Date.now() - hiddenTime;
        this.reportMetric('TimeHidden', timeHidden);
      }
    });
  }

  /**
   * Postavlja Performance Observer
   */
  private setupPerformanceObserver(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          this.analyzePerformanceEntry(entry);
        });
      });
      
      observer.observe({ entryTypes: ['navigation', 'resource', 'paint', 'measure'] });
    }
  }

  /**
   * Analizira performance entry
   */
  private analyzePerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'navigation':
        this.analyzeNavigationTiming(entry as PerformanceNavigationTiming);
        break;
      case 'resource':
        this.analyzeResourceTiming(entry as PerformanceResourceTiming);
        break;
      case 'paint':
        this.analyzePaintTiming(entry as PerformancePaintTiming);
        break;
      case 'measure':
        this.analyzeCustomMeasure(entry as PerformanceMeasure);
        break;
    }
  }

  /**
   * Analizira navigation timing
   */
  private analyzeNavigationTiming(entry: PerformanceNavigationTiming): void {
    this.metrics.pageLoadTime = entry.loadEventEnd - entry.navigationStart;
    this.reportMetric('PageLoadTime', this.metrics.pageLoadTime);
    
    // DNS lookup time
    const dnsTime = entry.domainLookupEnd - entry.domainLookupStart;
    this.reportMetric('DNSTime', dnsTime);
    
    // Connection time
    const connectionTime = entry.connectEnd - entry.connectStart;
    this.reportMetric('ConnectionTime', connectionTime);
    
    // DOM processing time
    const domProcessingTime = entry.domComplete - entry.domLoading;
    this.reportMetric('DOMProcessingTime', domProcessingTime);
  }

  /**
   * Analizira resource timing
   */
  private analyzeResourceTiming(entry: PerformanceResourceTiming): void {
    const loadTime = entry.responseEnd - entry.startTime;
    
    // Categorize resources
    if (entry.name.includes('.css')) {
      this.reportMetric('CSSLoadTime', loadTime);
    } else if (entry.name.includes('.js')) {
      this.reportMetric('JSLoadTime', loadTime);
    } else if (entry.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
      this.reportMetric('ImageLoadTime', loadTime);
    }
  }

  /**
   * Analizira paint timing
   */
  private analyzePaintTiming(entry: PerformancePaintTiming): void {
    if (entry.name === 'first-contentful-paint') {
      this.metrics.firstContentfulPaint = entry.startTime;
      this.reportMetric('FCP', entry.startTime);
    }
  }

  /**
   * Analizira custom measure
   */
  private analyzeCustomMeasure(entry: PerformanceMeasure): void {
    // Handle custom performance measures
    this.reportMetric(entry.name, entry.duration);
  }

  /**
   * Prati click event
   */
  private trackClickEvent(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const elementType = target.tagName.toLowerCase();
    const elementClass = target.className;
    
    this.reportEvent('Click', {
      elementType,
      elementClass,
      x: event.clientX,
      y: event.clientY
    });
  }

  /**
   * Prati scroll event
   */
  private trackScrollEvent(): void {
    const {scrollY} = window;
    const scrollPercent = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    this.reportEvent('Scroll', {
      scrollY,
      scrollPercent: Math.round(scrollPercent)
    });
  }

  /**
   * Prati search query
   */
  private trackSearchQuery(query: string): void {
    this.reportEvent('Search', {
      query: query.substring(0, 50), // Limit query length
      queryLength: query.length
    });
  }

  /**
   * Prati quiz attempt
   */
  private trackQuizAttempt(): void {
    this.reportEvent('QuizAttempt', {
      timestamp: Date.now()
    });
  }

  /**
   * Prijavljuje spor resurs
   */
  private reportSlowResource(resourceName: string, loadTime: number): void {
    this.reportEvent('SlowResource', {
      resourceName,
      loadTime
    });
  }

  /**
   * Prijavljuje metrik
   */
  private reportMetric(name: string, value: number): void {
    // Use proper logger instead of console.log
    logger.performance(name, value, {
      page_url: typeof window !== 'undefined' ? window.location.href : undefined
    });
  }

  /**
   * Prijavljuje event
   */
  private reportEvent(eventName: string, parameters: Record<string, unknown>): void {
    try {
      // Use proper logger instead of console.log
      logger.event(eventName, parameters);
    } catch (error) {
      logger.logError(error as Error, { context: 'performanceMonitor.reportEvent' });
    }
  }

  /**
   * Dohvaća trenutne metrike
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Dohvaća metrike interakcije
   */
  getInteractionMetrics(): UserInteractionMetrics {
    return { ...this.interactionMetrics };
  }

  /**
   * Generira performance report
   */
  generateReport(): string {
    const metrics = this.getMetrics();
    const interactions = this.getInteractionMetrics();
    
    return `
Performance Report:
==================
Page Load Time: ${metrics.pageLoadTime.toFixed(2)}ms
First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms
Largest Contentful Paint: ${metrics.largestContentfulPaint.toFixed(2)}ms
First Input Delay: ${metrics.firstInputDelay.toFixed(2)}ms
Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.toFixed(4)}
Time to Interactive: ${metrics.timeToInteractive.toFixed(2)}ms

User Interactions:
==================
Click Events: ${interactions.clickEvents}
Scroll Events: ${interactions.scrollEvents}
Search Queries: ${interactions.searchQueries}
Quiz Attempts: ${interactions.quizAttempts}
Time on Page: ${interactions.timeOnPage}ms
    `.trim();
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();
