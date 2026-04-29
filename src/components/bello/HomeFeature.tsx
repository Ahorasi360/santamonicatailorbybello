'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IMAGES } from '@/lib/constants';

const STATS = [
  { value: '20+', label: 'Years of Experience' },
  { value: '5,000+', label: 'Garments Perfected' },
  { value: '8', label: 'Areas Served' },
];

export default function HomeFeature() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative reveal" style={{ aspectRatio: '3/4', maxHeight: '640px' }}>
            <img
              src={IMAGES.javier}
              alt="Javier Bello — Master Tailor at work in Santa Monica"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.92) contrast(1.05)' }}
            />
            <div className="absolute top-4 left-4 w-8 h-8 pointer-events-none" style={{ borderTop: '1px solid oklch(73% 0.08 75 / 0.6)', borderLeft: '1px solid oklch(73% 0.08 75 / 0.6)' }} />
            <div className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none" style={{ borderBottom: '1px solid oklch(73% 0.08 75 / 0.6)', borderRight: '1px solid oklch(73% 0.08 75 / 0.6)' }} />
          </div>

          {/* Copy */}
          <div className="reveal reveal-delay-2">
            <p className="text-eyebrow">The Craft</p>
            <span className="gold-rule-left mt-3" />
            <h2 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}>
              Tailoring That Makes<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'oklch(73% 0.08 75)' }}>a Difference</em>
            </h2>
            <p className="text-gray-bello mt-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.9 }}>
              At Santa Monica Tailor by Bello, tailoring is more than a service — it is a craft built on precision, experience, and an unwavering attention to detail. For over 20 years, we have helped clients throughout Santa Monica, Beverly Hills, Brentwood, Malibu, and the Westside achieve the perfect fit.
            </p>
            <p className="text-gray-bello mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.9 }}>
              Whether you need suit alterations, custom tailoring, or expert adjustments for luxury garments, our goal is simple: to make every piece you wear look and feel exceptional.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-serif text-gold" style={{ fontSize: '2rem', fontWeight: 400 }}>{value}</p>
                  <p className="text-gray-bello mt-1" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-gold mt-8 inline-flex">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
