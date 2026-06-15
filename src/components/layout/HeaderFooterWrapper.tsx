'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

interface HeaderFooterWrapperProps {
  children: React.ReactNode;
}

export default function HeaderFooterWrapper({ children }: HeaderFooterWrapperProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <main style={{ minHeight: '80vh', paddingTop: '4.5rem' }}>{children}</main>
      <Footer />
    </>
  );
}
