<template>
  <color-picker picker-type="chrome" v-model:pureColor="color" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { ColorPicker } from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [color: string];
}>();

const color = computed({
  get: () => props.modelValue,
  set: (color: string) => emit('update:modelValue', color),
});
</script>

<style lang="scss" scoped></style>
