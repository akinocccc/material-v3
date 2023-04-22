<template>
  <md-grid align="center" :col-gap="10">
    <!-- Small size. -->
    <md-grid-item>
      <md-avatar
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        size="small"
      />
    </md-grid-item>
    <!-- Defalut size. -->
    <md-grid-item>
      <md-avatar
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        size="default"
      />
    </md-grid-item>
    <!-- Large size. -->
    <md-grid-item>
      <md-avatar
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        size="large"
      />
    </md-grid-item>
    <!-- Customizable size. -->
    <md-grid-item>
      <md-avatar
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        :size="100"
      />
    </md-grid-item>
  </md-grid>
</template>
