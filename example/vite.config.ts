import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "../packages"),
      "@base": resolve(__dirname, "../packages/base"),
      "@core": resolve(__dirname, "./packages/core"),
      "@theme": resolve(__dirname, "../packages/theme"),
      "@components": resolve(__dirname, "../packages/components"),
      "@utils": resolve(__dirname, "../packages/utils"),
    },
  },
});
