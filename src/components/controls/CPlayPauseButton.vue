<template>
  <component :is="icon" fill="#fff" />
</template>

<script setup lang="ts">
import { useStore } from '@/stores/clock';
import ClockState from '@/types/stores/clock/ClockState.type';
import { computed } from 'vue';
import PlayIcon from '@/resources/svg/PlayIcon.vue';
import PauseIcon from '@/resources/svg/PauseIcon.vue';

const store = useStore();

const icon = computed(() =>
  store.getClockState === ClockState.RUNNING ? PauseIcon : PlayIcon
);
</script>

