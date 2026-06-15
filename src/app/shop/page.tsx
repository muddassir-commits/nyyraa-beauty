'use client';

import { useState, useMemo } from 'react';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';
import { SlidersHorizontal } from 'lucide-react';
import styles from './shop.module.css';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'skincare' | 'sun-protection' | 'lip'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const categories = [
    { label: 'All Collection', value: 'all' as const },
    { label: 'Skincare Rituals', value: 'skincare' as const },
    { label: 'Sun Care (SPF)', value: 'sun-protection' as const },
    { label: 'Lip Color', value: 'lip' as const },
  ];

  // Process sorting & filtering
  const processedProducts = useMemo(() => {
    let list = [...products];

    // Filter by Category
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Sort
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } // 'featured' keeps original catalog order

    return list;
  }, [activeCategory, sortBy]);

  return (
    <PageTransition>
      {/* Dynamic styles injected via style jsx or we can write shop.module.css */}
      <div className={styles.shopPage}>
        <div className="container section-padding">
          <SectionHeading
            title="The Collection"
            subtitle="Premium Glow Formulas"
            description="Explore our range of Korean-formulated, science-backed skin solutions, crafted to suit Indian weather and target specific concerns."
            align="center"
          />

          {/* Filter Bar */}
          <div className={styles.filterBar}>
            {/* Category selection */}
            <div className={styles.categoryRow}>
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={cn(
                    styles.filterPill,
                    activeCategory === cat.value && styles.activePill
                  )}
                  onClick={() => setActiveCategory(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className={styles.sortDropdown}>
              <SlidersHorizontal size={14} className={styles.sortIcon} />
              <span className={styles.sortLabel}>Sort By:</span>
              <select
                value={sortBy}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as any)}
                className={styles.select}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Catalog Count */}
          <div className={styles.resultsCount}>
            Showing {processedProducts.length} product{processedProducts.length !== 1 ? 's' : ''}
          </div>

          {/* Products Grid */}
          <div className={styles.grid}>
            {processedProducts.map((product) => (
              <div key={product.slug} className="fade-in-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
