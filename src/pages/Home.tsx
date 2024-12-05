import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
}