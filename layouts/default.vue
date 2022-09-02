<template>
  <div>
    <TheHeader />
    <main>
      <slot />
      <TheFooter />
    </main>
  </div>
</template>

<style scoped lang="scss">
  main {
    @apply transition-all duration-300;
  }
</style>
