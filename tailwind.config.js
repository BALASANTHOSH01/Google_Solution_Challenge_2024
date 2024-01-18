/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '639px'},
        'md': {'max': '767px'},
        'lg': {'max': '1023px'},
        'xl': {'max': '1279px'},
      },
      fontFamily:{
        Roboto:["Roboto","sans-serif"],
        Manrope:["Manrope","sans-serif"],
        Nunito:["Nunito"],
      },
      textColor:{
        bronze:"#CD7F32",
        silver:	"rgb(192, 192, 192)",
        gold:"#FFD700",
      },
      backgroundImage:{
        bgwave:"url('./src/assets/Images/Chatbot/img.png')",
        botLogo:"url('./src/assets/Images/Chatbot/botIcon.jpg')",
      }
    },
  },
  plugins: [],
}

