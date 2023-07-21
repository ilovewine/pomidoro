<template>
  <c-icon :icon="refreshOutline" @click="onResetButtonClick" />
</template>

<script setup lang="ts">
import CIcon from '@/components/controls/CIcon.vue';
import useClockStore from '@/stores/clock';
import { refreshOutline } from 'ionicons/icons';
import { Dialog } from '@capacitor/dialog';

const store = useClockStore();

const onResetButtonClick = async () => {
  const isConfirmed = await Dialog.confirm({
    title: 'Confirm',
    message:
      'Are you sure you wish to reset? You will lose the current state, including the clock time left and the cycle count.',
    okButtonTitle: 'Yes',
    cancelButtonTitle: 'No',
  });
  if (isConfirmed.value) store.restartAllClocks();
};
</script>
