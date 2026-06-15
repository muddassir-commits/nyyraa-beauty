'use client';

import Link from 'next/link';
import { Sparkles, ClipboardList, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/effects/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './QuizCTA.module.css';

export default function QuizCTA() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className={styles.backgroundGlow} />

      <div className="container">
        <ScrollReveal animation="scale">
          <div className={styles.contentWrapper}>
            <span className={styles.subtitle}>Discover Your Perfect Routine</span>
            <h2 className={styles.title}>Confused About What Your Skin Needs?</h2>
            <p className={styles.text}>
              Skincare is not one-size-fits-all. Our interactive Skin Quiz analyzes your skin type, primary concerns, and environmental exposure to construct a custom morning and night ritual using science-backed formulations.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <ClipboardList size={18} className={styles.icon} />
                <span>6 Easy Questions</span>
              </div>
              <div className={styles.feature}>
                <Sparkles size={18} className={styles.icon} />
                <span>Instant Routine Builder</span>
              </div>
              <div className={styles.feature}>
                <CheckCircle size={18} className={styles.icon} />
                <span>Derm-Curated Tips</span>
              </div>
            </div>

            <Link href="/quiz" passHref legacyBehavior>
              <Button variant="primary" size="lg">
                Find Your Routine Now
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
