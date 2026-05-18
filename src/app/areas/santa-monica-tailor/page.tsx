import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL, IMAGES } from '@/lib/constants';
import { buildBreadcrumb } from '@/lib/breadcrumb';
import { AREAS } from '@/lib/areas-content';
import AreaPageBody from '@/components/bello/AreaPageBody';
import { buildFaqSchema } from '@/components/bello/ServicePageBody';

const area = AREAS['santa-monica-tailor'];

export const metadata: Metadata = {
  title: 'Tailor Santa Monica',
  description: 'Expert tailoring and alterations in Santa Monica. Custom suits, suit alterations, wedding formalwear, and luxury garment care at 724 Santa Monica Blvd.',
  alternates: { canonical: `${SITE_URL}/areas/santa-monica-tailor` },
  openGraph: {
    title: 'Tailor Santa Monica',
    description: 'Expert tailoring and alterations in Santa Monica. Custom suits, suit alterations, wedding formalwear, and luxury garment care at 724 Santa Monica Blvd.',
    url: `${SITE_URL}/areas/santa-monica-tailor`,
    images: [{ url: IMAGES.hero, width: 1200, height: 630, alt: 'Santa Monica Tailor by Bello serving Santa Monica' }],
  },
};

const LOCAL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Santa Monica Tailor by Bello',
  description: 'Expert tailoring and alterations in Santa Monica. Custom suits, suit alterations, wedding formalwear, and luxury garment care at 724 Santa Monica Blvd.',
  url: `${SITE_URL}/areas/santa-monica-tailor`,
  telephone: '+14243010146',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '724 Santa Monica Blvd',
    addressLocality: 'Santa Monica',
    addressRegion: 'CA',
    postalCode: '90401',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Santa Monica' },
};

export default function LocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumb([{ name: 'Areas We Serve', path: '/#areas' }, { name: 'Santa Monica', path: '/areas/santa-monica-tailor' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(area.faqs)) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="py-20" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(65% 0.005 240)' }}>Areas We Serve</span>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Santa Monica</span>
            </nav>
            <p className="text-eyebrow">Serving Santa Monica</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
              Tailor in Santa Monica
            </h1>
          </div>
        </section>

        <AreaPageBody area={area} />
      </main>
      <Footer />
    </>
  );
}
