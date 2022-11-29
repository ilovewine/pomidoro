<template>
  <span class="c-icon__background">
    <ion-icon :icon="icon" size="large" class="c-icon" />
  </span>
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
.c-icon {
  &__background {
    border-radius: 50%;
    background-color: var(--ion-color-medium-tint);
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    cursor: pointer;
  }
}
</style>
