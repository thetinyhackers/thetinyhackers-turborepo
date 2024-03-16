<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false,
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      href: '/favicon.ico',
      rel: 'icon',
    },
  ],
  meta: [
    {
      content: 'width=device-width, initial-scale=1',
      name: 'viewport',
    },
  ],
})

useSeoMeta({
  ogImage: 'https://docs-template.nuxt.dev/social-card.png',
  ogSiteName: seo?.siteName,
  titleTemplate: `%s - ${seo?.siteName}`,
  twitterCard: 'summary_large_image',
  twitterImage: 'https://docs-template.nuxt.dev/social-card.png',
})

provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <Header />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
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
