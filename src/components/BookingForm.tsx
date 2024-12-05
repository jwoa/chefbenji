import React, { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export function BookingForm() {
  const navigate = useNavigate();
  const { selectedService, setBookingDetails } = useBooking();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDetails({
      name: formData.name,
      email: formData.email,
      date: formData.date,
      guests: parseInt(formData.guests),
      message: formData.message
    });
    navigate('/payment');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!selectedService) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600 mb-4">Please select a service package first.</p>
        <button
          onClick={() => navigate('/services')}
          className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
        >
          View Services
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Book Your Event</h2>
      <div className="mb-8 p-4 bg-orange-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Selected Package: {selectedService.name}</h3>
        <p className="text-gray-600">${selectedService.pricePerPerson} per person</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={format(new Date(), 'yyyy-MM-dd')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Special Requirements</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
}