import React from 'react';
import { Utensils, Users, Calendar, Heart } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Utensils className="h-8 w-8 text-orange-600" />,
      title: 'Private Dining',
      description: 'Intimate dining experiences in the comfort of your home'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Event Catering',
      description: 'Full-service catering for weddings and corporate events'
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-600" />,
      title: 'Meal Planning',
      description: 'Weekly meal prep and planning services'
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: 'Cooking Classes',
      description: 'Interactive cooking sessions for groups and individuals'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}