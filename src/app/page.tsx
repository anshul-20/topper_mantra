// src/app/page.tsx
import { HeroSection } from "@/components/homepage/HeroSection";
import { SocialProof } from "@/components/homepage/SocialProof";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { FeaturedMentors } from "@/components/homepage/FeaturedMentors";
import { Testimonial } from "@/components/homepage/Testimonial";
import { FinalCTA } from "@/components/homepage/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <HowItWorks />
      <FeaturedMentors />
      <Testimonial />
      <FinalCTA />
      {/* Other homepage sections will go here */}
    </>
  );
}