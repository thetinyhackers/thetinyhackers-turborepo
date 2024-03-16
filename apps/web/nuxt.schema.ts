import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      description: 'UI Customization.',
      icon: 'i-mdi-palette-outline',
      title: 'UI',

      fields: {
        icons: group({
          description: 'Manage icons used in UI Pro.',
          icon: 'i-mdi-application-settings-outline',
          title: 'Icons',

          fields: {
            search: field({
              default: 'i-heroicons-magnifying-glass-20-solid',
              description: 'Icon to display in the search bar.',
              icon: 'i-mdi-magnify',
              title: 'Search Bar',
              type: 'icon',
            }),

            dark: field({
              default: 'i-heroicons-moon-20-solid',
              description: 'Icon of color mode button for dark mode.',
              icon: 'i-mdi-moon-waning-crescent',
              title: 'Dark mode',
              type: 'icon',
            }),

            light: field({
              default: 'i-heroicons-sun-20-solid',
              description: 'Icon of color mode button for light mode.',
              icon: 'i-mdi-white-balance-sunny',
              title: 'Light mode',
              type: 'icon',
            }),

            external: field({
              default: 'i-heroicons-arrow-up-right-20-solid',
              description: 'Icon for external link.',
              icon: 'i-mdi-arrow-top-right',
              title: 'External Link',
              type: 'icon',
            }),

            chevron: field({
              default: 'i-heroicons-chevron-down-20-solid',
              description: 'Icon for chevron.',
              icon: 'i-mdi-chevron-down',
              title: 'Chevron',
              type: 'icon',
            }),

            hash: field({
              default: 'i-heroicons-hashtag-20-solid',
              description: 'Icon for hash anchors.',
              icon: 'i-ph-hash',
              title: 'Hash',
              type: 'icon',
            }),
          },
        }),

        primary: field({
          default: 'green',
          description: 'Primary color of your UI.',
          icon: 'i-mdi-palette-outline',
          required: ['sky', 'mint', 'rose', 'amber', 'violet', 'emerald', 'fuchsia', 'indigo', 'lime', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow', 'green', 'blue', 'cyan', 'gray', 'white', 'black'],
          title: 'Primary',
          type: 'string',
        }),

        gray: field({
          default: 'slate',
          description: 'Gray color of your UI.',
          icon: 'i-mdi-palette-outline',
          required: ['slate', 'cool', 'zinc', 'neutral', 'stone'],
          title: 'Gray',
          type: 'string',
        }),
      },
    }),

    seo: group({
      description: 'SEO configuration.',
      icon: 'i-ph-app-window',
      title: 'SEO',

      fields: {
        siteName: field({
          default: [],
          description: 'Name used in ogSiteName and used as second part of your page title (My page title - Nuxt UI Pro).',
          icon: 'i-mdi-web',
          title: 'Site Name',
          type: 'string',
        }),
      },
    }),

    header: group({
      description: 'Header configuration.',
      icon: 'i-mdi-page-layout-header',
      title: 'Header',

      fields: {
        logo: group({
          description: 'Header logo configuration.',
          icon: 'i-mdi-image-filter-center-focus-strong-outline',
          title: 'Logo',

          fields: {
            light: field({
              default: '',
              description: 'Pick an image from your gallery.',
              icon: 'i-mdi-white-balance-sunny',
              title: 'Light Mode Logo',
              type: 'media',
            }),

            dark: field({
              default: '',
              description: 'Pick an image from your gallery.',
              icon: 'i-mdi-moon-waning-crescent',
              title: 'Dark Mode Logo',
              type: 'media',
            }),

            alt: field({
              default: '',
              description: 'Alt to display for accessibility.',
              icon: 'i-mdi-alphabet-latin',
              title: 'Alt',
              type: 'string',
            }),
          },
        }),

        search: field({
          default: true,
          description: 'Hide or display the search bar.',
          icon: 'i-mdi-magnify',
          title: 'Search Bar',
          type: 'boolean',
        }),

        colorMode: field({
          default: true,
          description: 'Hide or display the color mode button in your header.',
          icon: 'i-mdi-moon-waning-crescent',
          title: 'Color Mode',
          type: 'boolean',
        }),

        links: field({
          default: [],
          description: 'Array of link object displayed in header.',
          icon: 'i-mdi-link-variant',
          title: 'Links',
          type: 'array',
        }),
      },
    }),

    footer: group({
      description: 'Footer configuration.',
      icon: 'i-mdi-page-layout-footer',
      title: 'Footer',

      fields: {
        credits: field({
          default: '',
          description: 'Text to display as credits in the footer.',
          icon: 'i-mdi-circle-edit-outline',
          title: 'Footer credits section',
          type: 'string',
        }),

        colorMode: field({
          default: false,
          description: 'Hide or display the color mode button in the footer.',
          icon: 'i-mdi-moon-waning-crescent',
          title: 'Color Mode',
          type: 'boolean',
        }),

        links: field({
          default: [],
          description: 'Array of link object displayed in footer.',
          icon: 'i-mdi-link-variant',
          title: 'Links',
          type: 'array',
        }),
      },
    }),

    toc: group({
      description: 'TOC configuration.',
      icon: 'i-mdi-table-of-contents',
      title: 'Table of contents',

      fields: {
        title: field({
          default: '',
          description: 'Text to display as title of the main toc.',
          icon: 'i-mdi-format-title',
          title: 'Title',
          type: 'string',
        }),

        bottom: group({
          description: 'Bottom TOC configuration.',
          icon: 'i-mdi-table-of-contents',
          title: 'Bottom',

          fields: {
            title: field({
              default: '',
              description: 'Text to display as title of the bottom toc.',
              icon: 'i-mdi-format-title',
              title: 'Title',
              type: 'string',
            }),

            edit: field({
              default: '',
              description: 'URL of your repository content folder.',
              icon: 'i-ph-note-pencil',
              title: 'Edit Page Link',
              type: 'string',
            }),

            links: field({
              default: [],
              description: 'Array of link object displayed in bottom toc.',
              icon: 'i-mdi-link-variant',
              title: 'Links',
              type: 'array',
            }),
          },
        }),
      },
    }),
  },
})
