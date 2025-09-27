// src/components/layout/Footer.tsx
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Mission */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white">YourLogo</h3>
            <p className="mt-4 text-gray-400">
              Our mission is to connect every aspirant with the guidance they need to succeed.
            </p>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Platform</h4>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
              <Link href="/mentors" className="text-gray-400 hover:text-white">For Mentors</Link>
              <Link href="/aspirants" className="text-gray-400 hover:text-white">For Aspirants</Link>
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Resources</h4>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Column 4: Legal */}
            {/* Column 4: Legal - UPDATED LINKS */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Legal</h4>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};