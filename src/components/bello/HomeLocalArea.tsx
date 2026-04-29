'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AREAS_LIST } from '@/lib/constants';

export default function HomeLocalArea() {
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
        <div className="text-center mb-14 reveal">
          <p className="text-eyebrow">Where We Serve</p>
          <span className="gold-rule-center mt-3" />
          <h2 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Areas We Serve
          </h2>
          <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            Conveniently located in Santa Monica, serving clients across the Westside and beyond.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {AREAS_LIST.map(({ label, href, description }, i) => (
            <Link
              key={href}
              href={href}
              className={`group block p-6 no-underline transition-all duration-300 reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{ border: '1px solid oklch(95% 0.01 85 / 0.07)', background: 'oklch(10% 0.005 240)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'oklch(73% 0.08 75 / 0.3)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'oklch(95% 0.01 85 / 0.07)'; }}
            >
              <p className="font-serif text-ivory" style={{ fontSize: '1.1rem', fontWeight: 400 }}>{label}</p>
              <p className="text-gray-bello mt-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', lineHeight: 1.6 }}>{description}</p>
              <p className="mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}>
                Learn More →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
