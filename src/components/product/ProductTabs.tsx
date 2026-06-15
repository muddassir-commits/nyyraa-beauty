'use client';

import { useState } from 'react';
import { cn, formatDate } from '@/lib/utils';
import { getReviewsForProduct } from '@/data/reviews';
import StarRating from '@/components/ui/StarRating';
import { CheckCircle2 } from 'lucide-react';
import styles from './ProductTabs.module.css';

interface ProductTabsProps {
  productSlug: string;
  ingredients: string[];
  howToUse: string[];
}

export default function ProductTabs({
  productSlug,
  ingredients,
  howToUse,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'ingredients' | 'usage' | 'reviews'>('ingredients');

  const productReviews = getReviewsForProduct(productSlug);

  return (
    <div className={styles.wrapper}>
      {/* Headers */}
      <div className={styles.tabHeaders}>
        <button
          className={cn(styles.tabBtn, activeTab === 'ingredients' && styles.activeTabBtn)}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </button>
        <button
          className={cn(styles.tabBtn, activeTab === 'usage' && styles.activeTabBtn)}
          onClick={() => setActiveTab('usage')}
        >
          How to Use
        </button>
        <button
          className={cn(styles.tabBtn, activeTab === 'reviews' && styles.activeTabBtn)}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({productReviews.length})
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Ingredients Tab */}
        {activeTab === 'ingredients' && (
          <div className="fade-in-up">
            <h4 style={{ marginBottom: '1rem', fontWeight: 400 }}>Full Ingredients List</h4>
            <p style={{ color: 'rgba(74,14,45,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Our ingredients are globally sourced, formulated with optimal ratios of Korean-inspired complexes and science-backed actives.
            </p>
            <div className={styles.ingredientsList}>
              {ingredients.map((ing, idx) => (
                <span key={idx} className={styles.ingredientTag}>
                  {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* How to Use Tab */}
        {activeTab === 'usage' && (
          <div className={cn(styles.stepList, 'fade-in-up')}>
            <h4 style={{ marginBottom: '1rem', fontWeight: 400 }}>Step-by-Step Directions</h4>
            {howToUse.map((step, idx) => (
              <div key={idx} className={styles.stepItem}>
                <span className={styles.stepNum}>{idx + 1}</span>
                <p className={styles.stepText}>{step}</p>
              </div>
            ))}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className={cn(styles.reviewsGrid, 'fade-in-up')}>
            <h4 style={{ marginBottom: '1.5rem', fontWeight: 400 }}>Customer Reviews</h4>
            {productReviews.length > 0 ? (
              productReviews.map((rev) => (
                <div key={rev.id} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewAuthor}>
                      <span>{rev.customerName}</span>
                      {rev.verified && (
                        <span className={styles.verified} title="Verified Purchase">
                          <CheckCircle2 size={13} style={{ fill: 'currentColor', color: '#fff' }} />
                        </span>
                      )}
                    </div>
                    <span className={styles.reviewDate}>{formatDate(rev.date)}</span>
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <StarRating rating={rev.rating} size={14} />
                  </div>
                  <p className={styles.reviewText}>{rev.text}</p>
                </div>
              ))
            ) : (
              <div className={styles.noReviews}>
                No reviews yet for this product. Be the first to share your glow story!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
