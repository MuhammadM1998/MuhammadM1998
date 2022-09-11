<template>
  <section id="work" class="py-24">
    <div class="container">
      <h2 class="section-heading section-heading--decorated">My Work</h2>

      <!-- My Stack -->
      <div>
        <p class="mb-6">
          Here are a few technologies I've been using in my stack recently
        </p>

        <ul class="my-stack">
          <li><i-akar-icons:javascript-fill /> Javascript (ES6+)</li>
          <li><i-bxl:tailwind-css /> Tailwind CSS</li>
          <li><i-simple-icons:nuxtdotjs /> Nuxt.js</li>
          <li><i-cib:vue-js /> Vue.js</li>
          <li>
            <i-myicons:vitest />
            Vitest
          </li>
          <li><i-tabler:brand-vcypress /> Cypress</li>
        </ul>
      </div>
    </div>

    <ProjectFeatured />

    <div
      class="container mt-8 flex flex-col gap-4 lg:flex-row lg:justify-between"
    >
      <p>
        If you want to see more check out the projects page or explore the full
        project on my GitHub account.
      </p>

      <div
        class="flex flex-wrap items-center gap-6 lg:basis-full lg:justify-end"
      >
        <BaseLink to="/projects">
          <i-healthicons:ui-menu-grid-outline /> Projects Page
        </BaseLink>

        <BaseLink href="https://github.com/MuhammadM1998" target="blank">
          <i-lucide:github /> GitHub Account
        </BaseLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .my-stack {
    @apply font-firacode text-sm text-green-100;
    @apply grid grid-cols-[repeat(2,_minmax(140px,_200px))] gap-2 md:grid-cols-[repeat(3,_minmax(140px,_200px))];

    li {
      @apply flex items-center gap-2;
    }
  }
</style>
