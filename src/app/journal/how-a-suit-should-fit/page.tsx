import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How a Suit Should Fit: The Complete Guide | Santa Monica Tailor by Bello',
  description: 'The definitive guide to suit fit. Learn how shoulders, chest, waist, sleeves, and trousers should fit and what to ask your tailor.',
  alternates: { canonical: `${SITE_URL}/journal/how-a-suit-should-fit` },
  openGraph: {
    title: 'How a Suit Should Fit: The Complete Guide | Santa Monica Tailor by Bello',
    description: 'The definitive guide to suit fit. Learn how shoulders, chest, waist, sleeves, and trousers should fit and what to ask your tailor.',
    url: `${SITE_URL}/journal/how-a-suit-should-fit`,
    type: 'article',
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-custom-suits-new-3KsFwfc6jLqgK9QyGawHAT.webp', width: 1200, height: 630, alt: 'How a Suit Should Fit: The Complete Guide' }],
  },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How a Suit Should Fit: The Complete Guide',
  description: 'The definitive guide to suit fit. Learn how shoulders, chest, waist, sleeves, and trousers should fit and what to ask your tailor.',
  image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-custom-suits-new-3KsFwfc6jLqgK9QyGawHAT.webp',
  datePublished: '2024-03-15',
  dateModified: '2024-03-15',
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
  mainEntityOfPage: `${SITE_URL}/journal/how-a-suit-should-fit`,
};

const BODY = '<h2>The Shoulders: Where Fit Begins</h2><p>The shoulder seam is the single most important element of suit fit and the one that is hardest to alter. The seam should sit precisely at the edge of your shoulder, neither hanging over nor pulling inward.</p><h2>The Chest: Room to Move, Not to Swim</h2><p>When buttoned, a suit jacket should lay flat across the chest with no pulling or gaping at the button. You should be able to slip a flat hand inside the jacket, but no more.</p><h2>The Waist: Suppression and Shape</h2><p>A well-fitted jacket should show a slight waist suppression, a gentle narrowing at the waist that creates shape without restricting movement. This is one of the most common and effective alterations a tailor can make.</p><h2>The Sleeves: Length and Pitch</h2><p>Jacket sleeves should end approximately half an inch above the shirt cuff, allowing the shirt to show. The sleeve pitch affects how the jacket hangs and moves.</p><h2>The Trousers: Break, Rise, and Seat</h2><p>Trouser fit is a matter of personal preference. A full break is traditional and formal. A half break is versatile. No break is modern and casual. The rise should be comfortable without excess fabric.</p>';

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '45vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-custom-suits-new-3KsFwfc6jLqgK9QyGawHAT.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.92) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 py-16 w-full">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <Link href="/journal" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Journal</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Fit Guide</span>
            </nav>
            <p className="text-eyebrow">Fit Guide</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}>
              How a Suit Should Fit: The Complete Guide
            </h1>
            <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
              By Javier Bello · March 15, 2024
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
