import React from "react";
; // Update the path as needed

function IntroductionSection() {
  return (
    <section
      id="introduction"
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('https://i.ibb.co/5nmWn1W/intro2.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1
            className="text-white text-5xl md:text-7xl font-bold mb-4"
            style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)" }}
          >
            Explore Singapore's Rich Culture & Heritage
          </h1>
          <p
            className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)" }}
          >
            Immerse yourself in the vibrant traditions and unique customs that make Singapore a cultural melting pot.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
