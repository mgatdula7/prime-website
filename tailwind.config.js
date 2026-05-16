/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          blue: '#1579B8',
          dark: '#050505',
          sky: '#13B5D1',
          soft: '#EAF5FB',
          background: '#F7FAFC',
        },
      },
    },
  },
  plugins: [],
};
