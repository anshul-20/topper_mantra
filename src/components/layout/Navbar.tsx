// src/components/layout/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
    
      
        <Link href="/" className="flex items-center">
          {/* <Link href="/" className="logo-link"> */}
            <Image src="/logo.png" alt="Topper Mantra" width={100} height={30} />
          {/* </Link> */}
        </Link>

        {/* Center Links: Hidden on mobile */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/aspirants" className="text-gray-700 hover:text-[#E63E00] transition-colors">
            For Aspirants
          </Link>
          <Link href="/mentors" className="text-gray-700 hover:text-[#E63E00] transition-colors">
            For Mentors
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-[#E63E00] transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#E63E00] transition-colors">
            About Us
          </Link>
        </nav>

        {/* Right Side (CTA) */}
        <Link href="/get-started" className="hidden sm:inline-block bg-[#E63E00] text-white font-semibold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-all">
          Get Started
        </Link>
        
        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
            <button className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </header>
  );
};