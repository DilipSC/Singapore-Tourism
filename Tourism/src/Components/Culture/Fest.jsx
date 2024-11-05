import React from 'react';

const FestivalsSection = () => (
  <section id="festivals" className="min-h-screen bg-cover bg-center fade-in relative" style={{ backgroundImage: "url('./int.avif')" }}>
    <div className="absolute inset-0 bg-black opacity-20"></div>
    <div className="container mx-auto text-center h-full flex flex-col md:flex-row justify-between items-center p-8 relative z-10">
      
      {/* Cards on the left */}
      <div className="md:w-1/2 flex flex-wrap justify-center mb-8">
        
        {/* Card 1 */}
        <div className="w-full md:w-1/2 p-2">
          <div className="relative bg-white rounded-lg shadow-lg h-64 overflow-hidden">
            <img src="https://i.ibb.co/yY1L18g/chinese.jpg" alt="Chinese New Year" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold">Chinese New Year</h3>
              <p className="text-sm">Join in the festivities of the Chinese New Year, featuring lion dances, fireworks, and family gatherings.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/2 p-2">
          <div className="relative bg-white rounded-lg shadow-lg h-64 overflow-hidden">
            <img src="https://i.ibb.co/HzRNw0F/Hari-Raya-Puasa.jpg" alt="Hari Raya Puasa" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold">Hari Raya Puasa</h3>
              <p className="text-sm">Celebrate the end of Ramadan with joyous festivities, traditional delicacies, and community spirit.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/2 p-2">
          <div className="relative bg-white rounded-lg shadow-lg h-64 overflow-hidden">
            <img src="https://i.ibb.co/QmQL1r6/deepavali.jpg" alt="Deepavali" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold">Deepavali</h3>
              <p className="text-sm">Experience the Festival of Lights, where homes are illuminated and celebrations bring joy and togetherness.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Text on the right */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-5xl font-semibold mb-4" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)', color: '#f3f3f3' }}>
          Festivals and Celebrations
        </h2>
        <p className="text-xl max-w-xl" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)', color: '#e0e0e0' }}>
          Experience the vibrant festivals that bring our diverse communities together. Each celebration reflects the unique traditions and customs of the various cultures present in Singapore, showcasing our rich heritage and unity.
        </p>
      </div>
    </div>
  </section>
);

const ArtsSection = () => (
  <section id="arts" className="min-h-screen bg-cover bg-center py-20 relative" style={{ backgroundImage: "url('bg3.jpg')" }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto text-center h-full flex flex-col justify-center relative z-10">
      <h2 className="text-4xl font-semibold mb-8 text-white" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)' }}>
        Traditional Arts and Crafts
      </h2>
      <p className="text-left mx-auto mb-8 max-w-2xl text-white" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
        Discover the unique artistic expressions of Singapore's heritage, from traditional crafts to modern artistic interpretations. Explore the fine details of traditional textiles, pottery, and contemporary designs that reflect the island's rich history and multicultural influences.
      </p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        
        {/* Card 1 */}
        <div className="w-full md:w-1/3 p-4 relative rounded-lg shadow-lg overflow-hidden">
          <img src="https://i.ibb.co/hs04NrL/batik3.jpg" alt="Batik Art" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <h3 className="text-xl font-bold">Batik Art</h3>
            <p className="text-sm">Experience the intricate designs of Batik, a traditional textile art that tells stories through patterns and colors.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 p-4 relative rounded-lg shadow-lg overflow-hidden">
          <img src="https://i.ibb.co/09zJjsB/ceramic.jpg" alt="Pottery" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <h3 className="text-xl font-bold">Ceramic Pottery</h3>
            <p className="text-sm">Delve into the world of traditional pottery, where each piece is crafted with care and reflects Singapore’s artistic heritage.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 p-4 relative rounded-lg shadow-lg overflow-hidden">
          <img src="https://i.ibb.co/rGRsW8j/cal2.jpg" alt="Calligraphy" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <h3 className="text-xl font-bold">Chinese Calligraphy</h3>
            <p className="text-sm">Admire the elegance of Chinese calligraphy, a timeless art form that captures the essence of words through brushstrokes.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Fest = () => (
  <div>
    <FestivalsSection />
    <hr />
    <ArtsSection />
  </div>
);

export default Fest;
