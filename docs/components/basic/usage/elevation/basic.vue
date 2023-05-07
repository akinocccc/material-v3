<template>
  <md-grid class="grid" :row-gap="20" :col-gap="20">
    <md-grid-item
      class="grid-item"
      :span="2"
      v-for="level in levels"
      :key="level"
    >
      <md-elevation class="elevation" :level="level">
        <div class="content">level{{ level }}</div>
      </md-elevation>
    </md-grid-item>
  </md-grid>
</template>

<script setup lang="ts">
import { ref } from "vue";

const levels = ref([0, 1, 2, 3, 4, 5]);
</script>

<style lang="scss" scoped>
.grid {
  padding: 20px;
  .elevation {
    border-radius: var(--md-border-radius-base);
    .content {
      padding: 50% 0;
      background-color: var(--md-color-surface-container-low);
      border-radius: var(--md-border-radius-base);
      text-align: center;
      line-height: 100%;
      color: var(--md-color-on-surface);
    }
  }
}
</style>
