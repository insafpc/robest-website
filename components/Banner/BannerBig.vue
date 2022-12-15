<template>
  <section class="banner-big">
    <div class="banner-big-content container" >
      <h2 v-if="title" class="text-white banner-big-content__title"> {{ title }}</h2>
      <p class="text-white">
        {{content}}
        <slot/>
      </p>

      <div v-if="serviceActionIconsUrl">
        <img class="mt-4 mb-4" v-if="serviceActionIconsUrl" :src="serviceActionIconsUrl" :alt="title" usemap="#service-icon-map">
        <map v-if="serviceActionIconsMap" name="service-icon-map">
          <area v-for="(map) in serviceActionIconsMap"
                :shape="map.shape"
                :coords="map.coords"
                :alt="map.coords"
                :href="map.router">
        </map>
      </div>

      <div v-if="serviceActions" class="d-flex align-items-center justify-content-center">
        <div v-for="(button) in serviceActions">
          <nuxt-link :class="button.classes" :to="{ name: button.router }">{{button.title}}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "BannerBig",
    props: {
      title: {type: String, default: null},
      content: {type: String, default: null},
      serviceActionIconsUrl: {type: String, default: null},
      serviceActionIconsMap: {type: Array, default: null},
      serviceActions: {type: Array, default: null},
    }
  }
</script>

<style scoped lang="scss">

  .banner-big {
    background-image: url("/images/banner.jpg");
    height: 37.5rem;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-content {
      position: relative;
      text-align: center;
      max-width: 45rem;

      &__title {
        @include rfs(52px, font-size);
      }

      p {
        @include rfs(16px, font-size);
      }

      &__search {
        max-width: 21.88rem;
      }
    }

    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .7);
    }

    h2, p {
      z-index: 999;
    }
  }

</style>
