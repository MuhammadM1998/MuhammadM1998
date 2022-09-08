<template>
  <div class="side-links">
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
</template>

<style scoped lang="scss">
  .side-links {
    @apply fixed bottom-0 right-10 hidden text-navy-200 md:block;
    @apply after:mx-auto after:block  after:h-28 after:w-px after:bg-navy-200;
    ul {
      @apply flex flex-col gap-4;

      li {
        @apply transition duration-200 last-of-type:mb-8 hover:-translate-y-0.5 hover:text-green-100;
      }
    }
  }
</style>
