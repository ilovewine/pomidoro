<template>
  <div class="c-clock">
    <svg viewBox="0 0 40 18" class="c-clock__time">
      <text x="0" y="15">{{ clock.readableTime }}</text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import Clock from '@/stores/clock/Clock';
import { PropType } from 'vue';

defineProps({
  clock: {
    type: Object as PropType<Clock>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.c-clock {
  width: 100%;
  max-width: 30rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: rgba(#eb2727, 1);
  position: relative;
  cursor: pointer;

  &__time {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 80%;
    margin: 0;
    fill: var(--ion-color-light);
  }
}
</style>
