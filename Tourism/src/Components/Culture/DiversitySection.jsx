import React, { useState } from "react";

function DiversitySection() {
  const slides = [
    {
      image: "https://i.ibb.co/DzbtLkg/china.jpg",
      title: "Chinese Culture",
      description: "Learn about traditions, festivals, and cuisine.",
    },
    {
      image: "https://i.ibb.co/bXw6t9n/malay.jpg",
      title: "Malay Heritage",
      description: "Discover the Malay traditions and celebrations.",
    },
    {
      image: "https://i.ibb.co/wgVsvv3/inndia.jpg",
      title: "Indian Traditions",
      description: "Explore Indian festivals and cultural practices.",
    },
    {
      image: "https://i.ibb.co/PZzDRQh/euras.jpg",
      title: "Eurasian Culture",
      description: "Uncover the unique blend of cultures in Eurasian heritage.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (direction) => {
    setCurrentSlide((prevSlide) =>
      direction === 1
        ? (prevSlide + 1) % slides.length
        : (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <section id="diversity" className="h-screen relative bg-black text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="container mx-auto h-full flex flex-col md:flex-row justify-center items-center p-8 relative z-10">
        {/* Text Section */}
        <div className="md:w-1/2 p-4 rounded-lg shadow-lg">
          <h2
            className="text-5xl font-semibold mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)",
            }}
          >
            Cultural Diversity
          </h2>
          <p
            className="mb-4 text-xl"
            style={{
              fontFamily: "Roboto, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            Singapore is a melting pot of cultures, each contributing to a
            vibrant tapestry. The rich heritage of our communities is reflected
            in our traditions, customs, and celebrations.
          </p>
        </div>

        {/* Slider Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full overflow-hidden">
            <div
              id="slider"
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${slides.length * 100}%`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex flex-col items-center text-center"
                  style={{ width: "100%" }}
                >
                  <img
                    src={slide.image}
                    alt={`Cultural Image ${index + 1}`}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  <h3
                    className="text-white font-bold mt-4 text-2xl"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className="text-lg text-gray-300 mt-2"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Navigation Buttons */}
          <button
            onClick={() => moveSlide(-1)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
          >
            ❮
          </button>
          <button
            onClick={() => moveSlide(1)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Section Divider */}
      <div className="border-t border-gray-300 my-8"></div>
    </section>
  );
}

export default DiversitySection;
