import React, { createContext, useContext, useState } from 'react';
import type { ServicePackage } from '../types';

interface BookingContextType {
  selectedService: ServicePackage | null;
  bookingDetails: BookingDetails | null;
  setSelectedService: (service: ServicePackage | null) => void;
  setBookingDetails: (details: BookingDetails | null) => void;
  calculateTotal: () => number;
}

interface BookingDetails {
  name: string;
  email: string;
  date: string;
  guests: number;
  message: string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  const calculateTotal = () => {
    if (selectedService && bookingDetails) {
      return selectedService.pricePerPerson * bookingDetails.guests;
    }
    return 0;
  };

  return (
    <BookingContext.Provider 
      value={{ 
        selectedService, 
        bookingDetails, 
        setSelectedService, 
        setBookingDetails,
        calculateTotal
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}