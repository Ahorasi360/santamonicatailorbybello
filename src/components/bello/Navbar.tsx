'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'oklch(7% 0 0 / 0.97)'
            : 'linear-gradient(to bottom, oklch(5% 0 0 / 0.8), transparent)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(95% 0.01 85 / 0.06)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight no-underline">
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'oklch(95% 0.01 85)',
              }}
            >
              Santa Monica Tailor
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.55rem',
                fontWeight: 400,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'oklch(73% 0.08 75 / 0.8)',
              }}
            >
              By Bello · Est. 2004
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: servicesOpen ? 'oklch(73% 0.08 75)' : 'oklch(95% 0.01 85 / 0.8)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Services <ChevronDown size={10} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div
                    className="w-56 py-2"
                    style={{
                      background: 'oklch(9% 0.005 240)',
                      border: '1px solid oklch(95% 0.01 85 / 0.08)',
                      boxShadow: '0 20px 40px oklch(0% 0 0 / 0.5)',
                    }}
                  >
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-5 py-2.5 transition-colors duration-150 no-underline"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.08em',
                          color: 'oklch(85% 0.005 240)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(73% 0.08 75)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(85% 0.005 240)')}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Areas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button
                className="flex items-center gap-1 transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: areasOpen ? 'oklch(73% 0.08 75)' : 'oklch(95% 0.01 85 / 0.8)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Areas We Serve <ChevronDown size={10} className={`transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div
                    className="w-52 py-2"
                    style={{
                      background: 'oklch(9% 0.005 240)',
                      border: '1px solid oklch(95% 0.01 85 / 0.08)',
                      boxShadow: '0 20px 40px oklch(0% 0 0 / 0.5)',
                    }}
                  >
                    {AREAS.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="block px-5 py-2.5 transition-colors duration-150 no-underline"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.08em',
                          color: 'oklch(85% 0.005 240)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(73% 0.08 75)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(85% 0.005 240)')}
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {['Journal', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="transition-colors duration-200 no-underline"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: pathname === `/${item.toLowerCase()}` ? 'oklch(73% 0.08 75)' : 'oklch(95% 0.01 85 / 0.8)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(73% 0.08 75)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = pathname === `/${item.toLowerCase()}` ? 'oklch(73% 0.08 75)' : 'oklch(95% 0.01 85 / 0.8)')}
              >
                {item}
              </Link>
            ))}

            <Link href="/booking" className="btn-gold" style={{ padding: '0.6rem 1.4rem', fontSize: '0.6rem' }}>
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: 'oklch(95% 0.01 85)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-[72px] overflow-y-auto"
          style={{ background: 'oklch(7% 0 0 / 0.98)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex flex-col px-6 py-8 gap-1">
            <p className="text-eyebrow mb-4">Services</p>
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="block py-3 no-underline border-b" style={{ borderColor: 'oklch(95% 0.01 85 / 0.06)', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'oklch(85% 0.005 240)' }}>
                {s.label}
              </Link>
            ))}
            <p className="text-eyebrow mt-6 mb-4">Areas We Serve</p>
            {AREAS.map((a) => (
              <Link key={a.href} href={a.href} className="block py-3 no-underline border-b" style={{ borderColor: 'oklch(95% 0.01 85 / 0.06)', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'oklch(85% 0.005 240)' }}>
                {a.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              {['Journal', 'About', 'Contact'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="block py-3 no-underline" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'oklch(85% 0.005 240)' }}>
                  {item}
                </Link>
              ))}
              <Link href="/booking" className="btn-gold mt-4 justify-center">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden grid grid-cols-2" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.1)' }}>
        <a
          href="tel:+14243010146"
          className="flex items-center justify-center gap-2 py-4 no-underline"
          style={{ background: 'oklch(9% 0.005 240)', fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(95% 0.01 85)' }}
        >
          📞 Call Now
        </a>
        <Link
          href="/booking"
          className="flex items-center justify-center py-4 no-underline"
          style={{ background: 'oklch(73% 0.08 75)', fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0a0a0a' }}
        >
          Book Appointment
        </Link>
      </div>
    </>
  );
}
