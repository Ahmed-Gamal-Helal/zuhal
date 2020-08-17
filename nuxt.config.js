import colors from 'vuetify/es5/util/colors'
import express from 'express'
// Base URLs
const baseUrl = () => {
  if (process.env.NODE_ENV === 'dev') {
    return 'https://dev.api'
  } else if (process.env.NODE_ENV === 'production') {
    return 'https://api'
  }
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Salezagee',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss',
    '@/assets/fonts/ar/stylesheet.css',
    '@/assets/icons/css/fontello.css'
  ],
  pageTransition: 'fade',
  /*
   ** Plugins to load before mounting the App
   */
  router: {
    linkExactActiveClass: 'exact-active-link',
    // middleware: ['i18n', 'routeChange']
    middleware: ['routeChange']
  },
  plugins: [
    { src: '@/plugins/i18n.js' },
    { src: '@/plugins/vuelidate.js' },
    { src: '@/plugins/axios.js' },
    { src: '@/plugins/directives.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'vue-scrollto/nuxt',
      {
        container: 'body',
        duration: 1000,
        easing: 'ease',
        offset: -70,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      }
    ]
  ],
  generate: {
    minify: {
      collapseWhitespace: false
    }
  },
  serverMiddleware: [
    // body-parser middleware
    express.json(),
    // session middleware

    // Api middleware
    '@/api'
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: baseUrl()
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#30ba93',
          accent: '#30ba93',
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    // You can extend webpack config here
    extractCSS: true,
    extend(config, ctx) {
      // config.resolve.alias['~'] = './store_submodules'
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
