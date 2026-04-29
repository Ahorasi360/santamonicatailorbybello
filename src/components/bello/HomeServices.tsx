'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { SERVICES_LIST } from '@/lib/constants';

export default function HomeServices() {
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
          <p className="text-eyebrow">What We Do</p>
          <span className="gold-rule-center mt-3" />
          <h2 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Our Services
          </h2>
          <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            From bespoke custom suits to expert alterations on the world&apos;s finest garments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group block relative overflow-hidden no-underline reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={service.img}
                alt={service.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.85) 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, color: 'oklch(95% 0.01 85)' }}>
                  {service.label}
                </p>
                <div
                  className="mt-2 flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}
                >
                  Learn More <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
