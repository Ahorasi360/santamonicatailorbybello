import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL, IMAGES, SERVICES_LIST } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tailor Pacific Palisades | Santa Monica Tailor by Bello',
  description: 'Expert tailoring and alterations serving Pacific Palisades. Custom suits, suit alterations, and luxury garment care for Pacific Palisades residents.',
  alternates: { canonical: `${SITE_URL}/areas/pacific-palisades-tailor` },
  openGraph: {
    title: 'Tailor Pacific Palisades | Santa Monica Tailor by Bello',
    description: 'Expert tailoring and alterations serving Pacific Palisades. Custom suits, suit alterations, and luxury garment care for Pacific Palisades residents.',
    url: `${SITE_URL}/areas/pacific-palisades-tailor`,
    images: [{ url: IMAGES.hero, width: 1200, height: 630, alt: 'Santa Monica Tailor by Bello serving Pacific Palisades' }],
  },
};

const LOCAL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Santa Monica Tailor by Bello',
  description: 'Expert tailoring and alterations serving Pacific Palisades. Custom suits, suit alterations, and luxury garment care for Pacific Palisades residents.',
  url: `${SITE_URL}/areas/pacific-palisades-tailor`,
  telephone: '+14243010146',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '724 Santa Monica Blvd',
    addressLocality: 'Santa Monica',
    addressRegion: 'CA',
    postalCode: '90401',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Pacific Palisades' },
};

export default function LocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '45vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(${IMAGES.hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.92) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(65% 0.005 240)' }}>Areas We Serve</span>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Pacific Palisades</span>
            </nav>
            <p className="text-eyebrow">Serving Pacific Palisades</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
              Tailor in Pacific Palisades
            </h1>
          </div>
        </section>
        <section className="py-20 lg:py-28" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-ivory" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400 }}>
                  Expert Tailoring Serving Pacific Palisades
                </h2>
                <p className="text-gray-bello mt-5" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                  Santa Monica Tailor by Bello has been serving clients from Pacific Palisades and the surrounding areas since 2004. Our studio at 724 Santa Monica Blvd is conveniently located for Pacific Palisades residents seeking expert tailoring, suit alterations, custom suits, and luxury garment care.
                </p>
                <p className="text-gray-bello mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                  Pacific Palisades clients find our Santa Monica studio conveniently located, just a short drive via Sunset or PCH.
                </p>
                <p className="text-gray-bello mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                  Whether you need a suit altered, a bespoke garment created, or expert care for a luxury piece, master tailor Javier Bello brings over 20 years of experience to every appointment.
                </p>
                <Link href="/booking" className="btn-gold mt-8 inline-flex">
                  Book an Appointment
                </Link>
              </div>
              <div>
                <div className="p-8" style={{ border: '1px solid oklch(95% 0.01 85 / 0.07)', background: 'oklch(10% 0.005 240)' }}>
                  <p className="text-eyebrow mb-4">Our Services</p>
                  <ul className="flex flex-col gap-3">
                    {SERVICES_LIST.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="no-underline flex items-start gap-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'oklch(65% 0.005 240)' }}>
                          <span className="text-gold mt-0.5" style={{ fontSize: '0.45rem', flexShrink: 0 }}>◆</span>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
                    <p className="text-eyebrow mb-2">Studio Address</p>
                    <p className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', lineHeight: 1.7 }}>724 Santa Monica Blvd<br />Santa Monica, CA 90401</p>
                    <a href="tel:+14243010146" className="no-underline mt-3 block" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}>
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
