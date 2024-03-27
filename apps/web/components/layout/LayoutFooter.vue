<script setup lang="ts">
// Composables
const { socialLinks } = useAppConfig()
</script>

<template>
  <UFooter class="layout-footer">
    <template #left>
      {{ `Copyright © ${new Date().getFullYear()}` }}
    </template>

    <template #right>
      <UColorModeButton />

      <UButton
        v-for="(link, index) of socialLinks"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      />
    </template>
  </UFooter>
</template>
