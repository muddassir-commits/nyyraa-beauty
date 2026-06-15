'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Mail } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import { cn } from '@/lib/utils';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop Catalog', path: '/shop' },
    { label: 'Skin Glow Quiz', path: '/quiz', icon: true },
    { label: 'Ingredient Science', path: '/ingredients' },
    { label: 'Glow Journal', path: '/blog' },
    { label: 'Our Story', path: '/about' },
    { label: 'Testimonials', path: '/reviews' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={styles.header}>
              <Link href="/" onClick={onClose}>
                <Image
                  src="/images/logo/nyyraa-logo.jpeg"
                  alt="Nyyraa Beauty Logo"
                  width={35}
                  height={35}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </Link>
              <button className={styles.closeButton} onClick={onClose} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className={styles.navLinks}>
              {navLinks.map((link, i) => {
                const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      className={cn(
                        styles.navLink,
                        isActive && styles.activeNavLink
                      )}
                      onClick={onClose}
                    >
                      {link.icon && (
                        <Sparkles
                          size={18}
                          style={{ color: 'var(--color-rose-gold)' }}
                        />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer */}
            <div className={styles.footer}>
              <div className={styles.socials}>
                <a
                  href="https://instagram.com/nyyraabeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <InstagramIcon style={{ width: '20px', height: '20px' }} />
                </a>
                <a
                  href="mailto:info@nyyraa.com"
                  className={styles.socialIcon}
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className={styles.footerText}>Korean Inspired. Science Backed.</p>
              <p className={styles.footerText} style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} Nyyraa Beauty
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
