// src/app/aspirants/page.tsx
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  "Get 1-on-1 attention from someone who's already cleared your target exam.",
  "Receive a customized strategy and study plan tailored to your strengths.",
  "Clear your doubts instantly without waiting for the next class.",
  "Stay motivated with guidance from a relatable role model.",
];

const features = [
  { name: "Advanced Mentor Search", description: "Filter mentors by exam, rank, college, or expertise to find your perfect match." },
  { name: "Secure 1-on-1 Sessions", description: "Connect via high-quality video calls directly within the app." },
  { name: "Community Access", description: "Join groups with fellow aspirants and mentors to discuss strategies and share resources." },
  { name: "Direct Chat", description: "Message your mentor anytime for quick questions and continuous support." },
];

export default function ForAspirantsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#e9eae5] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E63E00]">
            Stop Guessing, Start Achieving.
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Get the personalized guidance you need to turn your dreams into reality. Learn from the best to become the best.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">What You Gain</h2>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#4CAF50] mr-3 mt-1">&#10003;</span>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
             <Image src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg" alt="Aspirant studying" width={500} height={350} className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-gray-800">Everything You Need to Succeed</h2>
           <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-[#E63E00]">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#FE6D4D] py-20 text-center text-white">
          <h2 className="text-3xl font-bold">Download the App and Find Your Mentor Today</h2>
           <Link href="/aspirants-app-link" className="mt-8 inline-block">
              <Image src="/google-play-badge.png" alt="Get it on Google Play" width={180} height={60} />
          </Link>
      </section>
    </div>
  );
}