/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'checkmark': "url('/Vector.svg')",
      },
      
      colors:{
        "blue":"#4EA8DE",
        "blue-dark": "#1E6F9F",
        "purple":"#8284FA",
        "purple-dark":"#5E60CE",

        "gray-100":"#F2F2F2",
        "gray-200":"#D9D9D9",
        "gray-300":"#808080",
        "gray-400":"#333333",
        "gray-500":"#262626",
        "gray-600":"#1A1A1A",
        "gray-700":"#0D0D0D",

        "danger": "#E25858"
      },

      fontFamily:{
        "inter":["Inter","sans-serif"],
      },

      lineHeight:{
        "line":"1.4",
      }
    },
    variants: {
    extend: {
      backgroundImage: ['checked'],
    },
  },
  },
  plugins: [],
}