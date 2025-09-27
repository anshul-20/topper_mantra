// src/components/homepage/HowItWorks.tsx
import React from 'react';

// Data for the steps
const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
    title: '1. Find Your Mentor',
    description: 'Search and filter through hundreds of verified top-achievers to find the perfect guide for your journey.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    title: '2. Book a Session',
    description: 'Select a time that works for you, book a one-on-one video session, and prepare your questions.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: '3. Achieve Your Goal',
    description: 'Get personalized strategies, clear your doubts, and gain the confidence to ace your exam.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E63E00]">
          Achieve Your Goal in 3 Simple Steps
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-[#e9eae5] text-[#4CAF50]">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-800">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};