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
                <ion-button color="primary">25 : 00</ion-button>
              </c-setting-block>
              <c-setting-block label="Break Timer">
                <ion-button color="primary">5 : 00</ion-button>
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
  IonInput,
  IonButton,
} from '@ionic/vue';
import CSettingBlock from '@/components/CSettingBlock.vue';
import { useStore } from '@/stores/clock';

const store = useStore();

const onTimeButtonClick = () => {
  console.log('time clicked');
};
</script>
