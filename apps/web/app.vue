<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

// Composables
const { seo } = useAppConfig()

// AsyncData
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})

const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false,
})

// Seo
// useSeoMeta({
//   ogImage: 'https://docs-template.nuxt.dev/social-card.png',
//   ogSiteName: seo?.siteName,
//   titleTemplate: `%s - ${seo?.siteName}`,
//   twitterCard: 'summary_large_image',
//   twitterImage: 'https://docs-template.nuxt.dev/social-card.png',
// })

// Provide
provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <LayoutHeader />

    <UMain>
      <UContainer>
        <UPage
          :ui="{
            left: 'lg:col-span-3 xl:col-span-2',
            center: {
              base: 'lg:col-span-7 xl:col-span-8',
            },
          }"
        >
          <template #left>
            <UAside>
              <template #top>
                <UContentSearchButton />
              </template>

              <UNavigationTree :links="mapContentNavigation(navigation)" />
            </UAside>
          </template>

          <NuxtPage />
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
