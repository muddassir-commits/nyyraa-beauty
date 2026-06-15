import PageTransition from '@/components/layout/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestSellers from '@/components/home/BestSellers';
import QuizCTA from '@/components/home/QuizCTA';
import BrandStory from '@/components/home/BrandStory';
import IngredientsPreview from '@/components/home/IngredientsPreview';
import ReviewsPreview from '@/components/home/ReviewsPreview';
import BlogPreview from '@/components/home/BlogPreview';
import InstagramFeed from '@/components/home/InstagramFeed';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TrustBar />
      <BestSellers />
      <QuizCTA />
      <BrandStory />
      <IngredientsPreview />
      <ReviewsPreview />
      <BlogPreview />
      <InstagramFeed />
    </PageTransition>
  );
}
