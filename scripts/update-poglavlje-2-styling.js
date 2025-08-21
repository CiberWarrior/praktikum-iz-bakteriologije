const fs = require('fs');
const path = require('path');

// Enhanced styling template
const enhancedStyling = `  <!-- Enhanced content wrapper with improved styling -->
  <div class="enhanced-content">
    <!-- Hero section for the main heading -->
    <div class="hero-section">
      <div class="hero-content">
        <Content />
      </div>
    </div>
  </div>
</EnhancedSubPageLayout>

<style>
  /* Enhanced content wrapper */
  .enhanced-content {
    @apply max-w-none;
  }

  /* Hero section styling */
  .hero-section {
    @apply relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 mb-8;
    background-image: 
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
  }

  .hero-content {
    @apply relative z-10;
  }

  /* Enhanced prose styles with modern typography */
  .enhanced-content :global(.prose) {
    @apply max-w-none;
  }

  .enhanced-content :global(.prose h1) {
    @apply text-4xl md:text-5xl font-bold text-gray-900 mb-8 mt-0 leading-tight;
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .enhanced-content :global(.prose h2) {
    @apply text-2xl md:text-3xl font-semibold text-gray-800 mb-6 mt-8 leading-tight;
    position: relative;
    padding-left: 1rem;
  }

  .enhanced-content :global(.prose h2::before) {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 4px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
  }

  .enhanced-content :global(.prose h3) {
    @apply text-xl md:text-2xl font-semibold text-gray-700 mb-4 mt-6 leading-tight;
    position: relative;
  }

  .enhanced-content :global(.prose h4) {
    @apply text-lg md:text-xl font-medium text-gray-700 mb-3 mt-5 leading-tight;
  }

  .enhanced-content :global(.prose p) {
    @apply text-lg leading-relaxed text-gray-700 mb-6;
    font-weight: 400;
  }

  /* Enhanced list styling */
  .enhanced-content :global(.prose ul) {
    @apply list-none pl-0 mb-6;
  }

  .enhanced-content :global(.prose ol) {
    @apply list-decimal pl-6 mb-6;
  }

  .enhanced-content :global(.prose li) {
    @apply mb-3 text-gray-700 leading-relaxed;
    position: relative;
  }

  .enhanced-content :global(.prose ul li::before) {
    content: '▸';
    @apply text-blue-600 font-bold mr-3;
    position: absolute;
    left: -1.5rem;
  }

  /* Enhanced blockquote styling */
  .enhanced-content :global(.prose blockquote) {
    @apply border-l-4 border-blue-500 pl-6 py-4 my-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-r-xl;
    position: relative;
  }

  .enhanced-content :global(.prose blockquote::before) {
    content: '"';
    @apply text-6xl text-blue-300 font-serif absolute -top-4 -left-2;
  }

  /* Enhanced code styling */
  .enhanced-content :global(.prose code) {
    @apply bg-gray-100 px-3 py-1 rounded-lg text-sm font-mono text-gray-800;
    border: 1px solid #e5e7eb;
  }

  .enhanced-content :global(.prose pre) {
    @apply bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-8;
    border: 1px solid #374151;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }

  /* Enhanced table styling */
  .enhanced-content :global(.prose table) {
    @apply w-full border-collapse my-8 rounded-xl overflow-hidden shadow-lg;
  }

  .enhanced-content :global(.prose th) {
    @apply border border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100 p-4 text-left font-semibold text-gray-700;
  }

  .enhanced-content :global(.prose td) {
    @apply border border-gray-300 p-4 text-gray-700;
  }

  .enhanced-content :global(.prose tr:nth-child(even)) {
    @apply bg-gray-50;
  }

  /* Enhanced link styling */
  .enhanced-content :global(.prose a) {
    @apply text-blue-600 no-underline font-medium;
    position: relative;
    transition: all 0.3s ease;
  }

  .enhanced-content :global(.prose a::after) {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    transition: width 0.3s ease;
  }

  .enhanced-content :global(.prose a:hover::after) {
    width: 100%;
  }

  .enhanced-content :global(.prose a:hover) {
    @apply text-blue-700;
  }

  /* Enhanced image styling */
  .enhanced-content :global(.prose img) {
    @apply rounded-2xl shadow-2xl my-8 mx-auto;
    transition: all 0.3s ease;
    border: 4px solid white;
  }

  .enhanced-content :global(.prose img:hover) {
    transform: scale(1.02) translateY(-4px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  /* Enhanced horizontal rule */
  .enhanced-content :global(.prose hr) {
    @apply border-0 my-12;
    height: 2px;
    background: linear-gradient(135deg, #e5e7eb 0%, #3b82f6 50%, #e5e7eb 100%);
    border-radius: 1px;
  }

  /* Custom styling for the gradient boxes in the content */
  .enhanced-content :global([style*="background: linear-gradient"]) {
    @apply rounded-2xl shadow-xl border border-gray-200;
    backdrop-filter: blur(10px);
  }

  /* Enhanced responsive design */
  @media (max-width: 768px) {
    .hero-section {
      @apply p-6;
    }

    .enhanced-content :global(.prose h1) {
      @apply text-3xl;
    }

    .enhanced-content :global(.prose h2) {
      @apply text-xl;
    }

    .enhanced-content :global(.prose h3) {
      @apply text-lg;
    }

    .enhanced-content :global(.prose p) {
      @apply text-base;
    }
  }

  /* Animation for content elements */
  .enhanced-content :global(.prose > *:first-child) {
    animation: fadeInUp 0.6s ease-out;
  }

  .enhanced-content :global(.prose > *:nth-child(2)) {
    animation: fadeInUp 0.6s ease-out 0.1s both;
  }

  .enhanced-content :global(.prose > *:nth-child(3)) {
    animation: fadeInUp 0.6s ease-out 0.2s both;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Enhanced focus states for accessibility */
  .enhanced-content :global(.prose a:focus) {
    @apply outline-none ring-2 ring-blue-500 ring-offset-2 rounded;
  }

  .enhanced-content :global(.prose button:focus) {
    @apply outline-none ring-2 ring-blue-500 ring-offset-2 rounded;
  }

  /* Print styles */
  @media print {
    .hero-section {
      @apply bg-white border border-gray-300;
    }

    .enhanced-content :global(.prose h1) {
      @apply text-black;
      background: none;
      -webkit-text-fill-color: black;
    }

    .enhanced-content :global(.prose img) {
      @apply shadow-none border border-gray-300;
    }
  }
</style>`;

// Old content pattern to replace
const oldContentPattern = /  <!-- Renderiraj MDX sadržaj s poboljšanim stilovima -->\s*<div class="prose prose-slate[^>]*>[\s\S]*?<\/div>\s*<\/EnhancedSubPageLayout>\s*<style>[\s\S]*?<\/style>/;

// Pages to update (excluding fizicka-sterilizacija.astro which is already updated)
const pagesToUpdate = [
  'flambiranje.astro',
  'vjezba-2-1.astro',
  'vjezba-2-2.astro',
  'vjezba-2-3.astro',
  'vjezba-2-4.astro',
  'vjezba-2-5.astro',
  'sterilizacija-zracenjem.astro',
  'suha-sterilizacija.astro',
  'vjezba-2.astro',
  'zarenje.astro',
  'sterilizacija-ultrazvukom.astro',
  'pasterizacija.astro',
  'spaljivanje.astro',
  'kemijska-sterilizacija.astro',
  'kuhanje.astro',
  'opaljivanje.astro',
  'hladna-sterilizacija.astro',
  'frakciona-sterilizacija.astro'
];

const poglavlje2Dir = path.join(__dirname, '../src/pages/poglavlje-2');

function updatePage(fileName) {
  const filePath = path.join(poglavlje2Dir, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${fileName}`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file already has the enhanced styling
    if (content.includes('enhanced-content')) {
      console.log(`✅ ${fileName} already has enhanced styling`);
      return;
    }

    // Replace the old content with enhanced styling
    const newContent = content.replace(oldContentPattern, enhancedStyling);
    
    if (newContent === content) {
      console.log(`⚠️  No changes made to ${fileName} - pattern not found`);
      return;
    }

    // Write the updated content back to the file
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Updated ${fileName} with enhanced styling`);
    
  } catch (error) {
    console.error(`❌ Error updating ${fileName}:`, error.message);
  }
}

// Update all pages
console.log('🚀 Starting to update poglavlje-2 pages with enhanced styling...\n');

pagesToUpdate.forEach(updatePage);

console.log('\n✨ Finished updating poglavlje-2 pages!');
console.log('📝 Note: fizicka-sterilizacija.astro and autoklaviranje.astro were already updated manually.');
