import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { BookingProvider } from './context/BookingContext';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { ServicesPage } from './pages/ServicesPage';
import { Book } from './pages/Book';
import { Payment } from './pages/Payment';
import { Gallery } from './pages/Gallery';
import Footer from './components/Footer';

const paypalOptions = {
  "client-id": "your_paypal_client_id",
  currency: "USD",
};

export function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <BookingProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/book" element={<Book />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </BookingProvider>
    </PayPalScriptProvider>
  );
}

export default App;