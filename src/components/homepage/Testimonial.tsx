// src/components/homepage/Testimonial.tsx
import React from 'react';

export const Testimonial = () => {
  return (
    <section className="bg-[#FE6D4D] text-white py-20">
      <div className="container mx-auto text-center px-4 max-w-3xl">
        <svg className="mx-auto h-12 w-12" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33 8.213C9.33 6.088 10.537 4 12.637 4c2.1 0 3.307 2.088 3.307 4.213 0 2.125-1.207 4.25-3.307 4.25S9.33 10.338 9.33 8.213zm10 0c0-2.125 1.207-4.213 3.307-4.213 2.1 0 3.307 2.088 3.307 4.213 0 2.125-1.207 4.25-3.307 4.25S19.33 10.338 19.33 8.213zM4 28h24v-4H4v4zm0-6h24v-4H4v4zm0-6h24v-4H4v4z" />
        </svg>
        <p className="mt-6 text-2xl md:text-3xl font-light italic">
          "The one-on-one sessions were a game-changer. My mentor's strategy helped me clear the Mains in my first attempt."
        </p>
        <p className="mt-6 text-xl font-semibold">
          - Anjali Sharma, IIT-JEE Aspirant
        </p>
      </div>
    </section>
  );
};