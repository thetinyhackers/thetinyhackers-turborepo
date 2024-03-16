// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+devtools@1.0.8_nuxt@3.10.3_vite@5.1.6/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+devtools@1.0.8_nuxt@3.10.3_vite@5.1.6/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt-site-config@1.6.7_@nuxt+devtools@1.0.8_@vue+compiler-core@3.4.21_nuxt@3.10.3_postcss@8.4_pcseezgwrq5xvfblcsjgtegnei/node_modules/nuxt-site-config/dist/runtime/plugins/0.siteConfig").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/plugins/modals").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/plugins/colors").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+content@2.12.1_nuxt@3.10.3_vue@3.4.21/node_modules/@nuxt/content/dist/runtime/plugins/ws").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.3.3_vite@5.1.6_vue-tsc@2.0.6/node_modules/nuxt/dist/app/plugins/check-if-layout-used").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+ui-pro@1.0.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui-pro/plugins/presets").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+ui-pro@1.0.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui-pro/plugins/scrollbars.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+ui-pro@1.0.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui-pro/plugins/variables").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt-site-config' | 'nuxt:revive-payload:server' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'nuxt:chunk-reload' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
