import type { Metadata } from 'next';
import Navbar from './Navbar';
import Footer from './Footer';
import InteriorPageHero from './InteriorPageHero';
import ServicePageBody, { buildFaqSchema } from './ServicePageBody';
import { SITE_URL } from '@/lib/constants';
import { buildBreadcrumb } from '@/lib/breadcrumb';
import { SERVICES } from '@/lib/services-content';
import { SERVICE_PAGES } from '@/lib/landing-pages';
import { SERVICE_IMAGES, type ServicePageSlug } from '@/lib/page-images';

export function serviceMetadata(slug: ServicePageSlug): Metadata {
  const page = SERVICE_PAGES[slug];
  const image = SERVICE_IMAGES[slug];
  const url = `${SITE_URL}/services/${slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title, description: page.description, url,
      images: [{ url: new URL(image.src, SITE_URL).toString(), width: image.width, height: image.height, alt: page.title }],
    },
  };
}

export default function ServiceLandingPage({ slug }: { slug: ServicePageSlug }) {
  const page = SERVICE_PAGES[slug];
  const service = SERVICES[slug];
  const path = `/services/${slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: service.serviceSchemaName, description: service.intro,
    provider: {
      '@type': 'LocalBusiness', name: 'Santa Monica Tailor by Bello', url: SITE_URL,
      telephone: '+14243010146',
      address: { '@type': 'PostalAddress', streetAddress: '724 Santa Monica Blvd', addressLocality: 'Santa Monica', addressRegion: 'CA', postalCode: '90401', addressCountry: 'US' },
    },
    areaServed: { '@type': 'City', name: 'Santa Monica' }, url: `${SITE_URL}${path}`,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumb([{ name: 'Services', path: '/#services' }, { name: page.breadcrumb, path }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(service.faqs)) }} />
      <Navbar />
      <main className="pt-[72px]">
        <InteriorPageHero title={page.heading} eyebrow="Our Services" sectionLabel="Services" sectionHref="/#services" currentLabel={page.breadcrumb} image={SERVICE_IMAGES[slug]} />
        <ServicePageBody service={service} />
      </main>
      <Footer />
    </>
  );
}
