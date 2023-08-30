<template>
  <ion-page class="v-about">
    <ion-header>
      <ion-toolbar>
        <ion-title>About</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding-horizontal">
      <ion-grid class="v-about__grid">
        <ion-row class="v-about__row">
          <ion-col class="v-about__content">
            <p>
              A
              <i>Pomodoro Technique</i>
              , originally invented by Francesco Cirillo in 1980, is a time management technique that consists of working in
              25-minute intervals separated by 5-minute breaks. One cycle, called
              <i>pomodoro</i>
              , consists of 4 work sessions and 1 break session which lasts for about half an hour.
            </p>
            
            <p>Before proceeding, make sure that:
            <ol>
              <li>you have set the goal you're about to work on (you can write them on list and set priorities in order to work on the most important things first)</li>
              <li>you have at least 90 minutes of spare time</li>
              <li>you can't be disturbed during your work (it includes your phone calls, notifications, emails, etc.)</li>
            </ol>
            </p>

            <p>Fun fact: Francesco did use a physical timer that looked like a tomato, hence the technique's name 😉</p>

            <p>Happy Pomodoro'ing! 🤓</p>

            <div class="v-about__credits">
              <span><a href="https://github.com/ilovewine">Mateusz Piątkowski</a> «» 2023</span>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
</script>

<style lang="scss" scoped>
p {
  line-height: 1.5;
}

.v-about {
  &__grid {
    height: 100%;
    display: flex;
  }
  &__row {
    align-self: stretch;
  }
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__credits {
    display: flex;
    justify-content: center;
    letter-spacing: 0.3rem;
    margin-top: auto;
    padding: 1rem 0.5rem;
  }
}
</style>
