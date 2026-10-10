import type { AreaPageSlug, ServicePageSlug } from './page-images';

type ServiceDefinition = { title: string; heading: string; breadcrumb: string; description: string };

// Existing route titles, copy, and breadcrumb labels retained from the original pages.
export const SERVICE_PAGES = {
  'custom-suits-santa-monica': {
    title: 'Custom Suits Santa Monica', heading: 'Custom Suits in Santa Monica', breadcrumb: 'Custom Suits',
    description: 'Bespoke custom suits crafted to your exact measurements in Santa Monica. From fabric selection to final fitting, every detail is handled by master tailor Javier Bello.',
  },
  'suit-alterations-santa-monica': {
    title: 'Suit Alterations Santa Monica', heading: 'Expert Suit Alterations in Santa Monica', breadcrumb: 'Suit Alterations',
    description: 'Professional suit alterations in Santa Monica. Jacket tapering, trouser hemming, sleeve shortening, and full suit resizing by master tailor Javier Bello.',
  },
  'wedding-formalwear-tailoring': {
    title: 'Wedding and Formalwear Tailoring Santa Monica', heading: 'Wedding and Formalwear Tailoring', breadcrumb: 'Wedding & Formalwear',
    description: 'Expert wedding suit tailoring and formalwear alterations in Santa Monica. Ensure your wedding suit, tuxedo, or formal attire fits perfectly for the most important day of your life.',
  },
  'garment-care-repairs': {
    title: 'Garment Care and Repairs Santa Monica', heading: 'Garment Care and Repairs', breadcrumb: 'Garment Care & Repairs',
    description: 'Expert garment care and repairs in Santa Monica. Restore, repair, and preserve your finest garments with the care they deserve.',
  },
  'mens-tailoring-alterations': {
    title: 'Mens Tailoring and Alterations Santa Monica', heading: 'Mens Tailoring and Alterations', breadcrumb: "Men's Tailoring & Alterations",
    description: 'Expert mens tailoring and alterations in Santa Monica. Trousers, shirts, jackets, and full wardrobe alterations by master tailor Javier Bello.',
  },
  'luxury-brand-alterations': {
    title: 'Luxury Brand Alterations Santa Monica', heading: 'Luxury Brand Alterations', breadcrumb: 'Luxury Brand Alterations',
    description: 'Expert luxury brand alterations in Santa Monica — Brioni, Zegna, Loro Piana, Tom Ford, Kiton, Hermès, and more. Precision work that preserves original construction.',
  },
  'womens-tailoring-alterations': {
    title: "Women's Tailoring & Alterations Santa Monica", heading: "Women's Tailoring & Alterations", breadcrumb: "Women's Tailoring & Alterations",
    description: 'Expert women',
  },
} satisfies Record<ServicePageSlug, ServiceDefinition>;

export const AREA_PAGES = {
  'santa-monica-tailor': { name: 'Santa Monica', description: 'Expert tailoring and alterations in Santa Monica. Custom suits, suit alterations, wedding formalwear, and luxury garment care at 724 Santa Monica Blvd.' },
  'beverly-hills-tailor': { name: 'Beverly Hills', description: 'Expert tailoring and alterations serving Beverly Hills. Custom suits, luxury brand alterations, and precision tailoring for Beverly Hills clientele.' },
  'brentwood-tailor': { name: 'Brentwood', description: 'Expert tailoring and alterations serving Brentwood, Los Angeles. Custom suits, suit alterations, and luxury garment care for Brentwood residents.' },
  'malibu-tailor': { name: 'Malibu', description: 'Expert tailoring and alterations serving Malibu. Custom suits, luxury brand alterations, and premium tailoring for Malibu residents.' },
  'pacific-palisades-tailor': { name: 'Pacific Palisades', description: 'Expert tailoring and alterations serving Pacific Palisades. Custom suits, suit alterations, and luxury garment care for Pacific Palisades residents.' },
  'bel-air-tailor': { name: 'Bel Air', description: 'Expert tailoring and alterations serving Bel Air. Discreet, high-end tailoring and luxury brand alterations for Bel Air residents.' },
  'west-hollywood-tailor': { name: 'West Hollywood', description: 'Expert tailoring and alterations serving West Hollywood. Custom suits, suit alterations, and luxury garment care for West Hollywood residents.' },
  'culver-city-tailor': { name: 'Culver City', description: 'Expert tailoring and alterations serving Culver City. Custom suits, suit alterations, and luxury garment care for Culver City residents.' },
} satisfies Record<AreaPageSlug, { name: string; description: string }>;
