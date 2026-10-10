import type { Metadata } from 'next';
import Navbar from './Navbar';
import Footer from './Footer';
import InteriorPageHero from './InteriorPageHero';
import AreaPageBody from './AreaPageBody';
import { buildFaqSchema } from './ServicePageBody';
import { SITE_URL } from '@/lib/constants';
import { buildBreadcrumb } from '@/lib/breadcrumb';
import { AREAS } from '@/lib/areas-content';
import { AREA_PAGES } from '@/lib/landing-pages';
import { AREA_IMAGES, type AreaPageSlug } from '@/lib/page-images';

export function areaMetadata(slug: AreaPageSlug): Metadata {
  const page = AREA_PAGES[slug];
  const image = AREA_IMAGES[slug];
  const title = `Tailor ${page.name}`;
  const url = `${SITE_URL}/areas/${slug}`;
  return {
    title, description: page.description, alternates: { canonical: url },
    openGraph: {
      title, description: page.description, url,
      images: [{ url: new URL(image.src, SITE_URL).toString(), width: image.width, height: image.height, alt: `Santa Monica Tailor by Bello serving ${page.name}` }],
    },
  };
}

export default function AreaLandingPage({ slug }: { slug: AreaPageSlug }) {
  const page = AREA_PAGES[slug];
  const area = AREAS[slug];
  const path = `/areas/${slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'Santa Monica Tailor by Bello', description: page.description,
    url: `${SITE_URL}${path}`, telephone: '+14243010146',
    address: { '@type': 'PostalAddress', streetAddress: '724 Santa Monica Blvd', addressLocality: 'Santa Monica', addressRegion: 'CA', postalCode: '90401', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: page.name },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumb([{ name: 'Areas We Serve', path: '/#areas' }, { name: page.name, path }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(area.faqs)) }} />
      <Navbar />
      <main className="pt-[72px]">
        <InteriorPageHero title={`Tailor in ${page.name}`} eyebrow={`Serving ${page.name}`} sectionLabel="Areas We Serve" sectionHref="/#areas" currentLabel={page.name} image={AREA_IMAGES[slug]} />
        <AreaPageBody area={area} />
      </main>
      <Footer />
    </>
  );
}
