import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { GalleryGrid } from '../components/GalleryGrid';
import { GalleryModal } from '../components/GalleryModal';
import type { GalleryItem } from '../types';

const categories = ['all', 'events', 'dishes', 'behind-scenes'] as const;

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
        
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        <GalleryGrid
          items={filteredItems}
          onItemClick={setSelectedItem}
        />

        <GalleryModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </div>
  );
}