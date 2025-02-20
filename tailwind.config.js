/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/expo-mgm/**/*.{js,jsx,ts,tsx}', // Expo app files
    './apps/web/**/*.{js,jsx,ts,tsx}', // Next.js app files
    './apps/native-mgm/**/*.{js,jsx,ts,tsx}', // Next.js app files
    './libs/ui/**/*.{js,jsx,ts,tsx}', // Shared library files
  ],
  theme: {
    extend: {
      // Customize your theme here
    },
  },
  plugins: [
    // Add any Tailwind plugins here
  ],
};
