import SettingsStore from '@/types/settings/SettingsStore.interface';
import { defineStore } from 'pinia';
import defaultBeep from '@/resources/audio/defaultBeep.wav';

const audio = new Audio(defaultBeep);

const useSettingsStore = defineStore('settings', {
  state: (): SettingsStore => ({
    isDarkModeOn: false,
    isMillisecondsOn: false,
    isSoundsOn: false,
    defaultSound: new Audio(defaultBeep),
  }),
  actions: {
    playSound() {
      if (this.isSoundsOn) {
        audio.play();
      }
    },
  },
});

export default useSettingsStore;
