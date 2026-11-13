/** Absolute URL for a site path, keeping any sub-folder the site lives in. */
export const absUrl = (p: string, site: URL | string | undefined) => new URL(p.replace(/^\//, ''), site).href;

/** The current path without the sub-folder, e.g. "/services/". */
export const sitePath = (pathname: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return pathname.slice(base.length) || '/';
};

/** True for the GitHub Pages demo, which must not be indexed by Google. */
export const isDemo = import.meta.env.BASE_URL !== '/';
