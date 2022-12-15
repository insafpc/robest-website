<template>
  <div class="overlay">
    <slot />
  </div>
</template>

<script>
    export default {
        name: "ImageOverlay"
    }
</script>

<style scoped>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
  }
</style>
