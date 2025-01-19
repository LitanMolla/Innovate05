/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      maxWidth:{
        containerMain: "1420px",
      },
      colors: {
        colorBG: '45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%',
        colorBG2: 'red',
        brandColor: "#8454F5",
        hoverColor: '#FF5538',
        productBG: '#181059',
        holud: '#FEC35F',
      },
      backgroundImage: {
        imgBG: "linear-gradient(45deg, #ffeeef 0%, #fde9e4 99%, #fcf4f1 100%);",
      },

      fontFamily: {
       open: ["Open Sans"],
       nunito: ["Nunito"],
      },

      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}