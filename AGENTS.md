# Agent guide

Instructions for every coding agent in this repository (Claude Code reads them through `CLAUDE.md`).

Evgeny Musatov's personal CV / portfolio website: plain HTML, CSS and JavaScript, with no build step and no package manager (the `/node_modules` in `.gitignore` is unused). Live at https://evgeny94.github.io/cv/ via GitHub Pages: branch `main`, root folder, legacy build. **Every push to `main` deploys.**

## Local preview

```bash
python -m http.server 5173   # then open http://localhost:5173
```
There is no build or test tooling. The design linter from the Hallmark skill can be run when it is installed: `node ~/.claude/skills/hallmark/scripts/sloplint.mjs index.html --genre editorial --render`.

## Structure

A single page, `index.html`, with sections `#experience`, `#projects`, `#skills` and `#contact`. No script is needed to render it.
- `public/css/CV.css`: the page styles. Its first lines are the Hallmark design stamp (navy and lime, sidebar plus experience timeline); keep them at the top. It imports `tokens.css` (every colour, font and spacing value, as CSS variables; dark is the default `:root`, light mode is the `[data-mode="light"]` block) and `base.css` (resets). Put new colours or fonts in `tokens.css`, never as literals in `CV.css`.
- `public/CV.js`: the light/dark toggle (remembered in localStorage, read by a one-line script in the `<head>` before paint), plus `downloadCV()` and `goto()` kept for old links.
- `public/pages/experience.html` and `portfolio.html` are redirect stubs to `#experience` and `#projects`, so old links keep working. Don't build pages there.
- `public/pics/`: `me.jpg` (the portrait, only 107x107), and the tab icons: `icon.svg` (lime E, dark mode), `icon-light.svg` (aqua E, light mode; `CV.js` swaps them with the mode toggle) and `apple-touch-icon.png` (phone home screen). The old `.ico` files are unused.
- `Evgeny Musatov-CV.docx` in the repo root is what "Download CV" serves. To update it, replace the file and keep the exact filename, including the space.
- `public/fontawesome-free-6.5.1-web/` (~28 MB) is no longer used by the page.
- `.hallmark/` holds local design-lint output and is git-ignored.

Content edits: each section in `index.html` starts with an HTML comment that says how to add an entry (copy a `<li class="job">`, a skill `<li>` or a contact `<li>`; the current role gets `job--now`, which lights its dot and date). After editing, change the "Last updated" line in the footer. Copy rules the design follows: no em or en dashes (write "2021 to 2022"), sentence-case labels, no invented numbers.

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
