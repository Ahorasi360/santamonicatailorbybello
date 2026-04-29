import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Custom Suits Santa Monica | Santa Monica Tailor by Bello',
  description: 'Bespoke custom suits crafted to your exact measurements in Santa Monica. From fabric selection to final fitting, every detail is handled by master tailor Javier Bello.',
  alternates: { canonical: `${SITE_URL}/services/custom-suits-santa-monica` },
  openGraph: {
    title: 'Custom Suits Santa Monica | Santa Monica Tailor by Bello',
    description: 'Bespoke custom suits crafted to your exact measurements in Santa Monica. From fabric selection to final fitting, every detail is handled by master tailor Javier Bello.',
    url: `${SITE_URL}/services/custom-suits-santa-monica`,
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-custom-suits-new-3KsFwfc6jLqgK9QyGawHAT.webp', width: 1200, height: 630, alt: 'Custom Suits Santa Monica' }],
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Suits',
  description: 'Bespoke custom suits crafted to exact measurements by master tailor Javier Bello in Santa Monica, California.',
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
  url: `${SITE_URL}/services/custom-suits-santa-monica`,
};

const FEATURES = ["Full bespoke pattern creation", "Premium Italian and English fabric selection", "Hand-stitched lapels and buttonholes", "Multiple fitting appointments", "Lifetime alteration guarantee"];

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '50vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-custom-suits-new-3KsFwfc6jLqgK9QyGawHAT.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.9) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(65% 0.005 240)' }}>Services</span>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Custom Suits Santa Monica</span>
            </nav>
            <p className="text-eyebrow">Our Services</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
              Custom Suits in Santa Monica
            </h1>
          </div>
        </section>
        <section className="py-20 lg:py-28" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <p className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                  A custom suit is more than clothing — it is an investment in how you present yourself to the world. At Santa Monica Tailor by Bello, every custom suit begins with a detailed consultation to understand your lifestyle, preferences, and the occasions you dress for.
                </p>
                <p className="text-gray-bello mt-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                  Master tailor Javier Bello guides you through fabric selection from the world's finest mills — Loro Piana, Dormeuil, and Holland and Sherry — before taking precise measurements and crafting a pattern unique to your body. Each suit is constructed with hand-stitched details, floating canvas construction, and multiple fittings to ensure a result that is truly exceptional.
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
