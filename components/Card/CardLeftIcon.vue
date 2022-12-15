<template>
  <b-card no-body class="overflow-hidden" :style="styleObject">
    <nuxt-link :to="url" class="h-100">
      <b-row no-gutters>
        <b-col lg="4" class="d-flex align-items-center justify-content-center ">
          <div class="card-icon d-flex align-items-center justify-content-center flex-column">
            <div class="robest--shape--small" :style="styleObject">
              <p><span class="material-icons">{{icon}}</span></p>
            </div>
          </div>
        </b-col>
        <b-col lg="8">
          <b-card-body :title="title">
            <b-card-text>
              {{content}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </nuxt-link>

  </b-card>
</template>

<script>
  export default {
    name: "CardLeftIcon",
    data() {
      return {
        styleObject: {
          '--color': this.color,
          '--color-rgb': this.shadeColor(this.color, -50)
        }
      }
    },
    props: {
      title: {
        type: String,
        description: "Card title"
      },
      content: {
        type: String,
        description: "Card content"
      },
      icon: {
        type: String,
        description: "Card icon"
      },
      color: {
        type: String,
        description: "Card icon",
        default: "#695E93"
      },
      url: {
        type: String,
        description: "Link",
        default: "/store"
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    height: 100%;
    text-align: center;
    border: none;
    transition: background-color 0.5s ease;

    .card-body {
      transition: color 0.2s ease;
    }

    @media (max-width: 992px) {
      box-shadow: none;
      border: none;
    }

    @media (min-width: 992px) {
      text-align: left;
    }

    &:hover {
      background: var(--color-rgb);

      .card-body {
        color: $white;
      }
    }

    &.active {
      background: var(--color-rgb);

      .card-body {
        color: $white;
      }
    }

    .row {
      height: 100%;
    }

    .card-text {
      display: none;

      @media (min-width: 992px) {
        display: block;
      }
    }

    .card-title {
      @include rfs(24px, font-size);
    }
  }

  .robest--shape--small {
    background-color: var(--color);

    &::before {
      border-bottom: 20.21px solid var(--color);
    }

    &:after {
      border-top: 20.21px solid var(--color);
    }
  }
</style>
