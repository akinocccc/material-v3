import theme from "vitepress/dist/client/theme-default/index";
import {
  ElementPlusContainer,
  AntDesignContainer,
  NaiveUIContainer,
} from "@vitepress-demo-preview/component";
import Material from "@material-vue3/packages";
import "@vitepress-demo-preview/component/dist/style.css";
import "@material/theme/index.scss";
import "./style/index.scss";

export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(Material);
    app.component("demo-preview", AntDesignContainer);
    app.use(Material);
  },
};
