'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import StarRating from '@/components/ui/StarRating';
import Badge from '@/components/ui/Badge';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isBestseller = product.badge === 'bestseller';
  const isNew = product.badge === 'new';
  const isLimited = product.badge === 'limited';

  const productUrl = `/shop/${product.slug}`;

  return (
    <div className={styles.card}>
      {/* Badges */}
      {product.badge && (
        <div className={styles.badgeWrapper}>
          {isBestseller && <Badge variant="plum">Bestseller</Badge>}
          {isNew && <Badge variant="rose">New</Badge>}
          {isLimited && <Badge variant="gold">Limited</Badge>}
        </div>
      )}

      {/* Image */}
      <Link href={productUrl} className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.image}
          // We can use a blurDataURL placeholder or just standard loading
          loading="lazy"
        />
      </Link>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.category}>
          {product.category === 'sun-protection' ? 'Sun Care' : product.category}
        </span>
        <Link href={productUrl}>
          <h3 className={styles.title}>{product.name}</h3>
        </Link>

        {/* Rating */}
        <div className={styles.ratingRow}>
          <StarRating rating={product.rating} size={13} />
          <span className={styles.reviewCount}>({product.reviewCount})</span>
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>{product.tagline}</p>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.priceCol}>
            {product.originalPrice && (
              <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
            )}
            <span className={styles.price}>{formatPrice(product.price)}</span>
          </div>

          {/* Snipcart Buy Trigger */}
          {product.inStock ? (
            <button
              className={`${styles.addButton} snipcart-add-item`}
              data-item-id={product.slug}
              data-item-name={product.name}
              data-item-price={product.price}
              data-item-url={productUrl}
              data-item-image={product.image}
              data-item-description={product.shortDescription}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart size={14} />
              Add
            </button>
          ) : (
            <button className={`${styles.addButton} ${styles.outOfStock}`} disabled>
              Sold Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
