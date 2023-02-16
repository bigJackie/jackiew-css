import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import myPlugin from "./packages/core/index";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [Inspect()],
  server: {
    port: 8888,
  },
  base: "./",
  plugins: [vue(), myPlugin()],
  build: {
    assetsDir: "./",
  },
});
