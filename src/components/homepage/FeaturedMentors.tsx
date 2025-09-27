// src/components/homepage/FeaturedMentors.tsx
import Image from 'next/image';
import { client } from '@/lib/sanity';

interface Mentor {
  _id: string;
  name: string;
  achievement: string;
  imageUrl: string;
}

async function getMentors() {
  const query = `*[_type == "mentor"]{_id, name, achievement, "imageUrl": imageUrl.asset->url}`;
  const data = await client.fetch(query);
  return data;
}

export const FeaturedMentors = async () => {
  const mentors: Mentor[] = await getMentors();
  // We duplicate the mentors array to ensure a seamless loop for the animation
  const duplicatedMentors = [...mentors, ...mentors];

  return (
    <section className="bg-[#e9eae5] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E63E00] mb-12">
          Meet Some of Our Top Mentors
        </h2>
        
        {/* Animated Scrolling Container */}
        <div className="scroller-container w-full overflow-hidden">
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
      </div>
    </section>
  );
};