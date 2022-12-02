import { defineStore } from 'pinia';
import State from '@/types/stores/clock/Store.interface';
import Clock from './Clock';
import Time, { TimeType } from './Time';

const DEFAULT_DURATION = {
  [TimeType.BREAK]: new Time(5, 0, TimeType.BREAK),
  [TimeType.BASE]: new Time(25, 0, TimeType.BASE),
};

export const useStore = defineStore('clock', {
  state: (): State => ({
    clock: new Clock(DEFAULT_DURATION[TimeType.BASE]),
    durationSettings: DEFAULT_DURATION,
  }),
  getters: {
    getTime: state => state.clock.readableTime,
    getClockState: state => state.clock.state,
    getSetting: state => (type: TimeType) => state.durationSettings[type],
  },
  actions: {
    setClock(time: Time) {
      this.clock = new Clock(time);
    },
    restartClock() {
      this.clock = new Clock(this.getSetting(TimeType.BASE));
    },
    setDefaultDurationSettings(newTimer: Time) {
      this.durationSettings[newTimer.type] = newTimer;
      this.restartClock();
    },
  },
});
