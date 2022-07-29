/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cgreen: {
          100: '#76bca5',
          200: '#4E9F84',
          300: '#2a5547',
        },
        cbrown:{
          100: '#845318',
          200: '#704F1A',
        },
        cyellow:{
          100: '#E8F697',
        }
      }
    },
    
  },
  daisyui: {
    themes: ["garden"],
  },
   plugins: [
    require("daisyui")
  ],
}