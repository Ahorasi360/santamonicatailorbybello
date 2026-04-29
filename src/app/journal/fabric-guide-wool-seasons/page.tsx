import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Fabric Guide: Choosing the Right Wool for Every Season | Santa Monica Tailor by Bello',
  description: 'From lightweight tropical wools to heavy flannels, a practical guide to choosing the right fabric weight for your climate and lifestyle.',
  alternates: { canonical: `${SITE_URL}/journal/fabric-guide-wool-seasons` },
  openGraph: {
    title: 'Fabric Guide: Choosing the Right Wool for Every Season | Santa Monica Tailor by Bello',
    description: 'From lightweight tropical wools to heavy flannels, a practical guide to choosing the right fabric weight for your climate and lifestyle.',
    url: `${SITE_URL}/journal/fabric-guide-wool-seasons`,
    type: 'article',
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-3-new-KgqRQNqsNDPBPJV934SxTg.webp', width: 1200, height: 630, alt: 'Fabric Guide: Choosing the Right Wool for Every Season' }],
  },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fabric Guide: Choosing the Right Wool for Every Season',
  description: 'From lightweight tropical wools to heavy flannels, a practical guide to choosing the right fabric weight for your climate and lifestyle.',
  image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-3-new-KgqRQNqsNDPBPJV934SxTg.webp',
  datePublished: '2023-12-05',
  dateModified: '2023-12-05',
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
  mainEntityOfPage: `${SITE_URL}/journal/fabric-guide-wool-seasons`,
};

const BODY = '<h2>Understanding Fabric Weight</h2><p>Fabric weight is measured in grams per linear metre. Lightweight fabrics (200-260 g/m) are ideal for warm climates and year-round wear in Los Angeles. Mid-weight fabrics (260-320 g/m) are the most versatile.</p><h2>Tropical Wools: The Los Angeles Choice</h2><p>For the Los Angeles climate, tropical wools are the most practical choice. Mills such as Loro Piana and Scabal produce exceptional tropical wools that drape beautifully and perform well in warm weather.</p><h2>Flannel: For the Cooler Months</h2><p>Flannel is a soft, napped wool fabric that provides warmth and a distinctive texture. A mid-weight flannel is appropriate for Los Angeles winters. Flannel suits in charcoal or mid-grey are among the most versatile garments in a well-curated wardrobe.</p><h2>Super Numbers: What They Mean</h2><p>The Super number refers to the fineness of the wool fibre. For everyday wear, Super 100-120s offers an excellent balance of softness, durability, and practicality.</p>';

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative flex items-end overflow-hidden" style={{ minHeight: '45vh' }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-3-new-KgqRQNqsNDPBPJV934SxTg.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.92) 0%, oklch(5% 0 0 / 0.4) 100%)' }} />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 py-16 w-full">
            <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Link href="/" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Home</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <Link href="/journal" className="no-underline" style={{ color: 'oklch(65% 0.005 240)' }}>Journal</Link>
              <span style={{ color: 'oklch(45% 0.005 240)' }}>›</span>
              <span style={{ color: 'oklch(73% 0.08 75)' }}>Fabrics</span>
            </nav>
            <p className="text-eyebrow">Fabrics</p>
            <span className="gold-rule-left mt-3" />
            <h1 className="font-serif text-ivory mt-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}>
              Fabric Guide: Choosing the Right Wool for Every Season
            </h1>
            <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
              By Javier Bello · December 5, 2023
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
