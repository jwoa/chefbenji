import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Exquisite Catering by Chef Benji</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Elevate your events with personalized gourmet experiences. From intimate gatherings to grand celebrations, 
            we bring culinary excellence to your table.
          </p>
          <div className="space-x-4">
            <Link 
              to="/book" 
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Book Now
            </Link>
            <Link 
              to="/menu" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}