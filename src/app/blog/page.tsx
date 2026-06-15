'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';
import styles from './blog.module.css';

type CategoryType = 'all' | 'routines' | 'ingredients' | 'kbeauty' | 'skin-concerns';

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const categories = [
    { label: 'All Articles', value: 'all' as const },
    { label: 'Routines', value: 'routines' as const },
    { label: 'Science', value: 'ingredients' as const },
    { label: 'K-Beauty', value: 'kbeauty' as const },
    { label: 'Concerns', value: 'skin-concerns' as const },
  ];

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      routines: 'Routines',
      ingredients: 'Science',
      kbeauty: 'K-Beauty',
      'skin-concerns': 'Concerns',
      tips: 'Glow Tips',
    };
    return labels[cat] || cat;
  };

  return (
    <PageTransition>
      <div className={styles.blogPage}>
        <div className="container section-padding">
          <SectionHeading
            title="The Glow Journal"
            subtitle="Expert Skincare Advice"
            description="Dive into our articles covering Korean formulation science, ingredient deep dives, skin routines, and concern-focused advice."
          />

          {/* Categories Filter Bar */}
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={cn(
                  styles.filterBtn,
                  activeCategory === cat.value && styles.activeFilterBtn
                )}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className={styles.grid}>
            {filteredPosts.map((post) => (
              <div key={post.slug} className={cn(styles.card, 'fade-in-up')}>
                <Link href={`/blog/${post.slug}`} className={styles.imageWrapper}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                    loading="lazy"
                  />
                </Link>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{getCategoryLabel(post.category)}</span>
                    <span>{formatDate(post.publishDate)}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className={styles.title}>{post.title}</h3>
                  </Link>

                  <p className={styles.excerpt}>{post.excerpt}</p>

                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
