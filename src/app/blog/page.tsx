// src/app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity';

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  publishedAt: string;
}

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      }
    },
    publishedAt
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <div className="bg-white">
      <section className="bg-[#e9eae5] py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#E63E00]">
          The Mentorship Blog
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Strategies, success stories, and insights to help you succeed.
        </p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} className="block group">
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform group-hover:scale-105 transition-transform">
                <div className="relative h-56 w-full">
                  <Image 
                    src={post.mainImage.asset.url} 
                    alt={post.title} 
                    layout="fill" 
                    objectFit="cover" 
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-[#E63E00]">{post.title}</h2>
                  <p className="mt-2 text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}