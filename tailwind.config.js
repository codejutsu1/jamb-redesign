/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'e-facility-section' : "url('/public/images/banner.png')",
        'empowering' : "url('/public/images/Group 7.png')",
      },
      fontFamily : {
        'nunito' : ['nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}

