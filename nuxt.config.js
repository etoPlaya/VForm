export default {
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  components: true,

  plugins: [
    {
      src: '~/plugins/vClickOutside',
      ssr: false,
    },
  ],

  modules: [
    'nuxt-svg-loader',
  ],

  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
