<template>
  <div class="c-clock" v-bind="$attrs">
    <transition name="fade">
      <svg viewBox="0 0 40 18" class="c-clock__time">
        <text x="0" y="15">{{ activeClock.readableTime }}</text>
      </svg>
    </transition>
  </div>
</template>

<script setup lang="ts">
import useClockStore from '@/stores/clock';
import { computed } from 'vue';

const store = useClockStore();

const activeClock = computed(() => store.activeClock);
</script>

<style scoped lang="scss">
.c-clock {
  width: 100%;
  max-width: 30rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: rgba(#eb2727, 1);
  position: relative;
  margin-bottom: 2rem;

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
