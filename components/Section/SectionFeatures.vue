<script setup>
  const activeTabIndex = ref(1);
</script>

<template>
  <section id="features" ref="section" class="bg-navy-500 py-24">
    <div class="container flex flex-col items-center text-center">
      <span class="caption">You might be wondering</span>
      <h2 class="section-heading section-heading--big">Why Have a Website?</h2>
      <p class="mx-auto mb-6">
        A website is an essential tool to help any business grow. Here are only
        a few benefits of having a website.
      </p>

      <div>
        <!-- Tab Selectors -->
        <ul class="flex items-center justify-center gap-8">
          <li>
            <button
              :class="{ 'tab--active': activeTabIndex === 1 }"
              class="tab"
              aria-label="Stand out"
              @click="activeTabIndex = 1"
            >
              <i-carbon:growth />
            </button>
          </li>

          <li>
            <button
              :ref="(el) => (activeTabIndex === 2 ? (activeTab = el) : '')"
              :class="{ 'tab--active': activeTabIndex === 2 }"
              class="tab"
              aria-label="Customers"
              @click="activeTabIndex = 2"
            >
              <i-clarity:users-solid />
            </button>
          </li>

          <li>
            <button
              :ref="(el) => (activeTabIndex === 3 ? (activeTab = el) : '')"
              :class="{ 'tab--active': activeTabIndex === 3 }"
              class="tab"
              aria-label="Credibility"
              @click="activeTabIndex = 3"
            >
              <i-lucide:thumbs-up />
            </button>
          </li>

          <li>
            <button
              :ref="(el) => (activeTabIndex === 4 ? (activeTab = el) : '')"
              :class="{ 'tab--active': activeTabIndex === 4 }"
              class="tab"
              aria-label="Revenue"
              @click="activeTabIndex = 4"
            >
              <i-myicons-money-bag />
            </button>
          </li>
        </ul>

        <!-- Tab Content -->
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
    @apply relative overflow-hidden;

    &--active {
      @apply bg-green-100 text-navy-400;
    }
  }

  .feature-card {
    @apply mt-12;

    svg {
      @apply mx-auto;
    }

    h3 {
      @apply mt-12 font-firacode text-[1.35rem] font-semibold text-navy-100;
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
