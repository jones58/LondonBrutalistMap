import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "postcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
