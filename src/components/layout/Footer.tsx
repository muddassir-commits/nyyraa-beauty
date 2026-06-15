'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowRight, Heart } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.logoArea}>
              <Image
                src="/images/logo/nyyraa-logo.jpeg"
                alt="Nyyraa Beauty Logo"
                width={45}
                height={45}
                className={styles.logoImage}
              />
              <span className={styles.logoText}>
                Nyraa <span className={styles.logoAccent}>Beauty</span>
              </span>
            </div>
            <p className={styles.brandDesc}>
              Premium Korean-inspired skincare formulated specifically to soothe, nourish, and elevate Indian skin tones. Powered by science, inspired by nature.
            </p>
            <div className={styles.socials}>
              <a
                href="https://instagram.com/nyyraabeauty"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon style={{ width: '18px', height: '18px' }} />
              </a>
              <a
                href="mailto:info@nyyraa.com"
                className={styles.socialLink}
                aria-label="Email support"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Shop & Learn</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="/shop">All Products</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/quiz">Skin Glow Quiz</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/ingredients">Ingredient Science</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/blog">The Glow Journal</Link>
              </li>
            </ul>
          </div>

          {/* Brand Info */}
          <div>
            <h4 className={styles.colTitle}>Our Story</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="/about">About Nyraa</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/reviews">Testimonials</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Join the Glow</h4>
            <p className={styles.newsletterText}>
              Subscribe to receive updates, access to exclusive deals, skincare routines, and custom recommendations.
            </p>
            {submitted ? (
              <p className={styles.successMsg}>
                Welcome to the glow circle! Check your inbox soon. ✨
              </p>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className={styles.submitBtn}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyText}>
            &copy; {new Date().getFullYear()} Nyyraa Beauty. All rights reserved. Made with{' '}
            <Heart size={10} style={{ display: 'inline', color: 'var(--color-rose-gold)', fill: 'var(--color-rose-gold)' }} /> for Indian Skin.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Terms of Service</Link>
            <Link href="/contact">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
