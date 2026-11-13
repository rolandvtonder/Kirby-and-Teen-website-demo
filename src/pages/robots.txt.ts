import type {APIRoute} from 'astro';
import {absUrl, isDemo} from '../lib/url';

// The GitHub Pages demo is kept out of Google so it never competes with the real site.
export const GET: APIRoute = ({site}) =>
  new Response(`User-agent: *\n${isDemo ? 'Disallow: /' : 'Allow: /'}\n\nSitemap: ${absUrl('sitemap-index.xml', site)}\n`, {
    headers: {'Content-Type': 'text/plain; charset=utf-8'},
  });
