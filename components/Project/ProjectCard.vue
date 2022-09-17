<script setup>
  defineProps({
    project: { type: Object, required: true },
  });

  // 3D Hover Effect
  const target = ref(null);
  const { elementX, elementY, isOutside, elementHeight, elementWidth } =
    useMouseInElement(target);

  const cardTransform = computed(() => {
    const MAX_ROTATION = 4;
    const rX = (
      MAX_ROTATION / 2 -
      (elementY.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2); // handles x-axis
    const rY = (
      (elementX.value / elementWidth.value) * MAX_ROTATION -
      MAX_ROTATION / 2
    ).toFixed(2); // handles y-axis
    return isOutside.value
      ? ''
      : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
  });
</script>

<template>
  <div
    ref="target"
    class="project-card"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out',
    }"
  >
    <div class="project__image">
      <picture>
        <source
          v-for="(image, index) in project.dynamicImages"
          :key="index"
          :media="`(min-width:${image.width}px)`"
          :srcset="image.url"
        />

        <img :src="project.defaultImage" :alt="project.name" loading="lazy" />
      </picture>
    </div>

    <div class="project__meta">
      <p v-if="project.isFeatured" class="project--featured">Featured</p>

      <div class="flex items-center justify-between gap-1">
        <div>
          <span class="caption">
            {{ project.genre }}
          </span>

          <h3 class="font-firacode text-2xl font-semibold text-navy-100">
            {{ project.name }}
          </h3>
        </div>

        <ul class="project__links">
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
            <a :href="project.links.github" aria-label="GitHub" target="_blank">
              <i-lucide:github />
            </a>
          </li>
        </ul>
      </div>

      <ul class="project__stack">
        <li v-for="(item, index) in project.stack" :key="index">
          <Icon :name="item.icon" />
          <span>{{ item.name }}</span>
        </li>
      </ul>

      <hr class="border-t-2 border-navy-400" />

      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .project-card {
    @apply overflow-hidden rounded border-2 border-navy-400;

    .project__image img {
      @apply h-56 w-full object-cover object-[top_center] transition-all duration-[3s]  hover:object-[bottom_center];
    }

    .project__meta {
      @apply flex flex-col gap-4 p-4;

      .project--featured {
        @apply w-fit rounded bg-navy-100 py-0.5 px-2 font-firacode text-sm  text-navy-600;
      }

      .project__links {
        @apply flex items-center gap-2 text-navy-100;

        li {
          @apply transition hover:-translate-y-0.5 hover:text-green-100;
        }
      }

      .project__stack {
        @apply font-firacode text-xs text-green-100;
        @apply flex flex-wrap gap-2;

        li {
          @apply flex items-center gap-2 rounded border border-green-100 py-1 px-2;

          svg {
            @apply text-xs;
          }
        }
      }
    }
  }
</style>
