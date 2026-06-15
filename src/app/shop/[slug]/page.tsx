import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import ProductGallery from '@/components/product/ProductGallery';
import ProductTabs from '@/components/product/ProductTabs';
import ProductCard from '@/components/shop/ProductCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import StarRating from '@/components/ui/StarRating';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import styles from './product-detail.module.css';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Get up to 3 related products (exclude current)
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const productUrl = `/shop/${product.slug}`;

  return (
    <PageTransition>
      <div className={styles.page}>
        <div className="container section-padding">
          {/* Back button & Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <ArrowLeft size={14} /> Back to Catalog
            </Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          {/* Main Grid */}
          <div className={styles.grid}>
            {/* Left: Gallery */}
            <div>
              <ProductGallery images={product.images} name={product.name} />
            </div>

            {/* Right: Product Details */}
            <div className={styles.rightCol}>
              <span className={styles.category}>
                {product.category === 'sun-protection' ? 'Sun Care' : product.category}
              </span>
              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.tagline}>{product.tagline}</p>

              {/* Rating */}
              <div className={styles.ratingRow}>
                <StarRating rating={product.rating} size={16} />
                <span className={styles.ratingText}>{product.rating}</span>
                <span className={styles.reviewCount}>({product.reviewCount} Reviews)</span>
              </div>

              {/* Price */}
              <div className={styles.priceRow}>
                <span className={styles.price}>{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
                )}
              </div>

              {/* Size */}
              <div className={styles.sizeText}>Size: {product.size}</div>

              {/* Description */}
              <p className={styles.desc}>{product.description}</p>

              {/* Claims / Badges */}
              <div className={styles.claimsRow}>
                {product.claims.map((claim, idx) => (
                  <span key={idx} className={styles.claimBadge}>
                    {claim}
                  </span>
                ))}
              </div>

              {/* Buy Actions */}
              {product.inStock ? (
                <div className={styles.ctaRow}>
                  {/* Snipcart Buy Trigger */}
                  <button
                    className={`${styles.buyBtn} snipcart-add-item`}
                    data-item-id={product.slug}
                    data-item-name={product.name}
                    data-item-price={product.price}
                    data-item-url={productUrl}
                    data-item-image={product.image}
                    data-item-description={product.shortDescription}
                    style={{
                      background: 'var(--gradient-rose)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '1rem 2rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      boxShadow: '0 4px 15px rgba(183, 110, 121, 0.3)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <ShoppingCart size={18} />
                    Add to Glow Bag
                  </button>
                </div>
              ) : (
                <div className={styles.outOfStock}>
                  Currently Out of Stock — restocking soon!
                </div>
              )}
            </div>
          </div>

          {/* Details & Reviews Tabs */}
          <ProductTabs
            productSlug={product.slug}
            ingredients={product.ingredients}
            howToUse={product.howToUse}
          />

          {/* Related Products */}
          <div className={styles.relatedProducts}>
            <SectionHeading
              title="You May Also Love"
              subtitle="Complete Your Ritual"
              align="center"
            />
            <div className={styles.relatedGrid}>
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
