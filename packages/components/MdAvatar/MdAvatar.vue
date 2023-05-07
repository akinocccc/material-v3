<template>
  <div
    class="md-avatar"
    :style="{ ...sizeStyle, ...bgColorStyle }"
    :class="avatarClassList"
  >
    <img
      v-if="(src || srcSet) && !hasError"
      :src="src"
      :srcset="srcSet"
      :alt="alt"
      :style="fitStyle"
      @error="handleError"
    />
    <slot v-else />
  </div>
</template>

<script setup lang="ts" name="MdAvatar">
import { computed, ref, useSlots, watch } from "vue";
import { avatarProps, avatarEmits } from "./MdAvatar";
// import useTheme from "@material/hooks/useTheme";
import { useNamespace } from "@material/hooks/useNamespace";
import { isNumber, isString } from "@material/utils/types";
import { addUnit } from "@material/utils";

import type { CSSProperties } from "vue";

const props = defineProps(avatarProps);
const emit = defineEmits(avatarEmits);
const defaultSlot = useSlots().default;

const ns = useNamespace("avatar");

const hasError = ref(false);

// const { $mdActiveTheme } = useTheme(props.mdTheme);

const avatarClassList = computed(() => {
  const { size, shape } = props;
  const classList = [ns.b()];
  if (isString(size)) classList.push(ns.m(size));
  if (isString(shape)) classList.push(ns.m(shape));
  return classList;
});

const sizeStyle = computed(() => {
  const { size } = props;
  return isNumber(size)
    ? (ns.cssVarBlock({ size: addUnit(size) }) as CSSProperties)
    : {};
});

const bgColorStyle = computed(() => {
  const { type } = props;
  return defaultSlot && isString(type)
    ? (ns.cssVarBlock({
        "bg-color": ns.getCssVarBlock(props.type, "color"),
        "text-color": ns.getCssVarBlock(`on-${props.type}`, "color"),
      }) as CSSProperties)
    : {};
});

const fitStyle = computed<CSSProperties>(() => ({
  objectFit: props.fit,
}));

watch(
  () => props.src,
  () => (hasError.value = false)
);

const handleError = (e: Event) => {
  hasError.value = true;
  emit("error", e);
};
</script>

<style lang="scss" scoped>
// @import "@material/theme/components/avatar";
// $md-avatar-size: 40px;
// $md-avatar-large-size: 64px;
// $md-avatar-large-icon: 40px;
// $md-avatar-small-size: 24px;
// $md-avatar-small-icon: 16px;
</style>
