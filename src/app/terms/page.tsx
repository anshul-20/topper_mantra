// src/app/terms/page.tsx

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 prose lg:prose-lg max-w-4xl">
        <h1>Terms of Service</h1>
        <p><strong>Last Updated:</strong> September 27, 2025</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>By accessing our website at [Your Website URL] and using our mobile applications...</p>

        {/*
          COPY AND PASTE THE REST OF THE TERMS OF SERVICE TEXT HERE.
          Structure it with <h2> for section headings and <p> for paragraphs.
        */}

        <h2>13. Contact Us</h2>
        <p>To resolve a complaint regarding the Platform or to receive further information... please contact us at:</p>
        <p>
          <strong>[Your Company Name]</strong><br />
          Email: <strong>[Your Contact Email]</strong><br />
          Address: <strong>[Your Company Address]</strong>
        </p>
      </div>
    </div>
  );
}