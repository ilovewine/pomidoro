import SettingsStore from '@/types/settings/SettingsStore.interface';
import { defineStore } from 'pinia';
// @ts-ignore
import defaultBeep from '@/resources/audio/defaultBeep.wav';
import { ClockType } from '@/types/clock/ClockType';
import useClockStore from '@/stores/clock';

const audio = new Audio(defaultBeep);

const useSettingsStore = defineStore('settings', {
  state: (): SettingsStore => ({
    isCentisecondsOn: false,
    isSoundsOn: true,
    sound: audio,
    colors: {
      [ClockType.BREAK]: '#e0c111',
      [ClockType.WORK]: '#b90505',
      [ClockType.LONG_BREAK]: '#380808',
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
