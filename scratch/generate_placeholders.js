const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'images');

const assets = [
  // Products
  {
    dir: 'products',
    name: 'lip-tint.svg',
    title: 'Velvet Lip Tint',
    subtitle: 'Rose Gold Cap & Frosted Glass',
    gradient: ['#B76E79', '#4A0E2D']
  },
  {
    dir: 'products',
    name: 'lip-tint-swatch.svg',
    title: 'Lip Tint Swatch',
    subtitle: 'Rich Velvet Pigment Wash',
    gradient: ['#F4C2C2', '#B76E79']
  },
  {
    dir: 'products',
    name: 'lip-tint-texture.svg',
    title: 'Lip Tint Texture',
    subtitle: 'Lightweight Whipped Finish',
    gradient: ['#4A0E2D', '#B76E79']
  },
  {
    dir: 'products',
    name: 'collagen-mask.svg',
    title: 'Collagen Sheet Mask',
    subtitle: 'Premium Laminated Box',
    gradient: ['#B76E79', '#C8A882']
  },
  {
    dir: 'products',
    name: 'collagen-mask-texture.svg',
    title: 'Essence Texture',
    subtitle: 'Hydrolyzed Marine Collagen',
    gradient: ['#FFFFF0', '#F4C2C2']
  },
  {
    dir: 'products',
    name: 'collagen-mask-model.svg',
    title: 'Glow Experience',
    subtitle: '15-Min Skincare Ritual',
    gradient: ['#F4C2C2', '#C8A882']
  },
  {
    dir: 'products',
    name: 'sunscreen-gel.svg',
    title: 'Invisible Gel Sunscreen',
    subtitle: 'Weightless Gel Matte Finish',
    gradient: ['#FFFFF0', '#B76E79']
  },
  {
    dir: 'products',
    name: 'sunscreen-gel-texture.svg',
    title: 'Water Gel Texture',
    subtitle: 'Melts Invisibly Into Skin',
    gradient: ['#FFFFF0', '#F4C2C2']
  },
  {
    dir: 'products',
    name: 'sunscreen-gel-flatlay.svg',
    title: 'Sun Care Ritual',
    subtitle: 'Zero White Cast SPF 50',
    gradient: ['#B76E79', '#C8A882']
  },
  {
    dir: 'products',
    name: 'sunscreen-tinted.svg',
    title: 'Tinted Mineral Sunscreen',
    subtitle: 'Physical Block SPF 50',
    gradient: ['#C8A882', '#4A0E2D']
  },
  {
    dir: 'products',
    name: 'sunscreen-tint-swatch.svg',
    title: 'Mineral Sheer Tint',
    subtitle: 'Universal Skin Tone Blend',
    gradient: ['#C8A882', '#F4C2C2']
  },
  {
    dir: 'products',
    name: 'sunscreen-tint-flatlay.svg',
    title: 'Sunscreen Flatlay',
    subtitle: 'Eco Shield Physical Protection',
    gradient: ['#B76E79', '#FFFFF0']
  },
  {
    dir: 'products',
    name: 'serum.svg',
    title: 'Glass Skin Serum',
    subtitle: '74% Fermented Rice Water',
    gradient: ['#FFFFF0', '#C8A882']
  },
  {
    dir: 'products',
    name: 'serum-texture.svg',
    title: 'Hydrating Texture',
    subtitle: 'Triple Hyaluronic Acid Drop',
    gradient: ['#F4C2C2', '#FFFFF0']
  },

  // Brand
  {
    dir: 'brand',
    name: 'story-lifestyle.svg',
    title: 'Nyyraa Glow Lifestyle',
    subtitle: 'Celebrating Indian Skin Tones',
    gradient: ['#F4C2C2', '#C8A882']
  },

  // Blog
  {
    dir: 'blog',
    name: 'kbeauty-routine.svg',
    title: 'K-Beauty Routine Guide',
    subtitle: '5 Steps to Glass Skin',
    gradient: ['#B76E79', '#F4C2C2']
  },
  {
    dir: 'blog',
    name: 'sunscreen-guide.svg',
    title: 'Sunscreen Guide',
    subtitle: 'SPF 50 PA++++ Non-Negotiables',
    gradient: ['#C8A882', '#4A0E2D']
  },
  {
    dir: 'blog',
    name: 'collagen-science.svg',
    title: 'Collagen Science 101',
    subtitle: 'Hydrolyzed Peptides Explained',
    gradient: ['#4A0E2D', '#B76E79']
  },
  {
    dir: 'blog',
    name: 'niacinamide-spotlight.svg',
    title: 'Niacinamide Active',
    subtitle: 'Pore Tightening & Brightening',
    gradient: ['#FFFFF0', '#B76E79']
  },
  {
    dir: 'blog',
    name: 'fusion-philosophy.svg',
    title: 'Fusion Skincare',
    subtitle: 'Seoul Formulation Meets Mumbai Climate',
    gradient: ['#B76E79', '#C8A882']
  },
  {
    dir: 'blog',
    name: 'minimalist-routine.svg',
    title: 'Skin Minimalism',
    subtitle: 'Less is More for Healthy Skin',
    gradient: ['#F4C2C2', '#FFFFF0']
  },

  // Instagram
  {
    dir: 'instagram',
    name: 'post-1.svg',
    title: 'Melt-in Gel Sunscreen',
    subtitle: 'Zero Cast SPF 50',
    gradient: ['#B76E79', '#4A0E2D']
  },
  {
    dir: 'instagram',
    name: 'post-2.svg',
    title: 'Skincare Flatlay',
    subtitle: 'Fermented Rice Ritual',
    gradient: ['#FFFFF0', '#C8A882']
  },
  {
    dir: 'instagram',
    name: 'post-3.svg',
    title: 'Velvet Lip Tint',
    subtitle: 'Hydrated Velvet Shine',
    gradient: ['#F4C2C2', '#B76E79']
  },
  {
    dir: 'instagram',
    name: 'post-4.svg',
    title: 'Clean Science Actives',
    subtitle: '100% Vegan Ingredients',
    gradient: ['#C8A882', '#FFFFF0']
  },
  {
    dir: 'instagram',
    name: 'post-5.svg',
    title: 'Collagen Boost Sunday',
    subtitle: '15-Min Sheet Mask Glow',
    gradient: ['#4A0E2D', '#B76E79']
  },
  {
    dir: 'instagram',
    name: 'post-6.svg',
    title: 'Seoul meets Mumbai',
    subtitle: 'Optimized Barrier Shield',
    gradient: ['#B76E79', '#F4C2C2']
  }
];

function generateSVG(title, subtitle, color1, color2) {
  return `
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#4A0E2D" flood-opacity="0.1" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#grad)" />
  
  <!-- Content Card Overlay -->
  <rect x="100" y="100" width="600" height="600" rx="20" fill="#FFFFF0" fill-opacity="0.8" filter="url(#shadow)" stroke="#B76E79" stroke-width="1.5" stroke-opacity="0.3" />

  <!-- Botanical Decorative Motif -->
  <path d="M400,200 C430,250 480,260 500,300 C470,300 440,280 400,250 C360,280 330,300 300,300 C320,260 370,250 400,200 Z" fill="#B76E79" opacity="0.3" />
  <path d="M400,250 C410,290 430,310 450,330 C420,330 405,310 400,290 C395,310 380,330 350,330 C370,310 390,290 400,250 Z" fill="#C8A882" opacity="0.4" />
  <circle cx="400" cy="280" r="3" fill="#4A0E2D" />

  <!-- Core Brand Text -->
  <text x="400" y="400" font-family="Cormorant Garamond, serif" font-weight="300" font-size="44" fill="#4A0E2D" text-anchor="middle" letter-spacing="3">NYYRAA</text>
  <text x="400" y="440" font-family="Great Vibes, cursive" font-size="36" fill="#B76E79" text-anchor="middle">Beauty</text>

  <!-- Title / Subtitle of Image -->
  <text x="400" y="520" font-family="Lato, sans-serif" font-weight="700" font-size="22" fill="#4A0E2D" text-anchor="middle" letter-spacing="1" text-transform="uppercase">${title}</text>
  <text x="400" y="560" font-family="Lato, sans-serif" font-weight="300" font-size="16" fill="rgba(74, 14, 45, 0.7)" text-anchor="middle">${subtitle}</text>

  <!-- Border Frame -->
  <rect x="40" y="40" width="720" height="720" fill="none" stroke="#FFFFF0" stroke-width="2" stroke-opacity="0.3" />
  <rect x="60" y="60" width="680" height="680" fill="none" stroke="#C8A882" stroke-width="1" stroke-opacity="0.2" />
</svg>
  `;
}

assets.forEach((asset) => {
  const targetFolder = path.join(baseDir, asset.dir);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }
  const filePath = path.join(targetFolder, asset.name);
  const content = generateSVG(asset.title, asset.subtitle, asset.gradient[0], asset.gradient[1]);
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Successfully generated all placeholder assets!');
