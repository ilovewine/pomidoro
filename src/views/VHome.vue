<template>
  <ion-page>
    <ion-content class="v-home__content ion-padding">
      <ion-grid class="v-home__grid">
        <ion-row>
          <ion-col>
            <c-clock />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="v-home__clock-controller">
            <c-control-button :icon="CPlayPauseButton" />
          </ion-col>
          <ion-col class="v-home__clock-controller">
            <c-control-button :icon="CStopButton" />
          </ion-col>
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
import {
  IonPage,
  IonContent,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/vue';
import CClock from '@/components/CClock.vue';
import CPlayPauseButton from '@/components/controls/CPlayPauseButton.vue';
import CStopButton from '@/components/controls/CStopButton.vue';
import CControlButton from '@/components/controls/CControlButton.vue';
</script>

<style scoped lang="scss">
.v-home {
  &__content {
    position: relative;
  }
  &__grid {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
  }
  &__clock-controller {
    display: flex;
    justify-content: center;
  }
}
</style>
