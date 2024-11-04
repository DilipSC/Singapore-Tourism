// ImageSlider.js
import React, { useState, useEffect } from 'react';

const slides = [
  { imgSrc: './china.jpg', title: 'Chinese Culture', description: 'Learn about traditions, festivals, and cuisine.' },
  { imgSrc: './malay.jpg', title: 'Malay Heritage', description: 'Discover the Malay traditions and celebrations.' },
  // Add more slides as needed
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-3/4">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.imgSrc} alt={slide.title} className="w-full h-64 object-cover rounded-lg" />
          <h3 className="text-white font-bold" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
            {slide.title}
          </h3>
          <p className="text-lg text-gray-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}>
            {slide.description}
          </p>
        </div>
      ))}
    </div>
  );
}
