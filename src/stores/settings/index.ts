import SettingsStore from '@/types/settings/SettingsStore.interface';
import { defineStore } from 'pinia';
import defaultBeep from '@/resources/audio/defaultBeep.wav';
import { ClockType } from '@/types/clock/ClockType';
import useClockStore from '@/stores/clock';

const audio = new Audio(defaultBeep);

const useSettingsStore = defineStore('settings', {
  state: (): SettingsStore => ({
    isDarkModeOn: false,
    isMillisecondsOn: false,
    isSoundsOn: true,
    sound: audio,
    colors: {
      [ClockType.BREAK]: {
        primary: '#e0c111',
        secondary: '#1d6113',
      },
      [ClockType.WORK]: {
        primary: '#b90505',
        secondary: '#1d6113',
      },
      [ClockType.LONG_BREAK]: {
        primary: '#380808',
        secondary: '#1d6113',
      },
    },
  }),
  getters: {
    currentColor: state => {
      const clockStore = useClockStore();
      return state.colors[clockStore.activeClockType];
    },
  },
  actions: {
    playSound() {
      if (this.isSoundsOn) {
        this.sound.play();
      }
    },
  },
});

export default useSettingsStore;
