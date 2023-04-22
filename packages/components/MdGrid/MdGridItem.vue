<template>
  <div :style="style" :class="gridItemClassList">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { useNamespace } from "@material/hooks/useNamespace";
import { isNumber, isObject } from "@material/utils";
import { gridItemProps } from "./MdGridItem";
import assign from "lodash/assign";

const SIZE_KEYS = ["xs", "sm", "md", "lg", "xl"] as const;

const props = defineProps(gridItemProps);

const rowGap = inject("rowGap");
const colGap = inject("colGap");

const ns = useNamespace("grid");

const style = computed(() => {
  const style: Record<string, string> = {};
  if (isNumber(props.span)) {
    assign(style, ns.cssVarBlock({ "item-span": props.span }));
  }
  if (isNumber(props.offset)) {
    assign(style, ns.cssVarBlock({ "item-offset": props.offset }));
  }
  SIZE_KEYS.forEach((key) => {
    if (isNumber(props[key])) {
      assign(
        style,
        ns.cssVarBlock({ [`item-${key}-span`]: props[key] as number })
      );
    }
  });
  return style;
});

const gridItemClassList = computed(() => {
  const classList = [ns.b("item")];
  if (isNumber(props.span)) {
    classList.push(ns.b(`item-${props.span}`));
  }

  SIZE_KEYS.forEach((key) => {
    if (isNumber(props[key])) {
      classList.push(ns.b(`item-${key}`));
    }
    if (
      (isObject(rowGap) && isNumber(rowGap[key])) ||
      (isObject(colGap) && isNumber(colGap[key]))
    ) {
      classList.push(ns.b(`item-gap-${key}`));
    }
  });

  props.breakpointHidden?.forEach((size: any) => {
    if (SIZE_KEYS.includes(size)) {
      classList.push(ns.is(`hidden-${size}-only`));
    }
  });

  return classList;
});
</script>
