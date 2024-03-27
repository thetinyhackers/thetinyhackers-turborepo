<script setup lang="ts">
// Composables
const { locale } = useI18n()
const { availableLocales } = useAppConfig()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

// State
const localeLabels = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  ja: '日本語',
}

// Computed
const flagIcon = computed(() => {
  for (const availableLocale of availableLocales) {
    if (availableLocale.code === locale.value)
      return availableLocale.icon
  }
})

const locales = computed(() => ([
  availableLocales.map(locale => ({
    click: () => changeLocale(locale.code),
    icon: locale.icon,
    id: locale,
    label: localeLabels[locale.code],
  })),
]))

// Helpers
function changeLocale(newLocale: string) {
  locale.value = newLocale

  router.push(switchLocalePath(newLocale))
}
</script>

<template>
  <UDropdown
    class="w-full"
    :items="locales"
    mode="hover"
    :popper="{ placement: 'bottom-start' }"
  >
    <UButton
      block
      color="white"
      :icon="flagIcon"
      :label="localeLabels[locale]"
      size="lg"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />
  </UDropdown>
</template>
