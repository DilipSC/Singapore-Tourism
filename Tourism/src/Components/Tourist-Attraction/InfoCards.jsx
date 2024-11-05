import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const ImageCard = ({ image, name, index, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      onClick={onClick}  // Add onClick handler to the card
      className={`
        relative overflow-hidden rounded-lg
        transform transition-all duration-500 ease-in-out
        ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        hover:scale-105 hover:z-10 hover:shadow-2xl
        cursor-pointer
      `}
      style={{ aspectRatio: '1 / 1' }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-center font-bold truncate text-lg">{name}</p>
        </div>
      </div>
    </div>
  );
};

const ImageGallery = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (name) => {
    navigate(`/place/${name}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="grid grid-cols-3 gap-4 auto-rows-min"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            onMouseEnter={() => setHoveredIndex(index)}
            className={`transition-all duration-300 ease-in-out ${hoveredIndex === index ? 'z-10' : 'z-0'}`}
          >
            <ImageCard
              image={image.url}
              name={image.name}
              index={index}
              onClick={() => handleCardClick(image.name)} // Pass click handler
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const InfoCards = () => {
  const images = [
    { id: 1, url: 'https://i.ibb.co/gMSNYSG/marina-bay-sands-singapore-Marina-Bay-Sands-Resort.jpg', name: 'MarinaBaySands' },
    { id: 2, url: 'https://i.ibb.co/JRJ5Y8W/Whats-App-Image-2024-10-24-at-20-23-38.jpg', name: 'GardensbytheBay' },
    { id: 3, url: 'https://i.ibb.co/7JBMyvB/ghibliexhibit-main.jpg', name: 'SentosaIsland' },
    { id: 4, url: 'https://i.ibb.co/N3SdTMv/Whats-App-Image-2024-10-24-at-20-36-22.jpg', name: 'SingaporeZoo' },
    { id: 5, url: 'https://i.ibb.co/7JBMyvB/ghibliexhibit-main.jpg', name: 'OrchardRoad' },
    { id: 6, url: 'https://i.ibb.co/CMSXQgp/Whats-App-Image-2024-10-24-at-20-31-42.jpg', name: 'Chinatown' },
    { id: 7, url: 'https://i.ibb.co/NsBth0Z/Whats-App-Image-2024-10-24-at-20-21-17.jpg', name: 'ClarkeQuay' },
    { id: 8, url: 'https://i.ibb.co/sV78n62/Whats-App-Image-2024-10-24-at-20-24-44.jpg', name: 'SingaporeBotanicGardens' },
    { id: 9, url: 'https://i.ibb.co/7JBMyvB/ghibliexhibit-main.jpg', name: 'ArtScienceMuseum' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <h1 className="text-4xl font-bold text-center mb-8 animate-pulse">Places that leave you Awestruck!!!</h1>
      <ImageGallery images={images} />
    </div>
  );
};

const PlaceDetail = ({ name }) => (
  <div className="min-h-screen bg-gray-900 text-white py-12 flex justify-center items-center">
    <h2 className="text-3xl font-bold">Welcome to {name}!</h2>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfoCards />} />
        <Route path="/place/:name" element={<PlaceDetail />} />
      </Routes>
    </Router>
  );
}

