import type { Metadata } from 'next';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Santa Monica Tailor by Bello',
  description: 'The page you are looking for could not be found. Return to Santa Monica Tailor by Bello.',
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] min-h-screen flex items-center justify-center" style={{ background: 'oklch(6% 0.005 240)' }}>
        <div className="text-center px-6">
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}>
            404
          </p>
          <div style={{ width: '40px', height: '1px', background: 'oklch(73% 0.08 75 / 0.4)', margin: '16px auto' }} />
          <h1 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.2 }}>
            Page Not Found
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'oklch(55% 0.005 240)', lineHeight: 1.8, maxWidth: '420px', margin: '1.5rem auto 0' }}>
            The page you are looking for does not exist or has been moved. Please return to our homepage or contact us directly.
          </p>
          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <Link href="/" className="btn-gold">
              Return Home
            </Link>
            <Link href="/booking" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'oklch(65% 0.005 240)', textDecoration: 'none' }}>
              Book an Appointment
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
