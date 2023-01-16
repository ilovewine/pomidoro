<template>
  <c-icon :icon="icon" @click="onTimerClick" />
</template>

<script setup lang="ts">
import { useStore } from '@/stores/clock';
import ClockState from '@/types/stores/clock/ClockState.type';
import { computed } from 'vue';
import CIcon from '@/components/controls/CIcon.vue';
import { playOutline, pauseOutline } from 'ionicons/icons';

const store = useStore();

const icon = computed(() => (store.getClockState === ClockState.RUNNING ? pauseOutline : playOutline));

const onTimerClick = () => {
  switch (store.getClockState) {
    case ClockState.PAUSED:
    case ClockState.STOPPED:
      store.activeClock.start();
      break;
    case ClockState.RUNNING:
      store.activeClock.pause();
      break;
  }
};
</script>
