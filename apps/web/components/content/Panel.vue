<script lang="ts" setup>
// Props
const props = defineProps({
  character: {
    default: 'power',
    type: String as PropType<PanelCharacter>,
  },
  landscape: {
    default: '',
    type: String,
  },
  reverse: {
    default: false,
    type: Boolean,
  },
})

// Composables
const route = useRoute()
const { locale } = useI18n()

// Computed
const landscapePath = computed(() => {
  const params = route.params.slug || []

  let path = '/images/panels'

  if (!params.length) {
    path += `/index`
  }
  else {
    for (const param of params)
      path += `/${param}`
  }

  return `${path}/${props.landscape}.png`
})
</script>

<template>
  <div
    class="base-panel relative p-2 col-span-1 overflow-hidden flex shadow flex-col h-72 md:h-80 lg:h-72 xl:h-88 border border-black rounded-xl text-center not-prose"
    :class="{ 'flex-col-reverse': !reverse }"
  >
    <div class="flex-initial z-10 text-sm sm:text-base leading-6 shadow bg-white border-gray-900 text-black rounded-xl border opacity-85 p-3 pb-4">
      <slot :name="locale" />
    </div>

    <img
      v-if="landscape && landscapePath"
      class="absolute select-none bottom-0 right-0 left-0 -z-10 object-cover"
      loading="lazy"
      :src="landscapePath"
    >
  </div>
</template>
