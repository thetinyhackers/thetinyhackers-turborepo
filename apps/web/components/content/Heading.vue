<script lang="ts" setup>
// Composables

const { locale } = useI18n()
</script>

<template>
  <h1 class="text-lg sm:text-xl rounded-md col-span-1 shadow-inner sm:col-span-2 font-bold p-4 sm:p-6 my-1 sm:my-2 text-center uppercase bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white not-prose">
    <slot :name="locale" />
  </h1>
</template>
