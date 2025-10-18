// Image Optimization Utility
// Automatska optimizacija slika za web

export interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  width?: number;
  height?: number;
  blur?: boolean;
}

export class ImageOptimizer {
  private static instance: ImageOptimizer;
  
  private constructor() {}
  
  static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer();
    }
    return ImageOptimizer.instance;
  }

  /**
   * Generira optimizirane URL-ove za slike
   */
  generateOptimizedUrl(
    originalSrc: string, 
    options: ImageOptimizationOptions = {}
  ): string {
    const {
      quality = 85,
      format = 'webp',
      width,
      height,
      blur = false
    } = options;

    // Ako je već optimizirana, vrati original
    if (originalSrc.includes('_optimized') || originalSrc.includes('.webp')) {
      return originalSrc;
    }

    const baseUrl = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    const params = new URLSearchParams();
    
    if (quality !== 85) params.set('q', quality.toString());
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    if (blur) params.set('blur', '1');
    
    const queryString = params.toString();
    const extension = format === 'webp' ? '.webp' : originalSrc.match(/\.(jpg|jpeg|png)$/i)?.[0] || '.jpg';
    
    return `${baseUrl}_optimized${extension}${queryString ? `?${queryString}` : ''}`;
  }

  /**
   * Generira responsive image srcset
   */
  generateSrcSet(
    originalSrc: string,
    sizes: number[] = [320, 640, 768, 1024, 1280, 1920],
    options: ImageOptimizationOptions = {}
  ): string {
    return sizes
      .map(size => {
        const url = this.generateOptimizedUrl(originalSrc, {
          ...options,
          width: size
        });
        return `${url} ${size}w`;
      })
      .join(', ');
  }

  /**
   * Generira sizes atribut za responsive slike
   */
  generateSizes(breakpoints: { [key: string]: string } = {}): string {
    const defaultSizes = {
      '(max-width: 640px)': '100vw',
      '(max-width: 768px)': '100vw',
      '(max-width: 1024px)': '50vw',
      '(max-width: 1280px)': '33vw',
      'default': '25vw'
    };

    const sizes = { ...defaultSizes, ...breakpoints };
    
    return Object.entries(sizes)
      .map(([query, size]) => query === 'default' ? size : `${query} ${size}`)
      .join(', ');
  }

  /**
   * Lazy loading utility
   */
  setupLazyLoading(): void {
    if (typeof window === 'undefined') return;

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const {src} = img.dataset;
            
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );

    // Promatraj sve slike s data-src atributom
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  /**
   * Preload kritične slike
   */
  preloadCriticalImages(imageUrls: string[]): void {
    if (typeof window === 'undefined') return;

    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  }

  /**
   * Generira placeholder za slike
   */
  generatePlaceholder(width: number, height: number, text?: string): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return '';
    
    canvas.width = width;
    canvas.height = height;
    
    // Gradient pozadina
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(1, '#e5e7eb');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Tekst ako je naveden
    if (text) {
      ctx.fillStyle = '#9ca3af';
      ctx.font = '16px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, width / 2, height / 2);
    }
    
    return canvas.toDataURL('image/png');
  }
}

// Export singleton instance
export const imageOptimizer = ImageOptimizer.getInstance();
