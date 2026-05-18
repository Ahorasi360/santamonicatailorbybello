import Link from 'next/link';
import { ServiceContent } from '@/lib/services-content';
import { PHONE } from '@/lib/constants';

type Props = {
  service: ServiceContent;
};

export default function ServicePageBody({ service }: Props) {
  return (
    <>
      {/* Main content area: intro + structured sections + FAQ */}
      <section className="py-20 lg:py-28" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              {/* Intro */}
              <p className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                {service.intro}
              </p>

              {/* H2: Process */}
              <h2 className="font-serif text-ivory" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', fontWeight: 400, marginTop: '3rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                {service.process.heading}
              </h2>
              {service.process.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9, marginTop: i === 0 ? 0 : '1rem' }}>
                  {p}
                </p>
              ))}

              {/* H2: Details */}
              <h2 className="font-serif text-ivory" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', fontWeight: 400, marginTop: '3rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                {service.details.heading}
              </h2>
              {service.details.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9, marginTop: i === 0 ? 0 : '1rem' }}>
                  {p}
                </p>
              ))}

              {/* H2: Pricing & Timing */}
              <h2 className="font-serif text-ivory" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', fontWeight: 400, marginTop: '3rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                {service.pricingTiming.heading}
              </h2>
              {service.pricingTiming.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9, marginTop: i === 0 ? 0 : '1rem' }}>
                  {p}
                </p>
              ))}

              <Link href="/booking" className="btn-gold mt-10 inline-flex">
                Book an Appointment
              </Link>
            </div>

            {/* Sidebar */}
            <div>
              <div className="p-8" style={{ border: '1px solid oklch(95% 0.01 85 / 0.07)', background: 'oklch(10% 0.005 240)' }}>
                <p className="text-eyebrow mb-4">What is Included</p>
                <ul className="flex flex-col gap-3">
                  {service.whatIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-gold mt-0.5" style={{ fontSize: '0.45rem', flexShrink: 0 }}>◆</span>
                      <span className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', lineHeight: 1.6 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6" style={{ borderTop: '1px solid oklch(95% 0.01 85 / 0.08)' }}>
                  <p className="text-eyebrow mb-3">Call or Visit</p>
                  <a href="tel:+14243010146" className="no-underline block" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'oklch(73% 0.08 75)' }}>
                    {PHONE}
                  </a>
                  <p className="text-gray-bello mt-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', lineHeight: 1.6 }}>
                    724 Santa Monica Blvd<br />Santa Monica, CA 90401
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20 lg:py-24" style={{ borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)', background: 'oklch(7% 0.005 240)' }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <p className="text-eyebrow text-center">Frequently Asked</p>
          <span className="gold-rule-center mt-3 mx-auto block" />
          <h2 className="font-serif text-ivory text-center mt-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 400 }}>
            About {service.shortName}
          </h2>
          <div className="mt-12 flex flex-col gap-6">
            {service.faqs.map((faq, i) => (
              <div key={i} style={{ borderLeft: '2px solid oklch(73% 0.08 75 / 0.5)', paddingLeft: '1.25rem' }}>
                <p className="text-ivory" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {faq.q}
                </p>
                <p className="text-gray-bello" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.85 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
