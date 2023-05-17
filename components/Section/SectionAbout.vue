<template>
  <section
    id="about"
    class="py-24"
    data-aos="fade-zoom-in"
    data-aos-delay="100"
  >
    <div class="container">
      <h2 class="section-heading section-heading--decorated">About Me</h2>

      <div class="flex flex-col gap-20 md:flex-row">
        <div class="md:basis-full">
          <p class="mb-4">
            Hey! I'm Muhammad, I've been close to a computer since an early age,
            and been in love with computers & technology ever since.
          </p>

          <p class="mb-4">
            I discovered that I like to code in college while completing a task.
            I coded things using various programming languages like
            <span class="text--highlighted">Fortran</span>,
            <span class="text--highlighted">C++</span>,
            <span class="text--highlighted">Java</span> and even some
            <span class="text--highlighted">Assembly</span>! I also coded a
            RISC-V architechture (It's a CPU like the one in your device, but
            much simpler) for my graduation project.It impemented it using a HDL
            (Hardware Description Language),
            <span class="text--highlighted">Verilog</span>.
          </p>

          <p class="mb-4">
            After graduation, I decided to learn how to build Android apps but
            it just didn't click. I developed my first web app a month later
            which I found very intersting. I started self-studying frontend web
            development technologies after graduation. Fast forward to today, I
            freelance as a
            <span class="text--highlighted">
              Nuxt.js Frontend Web Developer
            </span>
            .
          </p>

          <p class="mb-4">
            If you want more detailed info, check out my linkedin account or the
            resume for a more organized version.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-6 2xs:flex-nowrap">
            <BaseLink
              href="https://www.linkedin.com/in/muhammadm1998/"
              target="blank"
            >
              <i-ant-design-linkedin-filled /> Linkedin
            </BaseLink>

            <BaseLink to="/resume" target="blank">
              <i-pepicons-cv /> Resume
            </BaseLink>
          </div>
        </div>

        <div class="md:basis-full">
          <ul>
            <li class="experience-item group">
              <span
                class="experience__type bg-navy-300 group-hover:scale-110 group-hover:bg-green-100"
              >
                <i-ic-outline-work class="text-xs group-hover:text-sm" />
              </span>

              <div class="group-hover:translate-x-2">
                <img
                  src="~/assets/images/alexapps.webp"
                  alt="Alexapps"
                  class="institution-img"
                />

                <p class="institution-name">
                  Alexapps
                  <span class="duration"> (November 2022 - Present) </span>
                </p>

                <p class="position">Frontend Web Developer</p>

                <p class="location">
                  <i-carbon-location-current /> Alexandria, Egypt
                </p>
              </div>
            </li>

            <li class="experience-item group">
              <span
                class="experience__type bg-navy-300 group-hover:scale-110 group-hover:bg-green-100"
              >
                <i-ic-outline-work class="text-xs group-hover:text-sm" />
              </span>

              <div class="group-hover:translate-x-2">
                <img
                  src="~/assets/images/Upwork.webp"
                  alt="Upwork"
                  class="institution-img"
                />

                <p class="institution-name">
                  Upwork
                  <span class="duration"> (August 2022 - November 2022) </span>
                </p>

                <p class="position">Frontend Web Developer</p>

                <p class="location">
                  <i-carbon-location-current /> Around the world
                </p>
              </div>
            </li>

            <li class="experience-item group">
              <span
                class="experience__type bg-navy-300 group-hover:scale-110 group-hover:bg-green-100"
              >
                <i-fluent-hat-graduation-12-filled
                  class="text-xs group-hover:text-sm"
                />
              </span>

              <div class="group-hover:translate-x-2">
                <img
                  src="~/assets/images/Aswan-Faculty-of-Engineering.webp"
                  alt="Aswan Faculty of Engineering"
                  class="institution-img"
                />

                <p class="institution-name">
                  Faculty of Engineering
                  <span class="duration"> (2016 - 2021) </span>
                </p>

                <p class="position">
                  BS.c, Electrical & Telecommunication Engineering
                </p>

                <p class="location"><i-carbon-location-current /> Aswan</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  * {
    @apply transition-all duration-300;
  }

  .experience-item {
    @apply relative px-8 py-3;
    @apply before:absolute before:left-0 before:top-0 before:h-full before:w-1;
    @apply before:bg-navy-400 before:transition before:duration-300 hover:before:bg-navy-300;
    @apply first-of-type:before:rounded-t last-of-type:before:rounded-b;

    .experience__type {
      @apply absolute left-0 top-0 translate-y-4 -translate-x-[40%] rounded-full p-1 text-xs text-navy-500;
    }

    .institution-img {
      @apply mb-2 h-9 w-9;
    }

    .institution-name {
      @apply mb-1 font-medium text-green-100;
    }

    .duration {
      @apply text-xs font-normal text-navy-300;
    }

    .position {
      @apply mb-1 font-medium text-navy-100;
    }

    .location {
      @apply mb-1 flex items-center gap-1 text-xs text-navy-300;
    }
  }
</style>
