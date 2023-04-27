<template>
  <div class="c-clock" v-bind="$attrs">
    <transition name="fade">
      <svg viewBox="0 0 40 18" class="c-clock__time">
        <text x="0" y="15">{{ activeClock.readableTime }}</text>
      </svg>
    </transition>
  </div>
  <ion-text class="c-clock__name">{{ activeClockType }}</ion-text>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/clock';
import { IonText } from '@ionic/vue';
import { computed } from 'vue';

const store = useStore();

const activeClock = computed(() => store.activeClock);
const activeClockType = computed(() => store.activeClockType);
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

  &__name {
    font-size: 2rem;
  }
}
</style>
