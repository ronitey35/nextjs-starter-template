// font.ts
import { Poppins } from 'next/font/google';

// Poppins Font Configuration
const poppins = Poppins({
  subsets: ['latin'], // Include the Latin subset
  weight: [
    '100', '200', '300', '400', '500', '600', '700', '800', '900' 
  ],
  style: ['normal', 'italic'], 
  display: 'swap', // Ensures text is shown with a fallback until the font is loaded
});

export { poppins };
