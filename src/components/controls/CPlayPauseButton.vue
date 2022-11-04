<template>
  <c-icon @click="onTimerClick">
    <component :is="icon" fill="var(--ion-color-step-50)" />
  </c-icon>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/clock';
import ClockState from '@/types/stores/clock/ClockState.type';
import { computed } from 'vue';
import PlayIcon from '@/resources/svg/PlayIcon.vue';
import PauseIcon from '@/resources/svg/PauseIcon.vue';
import CIcon from '@/components/controls/CIcon.vue';

const store = useStore();

const icon = computed(() => (store.getClockState === ClockState.RUNNING ? PauseIcon : PlayIcon));

const onTimerClick = () => {
  switch (store.getClockState) {
    case ClockState.PAUSED:
    case ClockState.STOPPED:
      store.clock.start();
      break;
    case ClockState.RUNNING:
      store.clock.pause();
      break;
  }
};
</script>
