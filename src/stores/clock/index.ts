import { defineStore } from 'pinia';
import State from '@/types/stores/clock/Store.interface';
import Clock from './Clock';
import Time, { TimeType } from './Time';
import ClockState from '@/types/stores/clock/ClockState.type';

const DEFAULT_DURATION = {
  [TimeType.BREAK]: new Time(5, 0, TimeType.BREAK),
  [TimeType.WORK]: new Time(25, 0, TimeType.WORK),
  [TimeType.LONG_BREAK]: new Time(30, 0, TimeType.LONG_BREAK),
};

export const useStore = defineStore('clock', {
  state: (): State => ({
    clock: Object.fromEntries(
      Object.values(TimeType).map(clockType => [clockType, new Clock(DEFAULT_DURATION[clockType])]),
    ) as Record<TimeType, Clock>,
    durationSettings: DEFAULT_DURATION,
    activeClockType: TimeType.WORK,
  }),
  getters: {
    activeClock(): Clock {
      return this.clock[this.activeClockType] as Clock;
    },
    getTime(): string {
      return this.activeClock.readableTime;
    },
    getClockState(): ClockState {
      return this.activeClock.state;
    },
    getSetting: state => (type: TimeType) => state.durationSettings[type],
  },
  actions: {
    setClock(type: TimeType, time: Time) {
      this.clock[type] = new Clock(time);
    },
    restartClock() {
      this.clock[this.activeClockType] = new Clock(this.getSetting(this.activeClockType));
    },
    setDefaultDurationSettings(newTimer: Time) {
      this.durationSettings[newTimer.type] = newTimer;
      this.restartClock();
    },
  },
});
