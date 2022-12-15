<template>
  <b-card bg-variant="light" text-variant="white">
    <div class="d-flex align-items-center flex-wrap">
      <b-img v-if="logo" :src="logo"/>
      <nuxt-link v-for="item in items" :to="item.link" :key="item.id">{{item.title}}</nuxt-link>
    </div>
  </b-card>
</template>

<script>
  export default {
    name: "CardLogoContainer",
    props: {
      logo: {
        type: String,
        description: "Card logo"
      },
      items: {
        type: Array,
        description: "Card items"
      }
    }
  }
</script>

<style scoped lang="scss">

  .card {
    border-radius: 3rem;
    min-height: 3.5rem;
    margin-bottom: 2rem;

    &-body {
      display: flex;
      padding: 1rem;

      img {
        margin-left: 1rem;
      }

      a {
        margin-left: 1rem;
        font-weight: bold;

        &:hover {
          text-decoration: none;
          color: $primary--light;
        }
      }
    }
  }

</style>
