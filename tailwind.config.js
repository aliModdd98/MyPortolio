/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC9D45",
        secondary: "#ffffff",
        gray: "#736F6F",
        bgColor: "#0b192c",
      },
    },
  },
  plugins: [],
};
