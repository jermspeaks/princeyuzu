# Friends' photos go here

This folder is for photos of Yuzu's friends — separate from Yuzu's own
photos in `src/assets/photos/`, which power the main Gallery page.

## How it works

1. Add the friend to `src/data/friends.ts`, picking a `slug` (lowercase,
   no spaces), e.g. `"biscuit"`.
2. Create a folder here named after that slug: `src/assets/friends/biscuit/`.
3. Drop that friend's PNG/JPG photos into their folder. The first photo
   (alphabetically) is used as their cover photo on the `/friends` page.
   Prefix filenames with numbers to control order, e.g.:
   - `01-park-day.jpg`
   - `02-nap-time.jpg`

Astro's image pipeline (Sharp, built in) automatically generates optimized,
responsive WebP output at build time — no manual conversion needed.

That's it — add the folder and photos, run `npm run dev` (or push to
`main`), and the friend shows up on `/friends` with their own gallery page.
