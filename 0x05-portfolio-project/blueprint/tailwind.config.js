/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        primary: '#947CCA',
        secondary: '#393939',
        whity: '#FEFEFE',
        darky: '#212121',
        cream: '#F4E5D7',
      },
    },
  },
  plugins: [require("daisyui")],
}

