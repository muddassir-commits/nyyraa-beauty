import { QuizQuestion } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your skin type?",
    subtitle: "Select the option that best describes how your skin feels most of the day.",
    options: [
      {
        label: "Oily",
        icon: "✨",
        value: "oily",
        scores: {
          'invisible-gel-sunscreen': 3,
          'glass-skin-hydrating-serum': 2,
          'collagen-boost-sheet-masks': 1,
          'tinted-sunscreen-spf50': 1
        }
      },
      {
        label: "Dry",
        icon: "🌵",
        value: "dry",
        scores: {
          'glass-skin-hydrating-serum': 3,
          'collagen-boost-sheet-masks': 3,
          'tinted-sunscreen-spf50': 2,
          'velvet-lip-tint': 2,
          'invisible-gel-sunscreen': 1
        }
      },
      {
        label: "Combination",
        icon: "🌗",
        value: "combination",
        scores: {
          'glass-skin-hydrating-serum': 3,
          'invisible-gel-sunscreen': 3,
          'collagen-boost-sheet-masks': 2,
          'tinted-sunscreen-spf50': 2
        }
      },
      {
        label: "Normal",
        icon: "🌸",
        value: "normal",
        scores: {
          'glass-skin-hydrating-serum': 2,
          'invisible-gel-sunscreen': 2,
          'collagen-boost-sheet-masks': 2,
          'tinted-sunscreen-spf50': 2,
          'velvet-lip-tint': 1
        }
      }
    ]
  },
  {
    id: 2,
    question: "What's your #1 skin concern?",
    subtitle: "We'll target this concern directly with active ingredients.",
    options: [
      {
        label: "Dullness & Uneven Tone",
        icon: "☁️",
        value: "dullness",
        scores: {
          'glass-skin-hydrating-serum': 4,
          'collagen-boost-sheet-masks': 3,
          'tinted-sunscreen-spf50': 3
        }
      },
      {
        label: "Sun Damage & Tanning",
        icon: "☀️",
        value: "sun-damage",
        scores: {
          'tinted-sunscreen-spf50': 4,
          'invisible-gel-sunscreen': 4,
          'collagen-boost-sheet-masks': 2
        }
      },
      {
        label: "Dryness & Dehydration",
        icon: "💦",
        value: "dryness",
        scores: {
          'glass-skin-hydrating-serum': 4,
          'collagen-boost-sheet-masks': 3,
          'velvet-lip-tint': 2
        }
      },
      {
        label: "Fine Lines & Aging",
        icon: "⌛",
        value: "aging",
        scores: {
          'collagen-boost-sheet-masks': 4,
          'glass-skin-hydrating-serum': 2,
          'tinted-sunscreen-spf50': 1
        }
      },
      {
        label: "Acne & Breakouts",
        icon: "🩹",
        value: "acne",
        scores: {
          'invisible-gel-sunscreen': 4,
          'glass-skin-hydrating-serum': 2,
          'collagen-boost-sheet-masks': 1
        }
      }
    ]
  },
  {
    id: 3,
    question: "How much sun exposure do you get daily?",
    subtitle: "This helps us determine the level and style of SPF you need.",
    options: [
      {
        label: "Mostly Indoors",
        icon: "💻",
        value: "indoors",
        scores: {
          'invisible-gel-sunscreen': 3,
          'tinted-sunscreen-spf50': 2
        }
      },
      {
        label: "1-2 Hours",
        icon: "🚶",
        value: "medium-sun",
        scores: {
          'invisible-gel-sunscreen': 3,
          'tinted-sunscreen-spf50': 3
        }
      },
      {
        label: "3+ Hours (Outdoors)",
        icon: "🚴",
        value: "heavy-sun",
        scores: {
          'tinted-sunscreen-spf50': 4,
          'invisible-gel-sunscreen': 3
        }
      }
    ]
  },
  {
    id: 4,
    question: "What does your current routine look like?",
    subtitle: "Whether you keep it minimal or love layering, we have the routine for you.",
    options: [
      {
        label: "Minimal (Cleanser + Cream)",
        icon: "🍃",
        value: "minimalist",
        scores: {
          'glass-skin-hydrating-serum': 3,
          'invisible-gel-sunscreen': 2
        }
      },
      {
        label: "Layered (Toners, Serums, SPF)",
        icon: "🧪",
        value: "layered",
        scores: {
          'glass-skin-hydrating-serum': 2,
          'collagen-boost-sheet-masks': 3,
          'tinted-sunscreen-spf50': 2
        }
      },
      {
        label: "Just Water / Soap",
        icon: "🧼",
        value: "basic",
        scores: {
          'invisible-gel-sunscreen': 3,
          'glass-skin-hydrating-serum': 3,
          'collagen-boost-sheet-masks': 1
        }
      }
    ]
  },
  {
    id: 5,
    question: "How sensitive is your skin?",
    subtitle: "We prioritize soothing botanical extracts for sensitive skin barriers.",
    options: [
      {
        label: "Very Sensitive",
        icon: "🛡️",
        value: "highly-sensitive",
        scores: {
          'invisible-gel-sunscreen': 3,
          'collagen-boost-sheet-masks': 3,
          'glass-skin-hydrating-serum': 1
        }
      },
      {
        label: "Somewhat / Normal",
        icon: "🌿",
        value: "normal-sensitive",
        scores: {
          'glass-skin-hydrating-serum': 2,
          'invisible-gel-sunscreen': 2,
          'tinted-sunscreen-spf50': 2,
          'collagen-boost-sheet-masks': 2
        }
      },
      {
        label: "Resilient (Rarely Reacts)",
        icon: "🦾",
        value: "resilient",
        scores: {
          'glass-skin-hydrating-serum': 3,
          'invisible-gel-sunscreen': 2,
          'tinted-sunscreen-spf50': 2,
          'collagen-boost-sheet-masks': 2
        }
      }
    ]
  },
  {
    id: 6,
    question: "What is your ultimate skin goal?",
    subtitle: "What is the glow you want to achieve?",
    options: [
      {
        label: "Glass Skin (Dewy & Translucent)",
        icon: "🔮",
        value: "glass-skin",
        scores: {
          'glass-skin-hydrating-serum': 4,
          'collagen-boost-sheet-masks': 3,
          'tinted-sunscreen-spf50': 1
        }
      },
      {
        label: "Matte & Smooth (Oil-Controlled)",
        icon: "☁️",
        value: "matte",
        scores: {
          'invisible-gel-sunscreen': 4,
          'glass-skin-hydrating-serum': 2
        }
      },
      {
        label: "Hydrated, Plump & Firm",
        icon: "🌊",
        value: "plump",
        scores: {
          'collagen-boost-sheet-masks': 4,
          'glass-skin-hydrating-serum': 3,
          'velvet-lip-tint': 1
        }
      }
    ]
  }
];
