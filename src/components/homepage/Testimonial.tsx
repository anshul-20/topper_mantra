// src/components/homepage/Testimonial.tsx
'use client'; // Swiper is an interactive client component

import { client } from '@/lib/sanity';

// Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface TestimonialData {
  _id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}

// This is the main interactive component
const TestimonialSlider = ({ testimonials }: { testimonials: TestimonialData[] }) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#FE6D4D] text-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true, // This creates the clickable radio-style buttons
          }}
          navigation={true} // This adds the side arrows
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id} className="text-center pb-12">
              <svg className="mx-auto h-12 w-12" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33 8.213C9.33 6.088 10.537 4 12.637 4c2.1 0 3.307 2.088 3.307 4.213 0 2.125-1.207 4.25-3.307 4.25S9.33 10.338 9.33 8.213zm10 0c0-2.125 1.207-4.213 3.307-4.213 2.1 0 3.307 2.088 3.307 4.213 0 2.125-1.207 4.25-3.307 4.25S19.33 10.338 19.33 8.213zM4 28h24v-4H4v4zm0-6h24v-4H4v4zm0-6h24v-4H4v4z" />
              </svg>
              <div className="mt-6 text-2xl md:text-3xl font-light italic h-40">
                &ldquo;{testimonial.quote}&rdquo;
              </div>
              <p className="mt-6 text-xl font-semibold">
                - {testimonial.authorName}, {testimonial.authorTitle}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// This is the main Server Component that fetches the data
export const Testimonial = async () => {
  const testimonials: TestimonialData[] = await getTestimonials();
  if (!testimonials || testimonials.length === 0) return null;
  return <TestimonialSlider testimonials={testimonials} />;
};

async function getTestimonials() {
  const query = `*[_type == "testimonial"] | order(_createdAt desc){_id, quote, authorName, authorTitle}`;
  const data = await client.fetch(query);
  return data;
}