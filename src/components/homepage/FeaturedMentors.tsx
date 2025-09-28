// src/components/homepage/FeaturedMentors.tsx
'use client'; // <-- This is now a Client Component

import { useRef } from 'react';
import Image from 'next/image';
import { client } from '@/lib/sanity';

interface Mentor {
  _id: string;
  name: string;
  achievement: string;
  imageUrl: string;
}

// This is the interactive Client Component
export const FeaturedMentorsSlider = ({ mentors }: { mentors: Mentor[] }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const duplicatedMentors = [...mentors, ...mentors];

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -1500, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 1500, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#e9eae5] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E63E00] mb-12">
          Meet Some of Our Top Mentors
        </h2>
        
        <div className="relative">
          {/* Left Arrow */}
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Animated Scrolling Container */}
          <div ref={scrollerRef} className="scroller-container w-full overflow-hidden">
            <div className="scroller">
              {duplicatedMentors.map((mentor, index) => (
                <div key={`${mentor._id}-${index}`} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg text-center p-6 mx-4">
                  <div className="relative h-24 w-24 mx-auto">
                    <Image
                      src={mentor.imageUrl}
                      alt={`Headshot of ${mentor.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-800">{mentor.name}</h3>
                  <p className="mt-1 text-[#E63E00] font-semibold">{mentor.achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};


// This is the main Server Component that fetches the data
export const FeaturedMentors = async () => {
  const mentors: Mentor[] = await getMentors();

  if (!mentors || mentors.length === 0) return null;

  return <FeaturedMentorsSlider mentors={mentors} />;
};

async function getMentors() {
  const query = `*[_type == "mentor"]{_id, name, achievement, "imageUrl": imageUrl.asset->url}`;
  const data = await client.fetch(query);
  return data;
}