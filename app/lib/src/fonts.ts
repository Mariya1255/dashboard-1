// src/fonts.ts

import { Roboto } from 'next/font/google'; // Ensure aapka Next.js updated 
import { Lusitana } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400'], // ya ['400', '700'] agar multiple weights chahiyein
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: '400', // Required weight
});


