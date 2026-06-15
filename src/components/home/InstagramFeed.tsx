'use client';

import Image from 'next/image';
import { Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import { instagramPosts } from '@/data/instagram';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/effects/ScrollReveal';
import styles from './InstagramFeed.module.css';

export default function InstagramFeed() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory-warm)' }}>
      <div className="container">
        <SectionHeading
          title="Share Your Glow"
          subtitle="Join Us On Instagram"
          description="Follow @nyyraabeauty for daily skincare tips, Korean rituals, ingredient breakdowns, and reviews from our glowing community."
        />

        <ScrollReveal animation="fade-up" stagger={0.08}>
          <div className={styles.grid}>
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
              >
                <Image
                  src={post.imageUrl}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <InstagramIcon style={{ width: '20px', height: '20px' }} />
                  <div className={styles.stats}>
                    <span className={styles.statItem}>
                      <Heart size={12} style={{ fill: 'currentColor' }} />
                      {post.likes}
                    </span>
                    <span className={styles.statItem}>
                      <MessageCircle size={12} style={{ fill: 'currentColor' }} />
                      {post.comments}
                    </span>
                  </div>
                  <span className={styles.handle}>@nyyraabeauty</span>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
