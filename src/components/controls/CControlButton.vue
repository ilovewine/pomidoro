<template>
  <div class="c-control-button">
    <ion-icon :name="`${icon}`"></ion-icon>
  </div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';

defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.c-control-button {
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  background-color: var(--ion-color-step-650);
  position: relative;
}

ion-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: var(--ion-text-color);
  width: 80%;
  height: 80%;
}
</style>
