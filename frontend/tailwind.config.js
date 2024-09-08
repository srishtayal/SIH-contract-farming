/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        yellow: '#e5eb49',
        'light-green': '#97ca00',
        green: '#226003',
        'dark-green': '#003309'
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'], // Added Montserrat
      },
    },
  },
  plugins: [],
}
