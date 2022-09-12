<script setup>
  // My Projects Data
  import projects from '~/assets/data/projects.json';
  // Swiper Config
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, EffectFade, Lazy } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';
  import 'swiper/css/lazy';

  const swiperConfig = {
    modules: [Navigation, EffectFade, Lazy],
    navigation: {
      prevEl: '.navigation-btn--prev',
      nextEl: '.navigation-btn--next',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    lazy: {
      checkInView: true,
      enabled: true,
    },
    slidesPerView: 1,
    rewind: true,
    allowTouchMove: false,
  };

  // Featured Projects
  const featuredProjects = computed(() =>
    projects.filter((project) => project.isFeatured)
  );
</script>

<template>
  <section>
    <Swiper v-bind="swiperConfig">
      <SwiperSlide
        v-for="project in featuredProjects"
        :key="project.id"
        class="project-wrapper"
      >
        <div class="project-meta">
          <div class="container">
            <div class="flex items-center justify-between gap-1">
              <div>
                <span class="caption">
                  {{ project.genre }}
                </span>

                <h3 class="font-firacode text-2xl font-semibold text-navy-100">
                  {{ project.name }}
                </h3>
              </div>

              <div class="navigation-btns">
                <button
                  class="navigation-btn navigation-btn--prev"
                  aria-label="Previous Project"
                >
                  <i-akar-icons:chevron-left />
                </button>
                <button
                  class="navigation-btn navigation-btn--next"
                  aria-label="Next Project"
                >
                  <i-akar-icons:chevron-right />
                </button>
              </div>
            </div>

            <p class="mt-4">
              {{ project.description }}
            </p>

            <ul class="project-stack mt-4">
              <li v-for="(item, index) in project.stack" :key="index">
                <Icon :name="item.icon" />
                <span>{{ item.name }}</span>
              </li>
            </ul>

            <ul class="project-links mt-4">
              <li>
                <a
                  :href="project.links.live"
                  aria-label="Live Demo"
                  target="_blank"
                >
                  <i-akar-icons:link-out />
                </a>
              </li>

              <li>
                <a
                  :href="project.links.github"
                  aria-label="GitHub"
                  target="_blank"
                >
                  <i-lucide:github />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="project-image">
          <picture>
            <source
              v-for="(image, index) in project.dynamicImages"
              :key="index"
              :media="`(min-width:${image.width}px)`"
              :srcset="image.url"
            />

            <img :src="project.defaultImage" :alt="project.name" />
          </picture>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped lang="scss">
  .project-wrapper {
    @apply mt-8 flex flex-col border-y-2 border-navy-400;
    @apply md:mt-20 md:flex-row-reverse md:items-center md:border-none;
  }

  .project-meta {
    @apply bg-navy-500 py-5;
    @apply md:w-[40%];
  }

  .navigation-btns {
    @apply flex items-center gap-1 text-navy-100;

    .navigation-btn {
      @apply transition hover:text-green-100;

      &--next {
        @apply hover:translate-x-0.5;
      }

      &--prev {
        @apply hover:-translate-x-0.5;
      }
    }
  }

  .project-stack {
    @apply font-firacode text-xs text-green-100;
    @apply flex flex-wrap gap-2;

    li {
      @apply flex items-center gap-2 rounded border border-green-100 py-1 px-2;

      svg {
        @apply text-xs;
      }
    }
  }

  .project-links {
    @apply flex items-center gap-2 text-navy-100;

    li {
      @apply transition hover:-translate-y-0.5 hover:text-green-100;
    }
  }

  .project-image {
    @apply h-80 overflow-hidden;
    @apply md:h-96 md:grow md:rounded-r lg:h-[30rem] xl:h-[34rem];

    img {
      @apply h-full w-full object-cover object-[top_center] transition-all duration-[10s]  hover:object-[bottom_center];
    }
  }
</style>
