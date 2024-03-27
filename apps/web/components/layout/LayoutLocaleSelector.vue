<script setup lang="ts">
// Composables
const { locale } = useI18n()
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
  if (locale.value === 'en')
    return 'i-flagpack-us'
  else if (locale.value === 'es')
    return 'i-flagpack-es'
  else if (locale.value === 'fr')
    return 'i-flagpack-fr'
  else if (locale.value === 'ja')
    return 'i-flagpack-jp'
})

const locales = computed(() => {
  return [
    [{
      click: () => changeLocale('en'),
      icon: 'i-flagpack-us',
      id: 'en',
      label: localeLabels.en,
    }, {
      click: () => changeLocale('es'),
      icon: 'i-flagpack-es',
      id: 'es',
      label: localeLabels.es,
    }, {
      click: () => changeLocale('fr'),
      icon: 'i-flagpack-fr',
      id: 'fr',
      label: localeLabels.fr,
    }, {
      click: () => changeLocale('ja'),
      icon: 'i-flagpack-jp',
      id: 'ja',
      label: localeLabels.ja,
    }].filter(item => item.id !== locale.value),
  ]
})

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
