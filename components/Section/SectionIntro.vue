<template>
  <section class="flex min-h-screen items-center py-20">
    <div class="container flex items-center transition-all">
      <div class="content lg:basis-full">
        <h1 class="caption mb-5" data-aos="fade-up" data-aos-delay="400">
          Hi there!, My name is
        </h1>
        <h2
          class="heading heading--main"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          Muhammad Mahmoud.
        </h2>
        <h3
          class="heading heading--sec"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          I build things for the web.
        </h3>
        <p class="mt-5" data-aos="fade-up" data-aos-delay="550">
          I'm a
          <span class="text-green-100">Nuxt.js Frontend Web Developer</span>
          based in Egypt who enjoys creating beautiful, functional and
          accessible websites for individuals and small-businesses. Currently
          working at
          <NuxtLink
            to="https://www.linkedin.com/company/alexaiapps/"
            target="_blank"
            class="border-b border-dashed border-green-100 text-green-100 transition-colors hover:border-green-100/70 hover:text-green-100/70"
          >
            Alexapps</NuxtLink
          >
          where we're developing and maintaining a large-scale ERP system.
        </p>

        <BaseLink
          href="/#contact"
          target="_top"
          class="mt-8 w-fit"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Get in touch
        </BaseLink>
      </div>

      <PandaIntro
        class="hidden lg:block"
        data-aos="zoom-out"
        data-aos-delay="400"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .heading {
    @apply text-fluid-heading;

    &--main {
      @apply font-bold leading-snug text-navy-100;
    }

    &--sec {
      @apply font-semibold leading-tight text-navy-200;
    }
  }
</style>
