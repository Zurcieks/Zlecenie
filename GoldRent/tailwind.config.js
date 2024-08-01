/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#313233',
        darkGray: '#2c2d2e'
      },
    },
  },
  
  plugins: []
    

}