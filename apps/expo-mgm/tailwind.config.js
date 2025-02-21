const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind.config'), require('nativewind/preset')],
  content: [
    join(__dirname, './src/**/*.{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
