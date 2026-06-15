'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback to avoid crashes if images is empty or undefined
  const galleryImages = images && images.length > 0 ? images : ['/images/products/placeholder.jpg'];

  return (
    <div className={styles.gallery}>
      {/* Main Image */}
      <div className={styles.mainImageWrapper}>
        <Image
          src={galleryImages[activeIndex]}
          alt={`${name} main view`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.mainImage}
          priority
        />
      </div>

      {/* Thumbnails list */}
      {galleryImages.length > 1 && (
        <div className={styles.thumbnails}>
          {galleryImages.map((img, i) => (
            <button
              key={i}
              className={cn(
                styles.thumbBtn,
                activeIndex === i && styles.activeThumb
              )}
              onClick={() => setActiveIndex(i)}
              aria-label={`View ${name} image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                sizes="80px"
                className={styles.thumbImage}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
