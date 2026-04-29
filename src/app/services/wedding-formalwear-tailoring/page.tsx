import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Wedding and Formalwear Tailoring Santa Monica | Santa Monica Tailor by Bello',
  description: 'Expert wedding suit tailoring and formalwear alterations in Santa Monica. Ensure your wedding suit, tuxedo, or formal attire fits perfectly for the most important day of your life.',
  alternates: { canonical: `${SITE_URL}/services/wedding-formalwear-tailoring` },
  openGraph: {
    title: 'Wedding and Formalwear Tailoring Santa Monica | Santa Monica Tailor by Bello',
    description: 'Expert wedding suit tailoring and formalwear alterations in Santa Monica. Ensure your wedding suit, tuxedo, or formal attire fits perfectly for the most important day of your life.',
    url: `${SITE_URL}/services/wedding-formalwear-tailoring`,
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-wedding-new-PNcS2PsTMDqPHXCwBLpVrM.webp', width: 1200, height: 630, alt: 'Wedding and Formalwear Tailoring Santa Monica' }],
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding and Formalwear Tailoring',
  description: 'Expert wedding suit tailoring and formalwear alterations in Santa Monica.',
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
  url: `${SITE_URL}/services/wedding-formalwear-tailoring`,
};

const FEATURES = ["Bespoke wedding suit creation", "Off-the-rack wedding suit alterations", "Tuxedo and black-tie tailoring", "Groomsmen suit alterations", "Rush service available"];

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '50vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-wedding-new-PNcS2PsTMDqPHXCwBLpVrM.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.9) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(65% 0.005 240)' }}>Services</span>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Wedding and Formalwear Tailoring Santa Monica</span>
            </nav>
            <p className="text-eyebrow">Our Services</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
              Wedding and Formalwear Tailoring
            </h1>
          </div>
        </section>
        <section className="py-20 lg:py-28" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <p className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                  Your wedding day deserves a suit that fits as perfectly as the moment itself. At Santa Monica Tailor by Bello, we specialise in wedding suit tailoring and formalwear alterations.
                </p>
                <p className="text-gray-bello mt-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                  Whether you have purchased a suit off the rack, are working with a designer piece, or want a completely bespoke wedding suit crafted from scratch, we provide the expertise and attention to detail that the occasion demands. We recommend booking your wedding tailoring appointment at least 8 to 12 weeks before the event.
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
