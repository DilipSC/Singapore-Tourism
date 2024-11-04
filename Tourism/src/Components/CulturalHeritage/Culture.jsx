// App.js
import React from 'react';
import Navbar from './Navbar';
import IntroductionSection from './IntroductionSection';
import DiversitySection from './DiversitySection';

export default function Culture() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <IntroductionSection />
      <DiversitySection />
      {/* Add other sections like Festivals, Arts & Crafts, etc. */}
    </div>
  );
}
