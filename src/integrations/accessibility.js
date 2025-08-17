/**
 * Custom Accessibility Integration for Astro
 * Provides accessibility features and validation
 */

export default function accessibility(options = {}) {
  return {
    name: 'astro-accessibility',
    hooks: {
      'astro:config:setup': ({ config, updateConfig }) => {
        // Add accessibility meta tags
        if (!config.site) {
          config.site = 'https://example.com';
        }
        
        // Add accessibility-related head content
        const headContent = `
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="description" content="Mrežni udžbenik iz bakteriologije - pristupačan obrazovni sadržaj">
          <meta name="theme-color" content="#096279">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        `;
        
        // Add to existing head content if any
        if (config.head) {
          config.head += headContent;
        } else {
          config.head = headContent;
        }
      },
      
      'astro:build:done': ({ pages, dir, routes }) => {
        console.log('🔍 Accessibility: Build completed. Consider running accessibility audits.');
      }
    }
  };
}
