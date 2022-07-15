import { defineStore } from 'pinia';
import ClockState from '@/types/stores/clock/ClockState.type';
import State from '@/types/stores/clock/Store.interface';
import Clock from './Clock';
import Time from './Time';

export const useStore = defineStore('clock', {
  state: (): State => ({
    time: new Clock(25, 0),
    durationSettings: {
      break: new Time(5, 0),
      base: new Time(25, 0),
    },
  }),
  getters: {
    getTime: (state) => state.time.readableTime,
  },
  actions: {
    setTime(minutes: number, seconds: number) {
      this.time = new Clock(minutes, seconds);
    },
    setState(state: ClockState) {
      this.time.state = state;
    },
  },
});
