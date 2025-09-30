import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

// IMPORT SWIPER STYLES HERE
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

// Configure the font
const manrope = Manrope({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Topper Mantra - Your Path to Success",
  description: "Unlock Your Potential. Learn from India's Best. Connect with Top Mentors and Achieve Your Dreams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.className} antialiased bg-white text-gray-900`}
      >
      <Navbar />
      <main>{children}</main>
      <Footer />
        
      </body>
    </html>
  );
}
