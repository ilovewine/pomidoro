<template>
  <div class="c-clock">
    <ion-text color="primary">
      <h2 class="c-clock__time">{{ store.clock.readableTime }}</h2>
    </ion-text>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/clock';
const store = useStore();
</script>

<style scoped lang="scss">
.c-clock {
  width: 100%;
  max-width: 30rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: rgba(#eb2727, 0.6);
  position: relative;

  &:after {
    content: '';
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#eb2727, 1);
  }

  &__time {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font-size: 5rem;
    margin: 0;
  }
}
</style>
