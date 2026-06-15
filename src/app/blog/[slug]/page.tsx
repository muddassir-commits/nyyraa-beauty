import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/shop/ProductCard';
import { blogPosts } from '@/data/blog-posts';
import { products } from '@/data/products';
import { formatDate } from '@/lib/utils';
import styles from '../blog.module.css';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get full product objects for the related products listed in this post
  const postRelatedProducts = (post.relatedProducts || [])
    .map((productSlug) => products.find((p) => p.slug === productSlug))
    .filter((p): p is typeof products[0] => p !== undefined);

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
      <div className={styles.detailPage}>
        <div className="container section-padding">
          {/* Back Button */}
          <Link href="/blog" className={styles.backBtn}>
            <ArrowLeft size={14} /> Back to Journal
          </Link>

          {/* Post Header */}
          <header className={styles.postHeader}>
            <span className={styles.category}>{getCategoryLabel(post.category)}</span>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <div className={styles.postMeta}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <User size={14} /> {post.author}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Calendar size={14} /> {formatDate(post.publishDate)}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={14} /> {post.readTime} min read
              </span>
            </div>
          </header>

          {/* Cover Image */}
          <div className={styles.postCoverWrapper}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              className={styles.postCover}
              priority
            />
          </div>

          {/* Post Content */}
          <article
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Products Section */}
          {postRelatedProducts.length > 0 && (
            <div className={styles.relatedSection}>
              <SectionHeading
                title="Shop the Article"
                subtitle="Curated Recommendations"
                align="center"
              />
              <div className={styles.relatedGrid}>
                {postRelatedProducts.map((prod) => (
                  <ProductCard key={prod.slug} product={prod} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
