<script setup lang="ts">
import type { NuxtError } from '#app'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

// Props
defineProps({
  error: {
    required: true,
    type: Object as PropType<NuxtError>,
  },
})

// AsyncData
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})

const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false,
})

// Provide
provide('navigation', navigation)

// Seo
useSeoMeta({
  description: 'We are sorry but this page could not be found.',
  title: 'Page not found',
})
</script>

<template>
  <div>
    <LayoutHeader />

    <UMain>
      <UContainer>
        <UPage>
          <UPageError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <LayoutFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
