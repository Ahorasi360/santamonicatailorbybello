import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Wedding Suit Timeline: When to Start and What to Expect | Santa Monica Tailor by Bello',
  description: 'A practical guide to planning your wedding suit with timelines for bespoke, made-to-measure, and alterations.',
  alternates: { canonical: `${SITE_URL}/journal/wedding-suit-timeline` },
  openGraph: {
    title: 'The Wedding Suit Timeline: When to Start and What to Expect | Santa Monica Tailor by Bello',
    description: 'A practical guide to planning your wedding suit with timelines for bespoke, made-to-measure, and alterations.',
    url: `${SITE_URL}/journal/wedding-suit-timeline`,
    type: 'article',
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-wedding-new-PNcS2PsTMDqPHXCwBLpVrM.webp', width: 1200, height: 630, alt: 'The Wedding Suit Timeline: When to Start and What to Expect' }],
  },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Wedding Suit Timeline: When to Start and What to Expect',
  description: 'A practical guide to planning your wedding suit with timelines for bespoke, made-to-measure, and alterations.',
  image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-wedding-new-PNcS2PsTMDqPHXCwBLpVrM.webp',
  datePublished: '2023-11-12',
  dateModified: '2023-11-12',
  author: {
    '@type': 'Person',
    name: 'Javier Bello',
    jobTitle: 'Master Tailor',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Santa Monica Tailor by Bello',
    url: SITE_URL,
  },
  mainEntityOfPage: `${SITE_URL}/journal/wedding-suit-timeline`,
};

const BODY = '<h2>Bespoke Wedding Suit: Start 4-6 Months Out</h2><p>A fully bespoke wedding suit requires the most lead time, typically 4 to 6 months from first consultation to final fitting. This allows time for pattern drafting, fabric sourcing, construction, and multiple fitting appointments.</p><h2>Made-to-Measure: Start 2-3 Months Out</h2><p>Made-to-measure wedding suits typically require 8 to 12 weeks from order to delivery, plus time for any final alterations.</p><h2>Off-the-Rack with Alterations: Start 6-8 Weeks Out</h2><p>If you are purchasing an off-the-rack suit and having it altered, 6 to 8 weeks before the wedding is the ideal time to begin.</p><h2>What to Bring to Your First Appointment</h2><p>Bring the shoes you intend to wear on the day. If you have a specific shirt and tie in mind, bring those too. Reference images of the style you are aiming for are always helpful.</p>';

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '45vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-wedding-new-PNcS2PsTMDqPHXCwBLpVrM.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.92) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 py-16 w-full">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <Link href="/journal" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Journal</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Wedding</span>
            </nav>
            <p className="text-eyebrow">Wedding</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}>
              The Wedding Suit Timeline: When to Start and What to Expect
            </h1>
            <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
              By Javier Bello · November 12, 2023
            </p>
          </div>
        </section>
        <article className="py-20 lg:py-28">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div
              className="prose-bello"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                lineHeight: 1.9,
                color: 'oklch(65% 0.005 240)',
              }}
              dangerouslySetInnerHTML={{ __html: BODY }}
            />
            <div className="mt-16 pt-10" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
              <p className="text-eyebrow mb-4">Ready to achieve the perfect fit?</p>
              <Link href="/booking" className="btn-gold inline-flex">
                Book an Appointment
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
