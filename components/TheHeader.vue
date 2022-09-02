<script setup>
  const isScrollingDown = ref(false);
  const isDoucmentTop = ref(true);

  // Hide Aside on scrolling down and show it on scrolling up
  const { y } = useWindowScroll();
  watch(y, (newValue, oldValue) => {
    newValue >= oldValue
      ? (isScrollingDown.value = true)
      : (isScrollingDown.value = false);
  });

  const headerScrolled = computed(() =>
    y.value === 0 ? 'py-4' : 'shadow-lg py-2'
  );
</script>

<template>
  <header :class="[headerScrolled, { 'header--scrolled': isScrollingDown }]">
    <div
      class="container flex min-h-[48px] items-center justify-between transition-all"
    >
      <a href="/" aria-label="home">
        <i-my-icons-logo class="text-2xl" />
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
