import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Care for Your Suit: Storage, Cleaning and Maintenance | Santa Monica Tailor by Bello',
  description: 'The complete guide to suit care. How to store, clean, press, and maintain your suits so they last for decades.',
  alternates: { canonical: `${SITE_URL}/journal/suit-care-guide` },
  openGraph: {
    title: 'How to Care for Your Suit: Storage, Cleaning and Maintenance | Santa Monica Tailor by Bello',
    description: 'The complete guide to suit care. How to store, clean, press, and maintain your suits so they last for decades.',
    url: `${SITE_URL}/journal/suit-care-guide`,
    type: 'article',
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-garment-care-new-SbkXJCFLwSVdvdacopbh6Y.webp', width: 1200, height: 630, alt: 'How to Care for Your Suit: Storage, Cleaning and Maintenance' }],
  },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Care for Your Suit: Storage, Cleaning and Maintenance',
  description: 'The complete guide to suit care. How to store, clean, press, and maintain your suits so they last for decades.',
  image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-garment-care-new-SbkXJCFLwSVdvdacopbh6Y.webp',
  datePublished: '2023-10-08',
  dateModified: '2023-10-08',
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
  mainEntityOfPage: `${SITE_URL}/journal/suit-care-guide`,
};

const BODY = '<h2>Storage: The Foundation of Suit Care</h2><p>Always hang suits on wide, shaped wooden hangers that support the shoulders and maintain the jacket form. Never use wire hangers. Allow at least two inches of space between garments to prevent crushing and allow air circulation.</p><h2>Rotation: Give Your Suits a Rest</h2><p>Wool fibres need time to recover after wear. Ideally, rotate between at least three suits, allowing each to rest for at least 24 hours between wearings.</p><h2>Brushing: After Every Wear</h2><p>A soft-bristled clothes brush removes surface dust, lint, and debris before they work their way into the fabric fibres. This simple habit significantly extends the time between dry cleaning appointments.</p><h2>Dry Cleaning: Less is More</h2><p>Dry clean only when genuinely necessary, typically no more than once or twice per season. For spot cleaning, a damp cloth and gentle dabbing is often sufficient.</p><h2>Professional Pressing</h2><p>When pressing is required, a professional tailor will always produce better results than home ironing. If you must press at home, use a pressing cloth between the iron and the fabric.</p>';

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '45vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-garment-care-new-SbkXJCFLwSVdvdacopbh6Y.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.92) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 py-16 w-full">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <Link href="/journal" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Journal</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Care</span>
            </nav>
            <p className="text-eyebrow">Care</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}>
              How to Care for Your Suit: Storage, Cleaning and Maintenance
            </h1>
            <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
              By Javier Bello · October 8, 2023
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
