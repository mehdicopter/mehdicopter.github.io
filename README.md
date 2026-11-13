# mahfoudi.me — Personal Resume Site

Static bilingual (`FR` / `EN`) executive portfolio and 1-page A4 PDF generator for **Mehdi Mahfoudi**.

## Structure

- `index.html` — Entry point (Editorial layout + print sheet mount)
- `data.js` — Bilingual (`fr` / `en`) resume content, metrics, skills, and condensed `pdfBullets`
- `styles.css` — Light/Dark theme + dedicated 1-page A4 `@media print` layout
- `app.js` — Client-side renderer and language/theme controls
- `assets/avatar.jpg` — Profile picture (512×512 JPEG)
- `assets/logos/` — Self-hosted company and institution icons
- `assets/Mehdi_Mahfoudi_CV_{FR,EN}.pdf` — Pre-compiled 1-page A4 PDF resumes
- `scripts/generate-pdf.sh` — Rebuilds both FR and EN 1-page PDFs via headless Chrome

## Updating Content or Profile Photo

1. Edit `data.js` (or replace `assets/avatar.jpg` with a square portrait).
2. Regenerate the 1-page PDFs:
   ```bash
   ./scripts/generate-pdf.sh
   ```
3. Preview locally:
   ```bash
   python3 -m http.server 8000
   ```
