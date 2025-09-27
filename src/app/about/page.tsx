// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// New data for the "What We Deliver" section
const deliverables = [
  {
    title: 'Personalized Roadmaps',
    description: 'Stop following generic advice. Get a step-by-step study plan tailored to your specific strengths and weaknesses.',
  },
  {
    title: 'Live Doubt Clearing',
    description: 'No more getting stuck on a single problem. Get your doubts cleared instantly in one-on-one sessions.',
  },
  {
    title: 'Strategy & Time Management',
    description: 'Learn proven strategies for tackling exams, managing your time effectively, and handling pressure like a topper.',
  },
  {
    title: 'Constant Motivation',
    description: 'Connect with a mentor who understands your struggle and get the consistent encouragement you need to stay on track.',
  },
];


export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#e9eae5] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E63E00]">
            Our Mission is Your Success
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            We believe that the right guidance can change a life. We started this platform to bridge the gap between aspirants and the achievers who have walked the path before them.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800">The Story Behind the Platform</h2>
            <p className="mt-4 text-gray-600">
              As former aspirants ourselves, we experienced firsthand the challenges of preparing for competitive exams with limited access to genuine, personalized guidance. We saw countless talented students fall short not due to lack of effort, but lack of direction.
            </p>
            <p className="mt-4 text-gray-600">
              This platform was born from a simple idea: what if every student could get direct, one-on-one mentorship from someone who has already achieved their dream? We are here to make that a reality.
            </p>
          </div>
          <div className="order-1 md:order-2">
             <Image src="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg" alt="Founders discussing ideas" width={500} height={350} className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>
      
      {/* NEW: What We Deliver Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-gray-800">How We Help You Succeed</h2>
           <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {deliverables.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-[#E63E00]">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
           </div>
        </div>
      </section>
    </div>
  );
}