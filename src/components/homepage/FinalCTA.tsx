// src/components/homepage/FinalCTA.tsx
import Link from 'next/link';
import Image from 'next/image';

export const FinalCTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E63E00]">
          Ready to Start Your Success Story?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {`Choose the right app for your journey. Whether you're seeking guidance or looking to provide it, your path starts here.`}
        </p>

        {/* New two-column layout for the app links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Aspirant App Card */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center">
            {/* Added div for circular icon background */}
            <div className="bg-white rounded-full p-4 shadow-md"> 
              <Image 
                src="/icons/aspirant.png"
                alt="Aspirant App Icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-800">For Aspirants</h3>
            <p className="mt-2 text-gray-600">Find your mentor and start learning.</p>
            <Link href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra" className="mt-6">
              <Image src="/google-play.png" alt="Get it on Google Play" width={180} height={60} />
            </Link>
          </div>

          {/* Mentor App Card */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center">
            {/* Added div for circular icon background */}
            <div className="bg-white rounded-full p-4 shadow-md">
              <Image 
                src="/icons/mentor.png"
                alt="Mentor App Icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-800">For Mentors</h3>
            <p className="mt-2 text-gray-600">Share your expertise and start earning.</p>
            {/* Fix: removed leading slash from Link href as it was causing an invalid URL structure */}
            <Link href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra.mentor" className="mt-6"> 
              <Image src="/google-play.png" alt="Get it on Google Play" width={180} height={60} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};