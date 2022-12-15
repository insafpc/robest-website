<template>
  <h3 class="h3">
    <slot></slot>
  </h3>
</template>

<script>
  export default {
    name: "TitleH3",
  }
</script>

<style scoped lang="scss">
  h3 {
    color: $primary;
    font-weight: bold;
  }
</style>
