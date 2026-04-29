import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import HomeHero from '@/components/bello/HomeHero';
import HomeServices from '@/components/bello/HomeServices';
import HomeFeature from '@/components/bello/HomeFeature';
import HomeTestimonials from '@/components/bello/HomeTestimonials';
import HomeLocalArea from '@/components/bello/HomeLocalArea';
import HomeConsultation from '@/components/bello/HomeConsultation';
import HomePortfolio from '@/components/bello/HomePortfolio';
import HomeBooking from '@/components/bello/HomeBooking';
import { LOCAL_BUSINESS_SCHEMA, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Santa Monica Tailor by Bello | Expert Tailoring & Alterations',
  description:
    'Expert tailoring and alterations in Santa Monica. Custom suits, suit alterations, wedding formalwear, and luxury garment care. Serving Beverly Hills, Brentwood, Malibu & the Westside since 2004.',
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <Navbar />
      <main>
        <HomeHero />
        <HomeServices />
        <HomeFeature />
        <HomePortfolio />
        <HomeTestimonials />
        <HomeLocalArea />
        <HomeConsultation />
        <HomeBooking />
      </main>
      <Footer />
    </>
  );
}
