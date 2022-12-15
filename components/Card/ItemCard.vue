<template>
  <div class="col-md-3 col-sm-6 mb-2">
    <b-card>
      <img v-if="images != null" :src="images.url" class="card-img-top" alt="">

      <div class="p-2">
        <div class="card-title-price-container">
          <nuxt-link :to="seo">
            <h4 class="card-title">{{title}}</h4>
          </nuxt-link>

          <p>{{price}}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted">
            {{downloads}} Downloads
          </small>
          <nuxt-link :to="seo">
            <span class="material-icons">save_alt</span>
          </nuxt-link>
        </div>
      </div>

    </b-card>
  </div>
</template>

<script>
  import BestImage from "../Common/BestImage";

  export default {
    name: "ItemCard",
    components: {BestImage},
    props: {
      title: {
        type: String,
        default: null
      },
      seo: {
        type: String,
        default: null
      },
      downloads: {
        type: Number,
        default: 0
      },
      price: {
        type: Number,
        default: 0
      },
      images: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        baseUrl: process.env.baseUrl
      }
    },
  }
</script>

<style scoped lang="scss">
  a {
    &:hover {
      text-decoration: none;
    }
  }

  .card-body {
    padding: 0;
  }

  .card-title-price-container {
    display: flex;

    a {
      width: calc(100% - 30px);
    }

    p {
      font-weight: bold;
      color: $green;
    }
  }
</style>
