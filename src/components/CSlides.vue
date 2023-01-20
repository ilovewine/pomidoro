<template>
  <swiper loop v-on="events" class="c-slides">
    <slot />
  </swiper>
</template>

<script lang="ts">
const events = {
  slideChange: (swiper: any) => {
    console.log('slideChange', swiper);
  },
  sliderMove: (swiper: any) => {
    console.log('sliderMove', swiper);
  },
};
</script>
<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import 'swiper/scss';
import '@ionic/vue/css/ionic-swiper.css';

defineEmits(events);
</script>

<style scoped lang="scss">
.c-slides {
  width: 100%;
}
</style>
