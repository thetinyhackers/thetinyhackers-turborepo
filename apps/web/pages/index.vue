<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

definePageMeta({
  layout: 'docs',
})

const { seo, toc } = useAppConfig()
const { data: page } = await useAsyncData('welcome', () => queryContent('welcome').findOne())

if (!page.value) {
  throw createError({
    fatal: true,
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

const { data: surround } = await useAsyncData(`welcome-surround`, () => queryContent()
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash('welcome')))

useSeoMeta({
  description: page.value.description,
  ogDescription: page.value.description,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  title: page.value.title,
})

defineOgImage({
  component: 'Docs',
  description: page.value.description,
  title: page.value.title,
})

const headline = computed(() => findPageHeadline(page.value))

const links = computed(() => [toc?.bottom?.edit && {
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  target: '_blank',
  to: `${toc.bottom.edit}/${page?.value?._file}`,
}, ...(toc?.bottom?.links || [])].filter(Boolean))
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
        :value="page"
      />

      <hr v-if="surround?.length">

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page.toc !== false"
      #right
    >
      <UContentToc
        :links="page.body?.toc?.links"
        :title="toc?.title"
      >
        <template
          v-if="toc?.bottom"
          #bottom
        >
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
              :title="toc.bottom.title"
            />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
