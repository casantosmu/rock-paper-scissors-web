/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Barlow Semi Condensed", "sans-serif"],
    },
    extend: {
      boxShadow: {
        focus: "0 0 0 .2rem",
      },
      borderWidth: {
        3: "3px",
      },
      backgroundSize: {
        "handchip-medium": "50px",
        "handchip-large": "75px",
      },
    },
  },
  plugins: [],
};
