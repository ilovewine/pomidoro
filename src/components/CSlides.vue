<template>
  <swiper
    loop
    @slide-change="onSlideChange"
    class="c-slides"
    :initial-slide="timeTypeValues.indexOf(store.activeClockType)">
    <swiper-slide v-for="clock in timeTypeValues" :key="clock">
      <c-clock
        :clock="clocks[clock]"
        :class="['c-slides__slide', { 'c-slides__slide--active': store.activeClockType === clock }]" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import '@ionic/vue/css/ionic-swiper.css';
import { timeTypeValues } from '@/types/Time.type';
import { useStore } from '@/stores/clock';
import CClock from '@/components/CClock.vue';

const store = useStore();
const clocks = store.clock;

const onSlideChange = (swiper: any) => {
  const index = swiper.realIndex;
  store.setActiveClock(timeTypeValues[index]);
};
</script>

<style scoped lang="scss">
.c-slides {
  width: 100%;

  &__slide {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;

    &--active {
      border: 1px solid green;
    }
  }
}
</style>
