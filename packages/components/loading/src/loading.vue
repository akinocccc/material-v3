<template>
  <div class="loading-wrapper" v-show="props?.show">
    <div
      :class="['loading', props.type, props.class]"
      :style="`border-color: ${props.color}; ${props.style}`"
    ></div>
  </div>
</template>

<script setup lang="ts" name="AniLoading">
const props = defineProps({
  type: {
    type: String,
    default: "circle",
  },
  color: {
    type: String,
    default: "#1d77ff",
  },
  show: {
    type: Boolean,
    default: false,
  },
  style: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  .loading {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-width: 3px;
    border-style: solid;
  }
  .circle {
    border-right-color: transparent !important;
    animation: kf-loading-rotate 0.8s linear infinite;
  }
  .incomplete-circle {
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    animation: kf-loading-rotate 0.8s linear infinite;
  }
  @keyframes kf-loading-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
