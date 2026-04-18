const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'node_modules', 'expo-asset', 'android', 'src', 'main', 'java', 'expo', 'modules', 'asset', 'AssetModule.kt');

if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('appContext.reactContext,') && !content.includes('appContext.reactContext!!,')) {
    content = content.replace('appContext.reactContext,', 'appContext.reactContext!!,');
    fs.writeFileSync(file, content);
    console.log('Patched AssetModule.kt successfully');
  } else {
    console.log('AssetModule.kt already patched or not found');
  }
} else {
  console.log('AssetModule.kt not found, skipping patch');
}
