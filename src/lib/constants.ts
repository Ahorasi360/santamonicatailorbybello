export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.santamonicatailorbybello.com';
export const SITE_NAME = 'Santa Monica Tailor by Bello';
export const PHONE = '+1 (424) 301-0146';
export const PHONE_RAW = '+14243010146';
export const ADDRESS = '724 Santa Monica Blvd, Santa Monica, CA 90401';
export const EMAIL = 'hello@santamonicatailorbybello.com';
export const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=724+Santa+Monica+Blvd,+Santa+Monica,+CA+90401';
export const GOOGLE_REVIEW_URL = 'https://g.page/r/santamonicatailorbybello/review';

export const IMAGES = {
  hero: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-hero-new-KhZDc6CivnuzFN7S4bg9uJ.webp',
  hero2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-hero2-new-nDZxNhaZhZ69htr8fAZy5T.webp',
  javier: '/manus-storage/javier-real_32567fd2.webp',
  customSuits: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-custom-suits-new-3KsFwfc6jLqgK9QyGawHAT.webp',
  alterations: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-alterations-new-mc4PxTfLgVaYSLUXguwEEu.webp',
  wedding: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-wedding-new-PNcS2PsTMDqPHXCwBLpVrM.webp',
  garmentCare: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-garment-care-new-SbkXJCFLwSVdvdacopbh6Y.webp',
  portfolio1: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-1-new-LDifmq4hwGPCCWMpwrNrUu.webp',
  portfolio2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-2-new-EwJGzRgo5SAay7ZL9YDPvp.webp',
  portfolio3: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-3-new-KgqRQNqsNDPBPJV934SxTg.webp',
  bookingBg: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-booking-bg-new-5wUWh9qDSgxVhz6RDzPgAV.webp',
  feature: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-feature-new-jjtM5FFDVUwJHTWMQwPbu7.webp',
};

export const SERVICES_LIST = [
  { label: 'Custom Suits', href: '/services/custom-suits-santa-monica', img: IMAGES.customSuits },
  { label: 'Suit Alterations', href: '/services/suit-alterations-santa-monica', img: IMAGES.alterations },
  { label: 'Wedding & Formalwear', href: '/services/wedding-formalwear-tailoring', img: IMAGES.wedding },
  { label: 'Garment Care & Repairs', href: '/services/garment-care-repairs', img: IMAGES.garmentCare },
  { label: "Men's Tailoring", href: '/services/mens-tailoring-alterations', img: IMAGES.portfolio1 },
  { label: 'Luxury Brand Alterations', href: '/services/luxury-brand-alterations', img: IMAGES.portfolio2 },
];

export const AREAS_LIST = [
  { label: 'Santa Monica', href: '/areas/santa-monica-tailor', description: 'Our home studio on Santa Monica Blvd.' },
  { label: 'Beverly Hills', href: '/areas/beverly-hills-tailor', description: 'Serving Beverly Hills & Rodeo Drive clientele.' },
  { label: 'Brentwood', href: '/areas/brentwood-tailor', description: 'Convenient service for Brentwood residents.' },
  { label: 'Malibu', href: '/areas/malibu-tailor', description: 'Premium tailoring for Malibu clients.' },
  { label: 'Pacific Palisades', href: '/areas/pacific-palisades-tailor', description: 'Serving Pacific Palisades and surrounds.' },
  { label: 'Bel Air', href: '/areas/bel-air-tailor', description: 'Discreet, high-end service for Bel Air.' },
  { label: 'West Hollywood', href: '/areas/west-hollywood-tailor', description: 'Tailoring for West Hollywood clients.' },
  { label: 'Culver City', href: '/areas/culver-city-tailor', description: 'Expert alterations for Culver City.' },
];

export const HOURS = [
  { days: 'Monday – Friday', time: '8:30 am – 6:00 pm' },
  { days: 'Saturday', time: '9:00 am – 5:00 pm' },
  { days: 'Sunday', time: 'Closed' },
];

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  description: 'Expert tailoring and alterations in Santa Monica. Custom suits, suit alterations, wedding formalwear, and luxury garment care. Serving Beverly Hills, Brentwood, Malibu & the Westside since 2004.',
  url: SITE_URL,
  telephone: PHONE_RAW,
  email: EMAIL,
  image: IMAGES.hero,
  priceRange: '$$–$$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '724 Santa Monica Blvd',
    addressLocality: 'Santa Monica',
    addressRegion: 'CA',
    postalCode: '90401',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.0195,
    longitude: -118.4912,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
  ],
  sameAs: [
    'https://www.yelp.com/biz/santa-monica-tailor-by-bello',
    'https://www.instagram.com/santamonicatailorbybello',
    'https://www.facebook.com/santamonicatailorbybello',
  ],
  areaServed: [
    { '@type': 'City', name: 'Santa Monica' },
    { '@type': 'City', name: 'Beverly Hills' },
    { '@type': 'City', name: 'Brentwood' },
    { '@type': 'City', name: 'Malibu' },
    { '@type': 'City', name: 'Pacific Palisades' },
    { '@type': 'City', name: 'Bel Air' },
    { '@type': 'City', name: 'West Hollywood' },
    { '@type': 'City', name: 'Culver City' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tailoring Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Suits' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suit Alterations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding & Formalwear Tailoring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garment Care & Repairs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Men's Tailoring & Alterations" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Brand Alterations' } },
    ],
  },
};
