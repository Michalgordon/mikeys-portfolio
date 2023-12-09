
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
        "teal-300": "rgba(151, 167, 156, 0.3)",
        darkGray: "#4B4B49",
        aqua: "#AEB9AC",
        red: "#874E52"

      },
      fontFamily: {
        poppins: ["Poppins"],
        kalam: ["Kalam"]
      },
      screens: {
        'tall': { 'raw': '(min-height: 800px)' },
        // => @media (min-height: 800px) { ... }
      },
      rotate: {
        '20': '20deg',
        '35': '35deg',
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        typing: 'typing 3.5s steps(40, end) infinite',
        "infinite-scroll": 'infinite-scroll 25s linear infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        typing:{
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        "infinite-scroll": {
          from: { transform: ' translateX(0)' },
          to: { transform: ' translateX(-100%)' },
        }
      }


    },
  },
  plugins: [],
}

