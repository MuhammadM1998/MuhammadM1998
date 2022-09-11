<template>
  <NuxtLayout name="default">
    <section class="grid min-h-screen place-content-center py-20 text-center">
      <h1
        class="font-firacode text-[clamp(100px,_25vw,_200px)] font-semibold leading-none text-green-100"
      >
        404
      </h1>

      <p class="text-[clamp(25px,_5vw,_40px)] text-navy-100">Page Not Found</p>

      <BaseLink to="/" class="mx-auto mt-8 w-fit">Go Home</BaseLink>
    </section>
  </NuxtLayout>
</template>
