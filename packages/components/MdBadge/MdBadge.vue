<template>
  <div :class="wrapClassList" :style="badgeStyle">
    <slot></slot>
    <span v-if="content" :class="contentClassList">{{ badgeContent }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import { useNamespace } from "@material/hooks/useNamespace";
import { badgeProps } from "./MdBadge";
import { isNumber } from "@material/utils";

const props = defineProps(badgeProps);
const defaultSlot = useSlots().default;
const ns = useNamespace("badge");

const badgeContent = computed(() => {
  const { content, max, size } = props;
  if (size === "small") {
    return "";
  }
  if (isNumber(content) && content > max) {
    return `${max}+`;
  }
  return content;
});

const wrapClassList = computed(() => {
  const classList = [ns.b()];
  if (defaultSlot) {
    classList.push(ns.b("wrap"));
  }
  return classList;
});

const contentClassList = computed(() => {
  const { content, max, position, square, size } = props;
  const classList = [ns.e("content"), ns.em(position), ns.m(size)];
  if (defaultSlot) {
    classList.push(ns.be("wrap", "content"), ns.m(position));
  }
  if (props.size === "large") {
    square && classList.push(ns.is("square"));
    if (isNumber(content) && content > max) {
      classList.push(ns.is("max"));
    }
  } else {
    classList.push(ns.m("circle"));
  }
  return classList;
});

const badgeStyle = computed(() => {
  const style = {};
  Object.assign(
    style,
    ns.cssVarBlock({
      "background-color": ns.getCssVarBlock(props.color, "color"),
      "label-color": ns.getCssVarBlock(`on-${props.color}`, "color"),
    })
  );
  return style;
});
</script>
