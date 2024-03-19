const theme = require('./theme');

module.exports = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme,
  plugins: [require("tailwindcss-animate")],
};