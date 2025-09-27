// src/app/privacy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 prose lg:prose-lg max-w-4xl">
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated:</strong> September 27, 2025</p>

        <h2>Introduction</h2>
        <p>Welcome to [Your Company Name] ({`"we," "our," "us"`}). We are committed to protecting your privacy...</p>
        
        {/*
          COPY AND PASTE THE REST OF THE PRIVACY POLICY TEXT HERE.
          Structure it with <h2> for main headings and <p> for paragraphs.
        */}

        <h2>Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p>
          <strong>[Topper Mantra]</strong><br />
          Email: <strong>[toppermantrainfo@gmail.com]</strong><br />
          Address: <strong>[Banglore]</strong>
        </p>
      </div>
    </div>
  );
}