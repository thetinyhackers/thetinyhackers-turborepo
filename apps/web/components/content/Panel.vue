<script lang="ts" setup>
// Props
defineProps({
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
</script>

<template>
  <div
    class="base-panel relative p-2 overflow-hidden flex shadow flex-col h-80 border border-black rounded-xl text-center not-prose"
    :class="{ 'flex-col-reverse	': reverse }"
  >
    <div
      class="flex-initial z-10 leading-6 shadow bg-white border-gray-900 text-black rounded-xl border opacity-85 p-3 pb-4"
    >
      <slot />
    </div>

    <img
      v-if="landscape"
      class="absolute select-none bottom-0 right-0 left-0 -z-10 object-cover"
      loading="lazy"
      :src="`/images/content/Panel/${landscape}.png`"
    >
  </div>
</template>
