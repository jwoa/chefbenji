export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert';
  image: string;
}

export interface BookingSlot {
  date: string;
  time: string;
  available: boolean;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ServicePackage {
  id: number;
  name: string;
  description: string;
  pricePerPerson: number;
  includes: string[];
  image: string;
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  category: 'events' | 'dishes' | 'behind-scenes';
  description: string;
}