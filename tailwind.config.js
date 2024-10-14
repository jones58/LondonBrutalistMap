/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      black: "#212121",
      gray: "#e5e5e5",
      white: "#faf3f3",
    },
  },
  plugins: [],
};
