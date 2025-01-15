// Replace 'your-api-key-here' with your actual API key
//const API_KEY = "2e15438922f629fe6a2605024e986ca2";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/repo-name/", // Replace with your GitHub Pages repo name
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/img", // Copies the `img` folder
          dest: "assets/img",
        },
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    rollupOptions: {
      input: "./index.html",
      output: {
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
