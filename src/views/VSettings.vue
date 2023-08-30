<template>
  <ion-page class="v-settings">
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-toggle color="primary" enable-on-off-labels v-model="settingsStore.isDarkModeOn">Dark Mode</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle color="primary" enable-on-off-labels v-model="settingsStore.isMillisecondsOn">
            Enable Milliseconds
          </ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle color="primary" enable-on-off-labels v-model="settingsStore.isSoundsOn">Enable Sounds</ion-toggle>
        </ion-item>
        <c-setting-block label="Work Timer">
          <c-time-select :timer="workTimer" />
        </c-setting-block>
        <c-setting-block label="Short Break Timer">
          <c-time-select :timer="breakTimer" />
        </c-setting-block>
        <c-setting-block label="Long Break Timer">
          <c-time-select :timer="longBreakTimer" />
        </c-setting-block>
        <ion-item>
          <ion-input
            label="Amount of Cycles"
            type="number"
            inputmode="decimal"
            class="v-settings__cycle"
            v-model="clockStore.cycle.max"
            :min="1" />
        </ion-item>
        <c-setting-block
          v-for="clockType of Object.values(ClockType)"
          :key="clockType"
          :label="`${clockType} Tomato Color`">
          <c-color-picker v-model="colors[clockType]" />
        </c-setting-block>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import CSettingBlock from '@/components/settings/CSettingBlock.vue';
import CTimeSelect from '@/components/settings/CTimeSelect.vue';
import CColorPicker from '@/components/settings/CColorPicker.vue';
import useClockStore from '@/stores/clock';
import { ClockType } from '@/types/clock/ClockType';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
  IonInput,
  IonItem,
} from '@ionic/vue';
import { computed } from 'vue';
import useSettingsStore from '@/stores/settings';

const clockStore = useClockStore();
const settingsStore = useSettingsStore();

const workTimer = computed(() => clockStore.durationSettings[ClockType.WORK]);
const breakTimer = computed(() => clockStore.durationSettings[ClockType.BREAK]);
const longBreakTimer = computed(() => clockStore.durationSettings[ClockType.LONG_BREAK]);

const colors = settingsStore.colors;
</script>

<style lang="scss" scoped>
.v-settings {
  &__cycle {
    text-align: right;
  }
}
</style>
