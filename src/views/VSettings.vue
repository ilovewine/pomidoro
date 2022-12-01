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
              <c-setting-block label="Work Timer">
                <c-time-select :timer="workTimer" />
              </c-setting-block>
              <c-setting-block label="Break Timer">
                <c-time-select :timer="breakTimer" />
              </c-setting-block>
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
} from '@ionic/vue';
import CSettingBlock from '@/components/CSettingBlock.vue';
import { useStore } from '@/stores/clock';
import { computed } from '@vue/reactivity';
import CTimeSelect from '@/components/CTimeSelect.vue';

const store = useStore();

const workTimer = computed(() => store.durationSettings.base);
const breakTimer = computed(() => store.durationSettings.break);
</script>
