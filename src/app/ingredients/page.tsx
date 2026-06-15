'use client';

import Link from 'next/link';
import { Check, ShieldAlert } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { ingredients } from '@/data/ingredients';
import { products } from '@/data/products';
import styles from './ingredients.module.css';

export default function Ingredients() {
  const getProductDetails = (productSlug: string) => {
    return products.find((p) => p.slug === productSlug);
  };

  const excludedList = [
    { name: 'Parabens', reason: 'Disrupts endocrine hormone balance' },
    { name: 'Sulfates (SLS/SLES)', reason: 'Strips skin oils, compromises barrier' },
    { name: 'Phthalates', reason: 'Linked to environmental toxins' },
    { name: 'Mineral Oil', reason: 'Heavy texture clogs pores, causes congestion' },
    { name: 'Drying Alcohols', reason: 'Triggers epidermal dehydration' },
    { name: 'Synthetic Fragrance', reason: 'High allergen trigger for sensitive skin' },
    { name: 'Formaldehyde', reason: 'Sensitizing preservative' },
    { name: 'Coal Tar', reason: 'Irritant commonly banned globally' },
  ];

  return (
    <PageTransition>
      <div className={styles.page}>
        <div className="container section-padding">
          <SectionHeading
            title="Ingredient Science"
            subtitle="The DNA of Glow"
            description="Explore the clinical actives and botanical complexes that power Nyyraa's collection. Translucent skin begins with transparent formulation."
          />

          {/* Core Spotlight Grid */}
          <ScrollReveal animation="fade-up" stagger={0.15}>
            <div className={styles.grid}>
              {ingredients.map((ing) => (
                <div key={ing.slug} className={styles.ingCard}>
                  <div className={styles.header}>
                    <div className={styles.icon}>{ing.moleculeIcon}</div>
                    <div className={styles.titleCol}>
                      <h3 className={styles.name}>{ing.name}</h3>
                      <span className={styles.tagline}>{ing.tagline}</span>
                    </div>
                  </div>

                  <p className={styles.desc}>{ing.description}</p>

                  <h4 className={styles.sectionTitle}>Key Benefits</h4>
                  <div className={styles.benefitsList}>
                    {ing.benefits.map((benefit, idx) => (
                      <div key={idx} className={styles.benefitItem}>
                        <Check size={14} className={styles.check} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Product mapping */}
                  {ing.foundIn.length > 0 && (
                    <div style={{ marginTop: 'auto' }}>
                      <h4 className={styles.sectionTitle}>Found In</h4>
                      <div className={styles.productsList}>
                        {ing.foundIn.map((slug) => {
                          const p = getProductDetails(slug);
                          if (!p) return null;
                          return (
                            <Link key={slug} href={`/shop/${slug}`} className={styles.productLink}>
                              {p.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Formulated Without Section */}
          <ScrollReveal animation="scale">
            <div className={styles.excludedSection}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem' }}>
                <ShieldAlert size={35} style={{ color: 'var(--color-rose-gold)' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-deep-plum)' }}>
                  Our &ldquo;Never Use&rdquo; List
                </h3>
                <p style={{ fontSize: 'var(--text-body)', color: 'rgba(74, 14, 45, 0.75)', maxWidth: '500px', lineHeight: 1.6 }}>
                  Healthy skin requires clean formulations. We strictly exclude common irritants, drying agents, and endocrine-disrupting chemicals.
                </p>
              </div>

              <div className={styles.excludedGrid}>
                {excludedList.map((item, idx) => (
                  <div key={idx} className={styles.excludedItem}>
                    <span className={styles.excludedName}>{item.name}</span>
                    <span className={styles.excludedReason}>{item.reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
