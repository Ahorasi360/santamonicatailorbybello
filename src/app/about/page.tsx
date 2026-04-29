import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { IMAGES, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Javier Bello | Master Tailor Santa Monica',
  description: 'Meet Javier Bello, master tailor and founder of Santa Monica Tailor by Bello. Over 20 years of experience crafting and perfecting garments for discerning clients across Los Angeles.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Javier Bello | Master Tailor Santa Monica',
    description: 'Meet Javier Bello, master tailor and founder of Santa Monica Tailor by Bello.',
    url: `${SITE_URL}/about`,
    images: [{ url: IMAGES.javier, width: 1200, height: 630, alt: 'Javier Bello — Master Tailor' }],
  },
};

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Javier Bello',
  jobTitle: 'Master Tailor',
  worksFor: { '@type': 'LocalBusiness', name: 'Santa Monica Tailor by Bello' },
  description: 'Master tailor with over 20 years of experience in bespoke tailoring and luxury garment alterations in Santa Monica, California.',
  image: IMAGES.javier,
};

const TIMELINE = [
  { year: '2004', event: 'Founded Santa Monica Tailor by Bello at 724 Santa Monica Blvd.' },
  { year: '2008', event: 'Expanded service area to Beverly Hills, Brentwood & Malibu clientele.' },
  { year: '2012', event: 'Became the preferred tailor for several luxury boutiques on the Westside.' },
  { year: '2018', event: 'Launched The Vision Consultation — private after-hours bespoke service.' },
  { year: '2024', event: 'Celebrating 20 years of precision tailoring in Santa Monica.' },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-20 lg:py-28" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative" style={{ aspectRatio: '3/4', maxHeight: '640px' }}>
                <img
                  src={IMAGES.javier}
                  alt="Javier Bello — Master Tailor at work in Santa Monica"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.92) contrast(1.05)' }}
                />
                <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: '1px solid oklch(73% 0.08 75 / 0.6)', borderLeft: '1px solid oklch(73% 0.08 75 / 0.6)' }} />
                <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: '1px solid oklch(73% 0.08 75 / 0.6)', borderRight: '1px solid oklch(73% 0.08 75 / 0.6)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.85), transparent)' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 400, color: 'oklch(95% 0.01 85)' }}>Javier Bello</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75 / 0.8)' }}>Master Tailor · Est. 2004</p>
                </div>
              </div>

              {/* Copy */}
              <div>
                <p className="text-eyebrow">Our Story</p>
                <span className="gold-rule-left mt-3" />
                <h1 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}>
                  The Art of the<br />
                  <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'oklch(73% 0.08 75)' }}>Perfect Fit</em>
                </h1>
                <p className="text-gray-bello mt-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.9 }}>
                  Santa Monica Tailor by Bello was founded in 2004 with a singular purpose: to bring the highest standards of tailoring craftsmanship to the Westside of Los Angeles. For over two decades, master tailor Javier Bello has dedicated his career to the art of the perfect fit.
                </p>
                <p className="text-gray-bello mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.9 }}>
                  With an eye trained on the finest European tailoring traditions and a deep understanding of how garments should move, drape, and complement the body, Javier has built a reputation as the trusted tailor for discerning clients across Santa Monica, Beverly Hills, Brentwood, Malibu, and the Westside.
                </p>
                <p className="text-gray-bello mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.9 }}>
                  Every garment that passes through our studio receives the same level of care — whether it is a bespoke custom suit or a precision alteration on a luxury ready-to-wear piece. The result is always the same: a garment that fits as if it were made for you alone.
                </p>
                <Link href="/booking" className="btn-gold mt-8 inline-flex">
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28" style={{ background: 'oklch(8% 0.005 240)', borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-eyebrow">Our Journey</p>
              <span className="gold-rule-center mt-3" />
              <h2 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400 }}>
                Twenty Years of Craft
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-[80px] top-0 bottom-0 w-px" style={{ background: 'oklch(73% 0.08 75 / 0.15)' }} />
              <div className="flex flex-col gap-10">
                {TIMELINE.map(({ year, event }) => (
                  <div key={year} className="flex items-start gap-8">
                    <div className="w-[80px] flex-shrink-0 text-right">
                      <span className="font-serif text-gold" style={{ fontSize: '1.1rem', fontWeight: 400 }}>{year}</span>
                    </div>
                    <div className="relative flex-1 pl-8">
                      <div className="absolute left-0 top-2 w-2 h-2 rounded-full" style={{ background: 'oklch(73% 0.08 75)', transform: 'translateX(-50%)' }} />
                      <p className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.7 }}>{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 lg:py-28" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
            <p className="text-eyebrow">Our Philosophy</p>
            <span className="gold-rule-center mt-3" />
            <blockquote className="font-serif text-ivory mt-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5 }}>
              &ldquo;A well-fitted garment is not a luxury. It is a statement of self-respect — and the foundation of every great impression.&rdquo;
            </blockquote>
            <p className="text-gold mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              — Javier Bello
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
