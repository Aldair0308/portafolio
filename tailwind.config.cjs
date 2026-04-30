/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#00ffff',
        darkbg: '#0a0a0a',
      },
    },
  },
  plugins: [],
};
