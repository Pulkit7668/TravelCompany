/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : {'min' : '300px', 'max' : '480px'},
        '3xl': '1600px',  // New custom screen size
      },
    },
  },
  plugins: [],
}

