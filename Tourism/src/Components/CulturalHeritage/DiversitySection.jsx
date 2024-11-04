// DiversitySection.js
import React from 'react';
import ImageSlider from './ImageSlider';

export default function DiversitySection() {
  return (
    <section id="diversity" className="full-height fade-in relative bg-black">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto text-left h-full flex flex-col md:flex-row justify-center items-center p-8 relative z-10">
        <div className="md:w-1/2 bg-opacity-70 p-4 rounded-lg shadow-lg text-white">
          <h2 className="text-5xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}>
            Cultural Diversity
          </h2>
          <p className="mb-4 text-xl" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            Singapore is a melting pot of cultures, each contributing to a vibrant tapestry. The rich heritage of our communities is reflected in our traditions, customs, and celebrations.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
}


