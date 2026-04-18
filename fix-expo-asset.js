const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all copies of AssetModule.kt
try {
  const result = execSync('find node_modules -path "*/expo/modules/asset/AssetModule.kt" -type f', { encoding: 'utf8' });
  const files = result.trim().split('\n').filter(Boolean);
  console.log('Found AssetModule.kt at:', files);
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('appContext.reactContext,') && !content.includes('appContext.reactContext!!,')) {
      content = content.replace(/appContext\.reactContext,/g, 'appContext.reactContext!!,');
      fs.writeFileSync(file, content);
      console.log('PATCHED:', file);
    } else if (content.includes('appContext.reactContext!!,')) {
      console.log('Already patched:', file);
    } else {
      console.log('Pattern not found in:', file);
    }
  });
  
  if (files.length === 0) {
    console.log('WARNING: No AssetModule.kt files found');
  }
} catch (e) {
  console.log('Error finding files:', e.message);
}
