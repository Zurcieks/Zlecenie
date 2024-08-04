/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['"Baloo 2"', 'sans-serif'],
        text: ['Poppins', 'sans-serif']
      },
      colors: {
        customGray: '#313233',
        darkGray: '#2c2d2e'
      },
    },
  },
  
  plugins: []
    

}