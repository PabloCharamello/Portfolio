import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  libs: [
    {
      libraryName: "GLTFLoader",
      esModule: true,
      resolveStyle: (FloatingIsland) =>
        `/vercel/path0/src/components/FloatingIsland.jsx`,
    },
  ],

  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      // Add _all_ external dependencies here
      external: ["GLTFLoader"],
      output: {
        globals: {
          GLTFLoader: "GLTFLoader",
        },
      },
    },
  },
});
