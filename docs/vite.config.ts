// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    alias: {
      "@material": resolve(__dirname, "../packages"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 6060,
    fs: {
      allow: [resolve(__dirname, "..")],
    },
  },
});
