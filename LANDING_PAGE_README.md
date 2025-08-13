# Custom Landing Page - Mrežni udžbenik iz bakteriologije

## Overview
A custom landing page has been created for the Starlight documentation site, providing a modern, responsive introduction to the bacteriology textbook.

## Files Created/Modified

### 1. Landing Page (`src/pages/index.astro`)
- **Location**: `src/pages/index.astro`
- **Purpose**: Custom landing page outside Starlight docs layout
- **Features**:
  - Hero section with microbiology-themed background
  - About section describing the textbook
  - Features section with 3 learning cards
  - Target audience section
  - Footer with contact information

### 2. Landing Styles (`src/styles/landing.css` & `public/styles/landing.css`)
- **Location**: Both `src/styles/landing.css` and `public/styles/landing.css`
- **Purpose**: Custom CSS for the landing page
- **Features**:
  - CSS variables for consistent theming
  - Responsive design (mobile-first)
  - Microbiology-themed animations and patterns
  - WCAG AA compliant color contrast
  - Modern hover effects and transitions

## Design System

### Color Palette
- **Primary**: `#138d75` (Dark green)
- **Primary Dark**: `#0e6655` (Darker green)
- **White**: `#ffffff`
- **Light Gray**: `#f5f5f5`
- **Accent**: `#e0f2f1` (Light teal)
- **Text**: `#333333`
- **Text Light**: `#666666`

### Typography
- **Font Family**: System UI stack (system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif)
- **Responsive**: Uses `clamp()` for fluid typography

### Spacing System
- **Container**: Max-width 1100px (1200px on large screens)
- **Border Radius**: 0.75rem (12px)
- **Shadows**: Subtle box shadows with hover effects

## Navigation

### Primary CTA
- **Button**: "Sadržaj udžbenika"
- **Link**: `/predgovor` (Predgovor page)

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px
- **Large**: > 1200px

### Mobile Optimizations
- Single centered button layout
- Reduced hero height
- Smaller feature icons
- Optimized spacing

## Accessibility Features

### WCAG AA Compliance
- High contrast color ratios
- Proper heading hierarchy
- Screen reader friendly markup
- Keyboard navigation support
- Focus indicators

### Semantic HTML
- Proper section elements
- ARIA labels where needed
- Screen reader only text for icons

## Technical Implementation

### Astro Integration
- Custom page outside Starlight layout
- Static asset handling via public directory
- No additional dependencies required

### Performance
- Inline SVG icons (no external requests)
- CSS-only animations
- Optimized for Core Web Vitals

## Customization

### Easy to Modify
- CSS variables for color changes
- Modular component structure
- Well-commented code
- Consistent naming conventions

### Key Areas for Customization
1. **Colors**: Update CSS variables in `:root`
2. **Content**: Modify text in `src/pages/index.astro`
3. **Links**: Update href attributes for navigation
4. **Icons**: Replace SVG paths in feature cards

## Build Process

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

The landing page will be available at the root URL (`/`) and will not interfere with the Starlight documentation structure.

## File Structure
```
src/
├── pages/
│   └── index.astro          # Custom landing page
├── styles/
│   └── landing.css          # Landing page styles
public/
└── styles/
    └── landing.css          # Static CSS for production
```

## Notes
- The landing page is completely separate from the Starlight documentation
- All links properly integrate with the existing Starlight structure
- The design follows modern web standards and best practices
- No JavaScript dependencies required for core functionality

## Image Management

### Image Fix (Issue Resolution)
- **Problem**: All images were missing from chapters due to accidental deletion
- **Solution**: Restored all 95 images from git history using `git restore public/Images/`
- **Images**: 95 laboratory and microbiology images (slika1.jpg to slika95.jpg)
- **Path**: All images are properly referenced as `/Images/slika*.jpg` in MDX files
- **Status**: ✅ All images now display correctly in all chapters
- **Development Server Issue**: Astro dev server has issues serving static assets
- **Final Solution**: Use `npm run build` then `npx serve dist -p 4321` for development
- **Configuration**: Updated astro.config.mjs with `output: 'static'` and `base: '/'`

## Additional Styling

### Predgovor Page (`src/content/docs/predgovor.mdx`)
- **Custom hero header**: Beautiful gradient background with microbiology-themed patterns
- **Professional styling**: Clean, modern design with proper typography
- **Responsive design**: Mobile-optimized layout with fluid scaling
- **Enhanced content**: Improved readability and visual hierarchy
- **Interactive chapters grid**: Hover effects and smooth transitions
- **Accessibility**: Proper ARIA labels and semantic HTML structure
