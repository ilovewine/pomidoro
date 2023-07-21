<template>
  <ion-page class="v-settings">
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-list>
              <ion-item>
                <ion-toggle color="primary" enable-on-off-labels v-model="settingsStore.isDarkModeOn">
                  Dark Mode
                </ion-toggle>
              </ion-item>
              <ion-item>
                <ion-toggle color="primary" enable-on-off-labels v-model="settingsStore.isMillisecondsOn">
                  Enable Milliseconds
                </ion-toggle>
              </ion-item>
              <ion-item>
                <ion-toggle color="primary" enable-on-off-labels v-model="settingsStore.isSoundsOn">
                  Enable Sounds
                </ion-toggle>
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
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import CSettingBlock from '@/components/settings/CSettingBlock.vue';
import CTimeSelect from '@/components/settings/CTimeSelect.vue';
import useClockStore from '@/stores/clock';
import { ClockType } from '@/types/clock/ClockType';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
  IonInput,
} from '@ionic/vue';
import { computed } from 'vue';
import useSettingsStore from '@/stores/settings';

const clockStore = useClockStore();
const settingsStore = useSettingsStore();

const workTimer = computed(() => clockStore.durationSettings[ClockType.WORK]);
const breakTimer = computed(() => clockStore.durationSettings[ClockType.BREAK]);
const longBreakTimer = computed(() => clockStore.durationSettings[ClockType.LONG_BREAK]);
</script>

<style lang="scss" scoped>
.v-settings {
  &__cycle {
    text-align: right;
  }
}
</style>
