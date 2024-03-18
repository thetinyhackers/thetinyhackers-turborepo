<script setup lang="ts">
// Computed
const links = computed(() => [{
  'aria-label': 'Nuxt Website',
  'icon': 'i-simple-icons-nuxtdotjs',
  'target': '_blank',
  'to': 'https://nuxt.com',
}, {
  'aria-label': 'Nuxt UI on Discord',
  'icon': 'i-simple-icons-discord',
  'target': '_blank',
  'to': 'https://discord.com/invite/ps2h6QT',
}, {
  'aria-label': 'Nuxt on X',
  'icon': 'i-simple-icons-x',
  'target': '_blank',
  'to': 'https://x.com/nuxt_js',
}, {
  'aria-label': 'Nuxt UI on GitHub',
  'icon': 'i-simple-icons-github',
  'target': '_blank',
  'to': 'https://github.com/nuxt/ui',
}])
</script>

<template>
  <UFooter>
    <template #left>
      {{ `Copyright © ${new Date().getFullYear()}` }}
    </template>

    <template #right>
      <UColorModeButton />

      <UButton
        v-for="(link, index) of links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      />
    </template>
  </UFooter>
</template>
