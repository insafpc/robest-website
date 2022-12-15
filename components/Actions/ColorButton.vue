<template>
  <button
    class="btn"
    :style="`background: ${this.convertHex(color, 15)}; color: ${color}`">
    {{title ? title : 'Submit'}}
  </button>
</template>

<script>
  export default {
    name: "ColorButton",
    props: {
      title: {type: String, default: null},
      color: {type: String, default: '#756F6F'},
    }
  }
</script>

<style scoped lang="scss">
  button {
    @include rfs(5px, border-radius);

    &:hover,
    &.active {
      background: $primary !important;
      color: $white !important;
    }
  }
</style>
