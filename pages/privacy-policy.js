import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Your Website</title>
      </Head>
      <div className="pt-48 bg-white p-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect various types of personal information from you, such as your name, email address, and other information you provide voluntarily.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Use of Information</h2>
        <p className="mb-4">
          We may use the information we collect for various purposes, including to provide and improve our services, to communicate with you, and to send you updates and promotional materials.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Disclosure of Information</h2>
        <p className="mb-4">
          We may share your personal information with third parties in certain situations, such as when required by law or when we have your consent to do so.
        </p>

        {/* Add more sections and details based on your specific privacy policy */}

        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@labolarochester.com">contact@labolarochester.com</a>.
        </p>
        <Link className="mt-8 inline-block text-blue-900" href="/">Back To Home</Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
