import { Review } from '@/types';

export const reviews: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Ananya Sharma',
    rating: 5,
    text: 'Literally the best sheet masks I have ever used. My skin was glowing and felt so plump the next morning! The rose gold foil packaging makes it feel so premium.',
    date: '2026-05-12',
    productSlug: 'collagen-boost-sheet-masks',
    verified: true,
    helpful: 24
  },
  {
    id: 'rev-2',
    customerName: 'Priyanka Patel',
    rating: 5,
    text: 'Finally, a physical sunscreen that does not make me look like a ghost! The tint blends beautifully into my medium Indian skin tone. Gives a gorgeous dewy finish.',
    date: '2026-05-28',
    productSlug: 'tinted-sunscreen-spf50',
    verified: true,
    helpful: 18
  },
  {
    id: 'rev-3',
    customerName: 'Rohan Mehta',
    rating: 5,
    text: 'The gel sunscreen is absolute gold. It is completely invisible, leaves a matte finish, and does not sweat off in Mumbai heat. No breakouts at all.',
    date: '2026-06-02',
    productSlug: 'invisible-gel-sunscreen',
    verified: true,
    helpful: 32
  },
  {
    id: 'rev-4',
    customerName: 'Kriti Sen',
    rating: 5,
    text: 'I am in love with this velvet lip tint. The bottle is gorgeous and the shade matches my lips perfectly. It stays hydrating and does not dry out my lips.',
    date: '2026-06-10',
    productSlug: 'velvet-lip-tint',
    verified: true,
    helpful: 15
  },
  {
    id: 'rev-5',
    customerName: 'Deepika K.',
    rating: 4,
    text: 'The hydration from the glass skin serum is unreal. My skin feels so soft. Taking off one star only because it is currently sold out and I need to restock!',
    date: '2026-06-14',
    productSlug: 'glass-skin-hydrating-serum',
    verified: true,
    helpful: 9
  },
  {
    id: 'rev-6',
    customerName: 'Sanya Mirza',
    rating: 5,
    text: 'Usually, products claiming to be for Indian skin do not get the shade right, but Nyyraa has nailed this tinted sunscreen. Sheer, light, and protects well.',
    date: '2026-05-15',
    productSlug: 'tinted-sunscreen-spf50',
    verified: true,
    helpful: 12
  },
  {
    id: 'rev-7',
    customerName: 'Meera Nair',
    rating: 5,
    text: 'Hydrates my skin so well in just 15 minutes. The serum content in the sheet mask is very generous, I end up using the leftover on my neck and arms!',
    date: '2026-05-20',
    productSlug: 'collagen-boost-sheet-masks',
    verified: true,
    helpful: 7
  },
  {
    id: 'rev-8',
    customerName: 'Aarav Gupta',
    rating: 4,
    text: 'Solid sunscreen. Zero white cast as promised. Perfect for oily skin since it has a matte finish. Docking a star because the tube size is slightly small for daily use.',
    date: '2026-05-22',
    productSlug: 'invisible-gel-sunscreen',
    verified: true,
    helpful: 14
  },
  {
    id: 'rev-9',
    customerName: 'Ishita Roy',
    rating: 5,
    text: 'This tint is magical. Smooth application, transfer-resistant once it dries down, and the rose-gold branding is absolutely gorgeous. Highly recommend!',
    date: '2026-05-25',
    productSlug: 'velvet-lip-tint',
    verified: true,
    helpful: 11
  },
  {
    id: 'rev-10',
    customerName: 'Karan Malhotra',
    rating: 5,
    text: 'Really premium experience. The packaging is top tier and the product quality is on par with premium Korean imports, but optimized for Indian weather.',
    date: '2026-05-30',
    productSlug: 'glass-skin-hydrating-serum',
    verified: true,
    helpful: 20
  },
  {
    id: 'rev-11',
    customerName: 'Divya Rao',
    rating: 5,
    text: 'Must-have sheet masks. Very hydrating and reduces redness. I use it once a week as a ritual. The botanical touch is wonderful.',
    date: '2026-06-05',
    productSlug: 'collagen-boost-sheet-masks',
    verified: true,
    helpful: 4
  },
  {
    id: 'rev-12',
    customerName: 'Neha Deshmukh',
    rating: 4,
    text: 'Very comfortable tint. Leaves a natural stained look after a few hours which I love. Will definitely try their sunscreen next.',
    date: '2026-06-12',
    productSlug: 'velvet-lip-tint',
    verified: true,
    helpful: 6
  }
];

export const getReviewsForProduct = (productSlug: string) => {
  return reviews.filter(r => r.productSlug === productSlug);
};
