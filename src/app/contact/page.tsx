import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import ContactForm from '@/components/bello/ContactForm';
import { SITE_URL, IMAGES, LOCAL_BUSINESS_SCHEMA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Santa Monica Tailor by Bello. Call (424) 301-0146 or visit our studio at 724 Santa Monica Blvd. Walk-ins welcome. Bilingual service, ASL-proficient staff.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact Santa Monica Tailor by Bello',
    description: 'Get in touch with master tailor Javier Bello. Walk-ins welcome at 724 Santa Monica Blvd. Call (424) 301-0146.',
    url: `${SITE_URL}/contact`,
    images: [{ url: IMAGES.hero, width: 1200, height: 630, alt: 'Contact Santa Monica Tailor by Bello' }],
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <Navbar />
      <main className="pt-[72px]">
        {/* Header */}
        <section className="py-16 text-center" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <p className="text-eyebrow">Get in Touch</p>
          <span className="gold-rule-center mt-3" />
          <h1 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>Contact Us</h1>
          <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            We would love to hear from you. Reach out to discuss your tailoring needs or to request a quote.
          </p>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
