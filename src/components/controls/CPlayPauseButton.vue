<template>
  <c-icon :icon="icon" @click="onTimerClick" />
</template>

<script setup lang="ts">
import CIcon from '@/components/controls/CIcon.vue';
import { useStore } from '@/stores/clock';
import ClockState from '@/types/ClockState.type';
import { pauseOutline, playOutline } from 'ionicons/icons';
import { computed } from 'vue';

const store = useStore();

const icon = computed(() => (store.getClockState === ClockState.RUNNING ? pauseOutline : playOutline));

const onTimerClick = () => {
  switch (store.getClockState) {
    case ClockState.PAUSED:
      store.activeClock.continue();
      break;
    case ClockState.STOPPED:
      store.activeClock.start();
      break;
    case ClockState.RUNNING:
      store.activeClock.pause();
      break;
  }
};
</script>
