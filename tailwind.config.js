/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mid-green": "#1F6B6B",
        "dark-green": "#123f3f",
        "hover-green": "#7bdbdb9c",
      },
      backgroundImage: {
        "register-bg": "url('/public/assets/images/RegisterBg.jpg')",
      },
    },
  },
  plugins: [],
};
