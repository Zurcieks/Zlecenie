/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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