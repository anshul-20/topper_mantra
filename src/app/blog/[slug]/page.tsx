// src/app/blog/[slug]/page.tsx
import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import type { PortableTextBlock } from '@portabletext/types';

interface Post {
  title: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: PortableTextBlock[]; // The rich text content
  publishedAt: string;
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage {
      asset->{
        url
      }
    },
    body,
    publishedAt
  }`;
  const params = { slug };
  const data = await client.fetch(query, params);
  return data;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: Post = await getPost(params.slug);

  return (
    <article className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#E63E00] text-center">{post.title}</h1>
        <p className="mt-4 text-center text-gray-500">
          Published on {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="relative h-96 w-full my-12">
           <Image 
              src={post.mainImage.asset.url} 
              alt={post.title} 
              layout="fill" 
              objectFit="cover"
              className="rounded-lg shadow-xl" 
            />
        </div>
        
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  );
}