import { defineConfig } from "vite";
import path from "path";
import { AtomCss } from "./packages/index";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    port: 8888,
  },
  plugins: [
    vue(),
    AtomCss({
      // rules: [[/^(?:m)([t|r|b|l|x|y|a])-(\d+)(x?)$/, [["color", "red"]]]],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"),
      name: "@jackiew/atomcss",
      fileName: format => `jackiew-css.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
