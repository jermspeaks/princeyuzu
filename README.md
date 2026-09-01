# princeyuzu 🐾

A little site for Yuzu — a shih-tzu poodle mix — with a homepage, photo
gallery, timeline, and guestbook. Built with [Astro](https://astro.build),
deployed to GitHub Pages via GitHub Actions.

Live at: **https://jermspeaks.github.io/princeyuzu**

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321/princeyuzu
```

```bash
npm run build     # type-checks + builds to dist/
npm run preview   # preview the production build locally
```

## Adding photos

Drop PNG/JPG files straight into `src/assets/photos/`. Astro's image
pipeline (Sharp, built in) automatically generates optimized, responsive
**WebP** output at build time for every photo — no manual conversion, no
extra script needed.

- Name one photo `hero.png` (or `hero.jpg`) — it becomes the big photo at
  the top of the homepage.
- Every other photo shows up on the [Gallery](src/pages/gallery.astro)
  page, sorted alphabetically. Prefix filenames with numbers to control the
  order, e.g. `01-park-day.png`, `02-first-snow.jpg`.
- Filenames are turned into gallery captions automatically (dashes/
  underscores become spaces, the number prefix is stripped) — e.g.
  `03-nap-time.png` → "nap time".

See `src/assets/photos/README.md` for the same notes in place.

## Editing content

| What | Where |
| --- | --- |
| Homepage hero text, dates, intro | `src/pages/index.astro` |
| Life story / milestones | `src/data/timeline.ts` |
| Site title, nav, colors/fonts | `src/components/Nav.astro`, `src/styles/global.css` |
| Guestbook form | `src/pages/guestbook.astro` |

The homepage and timeline ship with placeholder text in *italics* — search
for `Add a date` / `Add your dates here` and replace with the real details.

### Tone check

The site currently uses neutral, celebratory language ("made with love for
Yuzu") rather than "in loving memory of," since it wasn't clear whether this
is a memorial or an ongoing tribute site. If it should read as a memorial,
update the phrase in `src/components/Footer.astro` (and anywhere else you'd
like) accordingly.

## Setting up the guestbook (Formspree)

The guestbook form posts to [Formspree](https://formspree.io), a free
form-backend service (GitHub Pages can't run server code itself). Submitted
messages arrive by email / in the Formspree dashboard — they won't
automatically re-appear on the page, since there's no database to read from.

1. Create a free account at https://formspree.io.
2. Create a new form. Formspree gives you an endpoint like
   `https://formspree.io/f/abcdwxyz`.
3. Open `src/pages/guestbook.astro` and replace `YOUR_FORM_ID` in the
   `FORM_ENDPOINT` constant with your real form ID.
4. Commit and push — done. Until you do this, the guestbook page shows a
   visible "not wired up yet" notice instead of silently swallowing
   submissions.

## Deploying (GitHub Pages + Actions)

Deployment is already wired up in `.github/workflows/deploy.yml` using the
official [`withastro/action`](https://github.com/withastro/action). Every
push to `main` builds and deploys automatically.

One-time setup in the GitHub repo:

1. Push this project to `github.com/jermspeaks/princeyuzu` (already your
   `origin` remote).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions** (not
   "Deploy from a branch").
4. Push to `main` (or run the workflow manually from the **Actions** tab) —
   the site deploys to `https://jermspeaks.github.io/princeyuzu`.

### If you ever rename the repo

The site's `base` path is tied to the repo name. If you rename the repo (or
move to a `username.github.io` root page), update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://jermspeaks.github.io',
  base: '/princeyuzu', // set to '/' if this becomes a root user page
});
```

## Project structure

```
src/
  assets/photos/     # source PNG/JPG photos — auto-converted to WebP
  components/        # Nav, Footer, PhotoGrid (grid + lightbox)
  data/timeline.ts    # editable life-story milestones
  layouts/BaseLayout.astro
  pages/
    index.astro       # homepage
    gallery.astro      # full photo gallery
    timeline.astro      # life story timeline
    guestbook.astro      # Formspree-backed guestbook
  styles/global.css   # colors, fonts, shared styles
.github/workflows/deploy.yml
```
