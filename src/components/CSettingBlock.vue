<template>
  <ion-item>
    <ion-label>{{ label }}</ion-label>
    <slot />
  </ion-item>
</template>

<script setup lang="ts">
import { IonLabel, IonItem } from '@ionic/vue';

defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>
