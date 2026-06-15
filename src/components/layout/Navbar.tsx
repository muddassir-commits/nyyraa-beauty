'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './Navbar.module.css';

interface NavbarProps {
  onMobileMenuOpen: () => void;
}

export default function Navbar({ onMobileMenuOpen }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Quiz', path: '/quiz', icon: true },
    { label: 'Ingredients', path: '/ingredients' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={cn(styles.header, isScrolled && styles.headerScrolled)}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logo/nyyraa-logo.jpeg"
            alt="Nyyraa Beauty Logo"
            width={40}
            height={40}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>
            Nyraa <span className={styles.logoAccent}>Beauty</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  styles.navLink,
                  isActive && styles.activeNavLink,
                  link.icon && 'font-accent'
                )}
              >
                {link.icon && <Sparkles size={12} style={{ display: 'inline', marginRight: '3px', color: 'var(--color-rose-gold)' }} />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className={styles.navActions}>
          {/* Snipcart Checkout Button */}
          <button 
            className={cn(styles.actionButton, 'snipcart-checkout')} 
            aria-label="View Cart"
          >
            <ShoppingBag size={20} />
            <span className={cn(styles.cartBadge, 'snipcart-items-count')}>0</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={onMobileMenuOpen}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
