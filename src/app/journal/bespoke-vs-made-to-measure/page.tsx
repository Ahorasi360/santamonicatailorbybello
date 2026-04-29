import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Bespoke vs Made-to-Measure: What is the Difference? | Santa Monica Tailor by Bello',
  description: 'Understanding the difference between bespoke, made-to-measure, and off-the-rack tailoring and which is right for you.',
  alternates: { canonical: `${SITE_URL}/journal/bespoke-vs-made-to-measure` },
  openGraph: {
    title: 'Bespoke vs Made-to-Measure: What is the Difference? | Santa Monica Tailor by Bello',
    description: 'Understanding the difference between bespoke, made-to-measure, and off-the-rack tailoring and which is right for you.',
    url: `${SITE_URL}/journal/bespoke-vs-made-to-measure`,
    type: 'article',
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-alterations-new-mc4PxTfLgVaYSLUXguwEEu.webp', width: 1200, height: 630, alt: 'Bespoke vs Made-to-Measure: What is the Difference?' }],
  },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bespoke vs Made-to-Measure: What is the Difference?',
  description: 'Understanding the difference between bespoke, made-to-measure, and off-the-rack tailoring and which is right for you.',
  image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-alterations-new-mc4PxTfLgVaYSLUXguwEEu.webp',
  datePublished: '2024-02-10',
  dateModified: '2024-02-10',
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
  mainEntityOfPage: `${SITE_URL}/journal/bespoke-vs-made-to-measure`,
};

const BODY = '<h2>Off-the-Rack: The Starting Point</h2><p>Off-the-rack suits are manufactured in standard sizes and proportions. They are designed to fit the broadest possible range of body types, which means they rarely fit any individual perfectly.</p><h2>Made-to-Measure: A Better Starting Point</h2><p>Made-to-measure garments begin with a base pattern that is adjusted according to your measurements. The result is a suit that fits better than off-the-rack from the start.</p><h2>Bespoke: The Gold Standard</h2><p>A bespoke suit is created entirely from scratch, beginning with a pattern drafted specifically for your body. Every measurement, every proportion, every detail is tailored to you alone.</p><h2>Which is Right for You?</h2><p>For most clients, expert alterations on a quality off-the-rack suit offer the best value. For those who wear suits regularly, bespoke is the investment that pays dividends every time you put the suit on.</p>';

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '45vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-alterations-new-mc4PxTfLgVaYSLUXguwEEu.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.92) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 py-16 w-full">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <Link href="/journal" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Journal</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Education</span>
            </nav>
            <p className="text-eyebrow">Education</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}>
              Bespoke vs Made-to-Measure: What is the Difference?
            </h1>
            <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
              By Javier Bello · February 10, 2024
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
