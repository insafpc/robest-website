export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abel&display=swap'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '~assets/sass/main.scss',
    'material-design-icons-iconfont/dist/material-design-icons.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/hexToRGB'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '~assets/sass/common/_variables.scss',
      '~assets/sass/common/_mixins.scss',
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://api.robest.in',
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/auth/local', method: 'post', propertyName: 'jwt'},
          logout: {url: '/auth/local', method: 'delete'},
          user: {url: '/users/me', method: 'get', propertyName: false }
        },
        // tokenRequired: true,
        tokenType: 'Bearer',
        autoFetchUser: true
      }
    }
  },
  env: {
    baseUrl: 'https://api.robest.in',
    apiUrl: 'https://api.robest.in/graphql',
  }
}
