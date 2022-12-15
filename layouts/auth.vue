<template>
  <!--Main Content section-->
  <main>
    <b-card no-body class="overflow-hidden" style="max-width: 900px;" border-variant="transparent">
      <nuxt/>
    </b-card>
  </main>
</template>

<script>
  import ImageOverlay from "../components/Common/ImageOverlay";
  import BestImage from "../components/Common/BestImage";

  export default {
    name: "auth",
    components: {BestImage, ImageOverlay},
  }
</script>

<style scoped lang="scss">
  main {
    background: $primary;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
