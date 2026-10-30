# Evgeny Musatov — CV

A personal CV and portfolio website with About, Skills, Experience and Portfolio sections, plus a downloadable Word CV.

**Live:** https://evgeny94.github.io/cv/

## Run locally

```bash
python -m http.server 8000
```
Then open http://localhost:8000.

## Structure

| Path | Purpose |
|---|---|
| `index.html` | Home page (About and Skills) |
| `public/pages/` | Experience and Portfolio pages |
| `public/css/CV.css` | Styles shared by all pages |
| `public/CV.js` | Navigation, age calculation, CV download, scroll button |
| `Evgeny Musatov-CV.docx` | The file served by the "Download CV" button |

## Deploy

GitHub Pages serves the `main` branch, so pushing to `main` publishes the site.
