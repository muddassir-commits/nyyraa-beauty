'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/effects/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './BlogPreview.module.css';

export default function BlogPreview() {
  // Get the 3 latest blog posts
  const latestPosts = blogPosts.slice(0, 3);

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
    <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <SectionHeading
          title="The Glow Journal"
          subtitle="Education & Skincare Tips"
          description="Read from our dermatologists and skincare experts about formulating rituals, understanding clinical actives, and glowing naturally."
        />

        <ScrollReveal animation="fade-up" stagger={0.15}>
          <div className={styles.grid}>
            {latestPosts.map((post) => (
              <div key={post.slug} className={styles.card}>
                <Link href={`/blog/${post.slug}`} className={styles.imageWrapper}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
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
        </ScrollReveal>

        <div className={styles.ctaWrapper}>
          <Link href="/blog" passHref legacyBehavior>
            <Button variant="outline">View All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
