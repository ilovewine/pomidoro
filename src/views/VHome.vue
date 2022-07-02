<template>
  <ion-page>
    <ion-content class="ion-padding">
      <c-timer />
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
} from "@ionic/vue";
import CTimer from "@/components/CTimer.vue";
</script>

<style scoped lang="scss"></style>
