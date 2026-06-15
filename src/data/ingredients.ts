import { IngredientData } from '@/types';

export const ingredients: IngredientData[] = [
  {
    slug: 'hydrolyzed-collagen',
    name: 'Hydrolyzed Marine Collagen',
    tagline: 'The building block of youthful skin.',
    moleculeIcon: '🧬',
    description: 'Hydrolyzed collagen consists of small peptide chains that easily penetrate the skin barrier. It stimulates the skin\'s natural collagen synthesis, helping to restore elasticity, firmness, and bounce.',
    benefits: [
      'Visibly reduces the appearance of fine lines and wrinkles',
      'Plumps the skin by locking in moisture',
      'Supports the skin\'s structural network for increased firmness'
    ],
    foundIn: ['collagen-boost-sheet-masks'],
    isHero: true
  },
  {
    slug: 'hyaluronic-acid',
    name: 'Hyaluronic Acid',
    tagline: 'The ultimate moisture magnet.',
    moleculeIcon: '💧',
    description: 'A naturally occurring substance in our skin that can hold up to 1000 times its weight in water. We use a blend of three molecular weights (low, medium, high) to hydrate both the surface and deeper layers of the epidermis.',
    benefits: [
      'Provides intense, multi-level hydration',
      'Smoothes skin texture and dry patches',
      'Strengthens the protective skin barrier'
    ],
    foundIn: ['glass-skin-hydrating-serum', 'invisible-gel-sunscreen', 'velvet-lip-tint', 'collagen-boost-sheet-masks'],
    isHero: true
  },
  {
    slug: 'niacinamide',
    name: 'Niacinamide (Vitamin B3)',
    tagline: 'The gentle skin-refining multitasker.',
    moleculeIcon: '✨',
    description: 'An exceptionally versatile vitamin that works to even out skin tone, balance oil production, and calm redness. It is highly compatible with all skin types and strengthens the skin barrier against environmental damage.',
    benefits: [
      'Fades hyperpigmentation, acne scars, and dark spots',
      'Regulates sebum and reduces pore size',
      'Soothes inflammation and redness'
    ],
    foundIn: ['glass-skin-hydrating-serum', 'tinted-sunscreen-spf50', 'collagen-boost-sheet-masks'],
    isHero: true
  },
  {
    slug: 'fermented-rice-water',
    name: 'Fermented Rice Water',
    tagline: 'The traditional Korean secret to glass skin.',
    moleculeIcon: '🌾',
    description: 'Rich in vitamins, minerals, and amino acids, fermented rice water has been used in Korean skincare for generations. The fermentation process breaks down molecules, making them more bioavailable to brighten skin and refine texture.',
    benefits: [
      'Brightens dull skin and promotes a translucent glow',
      'Refines pores and smoothes rough patches',
      'Deeply nourishes with rich amino acids'
    ],
    foundIn: ['glass-skin-hydrating-serum'],
    isHero: true
  },
  {
    slug: 'centella-asiatica',
    name: 'Centella Asiatica (Cica)',
    tagline: 'The ultimate soothing botanical healer.',
    moleculeIcon: '🌿',
    description: 'Also known as Gotu Kola, Centella Asiatica is a botanical powerhouse renowned for its anti-inflammatory and wound-healing properties. It calms sensitive skin and repairs a damaged skin barrier.',
    benefits: [
      'Calms irritation, redness, and active breakouts',
      'Speeds up skin repair and barrier recovery',
      'Stimulates microcirculation for healthy skin cell turnover'
    ],
    foundIn: ['collagen-boost-sheet-masks', 'invisible-gel-sunscreen'],
    isHero: false
  },
  {
    slug: 'rosehip-oil',
    name: 'Rosehip Seed Oil',
    tagline: 'Rich hydration with essential fatty acids.',
    moleculeIcon: '🌹',
    description: 'Packed with vitamins A, C, and essential fatty acids, Rosehip Seed Oil is a dry oil that deeply nourishes and hydrates skin and lips without leaving a greasy residue. It supports cell regeneration and fades discoloration.',
    benefits: [
      'Deeply hydrates lips and prevents peeling',
      'Fades pigmentation and dark spots',
      'Provides powerful antioxidant protection'
    ],
    foundIn: ['velvet-lip-tint'],
    isHero: false
  }
];

export const getIngredientBySlug = (slug: string) => {
  return ingredients.find(i => i.slug === slug);
};
