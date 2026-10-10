import Image from 'next/image';
import Link from 'next/link';
import type { BelloPageImage } from '@/lib/page-images';
import styles from './InteriorPageHero.module.css';

type Props = {
  title: string;
  eyebrow: string;
  sectionLabel: string;
  sectionHref: string;
  currentLabel: string;
  image: BelloPageImage;
};

/** A bounded editorial header; images keep their intrinsic aspect ratio at every breakpoint. */
export default function InteriorPageHero({ title, eyebrow, sectionLabel, sectionHref, currentLabel, image }: Props) {
  const landscape = image.width > image.height;
  return (
    <section className={styles.hero} data-bello-hero="framed" aria-labelledby="page-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href={sectionHref}>{sectionLabel}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page" className={styles.current}>{currentLabel}</span>
          </nav>
          <p className="text-eyebrow">{eyebrow}</p>
          <span className={`gold-rule-left ${styles.rule}`} aria-hidden="true" />
          <h1 id="page-title" className={styles.title}>{title}</h1>
          <Link href="/booking" className={`btn-gold ${styles.booking}`}>Book an Appointment</Link>
        </div>
        <figure className={`${styles.media} ${landscape ? styles.landscape : ''}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={landscape ? '(max-width: 487px) calc(100vw - 48px), 440px' : '(max-width: 767px) 240px, 320px'}
            className={styles.image}
            priority
          />
        </figure>
      </div>
    </section>
  );
}
