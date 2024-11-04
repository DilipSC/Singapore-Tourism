// Navbar.js
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full navbar-transparent p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Singapore Culture</div>
        <ul className="flex space-x-6">
          <li><a href="#introduction" className="text-white hover:text-gray-300">Introduction</a></li>
          <li><a href="#diversity" className="text-white hover:text-gray-300">Cultural Diversity</a></li>
          <li><a href="#festivals" className="text-white hover:text-gray-300">Festivals</a></li>
          <li><a href="#arts" className="text-white hover:text-gray-300">Arts & Crafts</a></li>
          <li><a href="#architecture" className="text-white hover:text-gray-300">Architecture</a></li>
        </ul>
      </div>
    </nav>
  );
}
