// src/components/ContactForm.tsx
'use client'; // This is a client component because it uses interactivity (hooks)

import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeorerje"); // <-- Paste your Formspree ID here

  if (state.succeeded) {
      return <p className="text-xl font-bold text-green-700">{`Thanks for your message! We'll get back to you soon.`}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E63E00] focus:border-[#E63E00]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E63E00] focus:border-[#E63E00]"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E63E00] focus:border-[#E63E00]"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>
      <div>
        <button 
          type="submit" 
          disabled={state.submitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-semibold bg-[#E63E00] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E63E00] disabled:bg-gray-400"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};