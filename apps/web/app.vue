<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

// Composables
const { locale, t } = useI18n()
// const { seo } = useAppConfig()

// AsyncData
const navigation = computed(() => {
  const localeRoute = locale.value === 'en' ? '' : `/${locale.value}`

  return [
    {
      _path: locale.value === 'en' ? '/' : `/${locale.value}`,
      title: t('navigation.index'),
    },
    {
      _path: `${localeRoute}/mindset`,
      children: [{
        _path: `${localeRoute}/mindset/learning`,
        title: t('navigation.learning'),
      }, {
        _path: `${localeRoute}/mindset/solarpunk`,
        title: t('navigation.solarpunk'),
      }],
      title: t('navigation.mindset'),
    },
  ]
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
    <NuxtLoadingIndicator
      color="#5a67d8"
      :throttle="0"
    />

    <LayoutHeader />

    <UMain>
      <UContainer>
        <UPage>
          <template #left>
            <UAside>
              <template #top>
                <LayoutLocaleSelector />
              </template>

              <UNavigationTree
                class="-mt-2"
                :links="mapContentNavigation(navigation)"
              />
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

<!-- --------------------------------------------------
     I18N
     -------------------------------------------------- -->

<i18n lang="json">
{
   "en": {
     "navigation": {
       "index": "Introduction to Tiny Hackers",
       "learning": "Learning how to learn",
       "mindset": "The Mindset",
       "solarpunk": "The Art of Solarpunk"
      },
      "search": "Search…"
   },
   "fr": {
      "navigation": {
        "index": "Introduction aux Tiny Hackers",
        "learning": "Apprendre à apprendre",
        "mindset": "L'état d'esprit",
        "solarpunk": "L'art du Solarpunk"
      },
      "search": "Rechercher…"
   },
   "ja": {
      "navigation": {
        "index": "小さなハッカーの紹介",
        "learning": "学び方を学ぶ",
        "mindset": "考え方",
        "solarpunk": "ソーラーパンクの芸術"
      },
      "search": "検索…"
   }
}
</i18n>
