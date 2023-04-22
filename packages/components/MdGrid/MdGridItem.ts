import {
  buildProps,
  // definePropType,
  // iconPropType,
  // isNumber,
} from "@material/utils";
import type { ExtractPropTypes } from "vue";
// import { StandardLonghandProperties } from "csstype";

export const gridItemProps = buildProps({
  span: {
    type: Number,
  },
  offset: {
    type: Number,
  },
  xs: {
    type: Number,
  },
  sm: {
    type: Number,
  },
  md: {
    type: Number,
  },
  lg: {
    type: Number,
  },
  xl: {
    type: Number,
  },
  breakpointHidden: {
    type: Array,
    default: [],
  },
} as const);
export type GridItemProps = ExtractPropTypes<typeof gridItemProps>;

// export const gridItemEmits = {
//   error: (evt: Event) => evt instanceof Event,
// };
