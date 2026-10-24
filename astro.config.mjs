// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.edu',
  i18n: { locales: ['en', 'ja', 'zh-TW'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
  build: { inlineStylesheets: 'always' },
  markdown: { shikiConfig: { themes: { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' } } },
  vite: { plugins: [tailwindcss()] },
});
