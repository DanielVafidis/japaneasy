#!/usr/bin/env bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="/tmp/japaneasy-shots"
DEST="/Users/danielvafidis/Documents/Workspace/Dev/Personal/japaneasy/.screenshots"
mkdir -p "$OUT" "$DEST"

shot() {
  rm -rf "/tmp/jp_$1" "$OUT/$1.png"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-first-run \
    --no-default-browser-check --user-data-dir="/tmp/jp_$1" \
    --force-device-scale-factor=2 --window-size="$2" --virtual-time-budget=4000 \
    --screenshot="$OUT/$1.png" "http://localhost:3000$3" >/dev/null 2>&1 &
  local pid=$!
  for _ in $(seq 1 24); do [ -s "$OUT/$1.png" ] && break; sleep 0.5; done
  sleep 1
  kill -9 "$pid" 2>/dev/null
  echo "$1: $(ls -la "$OUT/$1.png" 2>/dev/null | awk '{print $5}') bytes"
}

pkill -9 -f "Google Chrome" 2>/dev/null
sleep 1
shot home "1440,1620" "/"
shot kanji "1440,1500" "/kanji"
shot kanji-detail "1440,1200" "/kanji?c=%E6%97%A5"
shot settings "1440,1400" "/settings"

cp "$OUT"/home.png "$OUT"/kanji.png "$OUT"/kanji-detail.png "$OUT"/settings.png "$DEST"/ 2>/dev/null
echo "---DEST---"
ls -la "$DEST"
