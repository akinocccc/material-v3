<template>
  <md-grid class="grid-layout" :row-gap="20" :col-gap="20">
    <md-grid-item class="item" :span="2">
      <div class="grid-content">item-2</div>
    </md-grid-item>
    <md-grid-item class="item" :span="2" :offset="2">
      <div class="grid-content">item-4</div>
    </md-grid-item>
    <md-grid-item class="item" :span="4">
      <div class="grid-content">item-4</div>
    </md-grid-item>
    <md-grid-item class="item" :span="2">
      <div class="grid-content">item-2</div>
    </md-grid-item>
    <md-grid-item class="item" :span="2">
      <div class="grid-content">item-2</div>
    </md-grid-item>
    <md-grid-item class="item" :span="4">
      <div class="grid-content">item-2</div>
    </md-grid-item>
    <md-grid-item class="item" :span="2" :offset="4">
      <div class="grid-content">item-2</div>
    </md-grid-item>
    <md-grid-item class="item" :span="4">
      <div class="grid-content">item-4</div>
    </md-grid-item>
    <md-grid-item class="item" :span="6" :offset="2">
      <div class="grid-content">item-4</div>
    </md-grid-item>
  </md-grid>
</template>

<style lang="scss" scoped>
@use "./style.scss";
</style>
