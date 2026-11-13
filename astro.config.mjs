import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// TODO before launch: replace with your real web address (no trailing slash).
// It feeds every canonical link, social-share tag, the sitemap and robots.txt.
// The GitHub Pages demo overrides it with SITE_URL / BASE_PATH (see
// .github/workflows/deploy.yml); a real domain needs neither.
const SITE_URL = process.env.SITE_URL || 'https://kirbyandteen.example';
const BASE_PATH = (process.env.BASE_PATH || '').replace(/\/$/, '');

/**
 * When the site lives in a sub-folder (GitHub Pages demo), prefix every
 * root-relative link in the built HTML with that folder, so the pages can
 * keep writing plain "/services/" links.
 */
const prefixBase = {
  name: 'prefix-base-path',
  hooks: {
    'astro:build:done': ({dir}) => {
      if (!BASE_PATH) return;
      const root = fileURLToPath(dir);
      const attr = new RegExp(`(\\s(?:href|src|action))="/(?!/)(?!${BASE_PATH.slice(1)}/)`, 'g');
      const walk = (d) => {
        for (const f of fs.readdirSync(d)) {
          const p = path.join(d, f);
          if (fs.statSync(p).isDirectory()) walk(p);
          else if (p.endsWith('.html')) fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace(attr, `$1="${BASE_PATH}/`));
        }
      };
      walk(root);
    },
  },
};

export default defineConfig({
  site: `${SITE_URL}${BASE_PATH}/`,
  base: BASE_PATH ? `${BASE_PATH}/` : undefined,
  trailingSlash: 'always',
  build: {format: 'directory'},
  integrations: [sitemap({filter: (page) => !page.includes('/404')}), prefixBase],
  image: {
    // Every photo ships as resized WebP; the originals stay in src/assets.
    responsiveStyles: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
