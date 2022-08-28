<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col>
            <c-clock />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col
            ><c-play-pause-button>Play/pause</c-play-pause-button></ion-col
          >
          <ion-col><c-stop-button>Stop</c-stop-button></ion-col>
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
</script>

<style scoped lang="scss"></style>
