import React from 'react';
import { useNavigate } from 'react-router-dom';
import { servicePackages } from '../data/services';
import { useBooking } from '../context/BookingContext';

export function ServicesPage() {
  const navigate = useNavigate();
  const { setSelectedService } = useBooking();

  const handleBookService = (pkg: typeof servicePackages[0]) => {
    setSelectedService(pkg);
    navigate('/book');
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-orange-600 font-semibold mb-4">
                  Starting at ${pkg.pricePerPerson} per person
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleBookService(pkg)}
                  className="block w-full text-center bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}