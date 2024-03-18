// https://nuxt.com/docs/api/configuration/nuxt-config
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

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/i18n',
    'nuxt-og-image',
  ],

  routeRules: {
    '/api/search.json': { prerender: true },
  },

  typescript: {
    strict: false,
  },

  // --> MODULE CONFIGURATION <--

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

    locales: [
      {
        code: 'en',
        file: 'en.ts',
        iso: 'en',
      },
      {
        code: 'fr',
        file: 'fr.ts',
        iso: 'fr',
      },
    ],

  },

  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
})
