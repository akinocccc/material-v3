import { CSSProperties, FunctionalComponent, h } from "vue";
import "./index.scss";

interface Props {
  component: any;
  componentProps: any[];
  style: CSSProperties;
}

const DocsDisplay: FunctionalComponent<Props> = (props) => {
  return (
    <div class="wrapper">
      {props?.componentProps.map((item) => (
        <div class="grid">
          {h(props?.component, item)}
          {item.type}
        </div>
      ))}
    </div>
  );
};

export default DocsDisplay;
