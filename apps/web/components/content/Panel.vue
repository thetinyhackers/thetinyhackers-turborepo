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
    class="base-panel relative p-2 overflow-hidden flex shadow-sm flex-col h-80 border rounded-xl text-center dark:border-black not-prose"
    :class="{
      'flex-col-reverse	': reverse,
    }"
  >
    <div
      class="flex-initial z-10 leading-6 shadow bg-gray-50 border-gray-900 text-black rounded-xl border opacity-85 p-3 pb-4"
    >
      <slot />
    </div>

    <!-- <div
      class="flex relative flex-col flex-initial justify-end"
      :class="{
        'items-start': !reverse,
        'items-end': reverse,
      }"
    >
      <div class="rounded-full border-black border bg-gradient-to-b from-black to-transparent w-20 h-20 flex items-center justify-center">
        <Character
          v-if="character"
          :character="character"
        />
      </div>
    </div> -->

    <img
      v-if="landscape"
      class="absolute select-none bottom-0 right-0 left-0 -z-10 object-cover"
      loading="lazy"
      :src="`/images/content/Panel/${landscape}.png`"
    >
  </div>
</template>
