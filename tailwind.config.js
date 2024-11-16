/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 1.5s ease-in-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      screens: {
        'xs' : {'min' : '320px', 'max' : '480px'},
        '3xl': '1600px',  // New custom screen size
      },
    },
  },
  plugins: [],
}

