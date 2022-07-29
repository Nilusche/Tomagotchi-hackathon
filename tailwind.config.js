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
        }
      }
    },
    
  },
   plugins: [
    require("daisyui")
  ],
}