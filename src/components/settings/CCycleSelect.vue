<template>
  <ion-input type="number" :placeholder="cycle" />
</template>

<script setup lang="ts">
import { IonInput } from '@ionic/vue';
import { useStore } from '@/stores/clock';
import { computed } from 'vue';

const store = useStore();

const cycle = computed(() => store.cycle.toString());
</script>

<style scoped lang="scss"></style>
