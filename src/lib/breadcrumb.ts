import { SITE_URL } from './constants';

type Crumb = { name: string; path: string };

/**
 * Build a BreadcrumbList JSON-LD object from a list of crumbs.
 * Pass the path relative to the site root, e.g. /services/custom-suits-santa-monica.
 * "Home" is automatically added as the first item.
 *
 * @example
 *   buildBreadcrumb([
 *     { name: 'Services', path: '/services' },
 *     { name: 'Custom Suits', path: '/services/custom-suits-santa-monica' },
 *   ])
 */
export function buildBreadcrumb(trail: Crumb[]) {
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ...trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}
