<template>
  <c-control-button :icon="icon"></c-control-button>
</template>

<script setup lang="ts">
import CControlButton from './CControlButton.vue';
import { useStore } from '@/stores/clock';
import ClockState from '@/types/stores/clock/ClockState.type';
import { computed } from 'vue';

const store = useStore();

const icon = computed(() =>
  store.getClockState === ClockState.RUNNING ? 'pause-outline' : 'play-outline'
);
</script>

<style scoped lang="scss"></style>
