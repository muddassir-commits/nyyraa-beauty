'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './HeroSection.module.css';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('@/components/effects/ParticleField'), { ssr: false });

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Dynamic glow balls in the background */}
      <div className={styles.backgroundDecor}>
        <div className={`${styles.glowBall} ${styles.glow1}`} />
        <div className={`${styles.glowBall} ${styles.glow2}`} />
      </div>

      {/* Floating particles field */}
      <ParticleField />

      <div className="container">
        <div className={styles.contentWrapper}>
          <span className={`${styles.tagline} fade-in-up`} style={{ animationDelay: '0.1s' }}>
            Korean Inspired. Science Backed.
          </span>
          <h1 className={`${styles.title} fade-in-up`} style={{ animationDelay: '0.2s' }}>
            Skincare Formulated For
            <span className={styles.accentText}>Indian Skin</span>
          </h1>
          <p className={`${styles.description} fade-in-up`} style={{ animationDelay: '0.3s' }}>
            Experience the hydration of premium Korean formulation science combined with active ingredients tailored to protect and soothe Indian skin. Paraben-free, cruelty-free, and dermatologically tested.
          </p>
          <div className={`${styles.actions} fade-in-up`} style={{ animationDelay: '0.4s' }}>
            <Link href="/shop" passHref legacyBehavior>
              <Button variant="primary" size="lg">
                Shop Collection
              </Button>
            </Link>
            <Link href="/quiz" passHref legacyBehavior>
              <Button variant="outline" size="lg">
                Take Skin Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
