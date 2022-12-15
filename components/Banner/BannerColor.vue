<template>
    <section class="banner-color" :style="`background: ${convertGradient(color)}`">
      <div class="banner-color-content" :class="isFullscreen ? 'is-fullscreen' : ''">
        <div class="container">
          <div class="row">
            <div v-if="preview" class="col-sm">
              <img :src="preview" :alt="title">
            </div>
            <div class="col-sm">
              <h2 v-if="title" class="text-white banner-color-content__title"> {{ title }}</h2>
              <p v-if="description">{{description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "BannerColor",
      props: {
        title: {type: String, default: null},
        description: {type: String, default: null},
        color: {type: String, default: '#695E93'},
        preview: {type: String, default: null},
        isFullscreen: {type: Boolean, default: false}
      },
      methods: {
        convertGradient(hex) {
          hex = hex.replace('#', '');
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);

          return 'linear-gradient(193deg, rgba(0,0,0,1) 0%, rgba('+ r +','+ g +', '+ b +',1) 100%);'
        }
      }
    }
</script>

<style scoped lang="scss">
  .banner-color {
    background: $primary--light;
    height: 28rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-content {
      position: relative;
      text-align: center;
      max-width: 45rem;
      margin: auto;
      color: $white;

      &__title {
        @include rfs(52px, font-size);

        text-align: center;
      }
    }
  }

  .is-fullscreen {
    max-width: 100%;
    padding-top: 16rem;
  }
</style>
