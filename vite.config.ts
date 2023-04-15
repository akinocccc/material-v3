import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./packages/index.ts"),
      name: "Bundle",
      fileName: "index",
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
  plugins: [vue(), dts({ include: "./packages" }), vueSetupExtend()],
  resolve: {
    alias: {
      "@material": resolve(__dirname, "./packages"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
