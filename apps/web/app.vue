<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

// Composables
const { locale, t } = useI18n()
// const { seo } = useAppConfig()
const navigation = ref()

// Computed
const navigationFormatted = computed(() => {
  return navigation.value.data
    .map((item) => {
      return item
        ? {
            _path: locale.value === 'en' ? item._path : `/${locale.value}${item._path === '/' ? '' : item._path}`,
            title: item[`title-${locale.value}`],
          }
        : undefined
    })
    .reduce((accumulator, item) => {
      const group = locale.value === 'en'
        ? item._path.split('/')[1]
        : item._path.replace(`/${locale.value}/`, '').split('/')[0]

      if (!group) {
        accumulator.push(item)
      }
      else {
        let parent = accumulator.find(parent => parent._path === `/${group}`)

        if (!parent) {
          parent = {
            _path: `/${group}`,
            children: [],
            title: t(`globals.navigation.${group}`),
          }

          accumulator.push(parent)
        }

        parent.children.push({
          _path: item._path,
          title: item.title,
        })
      }

      return accumulator
    }, [])
})

// AsyncData
navigation.value = await useAsyncData(`navigation-${locale.value}`, () => {
  return queryContent()
    .where({ navigation: { $ne: false } })
    .only([`title-${locale.value}`, '_path'])
    .find()
}, {
  watch: [locale],
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
provide('navigation', navigationFormatted)
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
                :links="mapContentNavigation(navigationFormatted)"
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
        :navigation="navigationFormatted"
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
      "search": "Search…"
   },
   "fr": {
      "search": "Rechercher…"
   },
   "ja": {
      "search": "検索…"
   }
}
</i18n>
