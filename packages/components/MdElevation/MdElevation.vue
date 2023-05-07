<template>
  <div :class="classList" :style="elevationStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { elevationProps } from "./MdElevation";
import { useNamespace } from "@material/hooks/useNamespace";

const props = defineProps(elevationProps);
const ns = useNamespace("elevation");

const classList = computed(() => {
  return [ns.b()];
});

const elevationStyle = computed(() => {
  return ns.cssVarBlock({ level: props.level });
});
</script>
