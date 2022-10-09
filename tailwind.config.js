// const colors = require('tailwindcss/colors')

module.exports = {
   content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
   theme: {
      extend: {
         fontFamily: {
            inter: ["Inter", "sans-serif"],
            merri: ["Merriweather", "serif"],
         },
         colors: {
            raisinBlack: {
               50: "#DBDEE6",
               100: "#C2C7D6",
               200: "#AAB1C5",
               300: "#929BB5",
               400: "#7985a4",
               500: "#637092",
               600: "#535D79",
               700: "#424A61",
               800: "#323849",
               900: "#212530",
            },
            granite: {
               300: "#EAEAEC",
               400: "#D4D5D8",
               500: "#BFC1C5",
               600: "#A9ACB1",
               700: "#94979E",
               800: "#7E828B",
               900: "#63666D",
            },

            platinum: {
               600: "#F4F5F6",
               700: "#E9EAEC",
               900: "#D3D5D9",
            },
         },
      },
   },
   plugins: [],
};
