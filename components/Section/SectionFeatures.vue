<script setup>
  const target = ref(null);
  const isSectionVisible = ref(false);
  useIntersectionObserver(target, ([{ isIntersecting }]) => {
    isSectionVisible.value = isIntersecting;
  });

  const activeTabIndex = ref(1);

  watch(isSectionVisible, (value) => {
    if (value) {
      // const tabs = document.querySelectorAll('.tab');
      // setInterval(() => {
      //   const currentTab = document.querySelector('.tab--active');
      //   const currentTabIndex = Array.prototype.indexOf.call(tabs, currentTab);
      //   const lastTab = tabs[tabs.length - 1];
      //   if (currentTab === lastTab) activeTabIndex.value = 1;
      //   else activeTabIndex.value = currentTabIndex + 2;
      // }, 5000);
    }
  });
</script>

<template>
  <section id="features" ref="target" class="bg-navy-500 py-24">
    <div class="container flex flex-col items-center text-center">
      <span class="caption">You might be wondering</span>
      <h2 class="section-heading">Why Have a Website?</h2>
      <p class="mx-auto mb-6">
        A website is an essential tool to help any business grow. Here are only
        a few benefits of having a website.
      </p>

      <div>
        <!-- Tab Selectors -->
        <ul class="flex items-center justify-center gap-8">
          <li>
            <button
              class="tab"
              aria-label="Stand out"
              :class="{ 'tab--active': activeTabIndex === 1 }"
              @click="activeTabIndex = 1"
            >
              <i-carbon:growth />
            </button>
          </li>

          <li>
            <button
              class="tab"
              aria-label="Customers"
              :class="{ 'tab--active': activeTabIndex === 2 }"
              @click="activeTabIndex = 2"
            >
              <i-clarity:users-solid />
            </button>
          </li>

          <li>
            <button
              class="tab"
              aria-label="Credibility"
              :class="{ 'tab--active': activeTabIndex === 3 }"
              @click="activeTabIndex = 3"
            >
              <i-lucide:thumbs-up />
            </button>
          </li>

          <li>
            <button
              class="tab"
              aria-label="Revenue"
              :class="{ 'tab--active': activeTabIndex === 4 }"
              @click="activeTabIndex = 4"
            >
              <i-myicons-money-bag />
            </button>
          </li>
        </ul>

        <Transition name="fade" mode="out-in">
          <div v-if="activeTabIndex === 1" class="feature-card">
            <i-myicons-stand-out />
            <h3>Stand Out From Competitors</h3>
            <p>
              A website can highlight a business' branding with its design,
              making it easier to stand out from competitors.
            </p>
          </div>

          <div v-else-if="activeTabIndex === 2" class="feature-card">
            <i-myicons-customers />
            <h3>Boost Customer Base</h3>
            <p>
              A brand can expand its customer base easier and faster online
              compared to using offline marketing methods.
            </p>
          </div>

          <div v-else-if="activeTabIndex === 3" class="feature-card">
            <i-myicons-credibility />
            <h3>Establish Credibility</h3>
            <p>
              Having a website that stores all business-related information
              helps establish credibility and keep your clients up to date.
            </p>
          </div>

          <div v-else-if="activeTabIndex === 4" class="feature-card">
            <i-myicons-revenue />
            <h3>Increase Revenue</h3>
            <p>
              A professional website can be a primary and secondary source of
              revenue for a business.
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .tab {
    @apply rounded bg-navy-400 p-3 text-xl text-navy-100;
    @apply transition-all hover:bg-green-100 hover:text-navy-400;
    @apply relative overflow-hidden before:absolute;

    &::before {
      @apply top-0 left-0 h-1 w-0  bg-navy-400;
      // animation-play-state: paused;
    }

    &--active {
      @apply bg-green-100 text-navy-400;

      &::before {
        // @apply animate-[width_5s_linear_infinite];
        // animation-play-state: running;
      }
    }
  }

  .feature-card {
    @apply mt-12;

    svg {
      @apply mx-auto;
    }

    h3 {
      @apply mt-12 font-firacode text-2xl font-semibold text-navy-100;
    }

    p {
      @apply mt-2;
    }
  }

  @keyframes width {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
