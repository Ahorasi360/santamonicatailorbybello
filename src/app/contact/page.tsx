'use client';

import { useState } from 'react';
import Navbar from '@/components/bello/Navbar';
import Footer from '@/components/bello/Footer';
import Link from 'next/link';
import { PHONE, PHONE_RAW, ADDRESS, GOOGLE_MAPS_URL, HOURS } from '@/lib/constants';

const SERVICES_OPTIONS = [
  'Custom Suit',
  'Suit Alterations',
  'Wedding & Formalwear',
  'Garment Care & Repairs',
  "Men's Tailoring",
  'Luxury Brand Alterations',
  'Other / Not Sure',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, preferred_date: '', preferred_time: '', source_page: '/contact' }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Header */}
        <section className="py-16 text-center" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
          <p className="text-eyebrow">Get in Touch</p>
          <span className="gold-rule-center mt-3" />
          <h1 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>Contact Us</h1>
          <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            We would love to hear from you. Reach out to discuss your tailoring needs or to request a quote.
          </p>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Info */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {[
                    { label: 'Address', content: ADDRESS, href: GOOGLE_MAPS_URL },
                    { label: 'Phone', content: PHONE, href: `tel:${PHONE_RAW}` },
                    { label: 'Email', content: 'hello@santamonicatailorbybello.com', href: 'mailto:hello@santamonicatailorbybello.com' },
                    { label: 'Walk-Ins', content: 'Welcome during business hours', href: null },
                  ].map(({ label, content, href }) => (
                    <div key={label} className="p-6" style={{ border: '1px solid oklch(95% 0.01 85 / 0.07)', background: 'oklch(10% 0.005 240)' }}>
                      <p className="text-eyebrow mb-2">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="no-underline" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'oklch(65% 0.005 240)', lineHeight: 1.7 }}>
                          {content}
                        </a>
                      ) : (
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'oklch(65% 0.005 240)', lineHeight: 1.7 }}>{content}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Hours */}
                <div className="p-6" style={{ border: '1px solid oklch(95% 0.01 85 / 0.07)', background: 'oklch(10% 0.005 240)' }}>
                  <p className="text-eyebrow mb-4">Business Hours</p>
                  {HOURS.map(({ days, time }) => (
                    <div key={days} className="flex justify-between py-2" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.05)' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'oklch(65% 0.005 240)' }}>{days}</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'oklch(55% 0.005 240)' }}>{time}</span>
                    </div>
                  ))}
                </div>

                <Link href="/booking" className="btn-gold mt-8 inline-flex">
                  Book an Appointment
                </Link>
              </div>

              {/* Form */}
              <div>
                {status === 'success' ? (
                  <div className="p-10 text-center" style={{ border: '1px solid oklch(73% 0.08 75 / 0.3)', background: 'oklch(10% 0.005 240)' }}>
                    <p className="font-serif text-gold" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Message Received</p>
                    <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                      Thank you for reaching out. We will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8" style={{ background: 'oklch(10% 0.005 240)', border: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
                    <div className="flex flex-col gap-5">
                      {[
                        { id: 'name', label: 'Full Name', type: 'text', required: true },
                        { id: 'email', label: 'Email Address', type: 'email', required: true },
                        { id: 'phone', label: 'Phone Number', type: 'tel', required: false },
                      ].map(({ id, label, type, required }) => (
                        <div key={id}>
                          <label htmlFor={id} className="bello-label">{label}</label>
                          <input id={id} type={type} required={required} value={form[id as keyof typeof form]} onChange={(e) => setForm({ ...form, [id]: e.target.value })} className="bello-input" />
                        </div>
                      ))}
                      <div>
                        <label htmlFor="service" className="bello-label">Service Interested In</label>
                        <select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="bello-input">
                          <option value="">Select a service</option>
                          {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="bello-label">Message</label>
                        <textarea id="message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bello-input" placeholder="Tell us about your garment or tailoring need..." />
                      </div>
                    </div>
                    {status === 'error' && (
                      <p className="mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'oklch(65% 0.2 25)' }}>
                        Something went wrong. Please try again or call us directly.
                      </p>
                    )}
                    <button type="submit" disabled={status === 'loading'} className="btn-gold w-full mt-6 justify-center">
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
