import type { Metadata } from 'next';
import './globals.css';
import ChatWidget from '@/components/bello/ChatWidget';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.santamonicatailorbybello.com';
const OG_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-hero-new-KhZDc6CivnuzFN7S4bg9uJ.webp';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Santa Monica Tailor by Bello | Expert Tailoring & Alterations',
    template: '%s | Santa Monica Tailor by Bello',
  },
  description:
    'Expert tailoring and alterations in Santa Monica. Custom suits, suit alterations, wedding formalwear, and luxury garment care. Serving Beverly Hills, Brentwood, Malibu & the Westside since 2004.',
  keywords: [
    'tailor Santa Monica',
    'suit alterations Santa Monica',
    'custom suits Santa Monica',
    'bespoke tailor Los Angeles',
    'wedding suit alterations',
    'luxury garment alterations',
    'Beverly Hills tailor',
    'Brentwood tailor',
    'Malibu tailor',
    'mens tailoring Los Angeles',
  ],
  authors: [{ name: 'Santa Monica Tailor by Bello' }],
  creator: 'Santa Monica Tailor by Bello',
  publisher: 'Santa Monica Tailor by Bello',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Santa Monica Tailor by Bello',
    title: 'Santa Monica Tailor by Bello | Expert Tailoring & Alterations',
    description:
      'Expert tailoring and alterations in Santa Monica. Custom suits, suit alterations, wedding formalwear, and luxury garment care. Serving Beverly Hills, Brentwood, Malibu & the Westside since 2004.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Santa Monica Tailor by Bello — Luxury Tailoring Atelier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santa Monica Tailor by Bello | Expert Tailoring & Alterations',
    description: 'Expert tailoring and alterations in Santa Monica. Custom suits, alterations, wedding formalwear. Serving Beverly Hills, Brentwood, Malibu & the Westside.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: '',  // Add your Google Search Console verification token
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-bello-black text-ivory antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
