'use client';

import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export default function StarRating({
  rating,
  size = 16,
  interactive = false,
  onChange,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.4 && rating % 1 <= 0.8;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', color: 'var(--color-rose-gold)' }}>
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          style={{ fill: 'currentColor', cursor: interactive ? 'pointer' : 'default' }}
          onClick={() => interactive && onChange?.(i + 1)}
        />
      ))}

      {/* Half Star */}
      {hasHalf && (
        <StarHalf
          size={size}
          style={{ fill: 'currentColor', cursor: interactive ? 'pointer' : 'default' }}
          onClick={() => interactive && onChange?.(fullStars + 1)}
        />
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => {
        const index = fullStars + (hasHalf ? 1 : 0) + i + 1;
        return (
          <Star
            key={`empty-${i}`}
            size={size}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
            onClick={() => interactive && onChange?.(index)}
          />
        );
      })}
    </div>
  );
}
