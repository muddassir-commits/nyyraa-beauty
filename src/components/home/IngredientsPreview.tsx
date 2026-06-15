'use client';

import Link from 'next/link';
import { ingredients } from '@/data/ingredients';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/effects/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './IngredientsPreview.module.css';

export default function IngredientsPreview() {
  // Take three main ingredients
  const keyIngredients = ingredients.filter(
    (ing) => ing.slug === 'hydrolyzed-collagen' || ing.slug === 'hyaluronic-acid' || ing.slug === 'niacinamide'
  );

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory-warm)' }}>
      <div className="container">
        <SectionHeading
          title="Active Ingredients"
          subtitle="Backed by Science, Sourced from Nature"
          description="We select clean, high-performance actives at optimal concentrations to ensure maximum efficacy without compromising your skin barrier."
        />

        <ScrollReveal animation="fade-up" stagger={0.15}>
          <div className={styles.grid}>
            {keyIngredients.map((ing) => (
              <div key={ing.slug} className={styles.card}>
                <div className={styles.iconWrapper}>{ing.moleculeIcon}</div>
                <h3 className={styles.title}>{ing.name}</h3>
                <span className={styles.tagline}>{ing.tagline}</span>
                <p className={styles.desc}>{ing.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className={styles.ctaWrapper}>
          <Link href="/ingredients" passHref legacyBehavior>
            <Button variant="outline">Explore All Ingredients</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
