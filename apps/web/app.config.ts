export default defineAppConfig({
  availableLocales: [
    { code: 'en', icon: 'i-flagpack-us' },
    { code: 'es', icon: 'i-flagpack-es' },
    { code: 'fr', icon: 'i-flagpack-fr' },
    { code: 'ja', icon: 'i-flagpack-jp' },
  ],

  seo: {
    siteName: 'The Tiny Hackers',
  },

  socialLinks: [
    {
      'aria-label': 'The Tiny Hackers on YouTube',
      'icon': 'i-fa-youtube',
      'target': '_blank',
      'to': 'https://www.youtube.com/@thetinyhackers',
    },
    {
      'aria-label': 'The Tiny Hackers on Instagram',
      'icon': 'i-simple-icons-instagram',
      'target': '_blank',
      'to': 'https://www.instagram.com/thetinyhackers/',
    },
    {
      'aria-label': 'The Tiny Hackers on TikTok',
      'icon': 'i-simple-icons-tiktok',
      'target': '_blank',
      'to': 'https://www.tiktok.com/@thetinyhackers',
    },
    {
      'aria-label': 'The Tiny Hackers on X',
      'icon': 'i-simple-icons-x',
      'target': '_blank',
      'to': 'https://x.com/thetinyhackers',
    },
    {
      'aria-label': 'The Tiny Hackers on GitHub',
      'icon': 'i-simple-icons-github',
      'target': '_blank',
      'to': 'https://github.com/thetinyhackers/thetinyhackers-turborepo',
    },
  ],

  ui: {
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
    gray: 'slate',
    icons: {
      dynamic: true,
    },
    primary: 'indigo',
  },
})
