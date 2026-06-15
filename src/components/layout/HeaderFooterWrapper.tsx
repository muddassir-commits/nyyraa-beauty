'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import dynamic from 'next/dynamic';

const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false });
const CursorGlow = dynamic(() => import('@/components/effects/CursorGlow'), { ssr: false });

interface HeaderFooterWrapperProps {
  children: React.ReactNode;
}

export default function HeaderFooterWrapper({ children }: HeaderFooterWrapperProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.css"
        media="print"
        onLoad={(e) => {
          (e.target as HTMLLinkElement).media = 'all';
        }}
      />
      <Navbar onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <CursorGlow />
      <main style={{ minHeight: '80vh', paddingTop: '4.5rem' }}>{children}</main>
      <Footer />
    </>
  );
}
