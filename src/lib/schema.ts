import {absUrl} from './url';
import {hours, hoursConfirmed, site} from '../data/site';
import {services} from '../data/services';
import type {Faq} from '../data/services';

/** schema.org data that helps Google show the boutique in local results. */
export function businessSchema(siteUrl: string) {
  const url = absUrl('/', siteUrl);
  return {
    '@context': 'https://schema.org',
    '@type': ['BeautySalon', 'NailSalon'],
    '@id': `${url}#business`,
    name: site.name,
    alternateName: site.legalName,
    description:
      'Kirby and Teen is a nail, lash, brow and massage boutique on Blaauwberg Road in Table View, Cape Town, offering gel and acrylic nails, nail art, pedicures, lash extensions, brow lamination, waxing and massage since 2014.',
    url,
    image: absUrl('/og-image.jpg', siteUrl),
    logo: absUrl('/apple-touch-icon.png', siteUrl),
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: '$$',
    foundingDate: String(site.established),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    areaServed: site.nearby.map((name) => ({'@type': 'Place', name: `${name}, Cape Town`})),
    hasMap: site.mapsUrl,
    sameAs: [site.facebook, site.instagram],
    ...(hoursConfirmed
      ? {
          openingHoursSpecification: hours
            .filter((h) => h.schema)
            .map((h) => ({'@type': 'OpeningHoursSpecification', dayOfWeek: h.schema!.days, opens: h.schema!.opens, closes: h.schema!.closes})),
        }
      : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Beauty treatments',
      itemListElement: services.map((s) => ({
        '@type': 'OfferCatalog',
        name: s.name,
        url: absUrl(`/services/${s.slug}/`, siteUrl),
        itemListElement: s.groups.flatMap((g) => g.items).map((t) => ({'@type': 'Offer', itemOffered: {'@type': 'Service', name: t.name, description: t.desc}})),
      })),
    },
  };
}

export function breadcrumbSchema(siteUrl: string, crumbs: {name: string; href: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({'@type': 'ListItem', position: i + 1, name: c.name, item: absUrl(c.href, siteUrl)})),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({'@type': 'Question', name: f.q, acceptedAnswer: {'@type': 'Answer', text: f.a}})),
  };
}
