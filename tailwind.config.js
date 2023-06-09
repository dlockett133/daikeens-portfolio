/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "city-pattern": "url('/src/assets/city.gif')",
        "mario-pattern": "url('/src/assets/mario.gif')",
        "mario2-pattern": "url('/src/assets/mario2.gif')",
        "newbg-pattern": "url('/src/assets/newbg.gif')",
        "nite-city-pattern": "url('/src/assets/nite-city.gif')",
        "stary-nite-pattern": "url('/src/assets/stary-night.gif')",
        "train-city-pattern": "url('/src/assets/train-city.gif')",
      },
    },
  },
  plugins: [],
};