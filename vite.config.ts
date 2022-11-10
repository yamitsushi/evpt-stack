import { createRequire } from "module"
import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@client": path.resolve(__dirname, "./src/client"),
    },
  },
  build: {
    outDir: "dist/client",
  },
  plugins: [
    preact({
      babel: {
        // Change cwd to load Preact Babel plugins
        cwd: createRequire(import.meta.url).resolve("@preact/preset-vite"),
      },
    }),
  ],
})
