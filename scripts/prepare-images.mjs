/**
 * Turns the raw photos in ../media into the site's image library.
 *
 *   npm run images
 *
 * - Copies every photo listed in photo-manifest.json to src/assets/photos/
 *   under a descriptive, SEO-friendly file name (Astro then makes AVIF/WebP
 *   copies in several sizes at build time).
 * - Crops the "Meet the team" portraits above their baked-in text.
 * - Cuts the logo out of its white background (dark + light versions).
 * - Makes the social share image, Apple touch icon and favicon PNG.
 * - Writes src/data/photos.json (slug, alt, category, size) for the pages.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const media = path.resolve(root, '../media');
const manifest = JSON.parse(fs.readFileSync(path.join(here, 'photo-manifest.json'), 'utf8'));

const files = fs.readdirSync(media);
const find = (id) => {
  const f = files.find((n) => n.startsWith(id));
  if (!f) throw new Error(`No photo in ../media starting with ${id}`);
  return path.join(media, f);
};
const dir = (p) => (fs.mkdirSync(p, {recursive: true}), p);

const photosOut = dir(path.join(root, 'src/assets/photos'));
const teamOut = dir(path.join(root, 'src/assets/team'));
const brandOut = dir(path.join(root, 'src/assets/brand'));
const publicOut = dir(path.join(root, 'public'));
dir(path.join(root, 'src/data'));

// 1. Photos — capped at 1800px on the long side; quality kept high because
//    Astro re-encodes them anyway.
const data = [];
for (const p of manifest.photos) {
  const out = path.join(photosOut, `${p.slug}.jpg`);
  const info = await sharp(find(p.id))
    .rotate()
    .resize(1800, 1800, {fit: 'inside', withoutEnlargement: true})
    .jpeg({quality: 88, mozjpeg: true})
    .toFile(out);
  data.push({slug: p.slug, cat: p.cat, alt: p.alt, w: info.width, h: info.height});
}
fs.writeFileSync(path.join(root, 'src/data/photos.json'), JSON.stringify(data, null, 2));

// 2. Team portraits — keep the top band (faces) above the overlaid bio text.
for (const t of manifest.team) {
  const src = sharp(find(t.id));
  const {width, height} = await src.metadata();
  await src
    .extract({left: 0, top: Math.round(height * t.top), width, height: Math.round(height * t.h)})
    .jpeg({quality: 88, mozjpeg: true})
    .toFile(path.join(teamOut, `${t.slug}.jpg`));
}

// 3. Logo — crop the artwork, then use its darkness as the alpha channel so
//    it sits on any background. One ink version, one cream version.
const logoSrc = path.join(media, 'logo.jpg');
const crop = {left: 60, top: 262, width: 840, height: 418};
const alpha = await sharp(logoSrc).extract(crop).greyscale().negate().linear(1.25, -20).toColourspace('b-w').raw().toBuffer({resolveWithObject: true});
const tinted = async (rgb, file) => {
  const {width, height} = alpha.info;
  const px = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    px[i * 4] = rgb[0];
    px[i * 4 + 1] = rgb[1];
    px[i * 4 + 2] = rgb[2];
    px[i * 4 + 3] = alpha.data[i];
  }
  await sharp(px, {raw: {width, height, channels: 4}}).png().toFile(path.join(brandOut, file));
};
await tinted([26, 21, 18], 'logo-ink.png');
await tinted([246, 240, 230], 'logo-cream.png');

// 4. Social share image (1200×630): the boutique, dimmed, logo on top.
const cream = path.join(brandOut, 'logo-cream.png');
const logoForOg = await sharp(cream).resize(620).toBuffer();
await sharp(find('719127380'))
  .resize(1200, 630, {fit: 'cover'})
  .modulate({brightness: 0.55})
  .composite([{input: logoForOg, gravity: 'center'}])
  .jpeg({quality: 86})
  .toFile(path.join(publicOut, 'og-image.jpg'));

// 5. Icons: ink square with the cream logo.
const iconLogo = await sharp(cream).resize(150).toBuffer();
await sharp({create: {width: 180, height: 180, channels: 4, background: '#1a1512'}})
  .composite([{input: iconLogo, gravity: 'center'}])
  .png()
  .toFile(path.join(publicOut, 'apple-touch-icon.png'));

console.log(`Prepared ${data.length} photos, ${manifest.team.length} team portraits, logo, share image and icons.`);
