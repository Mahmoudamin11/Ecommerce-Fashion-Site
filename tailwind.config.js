/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : { 
        "smXl": "1400px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}