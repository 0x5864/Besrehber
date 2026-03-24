#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ANDROID_ASSETS_DIR="$ROOT_DIR/android/app/src/main/assets"

mkdir -p "$ANDROID_ASSETS_DIR"

rsync -a --exclude '.DS_Store' "$ROOT_DIR/assets/" "$ANDROID_ASSETS_DIR/assets/"
rsync -a --exclude '.DS_Store' "$ROOT_DIR/web/" "$ANDROID_ASSETS_DIR/web/"

for file in companies.js detail.js fonlar.js index.html main.js manifest.webmanifest pwa.js styles.css sw.js; do
  rsync -a "$ROOT_DIR/$file" "$ANDROID_ASSETS_DIR/$file"
done

printf 'Android asset klasoru guncellendi: %s\n' "$ANDROID_ASSETS_DIR"
