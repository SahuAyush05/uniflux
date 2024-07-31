/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#103133',
        'secondary': '#2d8c92'
      },
      screens: {
        '2xl': '1400px',
        'with-sidebar': { 'max': '1280px' },
      },

    },
  },
  plugins: [],
}