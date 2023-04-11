import {
  buildProps,
  definePropType,
  iconPropType,
  isNumber,
} from "@material/utils";
import { componentSizes } from "@material/constants";
import type { ExtractPropTypes } from "vue";
import { StandardLonghandProperties } from "csstype";

export const avatarProps = buildProps({
  /**
   * @description avatar size.
   */
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "default",
    validator: (val: unknown): val is number => isNumber(val),
  },
  /**
   * @description avatar shape.
   */
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle",
  },
  /**
   * @description avatar backgroud color for text placeholder.
   */
  color: {
    type: String,
    default: "",
  },
  /**
   * @description representation type to icon, more info on icon component.
   */
  icon: {
    type: iconPropType,
  },
  /**
   * @description the source of the image for an image avatar.
   */
  src: {
    type: String,
    default: "",
  },
  /**
   * @description native attribute `alt` of image avatar.
   */
  alt: String,
  /**
   * @description native attribute srcset of image avatar.
   */
  srcSet: String,
  /**
   * @description set how the image fit its container for an image avatar.
   */
  fit: {
    type: definePropType<StandardLonghandProperties["objectFit"]>(String),
    default: "cover",
  },
} as const);
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
};
