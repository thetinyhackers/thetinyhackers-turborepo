<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

// State
const navigation = inject<NavItem[]>('navigation', [])

// Computed
const links = computed(() => [{
  'aria-label': 'Docs template on GitHub',
  'icon': 'i-simple-icons-github',
  'target': '_blank',
  'to': 'https://github.com/thetinyhackers/thetinyhackers-turborepo',
}])

const logo = computed(() => ({
  alt: '',
  dark: '',
  light: '',
}))
</script>

<template>
  <UHeader class="layout-header">
    <template #logo>
      <template v-if="logo.dark || logo.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...logo }" />
      </template>

      <template v-else>
        The Tiny Hackers <UBadge
          class="mb-0.5"
          label="Docs"
          variant="subtle"
        />
      </template>
    </template>

    <template #right>
      <UContentSearchButton
        class="lg:hidden"
        :label="null"
      />

      <UColorModeButton />

      <UButton
        v-for="(link, index) of links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
