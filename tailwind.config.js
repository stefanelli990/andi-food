/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle .5s ease-in-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%': {transform: 'rotate(0)'},
          '50%': {transform: 'rotate(10deg)'},
          '75%': {transform: 'rotate(-10deg)'},
          '100%': {transform: 'rotate(0)'},
        }
      }
    },
  },
  plugins: [],
}

