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
      },
      fontFamily : {
        'nunito' : ['nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}

