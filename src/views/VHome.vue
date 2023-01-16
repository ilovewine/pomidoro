<template>
  <ion-page>
    <ion-content class="v-home__content ion-padding v-home__content">
      <ion-grid class="v-home__grid">
        <ion-row>
          <ion-col class="v-home__clock-wrapper">
            <c-clock :clock="activeClock" class="v-home__clock v-home__clock--active" @click="chooseClock" />
            <ion-text class="v-home__clock-title">{{ activeClockType }}</ion-text>
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
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import CClock from '@/components/CClock.vue';
import CPlayPauseButton from '@/components/controls/CPlayPauseButton.vue';
import CResetButton from '@/components/controls/CResetButton.vue';
import { useStore } from '@/stores/clock';
const store = useStore();

const activeClock = store.activeClock;
const activeClockType = store.activeClockType;

const chooseClock = () => {
  console.log('click');
};
</script>

<style scoped lang="scss">
.v-home {
  &__grid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__clock-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__clock {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  &__clock-title {
    font-size: 2rem;
  }

  &__clock-controller {
    display: flex;
    justify-content: center;
  }
}
</style>
