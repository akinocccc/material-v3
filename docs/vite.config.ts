// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
export default defineConfig({
  plugins: [vueJsx()],
  server: {
    host: "0.0.0.0",
    port: 6060,
  },
});
