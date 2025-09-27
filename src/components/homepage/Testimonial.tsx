// src/components/homepage/Testimonial.tsx
'use client'; // <-- This is now a Client Component

import { useState, useEffect, useCallback } from 'react';
import { client } from '@/lib/sanity';

interface TestimonialData {
  _id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}

// This is a new component that will be rendered on the server page
export const TestimonialSlider = ({ testimonials }: { testimonials: TestimonialData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  // useEffect for auto-scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#FE6D4D] text-white py-20 overflow-hidden">
      <div className="container mx-auto text-center px-4 max-w-3xl">
        <svg className="mx-auto h-12 w-12" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33 8.213C9.33 6.088 10.537 4 12.637 4c2.1 0 3.307 2.088 3.307 4.213 0 2.125-1.207 4.25-3.307 4.25S9.33 10.338 9.33 8.213zm10 0c0-2.125 1.207-4.213 3.307-4.213 2.1 0 3.307 2.088 3.307 4.213 0 2.125-1.207 4.25-3.307 4.25S19.33 10.338 19.33 8.213zM4 28h24v-4H4v4zm0-6h24v-4H4v4zm0-6h24v-4H4v4z" />
        </svg>

        {/* Testimonial Content */}
        <div className="relative h-48 mt-6">
            <p className="text-2xl md:text-3xl font-light italic">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>
            <p className="mt-6 text-xl font-semibold">
              - {testimonials[currentIndex].authorName}, {testimonials[currentIndex].authorTitle}
            </p>
        </div>

        {/* Radio Buttons for Navigation */}
        <div className="mt-8 flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// This is the main Server Component that fetches the data
export const Testimonial = async () => {
  const testimonials: TestimonialData[] = await getTestimonials();

  // If no testimonials exist yet, don't render the component
  if (!testimonials || testimonials.length === 0) return null;

  return <TestimonialSlider testimonials={testimonials} />;
};

async function getTestimonials() {
  // Fetch ALL testimonials, ordered by most recent
  const query = `*[_type == "testimonial"] | order(_createdAt desc){
    _id,
    quote,
    authorName,
    authorTitle
  }`;
  const data = await client.fetch(query);
  return data;
}