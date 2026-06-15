import { Product } from '@/types';

export const products: Product[] = [
  {
    slug: 'velvet-lip-tint',
    name: 'Velvet Lip Tint',
    tagline: 'Hydrating Matte Wash. Rose Gold Elegance.',
    price: 399,
    originalPrice: 499,
    category: 'lip',
    image: '/images/products/lip-tint.svg',
    images: [
      '/images/products/lip-tint.svg',
      '/images/products/lip-tint-swatch.svg',
      '/images/products/lip-tint-texture.svg'
    ],
    description: 'A luxurious Korean-inspired lip tint that offers a weightless velvet finish. Crafted specifically to complement Indian skin tones, this hydrating formula is enriched with Vitamin E and Rosehip oil to lock in moisture while delivering rich, buildable pigmentation. Housed in a premium frosted glass bottle with a metallic rose gold foil cap.',
    shortDescription: 'Frosted bottle velvet lip tint with botanical oils. Perfectly curated for Indian skin tones.',
    ingredients: [
      'Dimethicone Crosspolymer',
      'Rosehip Seed Oil',
      'Vitamin E (Tocopherol)',
      'Hyaluronic Acid',
      'Jojoba Seed Extract',
      'Iron Oxides (CI 77491, CI 77492, CI 77499)'
    ],
    keyActives: ['Rosehip Seed Oil', 'Vitamin E', 'Hyaluronic Acid'],
    howToUse: [
      'Apply to the center of your lips and blend outwards using the applicator.',
      'For a gradient Korean look, dab lightly on the inner lips and press together.',
      'Layer for a more intense, bold matte color.'
    ],
    claims: ['Hydrating Matte', 'Dermatologically Tested', 'Cruelty Free', 'Paraben Free', 'For All Indian Tones'],
    size: '5ml',
    inStock: true,
    badge: 'new',
    rating: 4.8,
    reviewCount: 42,
    skinTypes: ['dry', 'oily', 'combination', 'normal'],
    concerns: ['dryness']
  },
  {
    slug: 'collagen-boost-sheet-masks',
    name: 'Collagen Boost Sheet Mask Pack',
    tagline: 'Plump. Firm. Glow in 15 Minutes.',
    price: 599,
    originalPrice: 699,
    category: 'skincare',
    image: '/images/products/collagen-mask.svg',
    images: [
      '/images/products/collagen-mask.svg',
      '/images/products/collagen-mask-texture.svg',
      '/images/products/collagen-mask-model.svg'
    ],
    description: 'An intensive restructuring treatment featuring hydrolyzed marine collagen and centella asiatica. Engineered to deeply hydrate and visibly firm the skin, our sheet masks deliver Korean glass-skin glow optimized for Indian climates. Each premium box contains 5 individually sealed masks finished with luxurious matte lamination and rose gold foil lettering.',
    shortDescription: '5-pack premium bio-cellulose sheet masks with Hydrolyzed Collagen and Niacinamide for instant firmness.',
    ingredients: [
      'Hydrolyzed Collagen',
      'Niacinamide (Vitamin B3)',
      'Centella Asiatica Extract (Cica)',
      'Sodium Hyaluronate',
      'Allantoin',
      'Adenosine',
      'Camellia Sinensis (Green Tea) Leaf Extract'
    ],
    keyActives: ['Hydrolyzed Marine Collagen', 'Niacinamide (2%)', 'Centella Asiatica'],
    howToUse: [
      'Cleanse your face thoroughly and apply toner.',
      'Unfold the mask sheet and gently apply to fit your facial contours.',
      'Leave on for 15-20 minutes, then remove.',
      'Gently pat the remaining essence into your skin. Do not wash off.'
    ],
    claims: ['Paraben Free', 'Cruelty Free', 'Dermatologically Tested', 'Instant Plumping', 'Korean Bio-Cellulose'],
    size: '5 Sheets Pack',
    inStock: true,
    badge: 'bestseller',
    rating: 4.9,
    reviewCount: 118,
    skinTypes: ['dry', 'combination', 'normal', 'oily'],
    concerns: ['aging', 'dryness', 'dullness']
  },
  {
    slug: 'invisible-gel-sunscreen',
    name: 'Invisible Gel Sunscreen SPF 50',
    tagline: 'PA++++. Ultra-Light. Zero White Cast.',
    price: 499,
    originalPrice: 599,
    category: 'sun-protection',
    image: '/images/products/sunscreen-gel.svg',
    images: [
      '/images/products/sunscreen-gel.svg',
      '/images/products/sunscreen-gel-texture.svg',
      '/images/products/sunscreen-gel-flatlay.svg'
    ],
    description: 'A water-gel sunscreen that melts invisibly into the skin. Providing broad-spectrum SPF 50 PA++++ protection, this formula guarantees zero white cast and leaves a weightless, velvet-matte finish that acts as a perfect primer. Tailored to withstand hot and humid Indian weather, it controls oil control while feeding the skin barrier with cica and hyaluronic acid. Packaged in a premium soft-touch matte tube.',
    shortDescription: 'Broad-spectrum chemical & physical SPF 50 gel. Non-greasy, fast-absorbing, and completely invisible.',
    ingredients: [
      'Ethylhexyl Methoxycinnamate',
      'Zinc Oxide (Nano)',
      'Hyaluronic Acid',
      'Centella Asiatica (Cica) Extract',
      'Aloe Barbadensis Leaf Juice',
      'Niacinamide',
      'Silica'
    ],
    keyActives: ['SPF 50 PA++++ Filters', 'Cica Extract', 'Hyaluronic Acid'],
    howToUse: [
      'Apply generously as the final step of your morning skincare routine, at least 15 minutes before sun exposure.',
      'Use the three-finger rule: apply three lines of sunscreen on your index, middle, and ring fingers for full coverage.',
      'Reapply every 2 hours if outdoors or sweating.'
    ],
    claims: ['Zero White Cast', 'PA++++ Protection', 'Sweat & Water Resistant', 'Non-Comedogenic', 'Non-Greasy'],
    size: '50g',
    inStock: true,
    badge: 'bestseller',
    rating: 4.7,
    reviewCount: 89,
    skinTypes: ['oily', 'combination', 'normal', 'dry'],
    concerns: ['sun-damage', 'acne']
  },
  {
    slug: 'tinted-sunscreen-spf50',
    name: 'Tinted Mineral Sunscreen SPF 50',
    tagline: 'PA++++. Sheer Coverage. Universal Glow.',
    price: 549,
    originalPrice: 649,
    category: 'sun-protection',
    image: '/images/products/sunscreen-tinted.svg',
    images: [
      '/images/products/sunscreen-tinted.svg',
      '/images/products/sunscreen-tint-swatch.svg',
      '/images/products/sunscreen-tint-flatlay.svg'
    ],
    description: 'An all-mineral physical SPF 50 PA++++ sunscreen that blends seamlessly into Indian skin tones. Featuring a sheer tint that offsets any chalkiness, it evens out skin tone, blurs imperfections, and gives a healthy, dewy finish. Enriched with niacinamide and green tea extracts to soothe redness and control sebum. Sealed with a luxurious metallic rose gold cap.',
    shortDescription: '100% Mineral physical sunscreen with a universal sheer tint. Dewy finish, pollution shield.',
    ingredients: [
      'Zinc Oxide',
      'Titanium Dioxide',
      'Niacinamide',
      'Camellia Sinensis (Green Tea) Extract',
      'Tocopheryl Acetate',
      'Iron Oxides (CI 77491, CI 77492, CI 77499)'
    ],
    keyActives: ['Zinc Oxide & Titanium Dioxide', 'Niacinamide (3%)', 'Green Tea Extract'],
    howToUse: [
      'Shake well before use.',
      'Apply evenly to face and neck as the last step in your routine.',
      'Blend gently with fingertips. Let it sit for 2 minutes to adapt to your skin tone before applying makeup.'
    ],
    claims: ['100% Mineral Physical', 'Sheer Tinted Finish', 'Fragrance Free', 'Reef Safe', 'Blue Light Shield'],
    size: '50g',
    inStock: true,
    rating: 4.6,
    reviewCount: 56,
    skinTypes: ['combination', 'normal', 'dry', 'oily'],
    concerns: ['sun-damage', 'dullness']
  },
  {
    slug: 'glass-skin-hydrating-serum',
    name: 'Glass Skin Hydrating Serum',
    tagline: 'Triple Hyaluronic Acid + Rice Water.',
    price: 699,
    originalPrice: 799,
    category: 'skincare',
    image: '/images/products/serum.svg',
    images: [
      '/images/products/serum.svg',
      '/images/products/serum-texture.svg'
    ],
    description: 'Unlock the ultimate translucent radiance with our signature Korean-inspired ferment. This highly concentrated hydrating serum combines three molecular weights of Hyaluronic Acid with 74% fermented Rice Water. Designed to instantly quench thirsty skin cells and target dullness, it repairs the skin barrier and refines pores. Housed in a gorgeous frosted glass dropper bottle.',
    shortDescription: 'Deep hydration booster with 74% fermented Rice Water and Panthenol for a plump, translucent glow.',
    ingredients: [
      'Saccharomyces/Rice Ferment Filtrate (74%)',
      'Niacinamide',
      'Sodium Hyaluronate (Multi-Weight)',
      'Panthenol (Vitamin B5)',
      'Allantoin',
      'Glycerin',
      'Adenosine'
    ],
    keyActives: ['Fermented Rice Water (74%)', 'Triple Hyaluronic Acid', 'Panthenol (1%)'],
    howToUse: [
      'Apply 3-4 drops onto clean, damp face and neck after toning.',
      'Gently pat into the skin until fully absorbed.',
      'Follow up with your favorite moisturizer to lock in the hydration.',
      'Use morning and night.'
    ],
    claims: ['74% Rice Ferment', 'Deep Hydration', 'Fragrance Free', 'pH Balanced', 'Pore Tightening'],
    size: '30ml',
    inStock: false,
    badge: 'limited',
    rating: 4.9,
    reviewCount: 37,
    skinTypes: ['dry', 'combination', 'normal', 'oily'],
    concerns: ['dryness', 'dullness', 'acne']
  }
];

export const getProductBySlug = (slug: string) => {
  return products.find(p => p.slug === slug);
};
