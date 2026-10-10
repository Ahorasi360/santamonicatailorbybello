/** Locally owned image files. Intrinsic dimensions are verified against the WebP assets. */
export type BelloPageImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const portrait = (src: string, alt: string): BelloPageImage => ({ src, alt, width: 1200, height: 1500 });
const hero: BelloPageImage = { src: '/bello-hero-new.webp', width: 2400, height: 1350, alt: 'Tailoring worktable with a jacket on a dress form' };
const hero2: BelloPageImage = { src: '/bello-hero2-new.webp', width: 2400, height: 1350, alt: 'Tailored jackets and fabrics in a warm tailoring interior' };
const feature: BelloPageImage = { src: '/bello-feature-new.webp', width: 1600, height: 1200, alt: 'Close-up of hand stitching and finishing a tailored garment' };
const custom = portrait('/bello-custom-suits-new.webp', 'Charcoal bespoke jacket on a dress form');
const alterations = portrait('/bello-alterations-new.webp', 'Hands carefully adjusting the lapel of a tailored jacket');
const wedding = portrait('/bello-wedding-new.webp', 'Ivory formal jacket with a boutonniere');
const garmentCare = portrait('/bello-garment-care-new.webp', 'Steam pressing a garment on a tailoring worktable');
const mens = portrait('/bello-portfolio-1-new.webp', 'Double-breasted charcoal suit with tailored proportions');
const luxury = portrait('/bello-portfolio-2-new.webp', 'Blue tailored jacket showing fabric, stitching, and button details');
const fabrics = portrait('/bello-portfolio-3-new.webp', 'Suiting fabrics, thread, and tailoring tools arranged on a worktable');

export const SERVICE_IMAGES = {
  'custom-suits-santa-monica': custom,
  'suit-alterations-santa-monica': alterations,
  'wedding-formalwear-tailoring': wedding,
  'garment-care-repairs': garmentCare,
  'mens-tailoring-alterations': mens,
  'luxury-brand-alterations': luxury,
  'womens-tailoring-alterations': feature,
} satisfies Record<string, BelloPageImage>;

// These illustrate tailoring services, not photographs of the named neighborhoods.
export const AREA_IMAGES = {
  'santa-monica-tailor': hero,
  'beverly-hills-tailor': luxury,
  'brentwood-tailor': custom,
  'malibu-tailor': hero2,
  'pacific-palisades-tailor': wedding,
  'bel-air-tailor': mens,
  'west-hollywood-tailor': fabrics,
  'culver-city-tailor': feature,
} satisfies Record<string, BelloPageImage>;

export type ServicePageSlug = keyof typeof SERVICE_IMAGES;
export type AreaPageSlug = keyof typeof AREA_IMAGES;

export function getAreaImage(href: string): BelloPageImage {
  const slug = href.replace(/^\/areas\//, '');
  return (AREA_IMAGES as Record<string, BelloPageImage>)[slug] ?? hero;
}
