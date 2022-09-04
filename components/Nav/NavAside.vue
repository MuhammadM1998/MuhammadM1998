<script setup>
  import { breakpointsTailwind } from '@vueuse/core';

  const hamburger = ref(null);
  const aside = ref(null);
  const isAsideVisible = ref(false);

  const openAside = () => {
    isAsideVisible.value = true;
    document
      .querySelector('main')
      .classList.add('blur', 'pointer-events-none', 'select-none');
    document.body.classList.add('overflow-hidden');
  };

  const closeAside = () => {
    isAsideVisible.value = false;
    document
      .querySelector('main')
      .classList.remove('blur', 'pointer-events-none', 'select-none');
    document.body.classList.remove('overflow-hidden');
  };

  const toggleAside = () => {
    isAsideVisible.value ? closeAside() : openAside();
  };

  onClickOutside(aside, () => closeAside(), {
    ignore: [hamburger],
  });

  // Close the menu on clicking the links
  // P.S: the document object is available only on the client, not the server.
  if (process.client) {
    const navLinks = document.querySelectorAll('aside li');
    navLinks.forEach((link) => useEventListener(link, 'click', closeAside));
  }

  // Close the menu on small screens breakpoint
  const { sm } = useBreakpoints(breakpointsTailwind);
  watch(sm, () => {
    sm.value ? closeAside() : null;
  });
</script>

<template>
  <div>
    <NavHamburger
      ref="hamburger"
      class="relative z-10 flex items-center"
      :is-opened="isAsideVisible"
      @click="toggleAside"
    />

    <aside ref="aside" :class="{ 'aside--active': isAsideVisible }">
      <NavLinks class="flex grow flex-col justify-center text-lg" />
      <p class="rights">© 2022 Muhammad Mahmoud All Rights Reserved</p>
    </aside>
  </div>
</template>

<style scoped lang="scss">
  aside {
    @apply fixed right-0 top-0  bg-navy-500 px-4 py-2;
    @apply h-screen w-[min(75vw,_400px)] translate-x-[100vw] transition-all duration-300;
    @apply flex flex-col items-center;

    &.aside--active {
      @apply translate-x-0;
    }
  }

  .rights {
    @apply whitespace-pre-wrap text-center font-firacode text-xs text-navy-100;
  }
</style>
