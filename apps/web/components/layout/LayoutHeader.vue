<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

// State
const navigation = inject<NavItem[]>('navigation', [])

// Composables
const { socialLinks } = useAppConfig()

// Computed
const logo = computed(() => ({
  alt: 'The Tiny Hackers',
  dark: 'thetinyhackers_dark.svg',
  light: 'thetinyhackers_light.svg',
}))
</script>

<template>
  <UHeader class="layout-header">
    <template #logo>
      <template v-if="logo.dark || logo.light">
        <UColorModeImage v-bind="{ class: 'h-8 w-auto', ...logo }" />
      </template>

      <template v-else>
        The Tiny Hackers
        <UBadge
          class="mb-0.5"
          label="Docs"
          variant="subtle"
        />
      </template>
    </template>

    <template #right>
      <UContentSearchButton :label="null" />

      <UColorModeButton />

      <UButton
        v-for="(link, index) of socialLinks"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
