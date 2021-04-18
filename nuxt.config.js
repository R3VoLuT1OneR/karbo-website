export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // mode: "spa",

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
      { hid: 'description', name: 'description', content: 'Cryptographic Digital Exchange Medium - P2P Exchange Network or Cryptocurrency' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', sizes: 'any', href: '/karbo_favicon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/karbo_favicon_48.png' },
      { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/karbo_favicon_48.png' },
      { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/karbo_favicon_64.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/karbo_favicon_192.png' },
      { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/karbo_favicon_256.png' },
      { rel: 'mask-icon', href: '/karbo_favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  svgSprite: {
    input: '~/assets/icons',
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.scss',
    configPath: 'tailwind.config.js',
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
  plugins: [
    '~/plugins/tailwind.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://typed-vuex.roe.dev
    'nuxt-typed-vuex',
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
    // Module load last release details into ./data dir before build.
    '~/modules/githubReleases',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      config.devtool = 'source-map'
    },
  },
}
