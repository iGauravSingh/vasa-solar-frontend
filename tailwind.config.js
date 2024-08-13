/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        'hero': "url('/pannel.jpg')",
        'advantage-background-image': "url('/disc_lft_bg.jpg')",
      },
      keyframes: {
        'slideup': {
          '0%': { translate: '0 -84px'},
          '100%': { translate: '0 0px'},
        },
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
      animation: {
        'slide-up': 'slideup 0.5s linear',
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      }
    },
  },
  plugins: [],
}

