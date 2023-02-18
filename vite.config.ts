import { defineConfig } from "vite";
import path from "path";
import atomCss from "./packages/index";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    port: 8888,
  },
  plugins: [vue(), atomCss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"),
      name: "@jackiew/atomcss",
      fileName: format => `jackiew-css.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 umd 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
