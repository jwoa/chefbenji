import React from 'react';
import { X } from 'lucide-react';
import type { GalleryItem } from '../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function GalleryModal({ item, onClose }: GalleryModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="relative">
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-[70vh] object-cover"
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
            {item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>
      </div>
    </div>
  );
}