import { Product, QuizResult, RoutineStep } from '@/types';
import { products } from '@/data/products';

export function calculateQuizResults(answers: Record<number, string>): QuizResult {
  const skinType = answers[1] || 'normal';
  const concern = answers[2] || 'dullness';
  const sunExposure = answers[3] || 'medium-sun';
  const routineStyle = answers[4] || 'minimalist';
  const sensitivity = answers[5] || 'normal-sensitive';
  const goal = answers[6] || 'glass-skin';

  // 1. Calculate Scores for each product
  const scores: Record<string, number> = {};
  
  // Initialize scores
  products.forEach(p => {
    scores[p.slug] = 0;
  });

  // Helper to accumulate scores from answers
  // We can look up Q1 to Q6 questions in our quiz data
  // Since we already have the values, let's add custom weights based on the answers:

  // Q1: Skin Type weight
  if (skinType === 'oily') {
    scores['invisible-gel-sunscreen'] += 3;
    scores['glass-skin-hydrating-serum'] += 2;
  } else if (skinType === 'dry') {
    scores['glass-skin-hydrating-serum'] += 3;
    scores['collagen-boost-sheet-masks'] += 3;
    scores['velvet-lip-tint'] += 2;
  } else if (skinType === 'combination') {
    scores['invisible-gel-sunscreen'] += 3;
    scores['glass-skin-hydrating-serum'] += 3;
    scores['collagen-boost-sheet-masks'] += 2;
  } else {
    scores['glass-skin-hydrating-serum'] += 2;
    scores['invisible-gel-sunscreen'] += 2;
  }

  // Q2: Primary Concern weight
  if (concern === 'dullness') {
    scores['glass-skin-hydrating-serum'] += 4;
    scores['collagen-boost-sheet-masks'] += 3;
    scores['tinted-sunscreen-spf50'] += 3;
  } else if (concern === 'sun-damage') {
    scores['tinted-sunscreen-spf50'] += 4;
    scores['invisible-gel-sunscreen'] += 4;
  } else if (concern === 'dryness') {
    scores['glass-skin-hydrating-serum'] += 4;
    scores['collagen-boost-sheet-masks'] += 3;
    scores['velvet-lip-tint'] += 2;
  } else if (concern === 'aging') {
    scores['collagen-boost-sheet-masks'] += 5;
    scores['glass-skin-hydrating-serum'] += 2;
  } else if (concern === 'acne') {
    scores['invisible-gel-sunscreen'] += 4;
    scores['glass-skin-hydrating-serum'] += 2;
  }

  // Q3: Sun Exposure
  if (sunExposure === 'heavy-sun') {
    scores['tinted-sunscreen-spf50'] += 3;
    scores['invisible-gel-sunscreen'] += 3;
  } else {
    scores['invisible-gel-sunscreen'] += 2;
    scores['tinted-sunscreen-spf50'] += 1;
  }

  // Q6: Skin Goal
  if (goal === 'glass-skin') {
    scores['glass-skin-hydrating-serum'] += 4;
    scores['collagen-boost-sheet-masks'] += 3;
  } else if (goal === 'matte') {
    scores['invisible-gel-sunscreen'] += 4;
  } else if (goal === 'plump') {
    scores['collagen-boost-sheet-masks'] += 4;
    scores['glass-skin-hydrating-serum'] += 3;
    scores['velvet-lip-tint'] += 1;
  }

  // 2. Select Top Recommended Products (up to 3)
  // Sort products by score descending
  const sortedSlugs = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  const recommendedProducts = sortedSlugs
    .map(slug => products.find(p => p.slug === slug))
    .filter((p): p is Product => p !== undefined)
    .slice(0, 3); // Get top 3

  // 3. Build Skin Profile Description
  const capitalizedType = skinType.charAt(0).toUpperCase() + skinType.slice(1);
  let concernText = '';
  if (concern === 'dullness') concernText = 'dullness & uneven tone';
  else if (concern === 'sun-damage') concernText = 'sun spots & tanning';
  else if (concern === 'dryness') concernText = 'dehydration & flakiness';
  else if (concern === 'aging') concernText = 'loss of elasticity & fine lines';
  else if (concern === 'acne') concernText = 'sebum congestion & acne flareups';

  const skinProfile = `${capitalizedType} skin with primary focus on targeting ${concernText}.`;

  // 4. Build Morning and Night Routines
  const morningRoutine: RoutineStep[] = [
    {
      stepNumber: 1,
      stepName: 'Cleanse',
      productName: 'Gentle Cleanser',
      productSlug: '',
      instruction: 'Wash with a mild pH-balanced foaming cleanser and lukewarm water. Pat dry with a clean towel.'
    }
  ];

  const nightRoutine: RoutineStep[] = [
    {
      stepNumber: 1,
      stepName: 'Double Cleanse',
      productName: 'Gentle Cleanser',
      productSlug: '',
      instruction: 'Start with an oil cleanser to break down sebum and sunscreen, then follow with your water cleanser.'
    }
  ];

  // Hydrating Serum Step
  const hasSerum = recommendedProducts.some(p => p.slug === 'glass-skin-hydrating-serum');
  if (hasSerum || scores['glass-skin-hydrating-serum'] > 2) {
    morningRoutine.push({
      stepNumber: morningRoutine.length + 1,
      stepName: 'Hydrate & Brighten',
      productName: 'Glass Skin Hydrating Serum',
      productSlug: 'glass-skin-hydrating-serum',
      instruction: 'Apply 3-4 drops onto damp face. Pat gently to absorb. Rice ferment hydrates while niacinamide brightens.'
    });
    
    nightRoutine.push({
      stepNumber: nightRoutine.length + 1,
      stepName: 'Hydrate & Repair',
      productName: 'Glass Skin Hydrating Serum',
      productSlug: 'glass-skin-hydrating-serum',
      instruction: 'Apply 4 drops onto cleansed skin. Serves as a deep overnight moisture recharge.'
    });
  }

  // Sheet Mask Step (Night Only)
  const hasMask = recommendedProducts.some(p => p.slug === 'collagen-boost-sheet-masks');
  if (hasMask || scores['collagen-boost-sheet-masks'] > 2) {
    nightRoutine.push({
      stepNumber: nightRoutine.length + 1,
      stepName: 'Treat (2-3x a week)',
      productName: 'Collagen Boost Sheet Mask',
      productSlug: 'collagen-boost-sheet-masks',
      instruction: 'Unfold and apply sheet mask for 15 minutes. Pat excess essence into skin. Do not wash off.'
    });
  }

  // Moisturizer Step
  morningRoutine.push({
    stepNumber: morningRoutine.length + 1,
    stepName: 'Moisturize',
    productName: 'Lightweight Moisturizer',
    productSlug: '',
    instruction: 'Apply a gel-cream moisturizer to seal in hydration without heavy oil residue.'
  });

  nightRoutine.push({
    stepNumber: nightRoutine.length + 1,
    stepName: 'Seal & Nourish',
    productName: 'Barrier Cream',
    productSlug: '',
    instruction: 'Apply a slightly richer cream at night to rebuild your skin barrier while you sleep.'
  });

  // Sunscreen Step (Morning Only)
  const prefersTinted = scores['tinted-sunscreen-spf50'] >= scores['invisible-gel-sunscreen'];
  if (prefersTinted) {
    morningRoutine.push({
      stepNumber: morningRoutine.length + 1,
      stepName: 'Protect & Even Out',
      productName: 'Tinted Mineral Sunscreen SPF 50',
      productSlug: 'tinted-sunscreen-spf50',
      instruction: 'Shake well and apply 3 finger lengths. The sheer tint will blend out, shielding against UV and blue light.'
    });
  } else {
    morningRoutine.push({
      stepNumber: morningRoutine.length + 1,
      stepName: 'Protect (Invisible)',
      productName: 'Invisible Gel Sunscreen SPF 50',
      productSlug: 'invisible-gel-sunscreen',
      instruction: 'Apply 3 lines on index/middle/ring fingers. Rub evenly for a weightless, zero-white-cast matte finish.'
    });
  }

  // Lip Tint Step
  const hasLip = recommendedProducts.some(p => p.slug === 'velvet-lip-tint');
  if (hasLip || skinType === 'dry') {
    morningRoutine.push({
      stepNumber: morningRoutine.length + 1,
      stepName: 'Glow Accent',
      productName: 'Velvet Lip Tint',
      productSlug: 'velvet-lip-tint',
      instruction: 'Dab on lips for a natural wash of blush. Infused with rosehip oil to keep lips hydrated all day.'
    });
  }

  // Pro Tips
  const proTips: string[] = [];
  if (skinType === 'oily') {
    proTips.push('Avoid heavy facial oils. Stick to lightweight, humectant-rich water gels.');
    proTips.push('Double cleansing at night is critical to prevent sebum plugs in humid weather.');
  } else if (skinType === 'dry') {
    proTips.push('Always apply your hydrating serum onto damp skin to lock in maximum water.');
    proTips.push('Minimize washing your face with cleansers in the morning; lukewarm water might be enough.');
  }
  
  if (concern === 'sun-damage') {
    proTips.push('Reapply sunscreen every 2-3 hours if you are sitting near a window or going outside.');
    proTips.push('Niacinamide in your routine will help speed up the fading of sunspots.');
  } else if (concern === 'acne') {
    proTips.push('Keep sheet masks in the fridge for a cooling effect that reduces active acne inflammation.');
    proTips.push('Do not squeeze active breakouts. Use Cica-infused sunscreen to soothe and protect.');
  }

  proTips.push('Stay consistent! A simple routine followed daily works better than a 10-step routine done occasionally.');

  return {
    skinProfile,
    skinType,
    primaryConcern: concern,
    recommendedProducts,
    morningRoutine,
    nightRoutine,
    proTips
  };
}
