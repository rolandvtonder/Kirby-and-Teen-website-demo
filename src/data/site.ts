/**
 * Business details used on every page, in the footer and in the Google
 * (schema.org) data. Edit here once and the whole site updates.
 */

export const site = {
  name: 'Kirby and Teen',
  legalName: 'Kirby and Teen Nail Boutique',
  tagline: 'Nail, lash, brow & massage boutique',
  established: 2014,
  phoneDisplay: '071 095 8105',
  phoneIntl: '+27710958105',
  whatsapp: '27710958105',
  email: 'kirbyandteen@gmail.com',
  address: {
    street: '123 Blaauwberg Road',
    suburb: 'Table View',
    city: 'Cape Town',
    region: 'Western Cape',
    postcode: '7460',
    country: 'ZA',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kirby+and+Teen+123+Blaauwberg+Road+Table+View+Cape+Town+7460',
  mapsEmbed: 'https://www.google.com/maps?q=123+Blaauwberg+Road,+Table+View,+Cape+Town,+7460&output=embed',
  facebook: 'https://www.facebook.com/kirbyandteen',
  facebookReviews: 'https://www.facebook.com/kirbyandteen/reviews',
  // TODO: confirm the Instagram handle.
  instagram: 'https://www.instagram.com/kirbyandteen/',
  recommend: {percent: 98, count: 33},
  nearby: ['Table View', 'Blouberg', 'Parklands', 'Sunningdale', 'Milnerton', 'West Beach', 'Big Bay', 'Melkbosstrand'],
};

/**
 * TODO before launch: these are PLACEHOLDER hours. Replace them with your real
 * opening hours. Once they are real, set `hoursConfirmed` to true so they are
 * also sent to Google in the page data (wrong hours there do real harm).
 */
export const hoursConfirmed = false;
export const hours: {days: string; time: string; schema?: {days: string[]; opens: string; closes: string}}[] = [
  {days: 'Monday – Friday', time: '08:30 – 17:30', schema: {days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '17:30'}},
  {days: 'Saturday', time: '08:30 – 14:00', schema: {days: ['Saturday'], opens: '08:30', closes: '14:00'}},
  {days: 'Sunday & public holidays', time: 'Closed'},
];

export const fullAddress = `${site.address.street}, ${site.address.suburb}, ${site.address.city}, ${site.address.postcode}`;

export const yearsOpen = new Date().getFullYear() - site.established;

/** WhatsApp link with an optional pre-filled message. */
export const whatsappLink = (message = 'Hi Kirby and Teen! I would like to book an appointment.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  {label: 'Home', href: '/'},
  {label: 'Services', href: '/services/'},
  {label: 'Gallery', href: '/gallery/'},
  {label: 'About us', href: '/about/'},
  {label: 'Reviews', href: '/reviews/'},
  {label: 'Specials', href: '/specials/'},
  {label: 'Book', href: '/book/'},
  {label: 'Contact', href: '/contact/'},
];
