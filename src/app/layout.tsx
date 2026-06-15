import type { Metadata } from 'next';
import { Cormorant_Garamond, Lato, Great_Vibes } from 'next/font/google';
import SmoothScroll from '@/components/effects/SmoothScroll';
import HeaderFooterWrapper from '@/components/layout/HeaderFooterWrapper';
import './globals.css';
import Script from 'next/script';

// ─── Font Configuration ───
const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const lato = Lato({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
});

const greatVibes = Great_Vibes({
  variable: '--font-accent',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

// ─── Metadata ───
export const metadata: Metadata = {
  title: 'Nyyraa Beauty | Korean Skincare for Indian Skin',
  description: 'Premium Korean-inspired skincare designed for Indian skin tones. Paraben-free, cruelty-free, and science-backed. Shop Collagen Masks, SPF 50 Sunscreens, and Lip Tints.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Nyyraa Beauty | Korean Skincare for Indian Skin',
    description: 'Premium Korean-inspired skincare designed for Indian skin tones.',
    url: 'https://nyyraa.com',
    siteName: 'Nyyraa Beauty',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${lato.variable} ${greatVibes.variable}`}
    >
      <head>
        {/* Snipcart Integration Preconnect & Stylesheet */}
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
      </head>
      <body>
        <SmoothScroll>
          <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
        </SmoothScroll>

        {/* Snipcart Script Setup (using public test API key) */}
        <Script
          src="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js"
          strategy="lazyOnload"
        />
        <div
          id="snipcart"
          data-api-key="Y2UzNjBkZjQtYzg3ZC00NWYwLWFiN2YtNDI4NWM1NzdhNmU5NjM3NzgxOTY3OTYyMTU0MTEw"
          data-config-modal-style="side"
          hidden
        ></div>
      </body>
    </html>
  );
}
