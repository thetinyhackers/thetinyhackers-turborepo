export default defineAppConfig({
  footer: {
    colorMode: false,
    credits: 'Copyright © 2023',
    links: [{
      'aria-label': 'Nuxt Website',
      'icon': 'i-simple-icons-nuxtdotjs',
      'target': '_blank',
      'to': 'https://nuxt.com',
    }, {
      'aria-label': 'Nuxt UI on Discord',
      'icon': 'i-simple-icons-discord',
      'target': '_blank',
      'to': 'https://discord.com/invite/ps2h6QT',
    }, {
      'aria-label': 'Nuxt on X',
      'icon': 'i-simple-icons-x',
      'target': '_blank',
      'to': 'https://x.com/nuxt_js',
    }, {
      'aria-label': 'Nuxt UI on GitHub',
      'icon': 'i-simple-icons-github',
      'target': '_blank',
      'to': 'https://github.com/nuxt/ui',
    }],
  },
  header: {
    colorMode: true,
    links: [{
      'aria-label': 'Docs template on GitHub',
      'icon': 'i-simple-icons-github',
      'target': '_blank',
      'to': 'https://github.com/nuxt-ui-pro/docs',
    }],
    logo: {
      alt: '',
      dark: '',
      light: '',
    },
    search: true,
  },
  seo: {
    siteName: 'Nuxt UI Pro - Docs template',
  },
  toc: {
    title: 'Table of Contents',

    bottom: {
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      title: 'Community',

      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        target: '_blank',
        to: 'https://github.com/nuxt/ui',
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        target: '_blank',
        to: 'https://ui.nuxt.com/pro/guide',
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        target: '_blank',
        to: 'https://ui.nuxt.com/pro/purchase',
      }],
    },
  },
  ui: {
    gray: 'slate',
    primary: 'green',

    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
  },
})
