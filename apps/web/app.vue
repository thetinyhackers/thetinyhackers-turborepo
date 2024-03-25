<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

// Composables
const { locale, t } = useI18n()
// const { seo } = useAppConfig()

// AsyncData
const navigation = await useAsyncData('navigation', () => {
  return queryContent()
    .where({ navigation: { $ne: false } })
    .only([`title-${locale.value}`, '_path'])
    .find()
})
  .then((result) => {
    return result.data.value
      .map((item) => {
        return item
          ? {
              _path: locale.value === 'en' ? item._path : `/${locale.value}${item._path}`,
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
              title: t(`navigation.${group}`),
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
        <UPage>
          <template #left>
            <UAside>
              <template #top>
                <UContentSearchButton :label="t('search')" />
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

<!-- --------------------------------------------------
     I18N
     -------------------------------------------------- -->

<i18n lang="json">
{
   "en": {
     "navigation": {
       "mindset": "The Mindset"
      },
      "search": "Search…"
   },
   "fr": {
      "navigation": {
        "mindset": "L'état d'esprit"
      },
      "search": "Rechercher…"
   }
}
</i18n>
