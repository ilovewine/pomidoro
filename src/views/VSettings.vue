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
                <ion-toggle color="primary">Dark Mode</ion-toggle>
              </ion-item>
              <ion-item>
                <ion-toggle color="primary">Enable Milliseconds</ion-toggle>
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
                  v-model="store.cycle.max"
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
import { useStore } from '@/stores/clock';
import { ClockType } from '@/types/ClockType';
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

const store = useStore();

const workTimer = computed(() => store.durationSettings[ClockType.WORK]);
const breakTimer = computed(() => store.durationSettings[ClockType.BREAK]);
const longBreakTimer = computed(() => store.durationSettings[ClockType.LONG_BREAK]);
</script>

<style lang="scss" scoped>
.v-settings {
  &__cycle {
    text-align: right;
  }
}
</style>
