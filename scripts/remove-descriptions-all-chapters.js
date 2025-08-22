const fs = require('fs');
const path = require('path');

// Function to remove descriptions from content cards
function removeDescriptionsFromFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove description paragraphs from content cards
    // Pattern: <p class="text-gray-600 mb-4">...</p>
    const descriptionPattern = /        <p class="text-gray-600 mb-4">[^<]*<\/p>\n/g;
    if (descriptionPattern.test(content)) {
      content = content.replace(descriptionPattern, '        \n');
      modified = true;
      console.log(`✅ Removed descriptions from content cards in ${filePath}`);
    }

    // Remove description paragraphs from laboratory exercise cards
    // Pattern: <p class="text-gray-600 mb-4">...</p> in exercise sections
    const exerciseDescriptionPattern = /          <p class="text-gray-600 mb-4">[^<]*<\/p>\n/g;
    if (exerciseDescriptionPattern.test(content)) {
      content = content.replace(exerciseDescriptionPattern, '          \n');
      modified = true;
      console.log(`✅ Removed descriptions from exercise cards in ${filePath}`);
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all chapters
function processAllChapters() {
  const pagesDir = path.join(__dirname, '..', 'src', 'pages');
  let totalModified = 0;

  console.log('🚀 Starting to remove descriptions from poglavlje-3 to poglavlje-23...\n');

  // Process chapters 3-23
  for (let i = 3; i <= 23; i++) {
    const chapterFile = path.join(pagesDir, `poglavlje-${i}.astro`);
    
    if (fs.existsSync(chapterFile)) {
      console.log(`📁 Processing poglavlje-${i}.astro...`);
      if (removeDescriptionsFromFile(chapterFile)) {
        totalModified++;
      }
    } else {
      console.log(`⚠️  File not found: poglavlje-${i}.astro`);
    }
  }

  console.log(`\n🎉 Completed! Modified ${totalModified} files.`);
  console.log('📝 Descriptions removed from:');
  console.log('   - Content cards in "Sadržaj" sections');
  console.log('   - Laboratory exercise cards');
  console.log('   - All chapters from poglavlje-3 to poglavlje-23');
}

// Run the script
if (require.main === module) {
  processAllChapters();
}

module.exports = { removeDescriptionsFromFile, processAllChapters };
