import { defineConfig } from "vite";

// vite.config.js
export default defineConfig({
  server: {
    origin: "http://localhost:5173/",
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: "resources/main.js",
    },
  },
});
