<script lang="ts" setup>
// Props
defineProps({
  character: {
    default: 'power',
    type: String as PropType<BaseCharacterCharacter>,
  },
  clickable: {
    default: false,
    type: Boolean,
  },
  reverse: {
    default: false,
    type: Boolean,
  },
  size: {
    default: 'base',
    type: String as PropType<BaseQuoteSize>,
  },
})

// Events
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Listeners
function onBubbleClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <div
    class="base-quote w-full flex justify-center my-10 not-prose"
    :class="{ 'flex-row-reverse': reverse }"
  >
    <Character
      v-if="character"
      :character="character"
      class="mt-1 self-start flex-initial"
      :class="{

        // --> SIZES <--

        'ml-3': reverse && size === 'xs',
        'mr-3': !reverse && size === 'xs',
        'ml-4': reverse && size !== 'xs',
        'mr-4': !reverse && size !== 'xs',
      }"
      :size="size"
    />

    <div class="flex flex-1 flex-col normal-case">
      <div
        class="rounded-2xl text-left transition duration-300 text-black border shadow-sm dark:text-white dark:border-gray-700 dark:shadow-inner"
        :class="{
          // --> BOOLEANS <--

          'cursor-pointer hover:border-gray-500': clickable,

          // --> BACKGROUNDS <--

          'bg-white dark:bg-gray-900': !reverse,
          'bg-gray-50 dark:bg-gray-800': reverse,

          // --> SIZES <--

          'px-4 text-sm leading-6': size === 'xs',
          'px-4 py-0.5 text-sm leading-6 sm:text-base sm:leading-7': size === 'sm',
          'px-6 py-1 text-base leading-7 sm:text-lg sm:leading-8': size === 'base',

        }"
        @click="onBubbleClick"
      >
        <div class="flex items-center">
          <div
            v-if="$slots.left"
            class="flex flex-initial"
          >
            <slot name="left" />
          </div>

          <div class="flex-1">
            <ContentSlot
              :use="$slots.default"
            />
          </div>

          <div
            v-if="$slots.right"
            class="flex-initial"
          >
            <slot name="right" />
          </div>
        </div>

        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>

<style>
.base-quote a {
  font-weight: 500 !important;
  text-decoration: underline !important;
}

.base-quote code {
  margin-left: 0.125rem !important;
  margin-right: 0.125rem !important;
  border-radius: 0.25rem !important;
  border: 1px solid var(--indigo-200) !important;
  background-color: var(--indigo-100) !important;
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  letter-spacing: -0.015em !important;
  color: var(--indigo-800) !important;
}

.base-quote p {
  margin: 1rem 0 !important;
}
</style>
