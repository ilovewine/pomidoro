<template>
  <c-icon :icon="refreshOutline" @click="onResetButtonClick" />
</template>

<script setup lang="ts">
import CIcon from '@/components/controls/CIcon.vue';
import { useStore } from '@/stores/clock';
import { refreshOutline } from 'ionicons/icons';

const store = useStore();

const onResetButtonClick = () => {
  // TODO: prompt user to confirm
  store.restartAllClocks();
};
</script>
