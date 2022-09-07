<script setup>
  const isScrollingDown = ref(false);

  // Hide Aside on scrolling down and show it on scrolling up
  const { y } = useWindowScroll();

  onMounted(() => {
    y.value ? (isScrollingDown.value = true) : (isScrollingDown.value = false);
  });

  watch(y, (newValue, oldValue) => {
    newValue >= oldValue
      ? (isScrollingDown.value = true)
      : (isScrollingDown.value = false);
  });

  const headerClasses = computed(() => {
    return y.value === 0 ? 'py-4' : 'shadow-lg py-2';
  });
</script>

<template>
  <header :class="[headerClasses, { 'header--scrolled': isScrollingDown }]">
    <div
      class="container flex min-h-[48px] items-center justify-between transition-all"
    >
      <a href="/" aria-label="home">
        <i-myicons-logo class="text-2xl" />
      </a>

      <Nav />
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    @apply fixed top-0 z-50 w-full;
    @apply translate-y-0  backdrop-blur-sm;
    @apply transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)];

    &.header--scrolled {
      @apply -translate-y-full;
    }
  }
</style>
