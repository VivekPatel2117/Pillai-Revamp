/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background":"url('../images/pillai-campus.jpg')",
        "mapBg":"url('../images/map_bg.png')",
        "feature":"url('../images/bg.png')",
        "component":"url('../images/Component.png')",
      },
      colors:{
        "marron":"rgb(150 0 0 / 55%)",
        "marronDark":"#910000",
        "beigeLight":"rgb(219 165 115 / 60%)",
        "beigeDark":"#DBA573",
        "BlueDark":"#020923"
      }
    },
  },
  plugins: [],
};
