// Replace 'your-api-key-here' with your actual API key
//const API_KEY = "2e15438922f629fe6a2605024e986ca2";

import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { createHtmlPlugin } from "vite-plugin-html";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "//DISHA--Deep-Learning-based-Cyclone-Intensity-Estimation-with-NLP-based-Report-Generation/", // Replace with your repository name
  plugins: [
    // Inject HTML with custom script
    createHtmlPlugin({
      inject: {
        data: {
          injectScript: `<script type="module" src="./src/js/main.js"></script>`,
        },
      },
    }),
    // Copy static assets to the dist folder
    viteStaticCopy({
      targets: [
        { src: "src/img", dest: "assets" },
        { src: "src/static", dest: "assets/static" },
        { src: "src/animated", dest: "assets/animated" },
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    rollupOptions: {
      input: "./index.html", // Ensure index.html is included
      output: {
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});