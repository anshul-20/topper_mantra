// src/app/contact/page.tsx
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E63E00]">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {`Have a question or feedback? We'd love to hear from you. Fill out the form below and we will get back to you as soon as possible.`}
          </p>
        </div>
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}