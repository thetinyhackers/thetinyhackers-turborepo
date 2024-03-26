export default defineAppConfig({
  seo: {
    siteName: 'The Tiny Hackers',
  },

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
