<script lang="ts" setup>
// Props
const props = defineProps({
  character: {
    default: 'anthony',
    type: String as PropType<BaseCharacterCharacter>,
  },
  size: {
    default: 'base',
    type: String as PropType<BaseCharacterSize>,
  },
})

// Computed
const width = computed(() => {
  const size = {
    base: 10,
    lg: 12,
    sm: 9,
    xs: 8,
  }

  switch (props.character) {
    case 'nada':
      return size[props.size] + 6

    case 'power':
      return size[props.size] + 3

    case 'yoda':
      return size[props.size] + 8

    default:
      return size[props.size]
  }
})
</script>

<template>
  <img
    :alt="character"
    class="base-character pointer-events-none select-none w-13"
    :class="{
      // --> WIDTH <--

      'w-8': width === 8,
      'w-9': width === 9,
      'w-10': width === 10,
      'w-11': width === 11,
      'w-12': width === 12,
      'w-13': width === 13,
      'w-14': width === 14,
      'w-15': width === 15,
      'w-16': width === 16,
      'w-17': width === 17,
      'w-18': width === 18,
      'w-20': width === 20,
      'w-24': width === 24,
    }"
    loading="lazy"
    :src="`/images/bases/BaseCharacter/${character}.svg`"
  >
</template>
