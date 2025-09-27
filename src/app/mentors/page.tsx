// src/app/mentors/page.tsx
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  "Make a real impact on a student's career and life.",
  "Monetize your hard-earned expertise in your free time.",
  "Build your personal brand as an expert in your field.",
  "Flexible hours that you control completely.",
];

export default function ForMentorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#e9eae5] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E63E00]">
            Share Your Success. Shape the Future.
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Join our community of top achievers and make a lasting impact by mentoring the next generation of leaders.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">Why Become a Mentor?</h2>
          <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-[#4CAF50] font-bold text-2xl">✔</span>
                <p className="mt-2 text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Become a Mentor */}
       <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-gray-800">A Simple & Rewarding Process</h2>
           <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-4">
                <h3 className="font-bold text-lg text-[#E63E00]">1. Apply</h3>
                <p className="mt-2 text-gray-600">Submit your application with your achievements and credentials.</p>
              </div>
               <div className="p-4">
                <h3 className="font-bold text-lg text-[#E63E00]">2. Verification</h3>
                <p className="mt-2 text-gray-600">Our team will review your profile to ensure quality and authenticity.</p>
              </div>
               <div className="p-4">
                <h3 className="font-bold text-lg text-[#E63E00]">3. Start Mentoring</h3>
                <p className="mt-2 text-gray-600">Once approved, set up your profile, open your calendar, and start earning.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#FE6D4D] py-20 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Make an Impact?</h2>
           <Link href="/https://play.google.com/store/apps/details?id=com.support.toppers.mantra.mentor" className="mt-8 inline-block">
              <Image src="/google-play.png" alt="Get it on Google Play" width={180} height={60} />
          </Link>
      </section>
    </div>
  );
}