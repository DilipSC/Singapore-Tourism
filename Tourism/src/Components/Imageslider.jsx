import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "./WhatsApp Image 2024-10-22 at 16.10.09.jpeg",
    "./WhatsApp Image 2024-10-22 at 16.10.10 (1).jpeg",
    "./WhatsApp Image 2024-10-22 at 16.10.10 (2).jpeg",
    "./WhatsApp Image 2024-10-22 at 16.10.10.jpeg",
    "./1.jpg",
    "./3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center my-12 mx-auto max-w-screen-xl">
      {/* Slider */}
      <div className="relative flex-1">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-700 text-white p-3 rounded-full z-10 hover:bg-gray-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="w-full max-w-screen-md overflow-hidden">
          <div
            id="slider"
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                className="w-full h-auto transition-transform duration-500 ease-in-out"
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 hover:bg-gray-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Text on the Right */}
      <div className="flex flex-col justify-center items-start text-left md:ml-8 p-4">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Unveil the Magic of Lion City
        </h2>
        <p className="text-lg text-gray-700 bg-yellow-500 bg-opacity-70 p-4 rounded-lg shadow-lg max-w-md font-poppins">
          Discover the charm of Singapore's urban landscape, a city where
          culture meets modernity in perfect harmony.
        </p>
      </div>
    </section>
  );
};

export default ImageSlider;
