# Kirby and Teen — website

Multi-page website for Kirby and Teen, the nail, lash, brow and massage boutique on Blaauwberg Road, Table View, Cape Town.

Built with [Astro](https://astro.build) (one real HTML page per section, good for SEO), Tailwind CSS and Lenis smooth scrolling.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run lint     # type check
```

## Edit the content

| What | Where |
| --- | --- |
| Phone, address, hours, socials, menu | `src/data/site.ts` |
| Services and treatments | `src/data/services.ts` |
| Team bios | `src/data/team.ts` |
| Client reviews (paste real ones only) | `src/data/reviews.ts` |
| Current special | `src/pages/specials.astro` |
| Web address (domain) | `astro.config.mjs` |

Photos live in `src/assets/photos/`. `npm run images` regenerates them from the original photos in a `../media` folder next to this project, using `scripts/photo-manifest.json` for file names and alt text.

## Before launch

- Replace the placeholder opening hours in `src/data/site.ts`, then set `hoursConfirmed = true`.
- Set the real domain in `astro.config.mjs`.
- Confirm the Instagram handle, the lash/brow/waxing treatments and the current special.

## Demo

Every push to `main` publishes a demo to GitHub Pages (`.github/workflows/deploy.yml`). The demo is marked `noindex` so it never competes with the real site in Google.
