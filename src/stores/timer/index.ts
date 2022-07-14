import { defineStore } from 'pinia';
import Time from './Time'

export const useStore = defineStore('timer', {
  state: () => ({
    time: new Time(25),
    timeBase: {
      break: new Time(5),
      base: new Time(25),
    },
    isRunning: false,
  }),
  getters: {
    getTime: (state) => state.time.readableTime
  },
  actions: {
    setTime(seconds: number) {
        this.time.update(seconds);
    }
  }
});
