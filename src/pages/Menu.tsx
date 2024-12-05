import React from 'react';
import { menuItems } from '../data/menu';

export function Menu() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Our Menu</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Appetizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.appetizers.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-orange-600 font-semibold">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Main Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.mains.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-orange-600 font-semibold">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.desserts.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-orange-600 font-semibold">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}