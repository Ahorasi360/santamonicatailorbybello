import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { SITE_URL, IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Journal | Tailoring Guides & Style Advice | Santa Monica Tailor by Bello',
  description: 'Expert tailoring guides, style advice, and garment care tips from master tailor Javier Bello. Learn how a suit should fit, fabric selection, and more.',
  alternates: { canonical: `${SITE_URL}/journal` },
};

const POSTS = [
  { slug: 'how-a-suit-should-fit', title: 'How a Suit Should Fit: The Complete Guide', excerpt: 'The definitive guide to suit fit — from shoulder seam placement to trouser break. Learn the signs of a well-fitted suit and what to ask your tailor.', date: 'March 2024', img: IMAGES.customSuits, category: 'Fit Guide' },
  { slug: 'bespoke-vs-made-to-measure', title: 'Bespoke vs Made-to-Measure: What is the Difference?', excerpt: 'Understanding the difference between bespoke, made-to-measure, and off-the-rack tailoring — and which is right for you.', date: 'February 2024', img: IMAGES.alterations, category: 'Education' },
  { slug: 'suit-alterations-guide', title: 'The Essential Guide to Suit Alterations', excerpt: 'Which suit alterations are worth doing, which are not, and what every man should know before taking a suit to a tailor.', date: 'January 2024', img: IMAGES.portfolio1, category: 'Alterations' },
  { slug: 'fabric-guide-wool-seasons', title: 'Fabric Guide: Choosing the Right Wool for Every Season', excerpt: 'From lightweight tropical wools to heavy flannels, a practical guide to choosing the right fabric weight for your climate and lifestyle.', date: 'December 2023', img: IMAGES.portfolio3, category: 'Fabrics' },
  { slug: 'wedding-suit-timeline', title: 'The Wedding Suit Timeline: When to Start and What to Expect', excerpt: 'A practical guide to planning your wedding suit — from first consultation to final fitting — with timelines for bespoke, made-to-measure, and alterations.', date: 'November 2023', img: IMAGES.wedding, category: 'Wedding' },
  { slug: 'suit-care-guide', title: 'How to Care for Your Suit: Storage, Cleaning & Maintenance', excerpt: 'The complete guide to suit care — how to store, clean, press, and maintain your suits so they last for decades.', date: 'October 2023', img: IMAGES.garmentCare, category: 'Care' },
];

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="py-16 text-center" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <p className="text-eyebrow">From the Studio</p>
          <span className="gold-rule-center mt-3" />
          <h1 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>The Journal</h1>
          <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            Tailoring guides, style advice, and garment care tips from master tailor Javier Bello.
          </p>
        </section>
        <section className="py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {POSTS.map(({ slug, title, excerpt, date, img, category }) => (
                <Link key={slug} href={`/journal/${slug}`} className="group block no-underline" style={{ border: '1px solid oklch(95% 0.01 85 / 0.07)', background: 'oklch(10% 0.005 240)' }}>
                  <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}>{category}</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'oklch(55% 0.005 240)' }}>{date}</span>
                    </div>
                    <h2 className="font-serif text-ivory" style={{ fontSize: '1.15rem', fontWeight: 400, lineHeight: 1.4 }}>{title}</h2>
                    <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', lineHeight: 1.7 }}>{excerpt}</p>
                    <p className="mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}>
                      Read More →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
