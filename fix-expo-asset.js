#!/usr/bin/env node
/**
 * Patch expo-asset AssetModule.kt to avoid Kotlin 2.1 strict-null compile errors.
 *
 * Handles two known shapes:
 *   (a) Old expo-asset (~11.0.x): passes `appContext.reactContext` (Context?) directly
 *       to helpers that expect Context. -> bang-bang it.
 *   (b) New expo-asset (~55.0.x): exposes `context: Context` via a getter using
 *       `appContext.reactContext ?: throw ...`. Already safe, but we also harden any
 *       remaining raw `appContext.reactContext` call-site usages defensively.
 */
const fs = require('fs');
const path = require('path');

console.log('=== expo-asset AssetModule.kt patch ===');

function walk(dir, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (_) {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // Skip heavy/irrelevant subtrees
      if (e.name === '.git' || e.name === '.bin') continue;
      walk(full, out);
    } else if (e.name === 'AssetModule.kt' && full.includes(path.join('expo', 'modules', 'asset'))) {
      out.push(full);
    }
  }
  return out;
}

const roots = ['node_modules'];
const files = [];
for (const r of roots) {
  if (fs.existsSync(r)) files.push(...walk(r));
}

if (files.length === 0) {
  console.log('No AssetModule.kt files found under node_modules. Nothing to do.');
  process.exit(0);
}

let totalPatched = 0;
for (const file of files) {
  console.log('Inspecting:', file);
  const original = fs.readFileSync(file, 'utf8');
  let updated = original;

  // (a) Force non-null at direct call-sites: appContext.reactContext, / )
  updated = updated.replace(/appContext\.reactContext(?!!!)([,\)])/g, 'appContext.reactContext!!$1');

  // (b) Ensure the `context` property getter is non-null safe.
  //     Rewrite any variant of `get() = appContext.reactContext` (without a ?: throw)
  //     into one that throws on null.
  updated = updated.replace(
    /get\(\)\s*=\s*appContext\.reactContext\s*$/gm,
    'get() = appContext.reactContext ?: throw Exceptions.AppContextLost()'
  );

  if (updated !== original) {
    fs.writeFileSync(file, updated);
    console.log('  -> PATCHED');
    totalPatched++;
  } else {
    console.log('  -> already safe, no changes');
  }
}

console.log(`=== done: ${totalPatched}/${files.length} files patched ===`);
