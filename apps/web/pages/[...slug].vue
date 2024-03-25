<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

// Composables
const route = useRoute()
const { seo } = useAppConfig()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (!page.value) {
  throw createError({
    fatal: true,
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

// Computed
const headline = computed(() => {
  return findPageHeadline(page.value)
})

const links = computed(() => [{
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  target: '_blank',
  to: `https://github.com/thetinyhackers/thetinyhackers-turborepo/edit/main/apps/web/content/${page?.value?._file}`,
}, {
  icon: 'i-heroicons-star',
  label: 'Star on GitHub',
  target: '_blank',
  to: 'https://github.com/nuxt/ui',
}].filter(Boolean))

// AsyncData
const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent()
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path)))

// Seo
useSeoMeta({
  description: page.value.description,
  ogDescription: page.value.description,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  title: page.value.title,
})

// defineOgImage({
//   component: 'LayoutOgImage',
//   description: page.value.description,
//   title: page.value.title,
// })
</script>

<template>
  <UPage>
    <UPageHeader
      :description="page.description"
      :headline="headline"
      :links="page.links"
      :title="page.title"
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

    <template #right>
      <UContentToc
        :links="page.body?.toc?.links"
        title="Table of Contents"
      >
        <template #bottom>
          <div
            class="hidden lg:block space-y-6"
            :class="{ '!mt-6': page.body?.toc?.links?.length }"
          >
            <UDivider
              v-if="page.body?.toc?.links?.length"
              type="dashed"
            />

            <UPageLinks
              :links="links"
              title="Community"
            />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
