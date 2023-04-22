<template>
  <div :style="style" :class="gridClassList">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, computed, provide } from "vue";
import assign from "lodash/assign";
import { useNamespace } from "@material/hooks/useNamespace";
import { addUnit, isNumber, isObject, normalizeVarName } from "@material/utils";
import { gridProps } from "./MdGrid";

const GAP_KEYS = ["rowGap", "colGap"] as const;
const SIZE_KEYS = ["xs", "sm", "md", "lg", "xl"] as const;

const props = defineProps(gridProps);

const ns = useNamespace("grid");

if (isObject(props.rowGap)) {
  provide("rowGap", props.rowGap);
}
if (isObject(props.colGap)) {
  provide("colGap", props.colGap);
}
const style = computed(() => {
  const style: Record<string, string> = {};
  GAP_KEYS.forEach((gapKey) => {
    const gap = props[gapKey];
    const normalizedKey = normalizeVarName(gapKey);
    if (isObject(gap)) {
      SIZE_KEYS.forEach((sizeKey) => {
        if (isNumber(gap[sizeKey])) {
          assign(
            style,
            ns.cssVarBlock({
              [`${normalizedKey}-${sizeKey}`]: addUnit(gap[sizeKey]),
            })
          );
        }
      });
    } else {
      console.log(
        gapKey,
        props[gapKey],
        ns.cssVarBlock({
          [normalizedKey]: addUnit(gap),
        })
      );
      assign(
        style,
        ns.cssVarBlock({
          [normalizedKey]: addUnit(gap),
        }) as CSSProperties
      );
    }
  });
  assign(
    style,
    ns.cssVarBlock({
      columns: isNumber(props.columns) ? props.columns : 12,
    }) as CSSProperties
  );
  return style;
});

const gridClassList = computed(() => [
  ns.b(),
  ns.is(`justify-${props.justify}`, props.justify !== "start"),
  ns.is(`align-${props.align}`, props.align !== "start"),
]);
</script>
