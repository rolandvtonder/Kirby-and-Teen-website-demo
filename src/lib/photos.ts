import type {ImageMetadata} from 'astro';
import list from '../data/photos.json';

export type Category = 'salon' | 'art' | 'nude' | 'colour' | 'lashbrow' | 'promo';
export type Photo = {slug: string; cat: Category; alt: string; w: number; h: number; src: ImageMetadata};

const files = import.meta.glob<{default: ImageMetadata}>('../assets/photos/*.jpg', {eager: true});
const teamFiles = import.meta.glob<{default: ImageMetadata}>('../assets/team/*.jpg', {eager: true});

export const photos: Photo[] = list.map((p) => {
  const file = files[`../assets/photos/${p.slug}.jpg`];
  if (!file) throw new Error(`Missing photo file for ${p.slug} — run npm run images`);
  return {...p, cat: p.cat as Category, src: file.default};
});

export function photo(slug: string): Photo {
  const p = photos.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown photo slug: ${slug}`);
  return p;
}

export function teamPhoto(slug: string): ImageMetadata {
  const file = teamFiles[`../assets/team/${slug}.jpg`];
  if (!file) throw new Error(`Missing team photo: ${slug}`);
  return file.default;
}

export const galleryCategories: {id: Category; label: string}[] = [
  {id: 'art', label: 'Nail art'},
  {id: 'nude', label: 'French & nudes'},
  {id: 'colour', label: 'Colour'},
  {id: 'lashbrow', label: 'Lashes & brows'},
  {id: 'salon', label: 'The boutique'},
];

/**
 * object-position that centres a face in a portrait card. The team crops are
 * much wider than the 4:5 cards, so "center" would often show only a wall:
 * work out how much of the photo the card shows, then slide that window so
 * the face sits in its middle.
 */
export function facePosition(img: ImageMetadata, face = 0.5, cardAspect = 4 / 5): string {
  const visible = Math.min(1, (cardAspect * img.height) / img.width);
  if (visible >= 1) return '50% 30%';
  const left = Math.min(Math.max(face - visible / 2, 0), 1 - visible);
  return `${((left / (1 - visible)) * 100).toFixed(1)}% 30%`;
}
