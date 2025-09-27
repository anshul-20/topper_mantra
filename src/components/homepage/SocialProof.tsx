import Image from 'next/image'; // Import the Next.js Image component

export const SocialProof = () => {
  // Your logo data is perfect as is.
  const logos = [
    { name: 'IIT Logo', path: '/logos/iit-logo.svg' },
    { name: 'AIIMS Logo', path: '/logos/aiims-logo.svg' },
    { name: 'UPSC Logo', path: '/logos/upsc-logo.svg' },
    { name: 'IIM Logo', path: '/logos/iim-logo.svg' },
    { name: 'GATE Logo', path: '/logos/gate-logo.svg' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        <p className="text-lg text-gray-600">
          Trusted by aspirants preparing for:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 mt-6">
          {/* We replace the hardcoded spans with this map function */}
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.path}
              alt={logo.name}
              width={100} // Set a base width for the logo
              height={40}  // Set a base height for the logo
              className="object-contain" // Ensures the logo scales correctly
            />
          ))}
        </div>
      </div>
    </section>
  );
};