<template>
  <c-icon @click="onResetButtonClick">
    <reset-icon fill="var(--ion-color-step-50)" />
  </c-icon>
</template>

<script setup lang="ts">
import ResetIcon from '@/resources/svg/ResetIcon.vue';
import CIcon from '@/components/controls/CIcon.vue';
import { useStore } from '@/stores/clock';
const store = useStore();

const onResetButtonClick = () => {
  store.restartClock();
};
</script>
