Full version: themes.formchime.com

# Astro Lab Site Lite

A free, one-page website for a research lab: mission, a figure, selected publications **generated from BibTeX at build time**, people & alumni, and news. Scholarly serif design, light/dark, Astro 7 + Tailwind 4, zero framework JS, Lighthouse 95+.

**MIT licensed** — use it for anything.

## Want the rest?
The full **[Astro Lab Site](https://themes.formchime.com/themes/lab-site/)** adds a complete publications page grouped by year, member pages by role, projects & grants ledger, recruiting page, news archive, contact page, and English / 日本語 / 繁體中文.

## Use
```bash
nvm use && npm install && npm run dev
```
- Lab identity, people: `src/data/lab.ts`
- Publications: `src/data/publications.bib` (`selected = {true}` shows a paper)
- News: `src/content/news/en/*.md`
- Recolor: `--accent` in `src/styles/global.css`

Build with `npm run build`; deploy `dist/` anywhere (Cloudflare Pages, Netlify, Vercel, a university server).
