import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GuideNavbar from './GuideNavbar';

export default function Guide() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', emoji: '🇸🇬' },
    { id: 'transport', title: 'Transport', emoji: '🚆' },
    { id: 'money', title: 'Money', emoji: '💰' },
    { id: 'tips', title: 'Travel Tips', emoji: '🧳' },
  ];

  const content = {
    overview: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold mb-4 font-serif">Welcome to Singapore 🇸🇬</h2>
        <p className="text-xl font-medium">
          Singapore is a vibrant city-state known for its modern architecture, diverse culture, and efficient public transportation system.
        </p>
      </motion.div>
    ),
    transport: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold mb-4 font-serif">Transportation 🚆</h2>
        <ul className="space-y-2 text-lg font-medium">
          <li>🚇 MRT (Mass Rapid Transit): Fast and efficient subway system</li>
          <li>🚌 Buses: Extensive network covering the entire island</li>
          <li>🚕 Taxis and Ride-sharing: Available through apps like Grab</li>
        </ul>
        <h3 className="text-3xl font-bold mt-6 mb-2 font-sans">Payment Methods 💳</h3>
        <ul className="space-y-2 text-lg font-medium">
          <li>EZ-Link and NETS FlashPay Cards: Prepaid cards for public transit</li>
          <li>Contactless Credit/Debit Cards: Accepted at MRT and bus gantries</li>
          <li>Mobile Apps: Use "MyTransport.SG" for route planning and updates</li>
        </ul>
      </motion.div>
    ),
    money: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold mb-4 font-serif">Money Matters 💰</h2>
        <h3 className="text-3xl font-bold mb-2 font-sans">Currency 💵</h3>
        <p className="mb-4 text-xl font-medium">The local currency is the Singapore Dollar (SGD or S$).</p>
        <h3 className="text-3xl font-bold mb-2 font-sans">Payment Methods 💳</h3>
        <ul className="space-y-2 text-lg font-medium">
          <li>💵 Cash: Widely accepted, especially in small establishments</li>
          <li>💳 Credit/Debit Cards: Commonly used in hotels, restaurants, and retail outlets</li>
          <li>📱 Contactless Payments: Apple Pay, Google Pay, and Samsung Pay are widely accepted</li>
          <li>📲 Digital Wallets: GrabPay and PayLah! are popular among locals</li>
        </ul>
      </motion.div>
    ),
    tips: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold mb-4 font-serif">Travel Tips 🧳</h2>
        <ul className="space-y-2 text-lg font-medium">
          <li>⏰ Avoid peak hours (8-10 AM and 6-8 PM) for more comfortable travel</li>
          <li>♿ MRT and buses are wheelchair accessible</li>
          <li>☔ Be prepared for rain, which can affect travel times</li>
          <li>📱 Use apps like CityMapper, Grab, and SG MRT Map for easy navigation</li>
          <li>🍜 Visit hawker centers for affordable and delicious local food</li>
          <li>🌳 Check out free attractions like the Botanic Gardens and Merlion Park</li>
        </ul>
      </motion.div>
    ),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prevSection) => {
        const currentIndex = sections.findIndex((section) => section.id === prevSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        return sections[nextIndex].id;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GuideNavbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white p-8 flex flex-col items-center pt-20"> {/* Increased top padding */}
        <motion.h1
          className="text-6xl font-extrabold text-center mb-8 font-sans"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Singapore Tourist Guide 🇸🇬
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
          <motion.div
            className="md:w-1/4 space-y-4 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                className={`w-full py-3 px-4 rounded-full text-center transition-colors duration-300 font-bold text-lg ${
                  activeSection === section.id
                    ? 'bg-white text-blue-900'
                    : 'bg-blue-800 hover:bg-blue-700'
                }`}
                onClick={() => setActiveSection(section.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.emoji} {section.title}
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            className="md:w-3/4 bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {content[activeSection]}
          </motion.div>
        </div>
      </div>
    </>
  );
}
