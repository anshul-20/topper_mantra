// src/components/homepage/FeaturedMentors.tsx
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/lib/sanity'; // <-- Import the client

// Define the type for our mentor data
interface Mentor {
  _id: string;
  name: string;
  achievement: string;
  imageUrl: string;
}

// Function to fetch the data
async function getMentors() {
  const query = `*[_type == "mentor"]{
    _id,
    name,
    achievement,
    "imageUrl": imageUrl.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

// Make the component async to fetch data
export const FeaturedMentors = async () => {
  const mentors: Mentor[] = await getMentors();

  return (
    <section className="bg-[#e9eae5] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E63E00]">
          Meet Some of Our Top Mentors
        </h2>
        
        <div className="mt-12 flex space-x-8 overflow-x-auto pb-6">
          {mentors.map((mentor) => (
            <div key={mentor._id} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg text-center p-6">
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