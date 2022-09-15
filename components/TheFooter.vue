<script setup>
  const isModalVisible = ref(false);
</script>

<template>
  <footer data-aos="fade-up" data-aos-delay="150">
    <p>Developed by <span>Muhammad Mahmoud</span>.</p>
    <p>Built with <span>Nuxt.js</span> & <span>TailwindCSS</span>.</p>
    <p>
      Click
      <button @click.prevent="isModalVisible = true"><span> here</span></button>
      for attributions.
    </p>

    <div class="social-links">
      <ul>
        <li>
          <a
            href="https://github.com/MuhammadM1998"
            aria-label="GitHub"
            target="_blank"
          >
            <i-lucide:github />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/muhammadm1998/"
            aria-label="Linkedin"
            target="_blank"
          >
            <i-lucide:linkedin />
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/MuhammadM1998"
            aria-label="Twitter"
            target="_blank"
          >
            <i-lucide:twitter />
          </a>
        </li>
      </ul>
    </div>

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

      <ul class="attributions-list">
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

    .social-links {
      @apply mt-2;

      ul {
        @apply flex justify-center  gap-4;

        li {
          @apply transition duration-200  hover:-translate-y-0.5 hover:text-green-100;
        }
      }
    }

    p {
      @apply mx-auto max-w-full;
    }

    span {
      @apply text-green-100;
    }
  }

  .attributions-list {
    @apply mt-8 text-start text-navy-100;

    li {
      @apply mb-4;

      svg {
        @apply text-xs;
      }
    }
  }
</style>
