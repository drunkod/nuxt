module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  // Загрузить модуль node.js
  //'hover.css/css/hover-min.css',
  // CSS-файл в проекте
  '@/assets/css/theme.css',
  '@/assets/css/leaflet.css',
  '@/assets/css/leaflet.fullscreen.css',
  '@/assets/css/leaflet.css'
],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios',
  ],
    plugins: ['~/plugins/vue-onsenui', '~/plugins/vue2-leaflet', '~/plugins/leaflet-fullscreen'],
  build: {
    vendor: ['vue-onsenui', '~/plugins/vue2leaflet.js', 'leaflet-fullscreen'],


  }
}
