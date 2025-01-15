// Replace 'your-api-key-here' with your actual API key
//const API_KEY = "2e15438922f629fe6a2605024e986ca2";

import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { createHtmlPlugin } from "vite-plugin-html";
import autoprefixer from "autoprefixer";
import fs from "fs";
import * as path from "path";

export default defineConfig({
  
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
        { src: "src/img", dest: "src" },
        { src: "src/static", dest: "src/static" },
        { src: "src/animated", dest: "src/animated" },
      ],
    }),
  {
    name: "fix-html-paths", // Custom plugin
    enforce: "post",
    closeBundle() {
      const indexPath = path.resolve(__dirname, "dist/index.html");
      if (fs.existsSync(indexPath)) {
        let html = fs.readFileSync(indexPath, "utf-8");
        // Replace only /src with ./src, ignoring ./src paths
        html = html.replace(/(?<!\.)\/src/g, "./src");
        fs.writeFileSync(indexPath, html, "utf-8");
        console.log("Replaced '/src' with './src' in index.html");
      }
    },
  },
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
        assetFileNames: "src/[ext]/[name]-[hash].[ext]",
        entryFileNames: "src/js/[name]-[hash].js",
        chunkFileNames: "src/js/[name]-[hash].js",
      },
    },
  },
});