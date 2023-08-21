<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-grid class="v-home__grid">
        <ion-row>
          <ion-col>
            <h1 class="v-home__clock-type">{{ activeClockType }}</h1>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="v-home__clock-wrapper">
            <c-clock class="v-home__clock" />
            <h2 class="v-home__cycle">{{ currentCycle }}/{{ maxCycles }}</h2>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="v-home__clock-controller">
            <c-play-pause-button>Play/pause</c-play-pause-button>
          </ion-col>
          <ion-col class="v-home__clock-controller">
            <c-reset-button>Stop</c-reset-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import CPlayPauseButton from '@/components/controls/CPlayPauseButton.vue';
import CResetButton from '@/components/controls/CResetButton.vue';
import CClock from '@/components/CClock.vue';
import useClockStore from '@/stores/clock';
import { computed } from 'vue';

const store = useClockStore();

const activeClockType = computed(() => store.activeClockType);
const currentCycle = computed(() => store.cycle.current + 1);
const maxCycles = computed(() => store.cycle.max);
</script>

<style scoped lang="scss">
.v-home {
  &__cycle {
    text-align: center;
  }

  &__clock-type {
    text-align: center;
    font-size: 2.5rem;
  }

  &__grid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
  }

  &__clock-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__clock {
    margin-bottom: 1rem;
  }

  &__clock-controller {
    display: flex;
    justify-content: center;
  }
}
</style>
