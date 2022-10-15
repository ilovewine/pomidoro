<template>
  <div class="c-control-button">
    <component :is="icon" class="c-control-button__icon" />
  </div>
</template>

<script setup lang="ts">
import { ComponentPublicInstance, PropType } from 'vue';

defineProps({
  icon: {
    type: Object as PropType<ComponentPublicInstance>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.c-control-button {
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: 100%;
  background-color: var(--ion-color-step-700);
  position: relative;

  &__icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
  }
}
</style>
