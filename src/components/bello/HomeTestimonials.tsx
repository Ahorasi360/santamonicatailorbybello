'use client';

import { useEffect, useRef } from 'react';
import { VERIFIED_REVIEWS } from '@/lib/reviews';

// Format a YYYY-MM-DD as "Month YYYY" for display under the reviewer name
function formatReviewDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z');
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

// Show the 3 most descriptive reviews in the visual grid.
// All 4 (including the shorter ones) are still emitted in Review schema.
const DISPLAYED = VERIFIED_REVIEWS.filter((r) =>
  ['Carly Hyde', 'Benjamin Tillis', 'Nicole Kohansamad'].includes(r.authorName)
);

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
          <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', letterSpacing: '0.04em' }}>
            Verified Google Reviews · 4.6 ★ from 227 clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DISPLAYED.map(({ authorName, reviewBody, rating, datePublished, reviewerProfile }, i) => (
            <div
              key={authorName}
              className={`p-8 reveal reveal-delay-${i + 1}`}
              style={{ background: 'oklch(10% 0.005 240)', border: '1px solid oklch(95% 0.01 85 / 0.07)' }}
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: rating }).map((_, j) => (
                  <span key={j} style={{ color: 'oklch(73% 0.08 75)', fontSize: '0.75rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, fontStyle: 'italic', color: 'oklch(90% 0.005 240)' }}>
                &ldquo;{reviewBody}&rdquo;
              </p>
              <div className="mt-6 pt-5" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 600, color: 'oklch(85% 0.005 240)' }}>{authorName}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'oklch(73% 0.08 75 / 0.7)', marginTop: '2px' }}>
                  {reviewerProfile} · {formatReviewDate(datePublished)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps?cid=17307317260568994331&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}
          >
            Read all 227 reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
