<script setup lang="ts">
// Computed
const links = computed(() => [{
  'aria-label': 'The Tiny Hackers on X',
  'icon': 'i-simple-icons-x',
  'target': '_blank',
  'to': 'https://x.com/thetinyhackers',
}, {
  'aria-label': 'The Tiny Hackers on GitHub',
  'icon': 'i-simple-icons-github',
  'target': '_blank',
  'to': 'https://github.com/thetinyhackers/thetinyhackers-turborepo',
}])
</script>

<template>
  <UFooter class="layout-footer">
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
