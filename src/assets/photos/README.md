# Photos go here

Drop Yuzu's PNG/JPG photos directly in this folder. Astro's image pipeline
(Sharp, built in) automatically generates optimized, responsive WebP output
at build time via the `<Picture>`/`<Image>` components used on the Gallery
and Home pages — you don't need to convert anything by hand.

## Naming conventions used by this site

- `hero.png` / `hero.jpg` — the big photo shown at the top of the homepage.
- Everything else shows up in the Gallery page, sorted alphabetically by
  filename. Prefix files with numbers if you want to control the order, e.g.:
  - `01-park-day.png`
  - `02-first-snow.jpg`
  - `03-nap-time.png`

That's it — add a file, run `npm run dev` (or push to `main`), and it shows
up automatically.
