'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const TIERS = [
  {
    label: 'The Fitting',
    tagline: 'Precision begins with a single appointment.',
    price: 'Complimentary',
    duration: '30 min',
    features: ['Measurements & fit assessment', 'Service recommendation', 'Timeline & pricing overview'],
    badge: null,
    cta: 'Book a Fitting',
  },
  {
    label: 'The Consultation',
    tagline: 'A deeper conversation about your wardrobe.',
    price: 'From $75',
    duration: '60 min',
    features: ['Full wardrobe audit', 'Fabric & style guidance', 'Priority scheduling', 'Written style brief'],
    badge: 'Most Popular',
    cta: 'Book a Consultation',
  },
  {
    label: 'The Vision',
    tagline: 'Vision — the ability to see what others cannot.',
    price: 'By private arrangement',
    duration: 'After hours',
    features: ['Private after-hours appointment', 'Complete bespoke design service', 'Fabric sourcing from Loro Piana, Dormeuil & Holland & Sherry', 'White-glove delivery'],
    badge: 'Exclusive',
    cta: 'Enquire Privately',
  },
];

export default function HomeConsultation() {
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
    <section ref={ref} className="py-20 lg:py-28" style={{ background: 'oklch(8% 0.005 240)', borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-eyebrow">Begin Your Journey</p>
          <span className="gold-rule-center mt-3" />
          <h2 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Consultation Tiers
          </h2>
          <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            Every great garment begins with a conversation. Choose the experience that suits you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map(({ label, tagline, price, duration, features, badge, cta }, i) => (
            <div
              key={label}
              className={`relative flex flex-col p-8 reveal reveal-delay-${i + 1}`}
              style={{
                border: badge === 'Most Popular' ? '1px solid oklch(73% 0.08 75 / 0.4)' : badge === 'Exclusive' ? '1px solid oklch(73% 0.08 75 / 0.25)' : '1px solid oklch(95% 0.01 85 / 0.07)',
                background: badge === 'Exclusive' ? 'linear-gradient(135deg, oklch(10% 0.01 75 / 0.5), oklch(10% 0.005 240))' : 'oklch(10% 0.005 240)',
              }}
            >
              {badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1"
                  style={{ background: 'oklch(73% 0.08 75)', fontFamily: 'var(--font-sans)', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0a0a0a', whiteSpace: 'nowrap' }}
                >
                  {badge}
                </div>
              )}

              <p className="font-serif text-ivory" style={{ fontSize: '1.4rem', fontWeight: 400 }}>{label}</p>
              <p className="text-gray-bello mt-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', lineHeight: 1.6, fontStyle: 'italic' }}>{tagline}</p>

              <div className="mt-5 pt-5" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
                <p className="font-serif text-gold" style={{ fontSize: '1.5rem', fontWeight: 400 }}>{price}</p>
                <p className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>{duration}</p>
              </div>

              <ul className="flex flex-col gap-2.5 mt-6 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5" style={{ fontSize: '0.45rem', flexShrink: 0 }}>◆</span>
                    <span className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', lineHeight: 1.6 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/booking" className={`mt-8 text-center no-underline py-3 px-6 transition-all duration-200 ${badge === 'Most Popular' ? 'btn-gold' : 'btn-outline'}`}>
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
