import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}