import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Essential Guide to Suit Alterations | Santa Monica Tailor by Bello',
  description: 'Which suit alterations are worth doing, which are not, and what every man should know before taking a suit to a tailor.',
  alternates: { canonical: `${SITE_URL}/journal/suit-alterations-guide` },
  openGraph: {
    title: 'The Essential Guide to Suit Alterations | Santa Monica Tailor by Bello',
    description: 'Which suit alterations are worth doing, which are not, and what every man should know before taking a suit to a tailor.',
    url: `${SITE_URL}/journal/suit-alterations-guide`,
    type: 'article',
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-1-new-LDifmq4hwGPCCWMpwrNrUu.webp', width: 1200, height: 630, alt: 'The Essential Guide to Suit Alterations' }],
  },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Essential Guide to Suit Alterations',
  description: 'Which suit alterations are worth doing, which are not, and what every man should know before taking a suit to a tailor.',
  image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-1-new-LDifmq4hwGPCCWMpwrNrUu.webp',
  datePublished: '2024-01-20',
  dateModified: '2024-01-20',
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
  mainEntityOfPage: `${SITE_URL}/journal/suit-alterations-guide`,
};

const BODY = '<h2>Alterations Worth Doing</h2><p>Trouser hemming is the most common and straightforward alteration. Jacket waist suppression transforms the silhouette of an ill-fitting jacket. Sleeve shortening is simple and effective.</p><h2>Alterations to Approach with Caution</h2><p>Shoulder alterations are complex and expensive. If the shoulders do not fit, it is usually better to find a different suit. Letting out seams is only possible if there is sufficient seam allowance in the original garment.</p><h2>What to Tell Your Tailor</h2><p>Describe how the garment feels, not just how it looks. Tell your tailor how you intend to wear the suit. A good tailor will ask these questions, but volunteering the information ensures the alterations serve your actual needs.</p><h2>The Cost of Alterations</h2><p>As a general rule, the cost of alterations should not exceed the value of the garment. If alterations would cost more than the suit is worth, it may be time to invest in a better suit.</p>';

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '45vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-1-new-LDifmq4hwGPCCWMpwrNrUu.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.92) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 py-16 w-full">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <Link href="/journal" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Journal</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Alterations</span>
            </nav>
            <p className="text-eyebrow">Alterations</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}>
              The Essential Guide to Suit Alterations
            </h1>
            <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
              By Javier Bello · January 20, 2024
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
