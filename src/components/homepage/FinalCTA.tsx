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
          {`Don't leave your success to chance. Get the expert guidance you need by downloading the app today. Your future self will thank you.`}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Replace with your actual Google Play Store badges/links */}
          <Link href="/aspirants-app-link">
              <Image src="/google-play-badge.png" alt="Get it on Google Play" width={180} height={60} />
          </Link>
           <Link href="/mentors-app-link">
              <Image src="/google-play-badge.png" alt="Get it on Google Play for Mentors" width={180} height={60} />
          </Link>
        </div>
      </div>
    </section>
  );
};
