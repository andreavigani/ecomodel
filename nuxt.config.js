
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'it-IT',
    },
    title: 'Ecomodel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Servizio di gestione immobili.' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'ecomodel'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Ecomodel'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Servizio di gestione immobili.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.ecomodel.com/img/ecomodel_hero.jpg'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.ecomodel.com'
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800,900&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['@/assets/scss/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~/plugins/vue-scroll-reveal.js',
    ssr: false
  },
  '~/plugins/vue-formulate',
  '~plugins/vue-gallery.client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['vue-scrollto/nuxt', { duration: 400 }]
    // '@nuxtjs/dotenv',
    // ['nuxt-lazy-load', { directiveOnly: true }]
  ],
  styleResources: {
    scss: [
        'assets/scss/_variables.scss',
        'assets/scss/_animations.scss',
    ]
},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
