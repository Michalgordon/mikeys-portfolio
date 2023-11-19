
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
        darkGray: "#4B4B49"

      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
}

