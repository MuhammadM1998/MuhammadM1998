<template>
  <div>
    <div class="coding-panda">
      <div class="panda">
        <div class="panda__head" />
        <div class="panda__ear panda__ear--left" />
        <div class="panda__ear panda__ear--right" />
        <div class="panda__eye panda__eye--left" />
        <div class="panda__eye panda__eye--right" />
        <div class="panda__muzzle" />
        <div class="panda__body-container">
          <div class="panda__body" />
        </div>
        <div class="panda__hand panda__hand--left" />
        <div class="panda__hand panda__hand--right" />
      </div>
      <div class="laptop" />
      <div class="table" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .coding-panda {
    // Z-Indecies
    .panda__body,
    .panda__ear,
    .panda__hand {
      @apply z-0;
    }

    .panda__head {
      @apply z-10;
    }

    .panda__eye,
    .panda__muzzle {
      @apply z-20;
    }

    .laptop,
    .table {
      @apply z-30;
    }

    * {
      @apply duration-500;
    }

    @apply relative h-[450px] w-[400px] xl:h-[500px] xl:w-[500px];

    .panda {
      @apply absolute left-[12.25%] h-3/4 w-3/4;
    }

    .panda__ear {
      @apply absolute top-[10%];
      @apply h-[21.5%] w-[21.5%] rounded-[40%] bg-[#575674];

      &--left {
        @apply left-[22.5%];
      }

      &--right {
        @apply right-[22.5%];
      }
    }

    .panda__head {
      @apply relative top-[15%] mx-auto;
      @apply h-[45%] w-1/2 rounded-[40%] bg-[#c8d6e5];
      @apply shadow-[inset_30px_0px_0_rgba(0,0,0,0.3)];
    }

    .panda__eye {
      @apply h-[18.25%] w-[15.75%] rounded-[50%_45%_45%_50%] bg-[#575674];
      @apply absolute top-[30%];
      @apply after:h-[45%] after:w-1/2 after:rounded-[60%] after:bg-[#c8d6e5];
      @apply after:absolute after:top-1/2;
      @apply after:animate-[blink_4s_ease-in_infinite];

      &--left {
        @apply left-[30%] after:left-[30%];
      }

      &--right {
        @apply right-[30%] after:right-[30%];
      }
    }

    .panda__muzzle {
      @apply h-[20%] w-[18.25%] rounded-[70%_70%_50%_50%] bg-[#c8d6e5];
      @apply absolute top-[40.75%] left-1/2 -translate-x-1/2;
      @apply shadow-[inset_-5px_-15px_0_rgba(0,0,0,0.3)];
      @apply after:absolute;

      &:after {
        @apply left-0 right-0 bottom-0;
        @apply mx-auto h-[32%] w-[40%] rounded-[50%_50%_20%_50%] bg-[#575674] xl:h-[37%];
        @apply -translate-y-1/2 rotate-45;
        @apply shadow-[inset_-10px_-6px_0_rgba(0,0,0,0.3)];
      }
    }

    .panda__body-container {
      @apply absolute top-[13%] left-1/2 h-1/2 w-[58.25%] -translate-x-1/2 overflow-hidden xl:top-[15%];

      .panda__body {
        @apply h-[450px] w-[350px] rounded-[60%] bg-[#c8d6e5];
        @apply absolute left-1/2 -translate-x-1/2 translate-y-[30%];
        @apply shadow-[inset_70px_0px_0_rgba(0,0,0,0.4)];
      }
    }

    .panda__hand {
      @apply h-[15%] w-[15%] rounded-[40%] bg-[#575674];
      @apply absolute bottom-[5%];
      @apply shadow-[inset_20px_20px_0_rgba(0,0,0,0.3)];
      @apply animate-[hand-move_0.7s_ease-in-out_infinite];

      &--left {
        @apply left-[10%];
      }

      &--right {
        @apply right-[10%];
        animation-delay: -0.35s;
      }
    }

    .laptop {
      @apply h-[30%] w-1/2 rounded-t-[10px] bg-[#1e272e];
      @apply absolute bottom-1/4 left-1/2 -translate-x-1/2;
      @apply shadow-[0_0_200px_10px_#70b3fb];
      @apply animate-[screen-light-change_5s_infinite];
    }

    .table {
      @apply h-[7.5%] w-[95%] -translate-x-1/2 bg-[#537895];
      @apply absolute bottom-[18%] left-1/2;
    }

    .panda:hover {
      .panda__head,
      .panda__muzzle,
      .panda__body {
        @apply bg-[#28fdda];
      }

      .panda__muzzle {
        &::after,
        &::before {
          @apply bg-[#70b3fb];
        }
      }

      .panda__ear--left,
      .panda__ear--right,
      .panda__hand--left,
      .panda__hand--right {
        @apply bg-[#fedc89];
      }

      .panda__eye--left,
      .panda__eye--right {
        @apply bg-[#f0597c];
      }

      .panda__eye--left:after,
      .panda__eye--right:after {
        @apply bg-[#c8d6e5];
      }

      .panda__hand {
        animation-duration: 0.2s;

        &--right {
          animation-delay: -0.08s;
        }
      }

      & + .laptop {
        animation-duration: 2s;
      }
    }
  }

  /* Animations */
  @keyframes hand-move {
    0% {
      transform: translatey(0);
    }

    50% {
      transform: translatey(20px);
    }

    100% {
      transform: translatey(0);
    }
  }

  @keyframes blink {
    0% {
      transform: scaley(1);
    }

    3.5% {
      transform: scaley(0);
    }

    5% {
      transform: scaley(1);
    }
  }

  @keyframes screen-light-change {
    0% {
      box-shadow: 0 0 200px 10px #70b3fb;
    }

    20% {
      box-shadow: 0 0 200px 10px #70b3fb;
    }

    25% {
      box-shadow: 0 0 200px 10px #70b3fb;
    }

    45% {
      box-shadow: 0 0 200px 10px #70b3fb;
    }

    50% {
      box-shadow: 0 0 200px 10px rgba(#af86eb, 0.5);
    }

    70% {
      box-shadow: 0 0 200px 10px rgba(#af86eb, 0.5);
    }

    75% {
      box-shadow: 0 0 200px 10px rgba(#28fdda, 0.8);
    }

    95% {
      box-shadow: 0 0 200px 10px rgba(#28fdda, 0.8);
    }

    100% {
      box-shadow: 0 0 200px 10px #70b3fb;
    }
  }
</style>
