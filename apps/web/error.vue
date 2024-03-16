<script setup lang="ts">
import type { NuxtError } from '#app'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps({
  error: {
    required: true,
    type: Object as PropType<NuxtError>,
  },
})

useSeoMeta({
  description: 'We are sorry but this page could not be found.',
  title: 'Page not found',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false,
})

provide('navigation', navigation)
</script>

<template>
  <div>
    <Header />

    <UMain>
      <UContainer>
        <UPage>
          <UPageError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
