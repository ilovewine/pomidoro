<template>
  <span class="c-icon">
    <slot />
  </span>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.c-icon {
  border-radius: 50%;
  background-color: var(--ion-color-medium-tint);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  cursor: pointer;
}
</style>
