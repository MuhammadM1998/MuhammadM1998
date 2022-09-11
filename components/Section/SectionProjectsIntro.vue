<template>
  <section class="flex items-center py-32 transition-all">
    <div class="content lg:basis-full">
      <h2
        class="font-firacode text-fluid-heading font-bold leading-snug text-navy-100"
      >
        Projects
      </h2>

      <p class="mt-5">
        I love building projects and practice my engineering skills, here's an
        archive of things that I've worked on.
      </p>

      <p class="mt-4">
        Check out my GitHub account if you want to explore all of full projects,
        mini-projects, trainings and challenges.
      </p>

      <BaseLink
        href="https://github.com/MuhammadM1998"
        target="blank"
        class="mt-6 w-fit"
      >
        <i-lucide:github /> GitHub Account
      </BaseLink>
    </div>

    <PandaProjects class="hidden lg:block lg:basis-full" />
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
