<template>
  <ion-button color="primary" @click="setTime">
    {{ timer.readableTime }}
  </ion-button>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/clock';
import Time from '@/stores/clock/Time';
import {
  IonButton,
  pickerController
} from '@ionic/vue';
import { PropType } from 'vue';

const props = defineProps({
  timer: {
    type: Object as PropType<Time>,
    required: true
  }
});


const store = useStore();

const createOptionsColumn = (maxValue: number) => Array.from({ length: maxValue }, (_, i) => ({
  text: i.toString().padStart(2, '0'),
  value: i
}));

const setTime = async () => {
  console.log('time clicked');
  const picker = await pickerController.create({
    columns: [
      {
        name: 'minutes',
        options: createOptionsColumn(100)
      },
      {
        name: 'seconds',
        options: createOptionsColumn(Time.SECONDS_IN_ONE_MINUTE)
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Confirm',
        handler: (value) => {
          store.setDefaultDurationSettings(new Time(value.minutes.value, value.seconds.value, props.timer.type));
        }
      }
    ]
  });
  await picker.present();
};
</script>

<style scoped lang="scss">
</style>