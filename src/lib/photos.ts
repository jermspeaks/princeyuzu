import type { ImageMetadata } from 'astro';

// Drop your source PNGs/JPGs into src/assets/photos/ — Astro's build pipeline
// (Sharp under the hood) generates optimized, responsive WebP/AVIF output for
// every image rendered through <Image>/<Picture>. No manual conversion needed.
//
// Tip: prefix filenames with numbers (01-park.png, 02-nap.png, ...) to control
// the order they appear in the gallery.
const photoModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*.{png,jpg,jpeg,PNG,JPG,JPEG}',
  { eager: true },
);

export interface Photo {
  path: string;
  fileName: string;
  image: ImageMetadata;
}

export function getPhotos(): Photo[] {
  return Object.entries(photoModules)
    .map(([path, mod]) => ({
      path,
      fileName: path.split('/').pop() ?? path,
      image: mod.default,
    }))
    .sort((a, b) => a.fileName.localeCompare(b.fileName));
}

// Looks for a file whose name starts with the given prefix, e.g. "hero" for
// hero.png / hero.jpg. Returns undefined if no such photo has been added yet.
export function getPhotoByPrefix(prefix: string): Photo | undefined {
  return getPhotos().find((p) => p.fileName.toLowerCase().startsWith(prefix.toLowerCase()));
}

// Turns "01-park-day.png" into "park day" for a friendly default caption/alt.
export function humanize(fileName: string): string {
  return fileName
    .replace(/\.[^.]+$/, '')
    .replace(/^\d+[-_]?/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
}
