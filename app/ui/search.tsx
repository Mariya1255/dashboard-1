'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchProps {
  placeholder: string;
  // Aap yahan aur bhi props define kar sakte hain agar zarurat ho
}

export default function Search({ placeholder }: SearchProps) {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search" // Make sure to provide an id for accessibility
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
