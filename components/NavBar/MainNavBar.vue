<template>

  <b-navbar toggleable="lg" type="dark" fixed="top" variant="faded" id="nav">

    <b-container>
      <div class="nav-wrapper">
        <div class="nav-brand-toggle-btn">
          <!--Logo-->
          <b-navbar-brand>
            <nuxt-link class="nav-link" to="/">
              <best-image filename="robest-logo-svg" extension=".svg" alt="Robest Logo" classes="logo "/>
            </nuxt-link>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </div>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            </li>
            <b-nav-item-dropdown text="Store" right>
              <div class="d-flex">
                <div class="p-3">
                  <h5>Technologies</h5>
                  <ul class="icon-box">
                      <b-dropdown-item v-for="nav in navigation.stores" :key="nav.id" to="/store">
                          <div>
                            <img v-if="(nav.technology.Logo).length" :src="nav.technology.Logo[1].url" :alt="nav.technology.Title">
                          </div>
                          <p>{{nav.technology.Title}}</p>
                      </b-dropdown-item>
                  </ul>
                </div>
              </div>
            </b-nav-item-dropdown>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/about">About</nuxt-link>
            </li>

            <b-nav-item-dropdown v-if="$auth.loggedIn" right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">{{$auth.user.username}}</b-dropdown-item>
              <b-dropdown-item @click="$auth.logout()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>


            <li v-else class="nav-item">
              <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
            </li>

          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-container>
  </b-navbar>

</template>

<script>
  import {mapGetters} from 'vuex'
  import BestImage from "../Common/BestImage";

  export default {
    name: "MainNavBar",
    components: {BestImage},
    computed: mapGetters({
      navigation: 'GET_NAVIGATION',
    }),
    data() {
      return {
        baseUrl: process.env.baseUrl
      }
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener("scroll", function () {
          var navbar = document.getElementById("nav");
          var nav_classes = navbar.classList;
          if (document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
            }
          } else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
            }
          }
        })
      });
    },
  }
</script>

<style lang="scss">
  .logo {
    width: 5.3125rem;

    @media (max-width: 767.98px) {
      width: 3.3125rem;
    }
  }

  .navbar {
    &.shrink {
      background-color: black !important;
      margin-top: 0 !important;

      .logo {
        width: 3.3125rem;
      }

      .container {
        align-items: center !important;
      }
    }

    .navbar-collapse {
      @media (max-width: 991.98px) {
        background: black;
        padding: 1rem;
      }
    }
  }

  .nav-item {
    .dropdown-menu {
      border: none;
      margin-top: .5rem;
      border-top: 1px solid #f2f2f2 !important;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);

      &.dropdown-menu-right {
        border-radius: 0.3125rem;

        &:after {
          display: inline-block;
          position: absolute;
          margin-left: 0.255em;
          vertical-align: 0.255em;
          content: "";
          border-top: 0;
          border-right: 0.3em solid transparent;
          border-bottom: 0.3em solid;
          border-left: 0.3em solid transparent;
          top: -0.375rem;
          right: 0.9375rem;
          color: $white;
        }
      }
    }
  }

  .nav-link {
    padding: .375rem 1rem 0 0;
    font-size: 1.2rem;
    color: #fff !important;

    .svg-inline--fa {
      font-size: 1.4rem;
    }
  }

  .nav-wrapper {
    display: block;
    width: 100%;

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }

  }

  .nav-brand-toggle-btn {
    @media (max-width: 992px) {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }
  }

  .icon-box {
    list-style: none;
    display: flex;
    flex-flow: wrap;
    padding: 0;
    width: 18rem;

    li {
      text-align: center;
    }

    .dropdown-item:active {
      background-color: #d0d0d0;
      border-radius: 0.3rem;
    }

    a {
      @include rfs(14px, font-size);

      color: $primary !important;
      display: flex;
      flex-direction: column;

      p {
        margin: 0;
      }
    }
  }

</style>
