<template>
  <ul>
    <li data-aos="fade-down">
      <a href="/#about">About</a>
    </li>

    <li data-aos="fade-down" data-aos-delay="100">
      <a href="/#features">Features</a>
    </li>

    <li data-aos="fade-down" data-aos-delay="200">
      <a href="/#work">My Work</a>
    </li>

    <li data-aos="fade-down" data-aos-delay="300">
      <a href="/#contact">Contact</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  ul {
    @apply items-center gap-4;

    li {
      @apply font-firacode  text-navy-100;

      a {
        @apply transition-colors hover:text-green-100;
        @apply before:mr-2 before:inline-block before:text-green-100 before:content-['/'];

        span {
          @apply text-green-100;
        }
      }
    }
  }
</style>
