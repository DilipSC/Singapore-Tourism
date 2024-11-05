import React from 'react';

const ArchitectureSection = () => (
  <section id="architecture" className="py-5 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-70"></div>
    
    <div className="container mx-auto flex flex-col md:flex-row h-full relative z-10">
      
      {/* Text Content */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-6xl font-semibold mb-2 text-white" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)' }}>
          Architecture and Heritage Sites
        </h2>
        <p className="mb-7 max-w-lg text-base text-white" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
          Explore the architectural wonders that reflect Singapore's history and the cultural influences that shape our built environment.
        </p>
      </div>

      {/* Cards Container */}
      <div className="md:w-1/2 flex flex-wrap justify-center gap-4 p-4">
        
        {/* Card 1 */}
        <div className="w-full md:w-1/3 h-64 p-2 relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="https://i.ibb.co/gjdBQMz/marina.jpg" alt="Marina Bay Sands" className="w-full h-full object-cover brightness-90" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <h3 className="text-lg font-bold">Marina Bay Sands</h3>
            <p className="text-sm">A stunning feat of modern architecture, Marina Bay Sands offers breathtaking views and luxurious amenities.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 h-64 p-2 relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="https://i.ibb.co/JHFy824/gardens.jpg" alt="Gardens by the Bay" className="w-full h-full object-cover brightness-90" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <h3 className="text-lg font-bold">Gardens by the Bay</h3>
            <p className="text-sm">A futuristic park featuring iconic Supertrees and climate-controlled domes that showcase Singapore's commitment to sustainability.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 h-64 p-2 relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="https://i.ibb.co/n7SfDkC/chinatown.jpg" alt="Chinatown Heritage Centre" className="w-full h-full object-cover brightness-90" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <h3 className="text-lg font-bold">Chinatown Heritage Centre</h3>
            <p className="text-sm">Discover the rich history of Chinatown through immersive exhibits that tell the story of the early Chinese immigrants.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-4 bg-gray-800 text-white text-center">
    <p>&copy; 2024 Singapore Culture and Heritage. All Rights Reserved.</p>
  </footer>
);

const Arch = () => (
  <div>
    <ArchitectureSection />
    <Footer />
  </div>
);

export default Arch;

