import { buildProps, isNumber } from "@material/utils";
import type { ExtractPropTypes } from "vue";

export const elevationProps = buildProps({
  level: {
    type: Number,
    default: 0,
    validator: (value) => isNumber(value) && value >= 0 && value < 6,
  },
} as const);

export type ElevationProps = ExtractPropTypes<typeof elevationProps>;
