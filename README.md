# princeyuzu 🐾

A little site for Yuzu — a shih-tzu poodle mix — with a homepage, photo
gallery, timeline, and guestbook. Built with [Astro](https://astro.build),
deployed to GitHub Pages via GitHub Actions.

Live at: **https://princeyuzu.com**

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
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

The guestbook form submits via [Formspree](https://formspree.io) using their
official [`@formspree/ajax`](https://github.com/formspree/formspree-js)
library (GitHub Pages can't run server code itself, so submission handling
has to live somewhere else). Messages arrive in your Formspree dashboard /
email — Formspree has no free way for a static site to read them back
automatically, so past messages shown on the page are manually curated (see
below), not live-synced.

1. Create a free account at https://formspree.io and create a new form.
2. Open `src/pages/guestbook.astro` and replace `YOUR_FORM_ID` — er, the
   `FORM_ID` constant — with your real form ID (the last part of the
   endpoint Formspree gives you, e.g. `abcdwxyz` from
   `https://formspree.io/f/abcdwxyz`).
3. Commit and push — done. Until you do this, the guestbook page shows a
   visible "not wired up yet" notice instead of silently swallowing
   submissions.

### Displaying past messages

Check your submissions at `https://formspree.io/forms/<your-form-id>/submissions`,
then copy over the ones you'd like to share publicly into
`src/data/guestbook.ts`:

```ts
export const guestbookEntries: GuestbookEntry[] = [
  { name: 'Alex', message: 'Yuzu was the best!', date: 'August 2026' },
];
```

Push, and they show up under "Messages from friends" on the guestbook page.
If you'd rather automate this later (e.g. a GitHub Issue Form + Action that
appends approved entries), that's a bigger lift — ask if you want it set up.

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
4. Push to `main` (or run the workflow manually from the **Actions** tab).

### Custom domain (princeyuzu.com via Porkbun)

The site is served at the domain root (no `base` path) via a `public/CNAME`
file containing `princeyuzu.com`, which Astro copies into every build.

**DNS records to add in Porkbun** (Domain Management → DNS Records) for the
apex domain:

| Type | Host | Answer |
| --- | --- | --- |
| A | `princeyuzu.com` (or leave host blank) | `185.199.108.153` |
| A | `princeyuzu.com` (or leave host blank) | `185.199.109.153` |
| A | `princeyuzu.com` (or leave host blank) | `185.199.110.153` |
| A | `princeyuzu.com` (or leave host blank) | `185.199.111.153` |
| CNAME | `www` | `jermspeaks.github.io` |

(The four A records are GitHub Pages' fixed IPs — add all four, not just
one, for redundancy. The `www` CNAME is optional, only needed if you want
`www.princeyuzu.com` to also resolve.)

**In the GitHub repo**, Settings → Pages → **Custom domain** → enter
`princeyuzu.com` → Save. GitHub verifies DNS (can take a few minutes to
hours to propagate) and provisions an HTTPS certificate automatically. Once
the padlock/"Enforce HTTPS" checkbox becomes available, enable it.

### If you ever change domains or move off a custom domain

Update both `astro.config.mjs` (`site`) and `public/CNAME` (or delete
`public/CNAME` and add a `base: '/repo-name'` if going back to the default
`username.github.io/repo-name` URL).

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
