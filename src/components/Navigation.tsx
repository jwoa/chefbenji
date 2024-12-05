import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <span className="font-bold text-xl text-gray-900">Chef Benji</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/menu" className="text-gray-700 hover:text-orange-600">Menu</Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-600">Services</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-orange-600">Gallery</Link>
            <Link to="/book" className="text-gray-700 hover:text-orange-600">Book Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}