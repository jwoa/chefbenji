import type { GalleryItem } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033',
    thumbnail: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400',
    title: 'Wedding Reception Setup',
    category: 'events',
    description: 'Elegant table setting for a summer wedding reception'
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    thumbnail: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400',
    title: 'Signature Dish Plating',
    category: 'dishes',
    description: 'Chef Benji\'s signature seafood dish'
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf',
    thumbnail: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400',
    title: 'Kitchen in Action',
    category: 'behind-scenes',
    description: 'Behind the scenes during a busy service'
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    thumbnail: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
    title: 'Corporate Event Buffet',
    category: 'events',
    description: 'Luxurious buffet setup for a corporate gathering'
  },
  {
    id: 5,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5',
    thumbnail: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400',
    title: 'Dessert Preparation',
    category: 'behind-scenes',
    description: 'Crafting our signature desserts'
  },
  {
    id: 6,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
    thumbnail: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
    title: 'Seasonal Tasting Menu',
    category: 'dishes',
    description: 'Spring tasting menu highlight'
  }
];