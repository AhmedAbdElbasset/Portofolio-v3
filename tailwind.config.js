/** @type {import('tailwindcss').Config} */
import background from './public/assets/best-black-desk-setup-accessories-1-1536x864.webp'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
      },
      colors:{
        main:'#2876ad'
      }
    },
    screens:{
      sm:'540px',
      md:'720px',
      lg:'992px',
      xl:'1200px',
      '2xl':'1400px'
    }
  },
  plugins: [],
}