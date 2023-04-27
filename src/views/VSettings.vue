<template>
  <ion-page>
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
              <c-setting-block label="Dark Mode">
                <ion-toggle color="primary" />
              </c-setting-block>
              <c-setting-block label="Enable Milliseconds">
                <ion-toggle color="primary" />
              </c-setting-block>
              <c-setting-block label="Work Timer">
                <c-time-select :timer="workTimer" />
              </c-setting-block>
              <c-setting-block label="Short Break Timer">
                <c-time-select :timer="breakTimer" />
              </c-setting-block>
              <c-setting-block label="Long Break Timer">
                <c-time-select :timer="longBreakTimer" />
              </c-setting-block>
              <c-setting-block label="Number of Cycles">
                <ion-input type="number" placeholder="4" />
              </c-setting-block>
              <!-- TODO: pomidoro#13 set cycle number -->
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
} from '@ionic/vue';
import { computed } from '@vue/reactivity';

const store = useStore();

const workTimer = computed(() => store.durationSettings[ClockType.WORK]);
const breakTimer = computed(() => store.durationSettings[ClockType.BREAK]);
const longBreakTimer = computed(() => store.durationSettings[ClockType.LONG_BREAK]);
</script>
