<template>
  <span class="c-icon" :class="{ disabled }">
    <ion-icon :icon="icon" class="c-icon__svg icon-large" :class="{ disabled }" />
  </span>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';

defineProps({
  icon: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.c-icon {
  border-radius: 50%;
  background-color: var(--ion-color-medium-shade);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  &.disabled {
    background-color: var(--ion-color-light-shade);
  }

  &__svg {
    &.disabled {
      color: var(--ion-color-medium-contrast);
    }
  }
}
</style>
