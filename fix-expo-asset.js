const fs = require('fs');
const path = require('path');

console.log('=== expo-asset patch script ===');

// Exact path from the build error log
const paths = [
  path.join('node_modules', 'expo-asset', 'android', 'src', 'main', 'java', 'expo', 'modules', 'asset', 'AssetModule.kt'),
  path.join('node_modules', 'expo', 'node_modules', 'expo-asset', 'android', 'src', 'main', 'java', 'expo', 'modules', 'asset', 'AssetModule.kt')
];

let patched = false;

for (const file of paths) {
  console.log('Checking:', file);
  if (fs.existsSync(file)) {
    console.log('FOUND:', file);
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('appContext.reactContext,') || content.includes('appContext.reactContext)')) {
      content = content.replace(/appContext\.reactContext([,\)])/g, 'appContext.reactContext!!$1');
      fs.writeFileSync(file, content);
      console.log('PATCHED successfully');
      patched = true;
    } else {
      console.log('Already patched or pattern not found');
    }
  }
}

if (!patched) {
  console.log('WARNING: Could not find or patch AssetModule.kt');
}

console.log('=== patch script done ===');
