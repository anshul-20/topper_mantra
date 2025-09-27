// src/components/homepage/FeaturedMentors.tsx
import Image from 'next/image';
import Link from 'next/link';

// DUMMY DATA: Later, this will come from your Sanity CMS
const mentors = [
  {
    name: 'Dr. Priya Sharma',
    achievement: 'NEET 2023, AIR 12',
    imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    name: 'Rohan Verma',
    achievement: 'UPSC CSE 2022, AIR 42',
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    name: 'Aditya Singh',
    achievement: 'Software Engineer, Google',
    imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
  },
  {
    name: 'Sameer Khan',
    achievement: 'IIT Bombay, CSE \'24',
    imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
  },
];

export const FeaturedMentors = () => {
  return (
    <section className="bg-[#e9eae5] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E63E00]">
          Meet Some of Our Top Mentors
        </h2>
        
        {/* Horizontal Scrolling Container */}
        <div className="mt-12 flex space-x-8 overflow-x-auto pb-6">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg text-center p-6">
              <div className="relative h-24 w-24 mx-auto">
                <Image
                  src={mentor.imageUrl}
                  alt={`Headshot of ${mentor.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">{mentor.name}</h3>
              <p className="mt-1 text-[#E63E00] font-semibold">{mentor.achievement}</p>
              <Link href="#" className="mt-4 inline-block text-gray-600 hover:underline">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};