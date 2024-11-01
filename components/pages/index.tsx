// pages/index.tsx
import React from 'react';
import InvoicesList from '@/components/InvoicesList'; // Correctly import InvoicesList
import Image from 'next/image';
const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className='text-green-600'>Welcome to the Home Page</h1>
      {/* Mobile image */}
      <Image
        src="/hero-mobile.png" // Image ka path
        alt="Mobile view of the dashboard" // Alt text
        layout="responsive" // Responsive layout
        width={720} // Image ki width
        height={480} // Image ki height
        className="block md:hidden" // Tailwind CSS classes
      />
      {/* Desktop image */}
      <Image
        src="/hero-desktop.png" // Image ka path
        alt="Desktop view of the dashboard" // Alt text
        layout="responsive" // Responsive layout
        width={1280} // Image ki width
        height={720} // Image ki height
        className="hidden md:block" // Tailwind CSS classes
      />

      <InvoicesList /> {/* Ensure this is used correctly */}
    </div>
  );
};

export default HomePage; // Export the HomePage


