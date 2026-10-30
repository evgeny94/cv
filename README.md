# Evgeny Musatov — CV

A one-page CV website: experience, projects, skills, education and contact, plus a downloadable Word CV.

**Live:** https://evgeny94.github.io/cv/

## Run locally

```bash
python -m http.server 5173
```
Then open http://localhost:5173.

## Structure

| Path | Purpose |
|---|---|
| `index.html` | The whole CV: experience, projects, skills, education, contact |
| `public/css/CV.css` | Page styles; `tokens.css` holds every colour, font and spacing value |
| `public/pics/` | Portrait, dashboard screenshot, favicons |
| `public/pages/` | Redirects from the old Experience and Portfolio URLs |
| `Evgeny Musatov-CV.docx` | The file served by the "Download CV" button |

## Updating the CV

By hand: open `index.html`. Each section starts with a comment saying how to add an entry. Copy a block, edit the text, and change "Last updated" in the footer. Write years as "2021 to 2022" (no dashes).

With Claude Code: open this folder and paste:

> Update my CV site from the text below. Change only the content in index.html (roles, projects, skills, education), keep the design and the copy rules in AGENTS.md, set "Last updated" to this month, preview it with `python -m http.server 5173`, and show me before pushing.
> [paste your LinkedIn Experience section or new details here]

## Deploy

GitHub Pages serves the `main` branch, so pushing to `main` publishes the site.
