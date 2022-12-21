import { defineStore } from 'pinia';
import State from '@/types/stores/clock/Store.interface';
import Clock from './Clock';
import Time, { TimeType } from './Time';

const DEFAULT_DURATION = {
  [TimeType.BREAK]: new Time(5, 0, TimeType.BREAK),
  [TimeType.WORK]: new Time(25, 0, TimeType.WORK),
};

console.log(
  Object.fromEntries(Object.values(TimeType).map(clockType => [clockType, new Clock(DEFAULT_DURATION[clockType])])),
);

export const useStore = defineStore('clock', {
  state: (): State => ({
    clock: Object.values(TimeType).map(clockType => [clockType, new Clock(DEFAULT_DURATION[clockType])]),
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
      this.clock = new Clock(this.getSetting(TimeType.WORK));
    },
    setDefaultDurationSettings(newTimer: Time) {
      this.durationSettings[newTimer.type] = newTimer;
      this.restartClock();
    },
  },
});
