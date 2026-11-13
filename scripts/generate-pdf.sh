#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=8798

python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$REPO_DIR" >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT
sleep 0.5

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$REPO_DIR/assets/Mehdi_Mahfoudi_CV_FR.pdf" \
  "http://127.0.0.1:${PORT}/?lang=fr" 2>/dev/null

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$REPO_DIR/assets/Mehdi_Mahfoudi_CV_EN.pdf" \
  "http://127.0.0.1:${PORT}/?lang=en" 2>/dev/null

echo "Generated 1-page A4 PDFs:"
ls -lh "$REPO_DIR/assets/Mehdi_Mahfoudi_CV_"*.pdf
