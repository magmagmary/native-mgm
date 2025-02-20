/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind.config'), require('nativewind/preset')],
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Expo app files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
