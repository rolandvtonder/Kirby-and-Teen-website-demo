/**
 * Client reviews shown on /reviews/.
 *
 * Copy real reviews here word for word (with the client's permission),
 * for example from Facebook or Google:
 *
 *   {name: 'Sarah M.', text: 'Best nails I have ever had…', source: 'Facebook', service: 'Gel overlay'},
 *
 * Never write or edit reviews yourself — only publish what clients said.
 * While this list is empty, the page shows a link to the Facebook reviews.
 */
export type Review = {name: string; text: string; source: 'Facebook' | 'Google' | 'In person'; service?: string};

export const reviews: Review[] = [];

/** Paste your Google review link here once you have a Google Business Profile. */
export const googleReviewUrl = '';
