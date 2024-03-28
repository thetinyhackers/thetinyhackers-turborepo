<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

// State
const navigation = inject<NavItem[]>('navigation', [])

// Composables
const { socialLinks } = useAppConfig()
const localePath = useLocalePath()

// Computed
const logo = computed(() => ({
  alt: 'The Tiny Hackers',
  dark: '/thetinyhackers_dark.svg',
  light: '/thetinyhackers_light.svg',
}))
</script>

<template>
  <UHeader
    class="layout-header"
    :to="localePath({ name: 'slug' })"
  >
    <template #logo>
      <UColorModeImage v-bind="{ class: 'h-8 w-auto', ...logo }" />
    </template>

    <template #right>
      <UContentSearchButton :label="null" />

      <UColorModeButton class="hidden sm:inline-flex" />

      <UButton
        v-for="(link, index) of socialLinks"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        class="hidden sm:inline-flex"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
