// vite.config.js
import { defineConfig } from "file:///R:/Data/Github%20Repos/DISHA/Source/node_modules/vite/dist/node/index.js";
import { viteStaticCopy } from "file:///R:/Data/Github%20Repos/DISHA/Source/node_modules/vite-plugin-static-copy/dist/index.js";
import { createHtmlPlugin } from "file:///R:/Data/Github%20Repos/DISHA/Source/node_modules/vite-plugin-html/dist/index.mjs";
import autoprefixer from "file:///R:/Data/Github%20Repos/DISHA/Source/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig({
  plugins: [
    // Inject HTML with custom script
    createHtmlPlugin({
      inject: {
        data: {
          injectScript: `<script type="module" src="./src/js/main.js"></script>`
        }
      }
    }),
    // Copy static assets to the dist folder
    viteStaticCopy({
      targets: [
        { src: "src/img", dest: "assets" },
        { src: "src/static", dest: "assets/static" },
        { src: "src/animated", dest: "assets/animated" }
      ]
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  },
  build: {
    rollupOptions: {
      input: "./index.html",
      // Ensure index.html is included
      output: {
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJSOlxcXFxEYXRhXFxcXEdpdGh1YiBSZXBvc1xcXFxESVNIQVxcXFxTb3VyY2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlI6XFxcXERhdGFcXFxcR2l0aHViIFJlcG9zXFxcXERJU0hBXFxcXFNvdXJjZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vUjovRGF0YS9HaXRodWIlMjBSZXBvcy9ESVNIQS9Tb3VyY2Uvdml0ZS5jb25maWcuanNcIjsvLyBSZXBsYWNlICd5b3VyLWFwaS1rZXktaGVyZScgd2l0aCB5b3VyIGFjdHVhbCBBUEkga2V5XG4vL2NvbnN0IEFQSV9LRVkgPSBcIjJlMTU0Mzg5MjJmNjI5ZmU2YTI2MDUwMjRlOTg2Y2EyXCI7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdGF0aWMtY29weVwiO1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1odG1sXCI7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgXG4gIHBsdWdpbnM6IFtcbiAgICAvLyBJbmplY3QgSFRNTCB3aXRoIGN1c3RvbSBzY3JpcHRcbiAgICBjcmVhdGVIdG1sUGx1Z2luKHtcbiAgICAgIGluamVjdDoge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaW5qZWN0U2NyaXB0OiBgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi9zcmMvanMvbWFpbi5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC8vIENvcHkgc3RhdGljIGFzc2V0cyB0byB0aGUgZGlzdCBmb2xkZXJcbiAgICB2aXRlU3RhdGljQ29weSh7XG4gICAgICB0YXJnZXRzOiBbXG4gICAgICAgIHsgc3JjOiBcInNyYy9pbWdcIiwgZGVzdDogXCJhc3NldHNcIiB9LFxuICAgICAgICB7IHNyYzogXCJzcmMvc3RhdGljXCIsIGRlc3Q6IFwiYXNzZXRzL3N0YXRpY1wiIH0sXG4gICAgICAgIHsgc3JjOiBcInNyYy9hbmltYXRlZFwiLCBkZXN0OiBcImFzc2V0cy9hbmltYXRlZFwiIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbYXV0b3ByZWZpeGVyKCldLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IFwiLi9pbmRleC5odG1sXCIsIC8vIEVuc3VyZSBpbmRleC5odG1sIGlzIGluY2x1ZGVkXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF1cIixcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwiYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHNCQUFzQjtBQUMvQixTQUFTLHdCQUF3QjtBQUNqQyxPQUFPLGtCQUFrQjtBQUV6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUUxQixTQUFTO0FBQUE7QUFBQSxJQUVQLGlCQUFpQjtBQUFBLE1BQ2YsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osY0FBYztBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsSUFFRCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxFQUFFLEtBQUssV0FBVyxNQUFNLFNBQVM7QUFBQSxRQUNqQyxFQUFFLEtBQUssY0FBYyxNQUFNLGdCQUFnQjtBQUFBLFFBQzNDLEVBQUUsS0FBSyxnQkFBZ0IsTUFBTSxrQkFBa0I7QUFBQSxNQUNqRDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxhQUFhLENBQUM7QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQTtBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
