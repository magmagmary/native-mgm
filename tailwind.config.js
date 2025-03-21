/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,jsx,ts,tsx}', // Expo app files
    './libs/**/*.{js,jsx,ts,tsx}', // Shared library files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: '#4A4A4A',
        yellow:'#FFC700',
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here
  ],
};
