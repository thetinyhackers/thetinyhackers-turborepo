
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'
import cfg0 from "/Users/lecoupa/Documents/Projects/thetinyhackers-turborepo/apps/web/app.config"
import cfg1 from "/Users/lecoupa/Documents/Projects/thetinyhackers-turborepo/node_modules/.pnpm/@nuxt+ui-pro@1.0.2_nuxt@3.10.3_rollup@3.29.4_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui-pro/app.config"

declare const inlineConfig = {
  "nuxt": {
    "buildId": "2db4a70d-c686-4564-b066-b5d150e1e629"
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
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0, typeof cfg1]>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
