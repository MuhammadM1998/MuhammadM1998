<template>
  <NuxtLink v-bind="$attrs">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
  a {
    @apply flex items-center justify-center gap-2;
    @apply rounded py-4 px-8;
    @apply border border-green-100 text-green-100;
    @apply transition-colors hover:bg-green-100/10;
    @apply font-firacode text-sm;
  }
</style>
