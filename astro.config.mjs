import { defineConfig } from 'astro/config';

// GitHub Pages serves a project site from /<repo>/, so the deploy workflow
// passes SITE_URL and BASE_PATH. Locally both fall back to the root.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
