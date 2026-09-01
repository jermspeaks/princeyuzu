import { defineConfig } from 'astro/config';

// Served on a custom domain via GitHub Pages — no `base` path needed since
// the site is served from the domain root. See public/CNAME.
export default defineConfig({
  site: 'https://princeyuzu.com',
  vite: {
    resolve: {
      alias: {
        // @formspree/ajax's "browser" field points bundlers at a global/CDN
        // bundle with no named exports (only window.formspree). Force
        // resolution to the real ESM build so `initForm` is importable.
        '@formspree/ajax': '@formspree/ajax/dist/index.mjs',
      },
    },
  },
});
