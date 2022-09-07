<script setup>
  // Coupon Modal
  const isModalVisible = ref(false);
</script>

<template>
  <footer>
    <p>Developed by <span>Muhammad Mahmoud</span>.</p>
    <p>Built with <span>Nuxt.js</span> & <span>TailwindCSS</span>.</p>
    <p>
      Click
      <button @click.prevent="isModalVisible = true"><span> here</span></button>
      for attributions.
    </p>

    <BaseModal v-model:is-modal-visible="isModalVisible">
      <div class="flex items-center justify-between gap-2 text-navy-100">
        <h2 class="font-firacode text-lg font-semibold">Attributions</h2>
        <button @click.prevent="isModalVisible = false">
          <i-eva:close-fill
            class="text-xl transition-colors hover:text-green-100"
          />
        </button>
      </div>

      <p class="mt-8">
        My job is to convert designs to code, not to make them. I've created
        this portfolio with the help of the following resources.
      </p>

      <ul class="mt-8 text-start text-navy-100">
        <li>
          <p>General Design Theme</p>

          <a
            href="https://brittanychiang.com/"
            target="_blank"
            class="caption flex items-center gap-1"
          >
            <i-charm:chevron-right /> Brittany Chiang Portfolio
          </a>
        </li>

        <li>
          <p>Home Page Moving Panda</p>

          <a
            href="https://codepen.io/raghav-mittal-the-flexboxer/pen/NWyydQb"
            target="_blank"
            class="caption flex items-center gap-1"
          >
            <i-charm:chevron-right /> Pen by Raghav Mittal
          </a>
        </li>

        <li>
          <p>Work Page Moving Panda</p>

          <a
            href="https://codepen.io/andrejsharapov/pen/ZPEPmm"
            target="_blank"
            class="caption flex items-center gap-1"
          >
            <i-charm:chevron-right /> Pen by Andrej Sharapov
          </a>
        </li>
      </ul>
    </BaseModal>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    @apply container py-4 text-center font-firacode text-xs text-navy-300;

    p {
      @apply mx-auto max-w-full;
    }

    span {
      @apply text-green-100;
    }
  }

  li {
    @apply mb-4;

    svg {
      @apply text-xs;
    }
  }
</style>
