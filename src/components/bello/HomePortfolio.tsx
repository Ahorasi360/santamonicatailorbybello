'use client';

import { useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/constants';

const PORTFOLIO = [
  { img: IMAGES.portfolio1, label: 'Bespoke Double-Breasted', sub: 'Custom Suit' },
  { img: IMAGES.portfolio2, label: 'Hand-Stitched Buttonholes', sub: 'Craft Detail' },
  { img: IMAGES.portfolio3, label: 'Premium Fabric Selection', sub: 'Italian & English Cloth' },
];

export default function HomePortfolio() {
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
          <p className="text-eyebrow">Our Work</p>
          <span className="gold-rule-center mt-3" />
          <h2 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Portfolio
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PORTFOLIO.map(({ img, label, sub }, i) => (
            <div key={label} className={`group relative overflow-hidden reveal reveal-delay-${i + 1}`} style={{ aspectRatio: '3/4' }}>
              <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(5% 0 0 / 0.8) 0%, transparent 50%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}>{sub}</p>
                <p className="font-serif text-ivory mt-1" style={{ fontSize: '1.1rem', fontWeight: 400 }}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
