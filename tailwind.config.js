/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        mobile: "repeat(8, minmax(250px, 350px))",
        desktop: "repeat(8, minmax(200px, 300px))",
      },
      colors: {
        "light-green": "#2D9B9B",
        "mid-green": "#166060",
        "dark-green": "#123f3f",
        "hover-green": "#7bdbdb9c",
        "primary-text": "#0E4242",
        "secondary-text": "#516C6A",
      },
    },
  },
  plugins: [],
};
