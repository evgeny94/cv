# Agent guide

Instructions for every coding agent in this repository (Claude Code reads them through `CLAUDE.md`).

Evgeny Musatov's personal CV / portfolio website: plain HTML, CSS and JavaScript, with no build step and no package manager (the `/node_modules` in `.gitignore` is unused). Live at https://evgeny94.github.io/cv/ via GitHub Pages: branch `main`, root folder, legacy build. **Every push to `main` deploys.**

## Local preview

```bash
python -m http.server 8000   # then open http://localhost:8000
```
There is no lint or test tooling.

## Structure

The site has three pages that share one stylesheet (`public/css/CV.css`) and one script (`public/CV.js`):
- `index.html`: home page with the About (`#section1`) and Skills (`#section2`) sections
- `public/pages/experience.html`
- `public/pages/portfolio.html`

Things to know before editing:
- **The header, the social-links row and the page-nav buttons are copied into all three HTML files.** Edit all three. The sub-pages reach shared assets via `../` and the home page via `../../`, while `index.html` uses `./public/...`. Keep those relative paths correct, because the site is served from the `/cv/` subpath.
- Page navigation uses `goto(url)` in `CV.js` (on button `onclick`), not `<a>` links.
- `CV.js` also computes the "Years Old" value from a hard-coded birthdate, toggles the "Go - Up" button based on page height, and provides `downloadCV()`. That function opens `Evgeny Musatov-CV.docx` from the repo root. To update the downloadable CV, replace that file and keep the exact filename, including the space.
- An inline script in `index.html` rewrites the URL to `./` with `history.pushState` after load.
- Font Awesome is loaded twice: v4.7 from the cdnjs CDN, and a vendored v6.5.1 copy under `public/fontawesome-free-6.5.1-web/` (~28 MB, mostly unused files). The icons use v6 class names (`fa-solid ...`).
- Images and favicons are in `public/pics/` (`me.jpg`, `EM_icon*.ico`).

## Keeping docs off the live site

`_config.yml` excludes `README.md`, `AGENTS.md` and `CLAUDE.md` from the GitHub Pages (Jekyll) build. When adding a new top-level doc or notes file, add it to that list, or it will be published. Don't add `.nojekyll`: that turns Jekyll off, and with it this exclude list.

## How to report back

End every reply, short ones too, with a plain-language summary and no jargon:
- **Before:** what the state was.
- **Now:** what changed. For site changes, also say whether the change is pushed (pushing to `main` = deployed) and give the live URL. If you checked the deploy, give its status.
- **WHAT TO DO:** what Evgeny has to do, numbered with the cheapest step first, or "nothing". It must be self-contained: file paths, commands, and a ready-to-paste prompt if a new session is needed. Never write "see my previous message"; repeat a step for as long as it is still the next one.

Also:
- Do everything you can yourself. Don't put work on Evgeny's list that you could do.
- When something is blocked (a permission, a login, a step that needs Evgeny's hands), say what was blocked and give the exact steps or a ready-to-paste snippet to unblock it.
- Ask questions as multiple choice with the recommended option first (in Claude Code, use the AskUserQuestion tool), not as plain-text questions.
- Reply in the language Evgeny writes in (Hebrew or English). Code, file names and docs stay in English.
- Keep delivery lean: one report at the end, and no extra plan or record files.
