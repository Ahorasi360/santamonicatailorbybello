'use client';

import { useState, useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/constants';

const SERVICES_OPTIONS = [
  'Custom Suit',
  'Suit Alterations',
  'Wedding & Formalwear',
  'Garment Care & Repairs',
  "Men's Tailoring",
  'Luxury Brand Alterations',
  'Other / Not Sure',
];

const TIMES = ['8:30 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

export default function HomeBooking() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          preferred_date: form.date,
          preferred_time: form.time,
          message: form.message,
          source_page: '/',
          utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
          utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundImage: `url(${IMAGES.bookingBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0" style={{ background: 'oklch(5% 0 0 / 0.88)' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div className="reveal">
            <p className="text-eyebrow">Reserve Your Time</p>
            <span className="gold-rule-left mt-3" />
            <h2 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}>
              Book an<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'oklch(73% 0.08 75)' }}>Appointment</em>
            </h2>
            <p className="text-gray-bello mt-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.9 }}>
              We welcome walk-ins, but an appointment ensures dedicated time with our master tailor. Book below or call us directly.
            </p>
            <a href="tel:+14243010146" className="inline-flex items-center gap-3 mt-8 no-underline" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}>
              +1 (424) 301-0146
            </a>
            <div className="mt-8 pt-8" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
              {[{ label: 'Address', value: '724 Santa Monica Blvd, Santa Monica, CA 90401' }, { label: 'Hours', value: 'Mon–Fri 8:30am–6pm · Sat 9am–5pm' }].map(({ label, value }) => (
                <div key={label} className="mb-4">
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75 / 0.7)' }}>{label}</p>
                  <p className="text-gray-bello mt-1" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem' }}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2">
            {status === 'success' ? (
              <div className="p-10 text-center" style={{ border: '1px solid oklch(73% 0.08 75 / 0.3)', background: 'oklch(10% 0.005 240 / 0.8)' }}>
                <p className="font-serif text-gold" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Appointment Requested</p>
                <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                  Thank you. We will contact you within 24 hours to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8" style={{ background: 'oklch(10% 0.005 240 / 0.9)', border: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', required: true },
                    { id: 'email', label: 'Email Address', type: 'email', required: true },
                    { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
                  ].map(({ id, label, type, required }) => (
                    <div key={id} className={id === 'name' ? 'sm:col-span-2' : ''}>
                      <label htmlFor={id} className="bello-label">{label}</label>
                      <input
                        id={id}
                        type={type}
                        required={required}
                        value={form[id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        className="bello-input"
                      />
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="bello-label">Service Required</label>
                    <select
                      id="service"
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="bello-input"
                    >
                      <option value="">Select a service</option>
                      {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="bello-label">Preferred Date</label>
                    <input id="date" type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="bello-input" style={{ colorScheme: 'dark' }} />
                  </div>

                  <div>
                    <label htmlFor="time" className="bello-label">Preferred Time</label>
                    <select id="time" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="bello-input">
                      <option value="">Select a time</option>
                      {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="bello-label">Notes (optional)</label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bello-input"
                      placeholder="Tell us about the garment or service you need..."
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p className="mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'oklch(65% 0.2 25)' }}>
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-gold w-full mt-6 justify-center">
                  {status === 'loading' ? 'Sending...' : 'Request Appointment'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
