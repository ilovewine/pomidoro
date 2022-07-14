<template>
  <div class="c-timer" @click="onTimerClick">
    <span class="c-timer__time">{{ remainingTime }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useStore } from '@/stores/timer';
const isRunning = ref(false);
const remainingTime = ref('08:45');
const store = useStore();

const onTimerClick = () => (isRunning.value = !isRunning.value);

watch(isRunning, () => {
  if (isRunning.value) {
    console.log('its running');
  } else console.log('its not running');
});
</script>

<style scoped lang="scss">
.c-timer {
  width: 100%;
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
  }
}
</style>
