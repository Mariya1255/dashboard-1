import AcmeLogo from '@/app/ui/invoices/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Styles from '@/app/ui/home.module.css';
import { lusitana } from "@/app/ui/fonts";
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      {/* Blue banner on top */}
      <div className="w-full h-24 md:h-48 bg-blue-500 flex items-center justify-center">
        <AcmeLogo />
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 mt-6">
        {/* Text Section */}
        <div className="flex flex-col items-start md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-2">Welcome to Acme</h1>
          <p className="text-gray-600 mb-4">
            This is the example for the <a href="#" className="text-blue-500 underline">Next.js Learn Course</a>, brought to you by Vercel.
          </p>
          <Link href="#" className="flex items-center text-blue-500 hover:text-blue-600">
            <span>Log in</span>
            <ArrowRightIcon className="w-5 h-5 ml-1" />
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex items-center justify-center">
          <Image
            src="/hero-desktop.png" // Ensure this image path is correct
            width={500}
            height={350}
            alt="Screenshots of the dashboard project showing desktop version"
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </main>
  );
}
