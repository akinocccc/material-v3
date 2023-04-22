<template>
  <md-grid class="grid-layout" justify="center" :row-gap="20" :col-gap="10">
    <md-grid-item class="item" :span="3">
      <div class="grid-content">justify-center</div>
    </md-grid-item>
    <md-grid-item class="item" :span="4">
      <div class="grid-content">justify-center</div>
    </md-grid-item>
    <md-grid-item class="item" :span="3">
      <div class="grid-content">justify-center</div>
    </md-grid-item>
  </md-grid>
  <md-grid class="grid-layout" justify="space-around" row-gap="20">
    <md-grid-item class="item" :span="3">
      <div class="grid-content">justify-space-around</div>
    </md-grid-item>
    <md-grid-item class="item" :span="4">
      <div class="grid-content">justify-space-around</div>
    </md-grid-item>
    <md-grid-item class="item" :span="3">
      <div class="grid-content">justify-space-around</div>
    </md-grid-item>
  </md-grid>
  <md-grid class="grid-layout grid-align" align="center">
    <md-grid-item class="item" :span="12">
      <div class="grid-content">align-center</div>
    </md-grid-item>
    <md-grid-item class="item" :span="12">
      <div class="grid-content">align-center</div>
    </md-grid-item>
  </md-grid>
  <md-grid class="grid-layout grid-align" align="end">
    <md-grid-item class="item" :span="12">
      <div class="grid-content">align-end</div>
    </md-grid-item>
    <md-grid-item class="item" :span="12">
      <div class="grid-content">align-end</div>
    </md-grid-item>
  </md-grid>
</template>

<style lang="scss" scoped>
@use "./style.scss";
.grid-align {
  height: 100px;
}
</style>
