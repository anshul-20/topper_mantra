// src/components/homepage/SocialProof.tsx
import React from 'react';

export const SocialProof = () => {
  // In a real app, you might fetch these logos or have them as components
  const logos = [
    { name: 'IIT Logo', path: '/logos/iit-logo.svg' }, // Example path
    { name: 'AIIMS Logo', path: '/logos/aiims-logo.svg' },
    { name: 'UPSC Logo', path: '/logos/upsc-logo.svg' },
    { name: 'IIM Logo', path: '/logos/iim-logo.svg' },
    { name: 'GATE Logo', path: '/logos/gate-logo.svg' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        <p className="text-lg text-gray-600">
          Trusted by aspirants preparing for:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 mt-6">
          {/* This is a placeholder. You'll need to add your own SVG logos. */}
          <span className="text-gray-400 font-bold text-2xl">IIT</span>
          <span className="text-gray-400 font-bold text-2xl">AIIMS</span>
          <span className="text-gray-400 font-bold text-2xl">UPSC</span>
          <span className="text-gray-400 font-bold text-2xl">IIM</span>
          <span className="text-gray-400 font-bold text-2xl">GATE</span>
        </div>
      </div>
    </section>
  );
};