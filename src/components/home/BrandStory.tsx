'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/effects/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './BrandStory.module.css';

export default function BrandStory() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Content Column */}
          <ScrollReveal animation="slide-right">
            <div className={styles.contentCol}>
              <span className={styles.eyebrow}>The Nyyraa Story</span>
              <h2 className={styles.headline}>Korean Beauty Formulation, Tailored for Indian Skin</h2>
              <p className={styles.text}>
                For years, skincare enthusiasts have tried to import the Korean 10-step routine, only to find the heavy layers trigger breakouts and sweat under Indian heat and humidity.
              </p>
              <p className={styles.text}>
                At Nyyraa, we bridge this gap. We partner with leading research labs in Seoul to create lightweight, fast-absorbing water-gel textures, and enrich them with targeted botanical extracts and clinical actives to resolve hyperpigmentation, tanning, and barrier depletion.
              </p>

              <div className={styles.highlightList}>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>
                    <Sparkles size={20} />
                  </span>
                  <div>
                    <h3 className={styles.highlightText}>Advanced Korean Fermentation</h3>
                    <p className={styles.highlightDesc}>Ingredients like fermented Rice Water break down into smaller molecules, sinking deeper to nourish skin cells.</p>
                  </div>
                </div>

                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>
                    <Compass size={20} />
                  </span>
                  <div>
                    <h3 className={styles.highlightText}>Formulated for High Humidity</h3>
                    <p className={styles.highlightDesc}>Completely lightweight, non-comedogenic formulas that protect and hydrate without blocking pores.</p>
                  </div>
                </div>

                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <h3 className={styles.highlightText}>Dermatologist Approved</h3>
                    <p className={styles.highlightDesc}>Every product undergoes rigorous skin testing on melanin-rich skin types to ensure absolute efficacy and safety.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/about" passHref legacyBehavior>
                  <Button variant="secondary">Learn Our Philosophy</Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Image Column */}
          <ScrollReveal animation="slide-left">
            <div className={styles.imageCol}>
              <div className={styles.imageOuter}>
                <div className={styles.imageRatio}>
                  <Image
                    src="/images/brand/story-lifestyle.svg"
                    alt="Indian women celebrating natural glowing skin"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Decorative card overlap */}
              <div className={styles.imageOverlay}>
                <span className={styles.overlayNumber}>100%</span>
                <span className={styles.overlayText}>Vegan & Safe</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
