
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "dev"
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/lecoupa/Documents/Projects/thetinyhackers-turborepo/apps/web/app.config.ts"
import cfg1 from "/Users/lecoupa/Documents/Projects/thetinyhackers-turborepo/node_modules/.pnpm/@nuxt+ui-pro@1.0.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui-pro/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, inlineConfig)
