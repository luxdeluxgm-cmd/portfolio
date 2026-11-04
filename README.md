# Jan Tokarzewski - Personal Portfolio

A custom-coded and lightweight personal website and service portal. Built for simplicity without heavy frameworks or bloated CMS templates.

## Tech Stack
* **HTML5**
* **Tailwind CSS** (v3, compiled to a single stylesheet)
* **Vanilla JavaScript** 

## Local Development
The compiled stylesheet (`css/style.css`) is committed, so you can open any `.html` file in your browser to view the layout. To fully test the clipboard API and Formspree contact form, serve the directory locally:
```bash
python3 -m http.server
```
Then navigate to http://localhost:8000.

## Editing Styles
Tailwind is only needed when you add or change utility classes. Rebuild with (pin v3, the config uses v3 syntax):
```bash
npx tailwindcss@3 -i src/input.css -o css/style.css --minify
```
* `css/style.css` is generated. Do not edit it by hand, the next build overwrites it.
* All custom (non-utility) CSS lives in `src/input.css`: FAQ accordion, floating contact button, notice banner, certificates, focus ring.
* Colours live in `tailwind.config.js`. `accent` is `#7c3aed`, which gives 5.7:1 contrast with white text (WCAG AA).

## Assets
* `img/profile.webp` - profile photo on the home pages. Square, 576x576 px, WebP, ideally under 60 KB. A placeholder is included: replace the file, keep the name.
* `img/pl/og-img-*.png`, `img/en/og-img-*-en.png` - link-preview images, 2400x1260 px, referenced by absolute URL in each page's `<head>`.
* `_redirects` - Cloudflare Pages redirects, so the URLs printed on the English preview images (`/websites`, `/coding`) resolve.

The underlying code is open-source under the MIT License.

Important: All personal photographs, branding, project details, and written copy (in both Polish and English) are strictly All Rights Reserved (Copyright © 2026 Jan Tokarzewski). 
You may not clone, use, or reproduce these personal assets without explicit permission.
