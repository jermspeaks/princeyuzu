import { defineConfig } from 'astro/config';

// Served on a custom domain via GitHub Pages — no `base` path needed since
// the site is served from the domain root. See public/CNAME.
export default defineConfig({
  site: 'https://princeyuzu.com',
});
