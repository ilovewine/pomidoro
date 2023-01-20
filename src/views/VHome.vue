<template>
  <ion-page>
    <ion-content class="v-home__content ion-padding v-home__content">
      <ion-grid class="v-home__grid">
        <ion-row>
          <ion-col class="v-home__clock-wrapper">
            <c-slides class="v-home__slides">
              <swiper-slide v-for="clock in clockTypes" :key="clock">
                <c-clock
                  :clock="clocks[clock]"
                  :class="['v-home__clock', { 'v-home__clock--active': store.activeClockType === clock }]" />
              </swiper-slide>
            </c-slides>
            <!-- <c-slides>
              <c-clock
                v-for="clock in clocks"
                :key="clock"
                :clock="clock"
                class="v-home__clock v-home__clock--active" />
            </c-slides> -->
            <ion-text class="v-home__clock-title">{{ activeClockType }}</ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="v-home__clock-controller">
            <c-play-pause-button>Play/pause</c-play-pause-button>
          </ion-col>
          <ion-col class="v-home__clock-controller">
            <c-reset-button>Stop</c-reset-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import CClock from '@/components/CClock.vue';
import CPlayPauseButton from '@/components/controls/CPlayPauseButton.vue';
import CResetButton from '@/components/controls/CResetButton.vue';
import { useStore } from '@/stores/clock';
import CSlides from '@/components/CSlides.vue';
import { SwiperSlide } from 'swiper/vue';
const store = useStore();

const activeClockType = store.activeClockType;
const clockTypes = Object.keys(store.clock);
const clocks = store.clock;
</script>

<style scoped lang="scss">
.v-home {
  &__grid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__clock-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__slides {
    max-width: 15rem;
  }

  &__clock {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  &__clock-title {
    font-size: 2rem;
  }

  &__clock-controller {
    display: flex;
    justify-content: center;
  }
}
</style>
