/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sample': '970px',
      'supersm' : '530px',
      "xs" : "415px"
    },
    extend: {
      fontFamily : {
        inter : ["Inter", "serif"]
      }
    },
  },
  plugins: [],
}

