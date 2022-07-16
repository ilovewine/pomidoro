<template>
  <ion-page>
    <ion-content class="ion-padding">
      <c-clock />
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
import CClock from "@/components/CClock.vue";
</script>

<style scoped lang="scss"></style>
