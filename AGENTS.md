# AGENTS.md — Astro Lab Site Lite (single page, English only)

Guidance for AI coding agents working in this repo.

## Stack
- Astro 7 (static), Tailwind CSS 4 (`@tailwindcss/vite`), TypeScript strict, Node 22 (`.nvmrc`).
- **Zero framework JS.** The only script is the inline theme snippet in `src/layouts/Base.astro`. Interactivity (BibTeX toggles) uses `<details>`.

## Commands
`npm run dev` · `npm run build` · `npx astro check` (must report 0 errors / 0 warnings / 0 hints).

## Where content lives
- `src/data/publications.bib` — the single source of publications. Parsed at build time by `src/lib/bibtex.ts` → `src/lib/pubs.ts`. Custom fields: `pdf`, `code`, `award`, `project`, `selected = {true}`. Author names that exactly match a member `name` are underlined.
- `src/data/lab.ts` — lab identity, members, alumni, projects, grants, open positions. Localized strings use `{ en, ja?, 'zh-TW'? }` (falls back to `en`).
- `src/content/news/<locale>/*.md` — news collection.
- `src/i18n/ui.ts` — UI strings; add each key to en, ja and zh-TW.
- `src/styles/global.css` — design tokens (light `:root`, dark `.dark`). Use `bg-paper`, `text-ink`, `text-ink-2`, `border-line`, `text-accent`, `text-cite`, `bg-highlight`; never raw hex in components.

## Rules
- Layout is the 3/9 "marginalia" grid: left `md:col-span-3` holds `.meta` labels, right `md:col-span-9` holds content.
- No gradients, card shadows, rounded cards or stock imagery. Radius 0 except avatars and tags.
- Keep Lighthouse ≥ 95 in all four categories in light **and** dark (`?theme=dark` forces dark for testing).
