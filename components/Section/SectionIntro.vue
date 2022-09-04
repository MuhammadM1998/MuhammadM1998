<template>
  <section class="flex min-h-screen items-center py-20">
    <div class="container flex items-center transition-all">
      <div class="content lg:basis-full">
        <h1 class="caption mb-5">Hi there!, My name is</h1>
        <h2 class="heading heading--main">Muhammad Mahmoud.</h2>
        <h3 class="heading heading--sec">I build things for the web.</h3>
        <p class="mt-5">
          I'm a
          <span class="text-green-100">Nuxt.js Frontend Web Developer</span>
          based in Egypt who enjoys creating beautiful, functional and
          accessible websites for individuals and small-businesses.
        </p>

        <BaseLink href="#contact" class="mt-8">Get in touch</BaseLink>
      </div>

      <PandaIntro class="hidden lg:block" />
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
