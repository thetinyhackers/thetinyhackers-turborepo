import _Highlight from '/Users/lecoupa/Documents/Projects/thetinyhackers-turborepo/node_modules/.pnpm/@nuxtjs+mdc@0.6.1/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"material-theme-lighter","default":"material-theme","dark":"material-theme-palenight"}}