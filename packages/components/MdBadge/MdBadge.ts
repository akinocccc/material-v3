import { buildProps, isBoolean } from "@material/utils";
import type { ExtractPropTypes } from "vue";

export const badgeProps = buildProps({
  max: {
    type: Number,
    default: Infinity,
  },
  color: {
    type: String,
    default: "error",
    validator: (value) =>
      ["primary", "secondary", "error", "tertiary"].includes(value),
  },
  size: {
    type: String,
    default: "large",
    validator: (value) => ["small", "large"].includes(value),
  },
  square: {
    type: Boolean,
    default: false,
    validator: (value) => isBoolean(value),
  },
  position: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value),
  },
  content: {
    type: [String, Number],
    default: "",
  },
} as const);

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
