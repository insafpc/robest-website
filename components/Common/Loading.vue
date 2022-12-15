<template>
  <div class="d-flex align-items-center">
    <b-spinner small type="grow" variant="secondary"></b-spinner>
    <b-spinner type="grow" variant="dark"></b-spinner>
    <b-spinner small type="grow" variant="secondary"></b-spinner>
    <!-- We add an SR only text for screen readers -->
    <span class="sr-only">Please wait...</span>
  </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped>

</style>
