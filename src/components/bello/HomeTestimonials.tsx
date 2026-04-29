'use client';

import { useEffect, useRef } from 'react';

const TESTIMONIALS = [
  {
    quote: "Javier transformed my off-the-rack Hugo Boss suit into something that looks completely bespoke. The attention to detail is extraordinary — I've never felt more confident.",
    author: 'Michael R.',
    detail: 'Hugo Boss Suit Alteration',
    stars: 5,
  },
  {
    quote: "I brought in a Brioni jacket that needed significant work. The result was flawless. Santa Monica Tailor by Bello is the only place I trust with my luxury garments.",
    author: 'David L.',
    detail: 'Brioni Jacket Restoration',
    stars: 5,
  },
  {
    quote: "My wedding suit was perfect. Javier understood exactly what I wanted and delivered beyond my expectations. The entire experience was seamless and professional.",
    author: 'James T.',
    detail: 'Wedding Suit Tailoring',
    stars: 5,
  },
];

export default function HomeTestimonials() {
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
          <p className="text-eyebrow">Client Stories</p>
          <span className="gold-rule-center mt-3" />
          <h2 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, author, detail, stars }, i) => (
            <div
              key={author}
              className={`p-8 reveal reveal-delay-${i + 1}`}
              style={{ background: 'oklch(10% 0.005 240)', border: '1px solid oklch(95% 0.01 85 / 0.07)' }}
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: stars }).map((_, j) => (
                  <span key={j} style={{ color: 'oklch(73% 0.08 75)', fontSize: '0.75rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7, fontStyle: 'italic', color: 'oklch(90% 0.005 240)' }}>
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-6 pt-5" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, color: 'oklch(85% 0.005 240)' }}>{author}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'oklch(73% 0.08 75 / 0.7)', marginTop: '2px' }}>{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
