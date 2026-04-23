# Copilot Instructions — anthonymlortiz.com

This repository hosts Anthony Ortiz's personal academic website, served as a
static site at **www.anthonymlortiz.com** (GitHub Pages — see `CNAME`).

## Project shape

- **Pure static site.** No build step, no package manager, no frameworks.
  Edits to HTML/CSS/JS are picked up directly by GitHub Pages.
- **Pages** (top-level `*.html`):
  - `index.html` — landing page (bio, experience, education)
  - `research.html` (and the legacy alias `projects.html`) — research themes
  - `publication.html` — selected publications, filterable by topic
  - `media.html` — press / "In the News"
- **Shared assets** live under `assets/`:
  - `assets/css/site.css` — single stylesheet, design tokens via CSS custom
    properties, supports light + dark via `prefers-color-scheme`.
  - `assets/js/site.js` — vanilla JS only (mobile nav, active link, publication
    filter chips, footer year).
- **Profile photo:** `assets/img/anthonyo.jpg` at the repo root. It is used as both the
  navbar avatar and the hero portrait on `index.html`. Replace the file in
  place (keep the filename and case) when updating the photo.
- **Static content directories:** `img/`, `papers/`, `slides/`, `fonts/`,
  `css/` (legacy), `js/` (legacy). The legacy `css/` and `js/` directories are
  unused by the modern pages and only kept for assets that may still be linked
  to from elsewhere; prefer `assets/` for anything new.

## Conventions

- Keep every page self-contained: include the same `<header>` and `<footer>`
  blocks on every HTML file (no templating engine). When adding a new nav
  entry, update **all** pages.
- Use semantic HTML: `<header>`, `<main>`, `<section class="block">`,
  `<article class="pub">`, etc. Avoid inline styles.
- Style via the existing CSS custom properties in `:root` / the
  `prefers-color-scheme: light` block. Don't hard-code colors.
- Icons come from Font Awesome 6 via CDN (`fa-solid`, `fa-regular`,
  `fa-brands`).
- No jQuery, no Bootstrap, no build tooling. If something seems to need them,
  reconsider — vanilla CSS/JS has been sufficient.
- Publications: each entry is an `<article class="pub" data-tags="…">` with
  space-separated tag tokens that match the `data-filter` values on the
  `.chip` buttons (`geo`, `health`, `ml`, …). Add new tags to both places.

## Updating content

- **Bio / title / contact:** edit `index.html` (hero + experience timeline).
- **Publications:** prepend new entries at the top of the `.pub-list` in
  `publication.html`. Source of truth for the canonical list is
  <https://scholar.google.com/citations?hl=en&user=Ix7TigcAAAAJ>.
- **News:** add a `.card` link in `media.html`.
- **CV:** replace `resume.pdf` in place.
- **Footer year** is set automatically by `assets/js/site.js` (`#year`).

## Don'ts

- Don't reintroduce the legacy jQuery/Bootstrap stack from `css/` and `js/`.
- Don't commit secrets — this is a public site.
- Don't break the `CNAME` file; it pins the custom domain.
