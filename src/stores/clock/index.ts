import ClockState from '@/types/clock/ClockState.type';
import { ClockType } from '@/types/clock/ClockType';
import State from '@/types/clock/ClockStore.interface';
import { defineStore } from 'pinia';
import Clock from './Clock';
import Time from './Time';
import { Haptics } from '@capacitor/haptics';
import useSettingsStore from '@/stores/settings';

// const DEFAULT_DURATION = {
//   [ClockType.BREAK]: new Time(5, 0, ClockType.BREAK),
//   [ClockType.WORK]: new Time(25, 0, ClockType.WORK),
//   [ClockType.LONG_BREAK]: new Time(30, 0, ClockType.LONG_BREAK),
// };
// const DEFAULT_MAX_CYCLES = 4;

const DEFAULT_MAX_CYCLES = 2;

const DEFAULT_DURATION: Record<ClockType, Time> = {
  [ClockType.WORK]: new Time(0, 4, ClockType.WORK),
  [ClockType.BREAK]: new Time(0, 5, ClockType.BREAK),
  [ClockType.LONG_BREAK]: new Time(0, 3, ClockType.LONG_BREAK),
};

const createClockMap = (): Map<ClockType, Clock> => {
  const map = new Map();
  Object.keys(DEFAULT_DURATION).forEach(clockType => {
    map.set(clockType, new Clock(DEFAULT_DURATION[clockType as ClockType]));
  });
  return map;
};

const useClockStore = defineStore('clock', {
  state: (): State => ({
    clock: createClockMap(),
    durationSettings: DEFAULT_DURATION,
    activeClockType: ClockType.WORK,
    cycle: {
      current: 0,
      max: DEFAULT_MAX_CYCLES,
    },
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
    setMaxCycles(newMaxCycles: number) {
      this.cycle.max = newMaxCycles;
    },
    setNextCycle() {
      ++this.cycle.current;
      this.cycle.current %= this.cycle.max;
    },
    async changeClock() {
      const settingsStore = useSettingsStore();

      this.restartClock(this.activeClockType);
      this.activeClock.stop();
      await Haptics.vibrate();
      settingsStore.playSound();
      switch (this.activeClockType) {
        case ClockType.BREAK:
          if (!this.cycle.current) {
            this.setActiveClock(ClockType.LONG_BREAK);
            break;
          }
          this.setActiveClock(ClockType.WORK);
          break;
        case ClockType.WORK:
          this.setActiveClock(ClockType.BREAK);
          break;
        case ClockType.LONG_BREAK:
          this.restartAllClocks();
          this.setNextCycle();
          this.setActiveClock(ClockType.WORK);
      }
      this.activeClock.start();
    },
  },
});

export default useClockStore;
