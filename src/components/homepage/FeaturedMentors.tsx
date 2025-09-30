// src/components/homepage/FeaturedMentors.tsx
'use client'; 

import { useRef } from 'react';
import Image from 'next/image';
import { client } from '@/lib/sanity';

interface Mentor {
  _id: string;
  name: string;
  achievement: string;
  imageUrl: string;
}

const FeaturedMentorsSlider = ({ mentors }: { mentors: Mentor[] }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Note: We remove the duplicated array for the interactive part to simplify scrolling logic
  // The CSS animation will handle the visual looping illusion.
  
  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div ref={scrollerRef} className="scroller-container w-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
            {/* The continuous animation effect is best handled by CSS only for simplicity with navigation */}
            <div className="flex">
                {mentors.map((mentor) => (
                <div key={mentor._id} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg text-center p-6 mx-4 snap-center">
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

        <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
    </div>
  );
};

// This is the main Server Component that fetches data
export const FeaturedMentors = async () => {
  const mentors = await getMentors();
  if (!mentors || mentors.length === 0) return null;

  return (
    <section className="bg-[#e9eae5] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E63E00] mb-12">
          Meet Some of Our Top Mentors
        </h2>
        <FeaturedMentorsSlider mentors={mentors} />
      </div>
    </section>
  );
};

async function getMentors() {
  const query = `*[_type == "mentor"]{_id, name, achievement, "imageUrl": imageUrl.asset->url}`;
  const data = await client.fetch(query);
  return data;
}