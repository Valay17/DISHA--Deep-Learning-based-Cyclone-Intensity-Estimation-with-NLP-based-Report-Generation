import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import autoprefixer from "autoprefixer";

// Replace 'your-api-key-here' with your actual API key
//const API_KEY = "2e15438922f629fe6a2605024e986ca2";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "./src/img",
          dest: "./src/",
        },
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  /* define: {
    API_KEY: JSON.stringify(API_KEY),
  }, */
});
