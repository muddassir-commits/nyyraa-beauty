'use client';

import Link from 'next/link';
import { products } from '@/data/products';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/shop/ProductCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/effects/ScrollReveal';
import styles from './BestSellers.module.css';

export default function BestSellers() {
  // Show Velvet Lip Tint, Collagen Face Mask, and Invisible Gel Sunscreen
  const bestsellerProducts = products.filter(
    (p) => p.slug === 'velvet-lip-tint' || p.slug === 'collagen-boost-sheet-masks' || p.slug === 'invisible-gel-sunscreen'
  );

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory-warm)' }}>
      <div className="container">
        <SectionHeading
          title="Bestsellers"
          subtitle="Top Rated Glow Essentials"
          description="Loved by skincare enthusiasts, formulated to deliver immediate, visible results for Indian skin types under hot and humid climates."
        />

        <ScrollReveal animation="fade-up" stagger={0.15}>
          <div className={styles.grid}>
            {bestsellerProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </ScrollReveal>

        <div className={styles.ctaContainer}>
          <Link href="/shop" passHref legacyBehavior>
            <Button variant="outline">View All Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
