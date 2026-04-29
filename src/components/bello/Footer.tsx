'use client';

import Link from 'next/link';

const SERVICES = [
  { label: 'Custom Suits', href: '/services/custom-suits-santa-monica' },
  { label: 'Suit Alterations', href: '/services/suit-alterations-santa-monica' },
  { label: 'Wedding & Formalwear', href: '/services/wedding-formalwear-tailoring' },
  { label: 'Garment Care & Repairs', href: '/services/garment-care-repairs' },
  { label: "Men's Tailoring", href: '/services/mens-tailoring-alterations' },
  { label: 'Luxury Brand Alterations', href: '/services/luxury-brand-alterations' },
];

const AREAS = [
  { label: 'Santa Monica', href: '/areas/santa-monica-tailor' },
  { label: 'Beverly Hills', href: '/areas/beverly-hills-tailor' },
  { label: 'Brentwood', href: '/areas/brentwood-tailor' },
  { label: 'Malibu', href: '/areas/malibu-tailor' },
  { label: 'Pacific Palisades', href: '/areas/pacific-palisades-tailor' },
  { label: 'Bel Air', href: '/areas/bel-air-tailor' },
  { label: 'West Hollywood', href: '/areas/west-hollywood-tailor' },
  { label: 'Culver City', href: '/areas/culver-city-tailor' },
];

const HOURS = [
  { days: 'Mon – Fri', time: '8:30 am – 6:00 pm' },
  { days: 'Saturday', time: '9:00 am – 5:00 pm' },
  { days: 'Sunday', time: 'Closed' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'oklch(6% 0 0)',
        borderTop: '1px solid oklch(95% 0.01 85 / 0.06)',
      }}
    >
      {/* Main footer grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div>
            <div className="mb-6">
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(95% 0.01 85)' }}>
                Santa Monica Tailor
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', fontWeight: 400, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75 / 0.8)', marginTop: '2px' }}>
                By Bello · Est. 2004
              </p>
            </div>
            <div style={{ height: '1px', width: '40px', background: 'oklch(73% 0.08 75 / 0.4)', marginBottom: '1.25rem' }} />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', lineHeight: 1.8, color: 'oklch(65% 0.005 240)' }}>
              Expert tailoring and alterations in Santa Monica. Precision, craft, and attention to detail since 2004.
            </p>

            {/* Availability */}
            <div className="mt-6 flex flex-col gap-2">
              {[
                { dot: 'oklch(60% 0.15 145)', text: 'Accepting New Clients' },
                { dot: 'oklch(73% 0.08 75)', text: 'Walk-Ins Welcome' },
              ].map(({ dot, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: dot, flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(75% 0.005 240)' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Google review link */}
            <a
              href="https://g.page/r/santamonicatailorbybello/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 no-underline"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}
            >
              ★ Leave a Google Review
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-eyebrow mb-5">Services</p>
            <div style={{ height: '1px', width: '32px', background: 'oklch(73% 0.08 75 / 0.4)', marginBottom: '1.25rem' }} />
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="no-underline transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'oklch(65% 0.005 240)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(73% 0.08 75)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(65% 0.005 240)')}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className="text-eyebrow mb-5">Areas We Serve</p>
            <div style={{ height: '1px', width: '32px', background: 'oklch(73% 0.08 75 / 0.4)', marginBottom: '1.25rem' }} />
            <ul className="flex flex-col gap-2.5">
              {AREAS.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="no-underline transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'oklch(65% 0.005 240)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(73% 0.08 75)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(65% 0.005 240)')}
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <p className="text-eyebrow mb-5">Visit Us</p>
            <div style={{ height: '1px', width: '32px', background: 'oklch(73% 0.08 75 / 0.4)', marginBottom: '1.25rem' }} />

            <address className="not-italic flex flex-col gap-3">
              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75 / 0.7)', marginBottom: '4px' }}>Address</p>
                <a
                  href="https://maps.google.com/?q=724+Santa+Monica+Blvd,+Santa+Monica,+CA+90401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', lineHeight: 1.7, color: 'oklch(65% 0.005 240)' }}
                >
                  724 Santa Monica Blvd<br />Santa Monica, CA 90401
                </a>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75 / 0.7)', marginBottom: '4px' }}>Phone</p>
                <a href="tel:+14243010146" className="no-underline" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'oklch(65% 0.005 240)' }}>
                  +1 (424) 301-0146
                </a>
              </div>
            </address>

            <div className="mt-5">
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75 / 0.7)', marginBottom: '8px' }}>Hours</p>
              {HOURS.map(({ days, time }) => (
                <div key={days} className="flex justify-between gap-4 mb-1.5">
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'oklch(65% 0.005 240)' }}>{days}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'oklch(55% 0.005 240)' }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1400px] mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.06)' }}
      >
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'oklch(45% 0.005 240)', letterSpacing: '0.05em' }}>
          © {year} Santa Monica Tailor by Bello. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {[
            { label: 'Journal', href: '/journal' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Book Appointment', href: '/booking' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="no-underline transition-colors duration-150"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(45% 0.005 240)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(73% 0.08 75)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(45% 0.005 240)')}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
