import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { buildBreadcrumb } from '@/lib/breadcrumb';
import { SERVICES } from '@/lib/services-content';
import ServicePageBody, { buildFaqSchema } from '@/components/bello/ServicePageBody';

const service = SERVICES['mens-tailoring-alterations'];

export const metadata: Metadata = {
  title: 'Mens Tailoring and Alterations Santa Monica',
  description: 'Expert mens tailoring and alterations in Santa Monica. Trousers, shirts, jackets, and full wardrobe alterations by master tailor Javier Bello.',
  alternates: { canonical: `${SITE_URL}/services/mens-tailoring-alterations` },
  openGraph: {
    title: 'Mens Tailoring and Alterations Santa Monica',
    description: 'Expert mens tailoring and alterations in Santa Monica. Trousers, shirts, jackets, and full wardrobe alterations by master tailor Javier Bello.',
    url: `${SITE_URL}/services/mens-tailoring-alterations`,
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-1-new-LDifmq4hwGPCCWMpwrNrUu.webp', width: 1200, height: 630, alt: 'Mens Tailoring and Alterations Santa Monica' }],
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.serviceSchemaName,
  description: service.intro,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Santa Monica Tailor by Bello',
    url: SITE_URL,
    telephone: '+14243010146',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '724 Santa Monica Blvd',
      addressLocality: 'Santa Monica',
      addressRegion: 'CA',
      postalCode: '90401',
      addressCountry: 'US',
    },
  },
  areaServed: { '@type': 'City', name: 'Santa Monica' },
  url: `${SITE_URL}/services/mens-tailoring-alterations`,
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumb([{ name: 'Services', path: '/#services' }, { name: "Men's Tailoring & Alterations", path: '/services/mens-tailoring-alterations' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(service.faqs)) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '50vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-1-new-LDifmq4hwGPCCWMpwrNrUu.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.9) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(65% 0.005 240)' }}>Services</span>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Mens Tailoring and Alterations Santa Monica</span>
            </nav>
            <p className="text-eyebrow">Our Services</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
              Mens Tailoring and Alterations
            </h1>
          </div>
        </section>

        <ServicePageBody service={service} />
      </main>
      <Footer />
    </>
  );
}
