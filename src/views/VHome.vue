<template>
  <ion-page>
    <ion-content class="v-home__content ion-padding v-home__content">
      <ion-grid class="v-home__grid">
        <ion-row>
          <ion-col>
            <c-clock class="v-home__clock" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="v-home__clock-controller"><c-play-pause-button>Play/pause</c-play-pause-button></ion-col>
          <ion-col class="v-home__clock-controller"><c-stop-button>Stop</c-stop-button></ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonFooter, IonToolbar, IonTitle, IonGrid, IonRow, IonCol } from '@ionic/vue';
import CClock from '@/components/CClock.vue';
import CPlayPauseButton from '@/components/controls/CPlayPauseButton.vue';
import CStopButton from '@/components/controls/CStopButton.vue';
import CControlButton from '@/components/controls/CControlButton.vue';
</script>

<style scoped lang="scss">
.v-home {
  &__grid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  &__clock {
    margin-bottom: 5rem;
  }
  &__clock-controller {
    display: flex;
    justify-content: center;
  }
}
</style>
