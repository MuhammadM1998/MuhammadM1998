<script setup>
  defineProps({
    isOpened: { type: Boolean, required: true },
  });
</script>

<template>
  <button class="outline-none" aria-label="Hamburger Menu">
    <svg
      :class="{ 'hamburger--active': isOpened }"
      class="hamburger"
      viewBox="0 0 100 100"
      width="48"
    >
      <path
        class="line top line--top"
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
      />
      <path class="line" d="m 70,50 h -40" />
      <path
        class="line bottom line--bottom"
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
      />
    </svg>
  </button>
</template>

<style scoped lang="scss">
  .hamburger {
    @apply cursor-pointer select-none transition-transform duration-300;

    .line {
      @apply fill-[none] stroke-green-100 stroke-[5.5] transition-all duration-300;
      stroke-linecap: round;

      &--top,
      &--bottom {
        stroke-dasharray: 40 121;
      }
    }

    &--active {
      @apply rotate-45;

      .line--top,
      .line--bottom {
        stroke-dashoffset: -68px;
      }
    }
  }
</style>
