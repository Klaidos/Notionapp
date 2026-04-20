#!/usr/bin/env bash
set -e
echo "=== eas-build-post-install: patching expo-asset AssetModule.kt ==="

# Run the JS patcher which handles every AssetModule.kt under node_modules
node fix-expo-asset.js

echo "=== eas-build-post-install: done ==="
