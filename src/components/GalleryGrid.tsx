import React from 'react';
import type { GalleryItem } from '../types';

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}

export function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
          onClick={() => onItemClick(item)}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}