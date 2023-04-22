import {
  buildProps,
  // definePropType,
  // iconPropType,
  // isNumber,
  // isString,
} from "@material/utils";
import type { ExtractPropTypes } from "vue";
// import { StandardLonghandProperties } from "csstype";

export const gridProps = buildProps({
  columns: {
    type: Number,
    default: 12,
  },
  rowGap: {
    type: [Number, String, Object],
    default: 0,
  },
  colGap: {
    type: [Number, String, Object],
    default: 0,
  },
  justify: {
    type: String,
    default: "start",
  },
  align: {
    type: String,
    default: "start",
  },
} as const);
export type GridProps = ExtractPropTypes<typeof gridProps>;

// export const gridEmits = {
//   error: (evt: Event) => evt instanceof Event,
// };
