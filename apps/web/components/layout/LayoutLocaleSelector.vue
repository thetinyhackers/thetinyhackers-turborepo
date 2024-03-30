<script setup lang="ts">
// Composables
const { availableLocales } = useAppConfig()
const { locale } = useI18n()
const { t } = useI18n()
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()

// Computed
const currentLocale = computed(() => {
  return availableLocales.find(item => item.code === locale.value)
})

// Helpers
function onChangeLocale(newLocale: typeof availableLocales[0]) {
  locale.value = newLocale.code

  router.push(switchLocalePath(newLocale.code))
}
</script>

<template>
  <USelectMenu
    class="w-full"
    clear-search-on-close
    :model-value="locale"
    option-attribute="label"
    :options="availableLocales"
    :placeholder="t('chooseLanguage')"
    size="lg"
    @change="onChangeLocale"
  >
    <!-- :search-attributes="['name', 'nameAlts']"
    searchable
    :searchable-placeholder="t('searchLanguage')" -->
    <template #label>
      <UIcon
        class="mr-0.5 w-5"
        :name="currentLocale.icon"
      />

      <span class="truncate">{{ currentLocale.name }}</span>
    </template>

    <template #option="{ option }">
      <UIcon
        class="mr-0.5 w-5"
        :name="option.icon"
      />

      <span class="truncate">{{ option.name }}</span>
    </template>
  </USelectMenu>
</template>

<!-- --------------------------------------------------
     I18N
     -------------------------------------------------- -->

<i18n lang="json">
{
  "en": {
    "chooseLanguage": "Choose your language",
    "searchLanguage": "Search a language"
  },
  "fr": {
    "chooseLanguage": "Choisissez votre langue",
    "searchLanguage": "Rechercher une langue"
  },
  "ja": {
    "chooseLanguage": "言語を選択",
    "searchLanguage": "言語を検索"
  }
}
</i18n>
