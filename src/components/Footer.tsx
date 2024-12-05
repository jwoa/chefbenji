import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Your company description here
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: Your Address Here</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 