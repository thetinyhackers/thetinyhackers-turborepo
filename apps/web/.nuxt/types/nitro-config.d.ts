// Generated by nitro

// App Config
import type { Defu } from 'defu'

import type { default as appConfig0 } from "/Users/lecoupa/Documents/Projects/thetinyhackers-turborepo/apps/web/app.config";
import type { default as appConfig1 } from "/Users/lecoupa/Documents/Projects/thetinyhackers-turborepo/node_modules/.pnpm/@nuxt+ui-pro@1.0.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui-pro/app.config";

type UserAppConfig = Defu<{}, [typeof appConfig0, typeof appConfig1]>

declare module 'nitropack' {
  interface AppConfig extends UserAppConfig {}
}
    
export {}