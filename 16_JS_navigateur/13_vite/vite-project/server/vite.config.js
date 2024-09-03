import { defineConfig } from "vite";

// vite.config.js
export default defineConfig({
  server: {
    origin: "http://localhost:5173",
  },
  base: "/assets/",
  build: {
    copyPublicDir: false,
    outDir: "public/assets",
    assetsDir: "",
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: "resources/main.js",
    },
  },
});
