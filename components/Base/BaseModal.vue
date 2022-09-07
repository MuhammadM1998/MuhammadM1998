<script setup>
  const props = defineProps({
    isModalVisible: {
      type: Boolean,
      required: true,
    },
  });

  const emit = defineEmits(['update:isModalVisible']);
  const modal = ref(null);

  const openModal = () => {
    document
      .querySelector('main')
      .classList.add('blur', 'pointer-events-none', 'select-none');
    document.body.classList.add('overflow-hidden');

    onClickOutside(modal, () => closeModal(), {
      ignore: [modal],
    });
  };

  const closeModal = () => {
    emit('update:isModalVisible', false);
    document
      .querySelector('main')
      .classList.remove('blur', 'pointer-events-none', 'select-none');
    document.body.classList.remove('overflow-hidden');
  };

  watch(
    () => props.isModalVisible,
    (newValue) => {
      if (newValue) openModal();
      else closeModal();
    }
  );
</script>

<template>
  <Teleport to="body">
    <Transition name="pop" appear>
      <div
        v-if="isModalVisible"
        ref="modal"
        class="modal bg-navy-600"
        role="dialog"
      >
        {{ $attrs.class }}
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
  .modal {
    @apply fixed top-1/2 left-1/2 z-50  w-[min(85vw,_600px)] -translate-y-1/2 -translate-x-1/2 rounded-lg  py-6 px-6 text-center;

    &.pop-enter-active,
    &.pop-leave-active {
      @apply transition-all duration-300;
    }

    &.pop-enter-from,
    &.pop-leave-to {
      @apply scale-95 opacity-0;
    }
  }
</style>
