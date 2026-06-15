'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { reviews } from '@/data/reviews';
import StarRating from '@/components/ui/StarRating';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import styles from './ReviewsPreview.module.css';

export default function ReviewsPreview() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Take the first 5 reviews for the preview
  const featuredReviews = reviews.slice(0, 5);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % featuredReviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentReview = featuredReviews[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.35, ease: 'easeIn' as const },
    }),
  };

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <SectionHeading
          title="Customer Testimonials"
          subtitle="Real Stories, Real Results"
          description="Read what our community has to say about their skin transformation with Nyraa's Korean-inspired formulations."
        />

        <div className={styles.carouselContainer}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={styles.slide}
            >
              <div className={styles.rating}>
                <StarRating rating={currentReview.rating} size={20} />
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{currentReview.text}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <span>{currentReview.customerName}</span>
                {currentReview.verified && (
                  <span className={styles.verified} title="Verified Purchase">
                    <CheckCircle2 size={14} style={{ fill: 'currentColor', color: '#fff' }} />
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <span className={styles.indicator}>
              {index + 1} / {featuredReviews.length}
            </span>
            <button className={styles.navBtn} onClick={nextSlide} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/reviews" passHref legacyBehavior>
            <Button variant="outline">View All Reviews</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
