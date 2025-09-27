// src/components/homepage/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="bg-[#e9eae5] py-20 md:py-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
        {/* Left Column: The Pitch */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E63E00] leading-tight">
            {`Unlock Your Potential. Learn from India's Best.`}
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Get personalized 1-on-1 mentorship from toppers and professionals who have already achieved your dream goal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/aspirants-app-link" // <-- Replace with your Play Store link
              className="bg-[#FF5722] text-white font-bold py-3 px-8 rounded-lg text-center hover:scale-105 transition-transform"
            >
              Find My Mentor
            </Link>
            <Link 
              href="/mentors-app-link" // <-- Replace with your Play Store link
              className="bg-transparent border-2 border-gray-400 text-gray-800 font-bold py-3 px-8 rounded-lg text-center hover:bg-gray-200 transition-colors"
            >
              Become a Mentor
            </Link>
          </div>
        </div>

        {/* Right Column: The Visual Proof */}
        <div className="hidden md:block">
          {/* Replace this with a real image of your mentors later */}
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" 
            alt="Team of professional mentors collaborating"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};