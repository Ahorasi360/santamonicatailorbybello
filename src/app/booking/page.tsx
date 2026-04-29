import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import HomeBooking from '@/components/bello/HomeBooking';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book an Appointment | Santa Monica Tailor by Bello',
  description: 'Book a tailoring appointment at Santa Monica Tailor by Bello. Custom suits, alterations, wedding formalwear, and luxury garment care. Walk-ins welcome. Call +1 (424) 301-0146.',
  alternates: { canonical: `${SITE_URL}/booking` },
};

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <div className="py-12 text-center" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <p className="text-eyebrow">Reserve Your Time</p>
          <span className="gold-rule-center mt-3" />
          <h1 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Book an Appointment
          </h1>
          <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            Walk-ins are always welcome. An appointment ensures dedicated time with our master tailor.
          </p>
        </div>
        <HomeBooking />
      </main>
      <Footer />
    </>
  );
}
