const { withDangerousMod } = require('expo/config-plugins');
const fs = require('fs');
const path = require('path');

module.exports = function fixExpoAsset(config) {
  return withDangerousMod(config, [
    'android',
    (config) => {
      console.log('[fix-expo-asset plugin] Running...');

      const possiblePaths = [
        path.join(config.modRequest.projectRoot, 'node_modules', 'expo-asset', 'android', 'src', 'main', 'java', 'expo', 'modules', 'asset', 'AssetModule.kt'),
        path.join(config.modRequest.projectRoot, 'node_modules', 'expo', 'node_modules', 'expo-asset', 'android', 'src', 'main', 'java', 'expo', 'modules', 'asset', 'AssetModule.kt'),
      ];

      let patched = false;

      for (const filePath of possiblePaths) {
        if (fs.existsSync(filePath)) {
          console.log('[fix-expo-asset plugin] Found:', filePath);
          let content = fs.readFileSync(filePath, 'utf8');

          if (content.includes('appContext.reactContext,') && !content.includes('appContext.reactContext!!,')) {
            content = content.replace(/appContext\.reactContext,/g, 'appContext.reactContext!!,');
            content = content.replace(/appContext\.reactContext\)/g, 'appContext.reactContext!!)');
            fs.writeFileSync(filePath, content);
            console.log('[fix-expo-asset plugin] PATCHED successfully!');
            patched = true;
          } else if (content.includes('appContext.reactContext!!,')) {
            console.log('[fix-expo-asset plugin] Already patched');
            patched = true;
          } else {
            console.log('[fix-expo-asset plugin] Pattern not found in file');
          }
        }
      }

      if (!patched) {
        console.log('[fix-expo-asset plugin] WARNING: Could not find or patch AssetModule.kt');
      }

      return config;
    },
  ]);
};
