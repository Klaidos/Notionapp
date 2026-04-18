#!/bin/bash
echo "=== Patching expo-asset AssetModule.kt ==="

# Search for all copies of AssetModule.kt
FILES=$(find node_modules -name "AssetModule.kt" -path "*/expo/modules/asset/*" -type f 2>/dev/null)

if [ -z "$FILES" ]; then
  echo "No AssetModule.kt files found, skipping patch"
  exit 0
fi

for FILE in $FILES; do
  echo "Found: $FILE"
  if grep -q 'appContext\.reactContext,' "$FILE" && ! grep -q 'appContext\.reactContext!!,' "$FILE"; then
    sed -i 's/appContext\.reactContext,/appContext.reactContext!!,/g' "$FILE"
    sed -i 's/appContext\.reactContext)/appContext.reactContext!!)/g' "$FILE"
    echo "PATCHED: $FILE"
  else
    echo "Already patched or pattern not found: $FILE"
  fi
done

echo "=== Patch complete ==="
