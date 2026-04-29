import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.santamonicatailorbybello.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/booking`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    'custom-suits-santa-monica',
    'suit-alterations-santa-monica',
    'wedding-formalwear-tailoring',
    'garment-care-repairs',
    'mens-tailoring-alterations',
    'luxury-brand-alterations',
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const locationPages: MetadataRoute.Sitemap = [
    'santa-monica-tailor',
    'beverly-hills-tailor',
    'brentwood-tailor',
    'malibu-tailor',
    'pacific-palisades-tailor',
    'bel-air-tailor',
    'west-hollywood-tailor',
    'culver-city-tailor',
  ].map((slug) => ({
    url: `${BASE_URL}/areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = [
    'how-a-suit-should-fit',
    'bespoke-vs-made-to-measure',
    'suit-alterations-guide',
    'fabric-guide-wool-seasons',
    'wedding-suit-timeline',
    'suit-care-guide',
  ].map((slug) => ({
    url: `${BASE_URL}/journal/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
