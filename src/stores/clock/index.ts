import { defineStore } from 'pinia';
import State from '@/types/Store.interface';
import Clock from './Clock';
import Time from './Time';
import { TimeType } from '@/types/Time.type';
import ClockState from '@/types/ClockState.type';

// const DEFAULT_DURATION = {
//   [TimeType.BREAK]: new Time(5, 0, TimeType.BREAK),
//   [TimeType.WORK]: new Time(25, 0, TimeType.WORK),
//   [TimeType.LONG_BREAK]: new Time(30, 0, TimeType.LONG_BREAK),
// };

const DEFAULT_DURATION = {
  [TimeType.BREAK]: new Time(0, 5, TimeType.BREAK),
  [TimeType.WORK]: new Time(0, 4, TimeType.WORK),
  [TimeType.LONG_BREAK]: new Time(0, 3, TimeType.LONG_BREAK),
};

export const useStore = defineStore('clock', {
  state: (): State => ({
    clock: Object.fromEntries(
      Object.values(TimeType).map(clockType => [clockType, new Clock(DEFAULT_DURATION[clockType])]),
    ) as Record<TimeType, Clock>,
    durationSettings: DEFAULT_DURATION,
    activeClockType: TimeType.WORK,
    cycle: 0,
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
    restartAllClocks() {
      for (let clock of Object.values(this.clock)) {
        clock = new Clock(this.getSetting(clock.time.type));
      }
    },
    restartActiveClock() {
      this.clock[this.activeClockType] = new Clock(this.getSetting(this.activeClockType));
    },
    setActiveClock(type: TimeType) {
      this.activeClockType = type;
    },
    setDefaultDurationSettings(newTimer: Time) {
      this.durationSettings[newTimer.type] = newTimer;
      this.restartActiveClock();
    },
    setNextCycle() {
      ++this.cycle;
      this.cycle %= 4;
      if (!this.cycle) this.setActiveClock(TimeType.LONG_BREAK);
    },
  },
});
