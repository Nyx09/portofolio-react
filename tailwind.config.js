/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        sans: ['Kanit', 'sans-serif'],
      },
      colors: {
        dark: '#0C0C0C',
        textLight: '#D7E2EA',
      },
    },
  },
  plugins: [],
}