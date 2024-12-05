import React from 'react';
import { PaymentForm } from '../components/PaymentForm';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export function Payment() {
  const navigate = useNavigate();
  const { selectedService, bookingDetails, calculateTotal } = useBooking();
  
  const handlePaymentSuccess = () => {
    // Handle successful payment
    navigate('/confirmation');
  };

  if (!selectedService || !bookingDetails) {
    navigate('/services');
    return null;
  }

  const total = calculateTotal();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Complete Your Booking</h1>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
          <div className="space-y-2 mb-6">
            <p><span className="font-medium">Service:</span> {selectedService.name}</p>
            <p><span className="font-medium">Date:</span> {bookingDetails.date}</p>
            <p><span className="font-medium">Guests:</span> {bookingDetails.guests}</p>
            <p><span className="font-medium">Price per Person:</span> ${selectedService.pricePerPerson}</p>
            <p className="text-lg font-semibold text-orange-600">
              Total: ${total}
            </p>
          </div>
        </div>

        <PaymentForm amount={total} onSuccess={handlePaymentSuccess} />
      </div>
    </div>
  );
}