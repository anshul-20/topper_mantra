import { client } from '@/lib/sanity'; // <-- Import the client

interface TestimonialData {
  quote: string;
  authorName: string;
  authorTitle: string;
}

async function getTestimonial() {
  // Fetch the most recently created testimonial
  const query = `*[_type == "testimonial"] | order(_createdAt desc)[0]{
    quote,
    authorName,
    authorTitle
  }`;
  const data = await client.fetch(query);
  return data;
}

export const Testimonial = async () => {
  const testimonial: TestimonialData = await getTestimonial();

  // If no testimonial exists yet, don't render the component
  if (!testimonial) return null;

  return (
    <section className="bg-[#FE6D4D] text-white py-20">
      <div className="container mx-auto text-center px-4 max-w-3xl">
        <svg className="mx-auto h-12 w-12" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33 8.213C9.33 6.088 10.537 4 12.637 4c2.1 0 3.307 2.088 3.307 4.213 0 2.125-1.207 4.25-3.307 4.25S9.33 10.338 9.33 8.213zm10 0c0-2.125 1.207-4.213 3.307-4.213 2.1 0 3.307 2.088 3.307 4.213 0 2.125-1.207 4.25-3.307 4.25S19.33 10.338 19.33 8.213zM4 28h24v-4H4v4zm0-6h24v-4H4v4zm0-6h24v-4H4v4z" />
        </svg>
        <p className="mt-6 text-2xl md:text-3xl font-light italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <p className="mt-6 text-xl font-semibold">
          - {testimonial.authorName}, {testimonial.authorTitle}
        </p>
      </div>
    </section>
  );
};