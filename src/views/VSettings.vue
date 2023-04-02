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
              <!-- TODO: set cycle number -->
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonToggle,
  IonInput,
} from '@ionic/vue';
import CSettingBlock from '@/components/settings/CSettingBlock.vue';
import { useStore } from '@/stores/clock';
import { computed } from '@vue/reactivity';
import CTimeSelect from '@/components/settings/CTimeSelect.vue';
import { TimeType } from '@/types/Time.type';

const store = useStore();

const workTimer = computed(() => store.durationSettings[TimeType.WORK]);
const breakTimer = computed(() => store.durationSettings[TimeType.BREAK]);
const longBreakTimer = computed(() => store.durationSettings[TimeType.LONG_BREAK]);
</script>
