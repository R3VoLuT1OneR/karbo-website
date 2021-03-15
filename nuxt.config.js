export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: process.env.NUXT_ROUTER_BASE || '/',
    scrollBehavior(to) {
      if (to.hash) {
        const el = document.querySelector(to.hash)
        if (!el) {
          return
        }

        return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
      }

      return window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Karbo - Anonymous Exchange Medium',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  svgSprite: {
    input: '~/assets/icons',
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.scss',
    config: {
      theme: {
        colors: {
          white: '#FFFFFF',
          yellow: '#EDA93A',
          dark: '#123F60',
          black: '#1A2F61',
          grey: '#6D7F93',
          blue: '#0252E9',
          'blue-light': '#1C69FA',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Roboto Mono', 'monospace'],
        },
      },
    },
  },

  i18n: {
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en-US.ts' },
      { code: 'uk', iso: 'uk-UA', name: 'Українська', file: 'uk-UA.ts' },
      { code: 'ru', iso: 'ru-Ru', name: 'Русский', file: 'ru-RU.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
    // https://www.npmjs.com/package/vue-scrollto
    'vue-scrollto/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
