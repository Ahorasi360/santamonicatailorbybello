import Image from 'next/image';
import Link from 'next/link';
import { AREAS_LIST } from '@/lib/constants';
import { getAreaImage } from '@/lib/page-images';

export default function HomeLocalArea() {
  return (
    <section id="areas" className="py-20 lg:py-28" style={{ scrollMarginTop: '88px', borderBottom: '1px solid oklch(95% 0.01 85 / 0.06)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-eyebrow">Where We Serve</p>
          <span className="gold-rule-center mt-3" />
          <h2 className="font-serif text-ivory mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Areas We Serve
          </h2>
          <p className="text-gray-bello mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            Conveniently located in Santa Monica, serving clients across the Westside and beyond.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {AREAS_LIST.map(({ label, href, description }) => {
            const image = getAreaImage(href);
            return (
              <Link
                key={href}
                href={href}
                className="group block min-w-0 overflow-hidden no-underline transition-all duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                style={{ border: '1px solid oklch(95% 0.01 85 / 0.07)', background: 'oklch(10% 0.005 240)', color: 'var(--color-gold)' }}
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1399px) 25vw, 330px"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4 lg:p-6">
                  <p className="font-serif text-ivory" style={{ fontSize: '1.1rem', fontWeight: 400 }}>{label}</p>
                  <p className="text-gray-bello mt-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', lineHeight: 1.6 }}>{description}</p>
                  <p className="mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)' }}>
                    Learn More →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
