export default defineNuxtConfig({
  // --> BUILD & TYPESCRIPT <--

  devtools: {
    enabled: true,
  },

  extends: ['@nuxt/ui-pro'],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    },
  },

  routeRules: {
    '/api/search.json': { prerender: true },
  },

  typescript: {
    strict: false,
  },

  // --> CSS, COMPONENTS, MODULES & PLUGINS <--

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/i18n',
    'nuxt-og-image',
  ],

  // --> TAGS & METATAGS <--

  app: {
    head: {
      titleTemplate: '%pageTitle | The Companies API',
      viewport: 'width=device-width,initial-scale=1',

      link: [
        { href: '/favicon.ico', rel: 'icon', sizes: 'any' },
      ],
    },
  },

  // --> MODULE CONFIGURATION <--

  colorMode: {
    fallback: 'dark',
    preference: 'dark',
  },

  i18n: {
    defaultLocale: 'en',
    langDir: './locales/',
    lazy: true,
    strategy: 'prefix_except_default',
    vueI18n: './config/i18n.config.ts',

    detectBrowserLanguage: {
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'en',
      redirectOn: 'root',
      useCookie: true,
    },

    locales: [{
      code: 'en',
      file: 'en.ts',
      iso: 'en',
    }, {
      code: 'fr',
      file: 'fr.ts',
      iso: 'fr',
    }],

  },

  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
})
