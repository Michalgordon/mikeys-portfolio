
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        beige :"#DDD0C8",
        cream: "#DED9D5",
        chocolate: "#884D4D",
        teal:"#97A79C",
        darkGray: "#4B4B49",
        aqua: "#AEB9AC",
        red: "#874E52"

      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      screens: {
        'tall': { 'raw': '(min-height: 800px)' },
        // => @media (min-height: 800px) { ... }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        typing: 'typing 3.5s steps(40, end) infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        typing:{
          '0%': { width: '0%' },
          '100%': { width: '100%' },

        }
      }


    },
  },
  plugins: [],
}

