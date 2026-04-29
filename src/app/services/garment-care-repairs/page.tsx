import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Garment Care and Repairs Santa Monica | Santa Monica Tailor by Bello',
  description: 'Expert garment care and repairs in Santa Monica. Restore, repair, and preserve your finest garments with the care they deserve.',
  alternates: { canonical: `${SITE_URL}/services/garment-care-repairs` },
  openGraph: {
    title: 'Garment Care and Repairs Santa Monica | Santa Monica Tailor by Bello',
    description: 'Expert garment care and repairs in Santa Monica. Restore, repair, and preserve your finest garments with the care they deserve.',
    url: `${SITE_URL}/services/garment-care-repairs`,
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-garment-care-new-SbkXJCFLwSVdvdacopbh6Y.webp', width: 1200, height: 630, alt: 'Garment Care and Repairs Santa Monica' }],
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garment Care and Repairs',
  description: 'Expert garment care and repairs in Santa Monica. Restore, repair, and preserve your finest garments.',
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
  url: `${SITE_URL}/services/garment-care-repairs`,
};

const FEATURES = ["Button replacement and reinforcement", "Zipper repair and replacement", "Lining replacement", "Reweaving and invisible mending", "Cuff and collar restoration"];

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '50vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-garment-care-new-SbkXJCFLwSVdvdacopbh6Y.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.9) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(65% 0.005 240)' }}>Services</span>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Garment Care and Repairs Santa Monica</span>
            </nav>
            <p className="text-eyebrow">Our Services</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
              Garment Care and Repairs
            </h1>
          </div>
        </section>
        <section className="py-20 lg:py-28" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <p className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                  The finest garments deserve the finest care. At Santa Monica Tailor by Bello, our garment care and repair services are designed to restore, preserve, and extend the life of your most valued pieces.
                </p>
                <p className="text-gray-bello mt-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                  Our repair services address everything from minor damage — loose buttons, frayed cuffs, broken zippers — to more complex restorations such as reweaving, relining, and structural repairs. We treat every garment with the same respect and precision that went into its creation.
                </p>
                <Link href="/booking" className="btn-gold mt-8 inline-flex">
                  Book an Appointment
                </Link>
              </div>
              <div>
                <div className="p-8" style={{ border: '1px solid oklch(95% 0.01 85 / 0.07)', background: 'oklch(10% 0.005 240)' }}>
                  <p className="text-eyebrow mb-4">What is Included</p>
                  <ul className="flex flex-col gap-3">
                    {FEATURES.map((f: string) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="text-gold mt-0.5" style={{ fontSize: '0.45rem', flexShrink: 0 }}>◆</span>
                        <span className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', lineHeight: 1.6 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
                    <a href="tel:+14243010146" className="no-underline" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}>
                      +1 (424) 301-0146
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
