import daisyui from "daisyui"
const plugin = require("tailwind-scrollbar")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        footer:"#333338",
        text_color:"#F84464"
      },

      // gridTemCol:{
      //   "10":"repeat(10,calc(20%-25.5px))"
      // },
      // gridTemRow:{
      //   "1":"repeat(1,1fr)"
      // }
    },
  },
  plugins: [
    daisyui,
    plugin,
    require('@tailwindcss/line-clamp')
  ],
  
  daisyui:{
    themes:[
      "dark",
      {
        mytheme:{
          primary : "#F5F5F5",
          secondary:"#2B3149",
          footer:"#333338",
          text_color:"#F84464",

          ".btn-primary":{
            "background-color":"#F84464",
            "color":"white",
            "border":"none",
            "border-radius":"4px"
      
          },
          ".btn-primary:hover":{
              "background-color":"#F84464"
          },
    
        },
        
      },
    ],
      
}
}
