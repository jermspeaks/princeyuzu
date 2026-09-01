import type { ImageMetadata } from 'astro';
import type { Photo } from './photos';

// Friends' photos live in their own per-friend folders, separate from
// Yuzu's own photos in src/assets/photos/ — e.g. src/assets/friends/biscuit/*.jpg.
// Astro's build pipeline (Sharp under the hood) generates optimized,
// responsive WebP/AVIF output for every image rendered through
// <Image>/<Picture>, same as the main gallery.
const friendPhotoModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/friends/*/*.{png,jpg,jpeg,PNG,JPG,JPEG}',
  { eager: true },
);

// Returns the photos for one friend, sorted alphabetically by filename.
// Prefix filenames with numbers (e.g. 01-park.jpg) to control the order.
export function getFriendPhotos(slug: string): Photo[] {
  return Object.entries(friendPhotoModules)
    .filter(([path]) => path.startsWith(`/src/assets/friends/${slug}/`))
    .map(([path, mod]) => ({
      path,
      fileName: path.split('/').pop() ?? path,
      image: mod.default,
    }))
    .sort((a, b) => a.fileName.localeCompare(b.fileName));
}
