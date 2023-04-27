import ClockState from '@/types/ClockState.type';
import { ClockType } from '@/types/ClockType';
import State from '@/types/Store.interface';
import { defineStore } from 'pinia';
import Clock from './Clock';
import Time from './Time';

// const DEFAULT_DURATION = {
//   [clockType.BREAK]: new Time(5, 0, clockType.BREAK),
//   [clockType.WORK]: new Time(25, 0, clockType.WORK),
//   [clockType.LONG_BREAK]: new Time(30, 0, clockType.LONG_BREAK),
// };

const DEFAULT_DURATION: Record<ClockType, Time> = {
  [ClockType.BREAK]: new Time(0, 5, ClockType.BREAK),
  [ClockType.WORK]: new Time(0, 4, ClockType.WORK),
  [ClockType.LONG_BREAK]: new Time(0, 3, ClockType.LONG_BREAK),
};

const createClockMap = (): Map<ClockType, Clock> => {
  const map = new Map();
  Object.keys(DEFAULT_DURATION).forEach(clockType => {
    map.set(clockType, new Clock(DEFAULT_DURATION[clockType as ClockType]));
  });
  return map;
};

export const useStore = defineStore('clock', {
  state: (): State => ({
    clock: createClockMap(),
    durationSettings: DEFAULT_DURATION,
    activeClockType: ClockType.WORK,
    cycle: 0,
  }),
  getters: {
    activeClock(): Clock {
      return this.clock.get(this.activeClockType) as Clock;
    },
    getTime(): string {
      return this.activeClock.readableTime;
    },
    getClockState(): ClockState {
      return this.activeClock.state;
    },
    getSetting: state => (type: ClockType) => state.durationSettings[type],
  },
  actions: {
    setClock(type: ClockType, time: Time) {
      this.clock.set(type, new Clock(time));
    },
    restartClock(clockType: ClockType) {
      this.setClock(clockType, this.getSetting(clockType));
    },
    restartAllClocks() {
      this.clock.forEach((_, clockType) => {
        this.restartClock(clockType);
      });
    },
    setActiveClock(type: ClockType) {
      this.activeClockType = type;
    },
    setDefaultDurationSettings(newTimer: Time) {
      this.durationSettings[newTimer.type] = newTimer;
      this.restartClock(this.activeClockType);
    },
    setNextCycle() {
      ++this.cycle;
      this.cycle %= 4;
      if (!this.cycle) this.setActiveClock(ClockType.LONG_BREAK);
    },
  },
});
