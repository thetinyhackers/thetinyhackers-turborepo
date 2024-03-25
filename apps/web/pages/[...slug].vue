<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

// Composables
const route = useRoute()
const { locale, t } = useI18n()
const { seo } = useAppConfig()

// Computed
const description = computed(() => {
  return page.value[`description-${locale.value}`]
})

const headline = computed(() => {
  return findPageHeadline(page.value)
})

const links = computed(() => [{
  icon: 'i-simple-icons-github',
  label: t('editPage'),
  target: '_blank',
  to: `https://github.com/thetinyhackers/thetinyhackers-turborepo/edit/main/apps/web/content/${page?.value?._file}`,
}].filter(Boolean))

const routePathWithoutLocale = computed(() => {
  return locale.value === 'en' ? route.path : route.path.split(`/${locale.value}`)[1]
})

const title = computed(() => {
  return page.value[`title-${locale.value}`]
})

// AsyncData
const { data: page } = await useAsyncData(routePathWithoutLocale.value, () => {
  return queryContent(routePathWithoutLocale.value).findOne()
})

const surround = await useAsyncData(`${routePathWithoutLocale.value}-surround`, () => queryContent()
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only([`title-${locale.value}`, `description-${locale.value}`, '_path'])
  .findSurround(withoutTrailingSlash(routePathWithoutLocale.value)))
  .then((result) => {
    return result.data.value?.map((item) => {
      return item
        ? {
            _path: locale.value === 'en' ? item._path : `/${locale.value}${item._path}`,
            description: item[`description-${locale.value}`],
            title: item[`title-${locale.value}`],
          }
        : undefined
    })
  })

if (!page.value) {
  throw createError({
    fatal: true,
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

// Seo
useSeoMeta({
  description,
  ogDescription: description.value,
  ogTitle: `${title.value} - ${seo?.siteName}`,
  title: title.value,
})

// defineOgImage({
//   component: 'LayoutOgImage',
//   description: description.value,
//   title: title.value,
// })
</script>

<template>
  <UPage>
    <UPageHeader
      :description="description"
      :headline="headline"
      :links="links"
      :title="title"
    />

    <UPageBody prose>
      <ContentRenderer
        v-if="page.body"

        class=" grid grid-cols-1 gap-6 sm:grid-cols-2"
        :value="page"
      />

      <hr v-if="surround?.length">

      <UContentSurround :surround="surround" />
    </UPageBody>
  </UPage>
</template>

<i18n lang="json">
{
  "en": {
    "editPage": "Edit this page"
  },
  "fr": {
    "editPage": "Modifier cette page"
  }
}
</i18n>
