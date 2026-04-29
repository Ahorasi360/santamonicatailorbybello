'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IMAGES, PHONE_RAW, PHONE } from '@/lib/constants';

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, oklch(5% 0 0 / 0.75) 0%, oklch(7% 0 0 / 0.55) 50%, oklch(5% 0 0 / 0.8) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[900px] mx-auto">
        {/* Urgency badge */}
        <div
          className="inline-flex items-center gap-3 px-4 py-2 mb-8 reveal"
          style={{
            border: '1px solid oklch(95% 0.01 85 / 0.2)',
            background: 'oklch(95% 0.01 85 / 0.04)',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'oklch(60% 0.15 145)', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(85% 0.005 240)' }}>
            Accepting New Clients · Walk-Ins Welcome
          </span>
        </div>

        {/* Location pills */}
        <div className="flex items-center justify-center gap-4 mb-8 reveal reveal-delay-1">
          {['Santa Monica', 'Beverly Hills', 'The Westside'].map((city, i) => (
            <span key={city} className="flex items-center gap-4">
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75 / 0.8)' }}>
                {city}
              </span>
              {i < 2 && <span style={{ color: 'oklch(73% 0.08 75 / 0.3)', fontSize: '0.5rem' }}>·</span>}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8 reveal reveal-delay-1">
          <div style={{ height: '1px', width: '60px', background: 'oklch(73% 0.08 75 / 0.3)' }} />
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-ivory reveal reveal-delay-2"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.02em' }}
        >
          Precision Tailoring
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>for Those Who Expect More</em>
        </h1>

        <p
          className="text-gray-bello mt-6 reveal reveal-delay-3"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px', margin: '1.5rem auto 0' }}
        >
          Serving Santa Monica, Beverly Hills &amp; the Westside
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 reveal reveal-delay-4">
          <Link href="/booking" className="btn-gold">
            Book Appointment
          </Link>
          <Link href="/contact" className="btn-outline">
            Get a Quote
          </Link>
        </div>

        {/* Phone */}
        <div className="mt-8 reveal reveal-delay-4">
          <a
            href={`tel:${PHONE_RAW}`}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', color: 'oklch(73% 0.08 75 / 0.7)', textDecoration: 'none', textTransform: 'uppercase' }}
          >
            {PHONE}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.4 }}
      >
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(95% 0.01 85)' }}>Scroll</span>
        <div style={{ width: '1px', height: '32px', background: 'oklch(95% 0.01 85 / 0.4)' }} />
      </div>
    </section>
  );
}
