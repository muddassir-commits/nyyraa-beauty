'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, MessageSquarePlus, X } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/effects/ScrollReveal';
import StarRating from '@/components/ui/StarRating';
import Button from '@/components/ui/Button';
import { reviews as initialReviews } from '@/data/reviews';
import { products } from '@/data/products';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';
import styles from './reviews.module.css';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formProduct, setFormProduct] = useState(products[0].slug);
  const [formText, setFormText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Stats calculation
  const stats = useMemo(() => {
    const total = reviewsList.length;
    const sums = reviewsList.reduce(
      (acc, r) => {
        acc.sum += r.rating;
        acc.counts[r.rating] = (acc.counts[r.rating] || 0) + 1;
        return acc;
      },
      { sum: 0, counts: {} as Record<number, number> }
    );

    const average = total > 0 ? Number((sums.sum / total).toFixed(1)) : 0;

    return {
      total,
      average,
      counts: sums.counts,
    };
  }, [reviewsList]);

  // 2. Filter reviews
  const filteredReviews = useMemo(() => {
    if (filterRating === 'all') return reviewsList;
    return reviewsList.filter((r) => r.rating === filterRating);
  }, [reviewsList, filterRating]);

  // 3. Handle Form Submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formName,
          rating: formRating,
          product: formProduct,
          text: formText,
        }),
      });

      if (response.ok) {
        const newReview = {
          id: `rev-custom-${Date.now()}`,
          customerName: formName,
          rating: formRating,
          text: formText,
          date: new Date().toISOString().split('T')[0],
          productSlug: formProduct,
          verified: true, // Mocked as verified
          helpful: 0,
        };

        setReviewsList((prev) => [newReview, ...prev]);
        setIsModalOpen(false);

        // Reset fields
        setFormName('');
        setFormRating(5);
        setFormText('');
      } else {
        alert('Failed to submit review. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting review:', err);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProductTitle = (slug: string) => {
    const p = products.find((prod) => prod.slug === slug);
    return p ? p.name : slug;
  };

  return (
    <PageTransition>
      <div className={styles.page}>
        <div className="container section-padding">
          <SectionHeading
            title="Customer Reviews"
            subtitle="The Nyyraa Community"
            description="See how skincare enthusiasts across India are experiencing the science of Nyyraa's Korean formulations."
          />

          {/* Stats Section */}
          <div className={styles.statsSection}>
            {/* Average score */}
            <div className={styles.avgCol}>
              <span className={styles.bigNum}>{stats.average}</span>
              <div style={{ margin: '0.5rem 0' }}>
                <StarRating rating={stats.average} size={22} />
              </div>
              <span className={styles.totalCount}>Based on {stats.total} Reviews</span>
            </div>

            {/* Distribution bars */}
            <div className={styles.barsCol}>
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = stats.counts[stars] || 0;
                const percentage = stats.total > 0 ? Math.round((count / stats.total) * 100) : 0;
                return (
                  <div key={stars} className={styles.barRow}>
                    <span className={styles.starLabel}>
                      {stars} <Star size={12} style={{ fill: 'currentColor' }} />
                    </span>
                    <div className={styles.barOuter}>
                      <div className={styles.barFill} style={{ width: `${percentage}%` }} />
                    </div>
                    <span className={styles.barPercent}>{percentage}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Toolbar */}
          <div className={styles.toolbar}>
            {/* Ratings Filter */}
            <div className={styles.filters}>
              <button
                className={cn(styles.filterBtn, filterRating === 'all' && styles.activeFilter)}
                onClick={() => setFilterRating('all')}
              >
                All Ratings
              </button>
              {[5, 4, 3].map((stars) => (
                <button
                  key={stars}
                  className={cn(styles.filterBtn, filterRating === stars && styles.activeFilter)}
                  onClick={() => setFilterRating(stars)}
                >
                  {stars} Stars
                </button>
              ))}
            </div>

            {/* Write Review CTA */}
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              <MessageSquarePlus size={16} /> Share Your Story
            </Button>
          </div>

          {/* Reviews Grid */}
          <ScrollReveal animation="fade-up" stagger={0.1}>
            <div className={styles.grid}>
              {filteredReviews.map((rev) => (
                <div key={rev.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.author}>
                      <span>{rev.customerName}</span>
                      {rev.verified && (
                        <span className={styles.verified} title="Verified Purchase">
                          <CheckCircle2 size={13} style={{ fill: 'currentColor', color: '#fff' }} />
                        </span>
                      )}
                    </div>
                    <span className={styles.date}>{formatDate(rev.date)}</span>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <StarRating rating={rev.rating} size={14} />
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'rgba(74, 14, 45, 0.85)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    &ldquo;{rev.text}&rdquo;
                  </p>

                  <span className={styles.productTag}>
                    Product: {getProductTitle(rev.productSlug)}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)} aria-label="Close modal">
                <X size={16} />
              </button>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-deep-plum)', marginBottom: '1.5rem' }}>
                Share Your Glow Story
              </h3>

              <form onSubmit={handleFormSubmit} className={styles.form}>
                {/* Name */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Your Name</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className={styles.input}
                    placeholder="e.g. Ananya Sharma"
                  />
                </div>

                {/* Rating selection */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Rating</label>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                    <StarRating rating={formRating} size={24} interactive onChange={setFormRating} />
                  </div>
                </div>

                {/* Product Select */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Product Reviewed</label>
                  <select
                    value={formProduct}
                    onChange={(e) => setFormProduct(e.target.value)}
                    className={styles.select}
                  >
                    {products.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Review Text */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Your Experience</label>
                  <textarea
                    required
                    rows={4}
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    className={cn(styles.input, styles.textarea)}
                    placeholder="Tell us about your skin transformation..."
                  />
                </div>

                <Button type="submit" variant="primary" fullWidth style={{ marginTop: '1rem' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
