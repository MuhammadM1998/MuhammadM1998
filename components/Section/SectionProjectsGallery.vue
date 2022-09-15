<script setup>
  // My Projects Data
  import projects from '~/assets/data/projects.json';
</script>

<template>
  <section
    class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
    data-aos="fade-zoom-in"
    data-aos-delay="700"
  >
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>
