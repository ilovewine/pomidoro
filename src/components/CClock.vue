<template>
  <div class="c-clock">
    <tomato-icon :primary-fill="currentColor" :time="activeClock.readableTime" />
  </div>
</template>

<script setup lang="ts">
import TomatoIcon from '@/resources/svg/TomatoIcon.vue';
import useClockStore from '@/stores/clock';
import useSettingsStore from '@/stores/settings';
import { computed } from 'vue';

const clockStore = useClockStore();
const settingsStore = useSettingsStore();

const activeClock = computed(() => clockStore.activeClock);
const currentColor = computed(() => settingsStore.currentColor);
</script>

<style scoped lang="scss">
.c-clock {
  display: inline-flex;
  justify-content: center;
  width: 100%;
}
</style>
