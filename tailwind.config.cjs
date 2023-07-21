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
        grey: {
          800: "#1c2537"
        },
        themeOrange: {
          "100": "#f9744b",
          "200": "#fa6b3f",
          "300": "#f56336",
          "400": "#ea5020",
          "500": "#df5327"
        },
        themeGrey: {
          "100": "#343a40",
          "200": "#212529",
          "300": "#1b1e20"
        }
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/code_header.webp')",
      },
    },
  },
  plugins: [],
}