import { defineStore } from 'pinia';
import State from '@/types/stores/clock/Store.interface';
import Clock from './Clock';
import Time from './Time';

const DEFAULT_DURATION = {
  BREAK: () => new Time(5, 0),
  BASE: () => new Time(25, 0),
};

export const useStore = defineStore('clock', {
  state: (): State => ({
    clock: new Clock(DEFAULT_DURATION.BASE()),
    durationSettings: {
      break: DEFAULT_DURATION.BREAK(),
      base: DEFAULT_DURATION.BASE(),
    },
  }),
  getters: {
    getTime: (state) => state.clock.readableTime,
    getClockState: (state) => state.clock.state,
  },
  actions: {
    setClock(time: Time) {
      this.clock = new Clock(time);
    },
    restartClock() {
      this.clock = new Clock(this.durationSettings.base);
    },
    setDefaultDurationSettings(settings: Partial<{ break: Time; base: Time }>) {
      if (settings.break) this.durationSettings.break = settings.break;
      if (settings.base) this.durationSettings.base = settings.base;
    },
  },
});
