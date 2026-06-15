export interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: number;              // INR (e.g., 599)
  originalPrice?: number;     // strikethrough price for discounts
  category: 'skincare' | 'sun-protection' | 'lip';
  image: string;              // primary image path
  images: string[];           // gallery images
  description: string;
  shortDescription: string;
  ingredients: string[];
  keyActives: string[];       // highlighted active ingredients
  howToUse: string[];         // step-by-step instructions
  claims: string[];           // "Paraben Free", "Cruelty Free", etc.
  size: string;               // "50ml", "5 sheets", etc.
  inStock: boolean;
  badge?: 'bestseller' | 'new' | 'limited';
  rating: number;             // 1-5
  reviewCount: number;
  skinTypes: string[];        // for quiz recommendations ("oily", "dry", "combination", "normal")
  concerns: string[];         // for quiz recommendations ("dullness", "sun-damage", "dryness", "aging", "acne")
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;            // Markdown/HTML content
  category: 'routines' | 'ingredients' | 'kbeauty' | 'skin-concerns' | 'tips';
  coverImage: string;
  author: string;
  publishDate: string;
  readTime: number;           // minutes
  tags: string[];
  relatedProducts?: string[]; // product slugs
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  text: string;
  date: string;
  productSlug: string;
  verified: boolean;
  helpful: number;
  photoUrl?: string;
}

export interface QuizOption {
  label: string;
  icon: string;              // emoji or icon name
  value: string;
  scores: Record<string, number>; // product slug -> affinity score
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle?: string;
  options: QuizOption[];
}

export interface RoutineStep {
  stepNumber: number;
  stepName: string;
  productName: string;
  productSlug: string;
  instruction: string;
}

export interface QuizResult {
  skinProfile: string;
  skinType: string;
  primaryConcern: string;
  recommendedProducts: Product[];
  morningRoutine: RoutineStep[];
  nightRoutine: RoutineStep[];
  proTips: string[];
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  url: string;
}

export interface IngredientData {
  slug: string;
  name: string;
  tagline: string;
  moleculeIcon: string;      // emoji or SVG path
  description: string;
  benefits: string[];
  foundIn: string[];          // product slugs
  isHero: boolean;
}
