import ClockState from '@/types/clock/ClockState.type';
import { ClockType } from '@/types/clock/ClockType';
import ClockStoreState from '@/types/clock/ClockStoreState.interface';
import { defineStore } from 'pinia';
import Clock from './Clock';
import Time from './Time';
import { Haptics } from '@capacitor/haptics';
import useSettingsStore from '@/stores/settings';
import { computed, reactive, watch } from 'vue';
import useDB from '@/services/useDB';

// const DEFAULT_DURATION = {
//   [ClockType.BREAK]: new Time(5, 0, ClockType.BREAK),
//   [ClockType.WORK]: new Time(25, 0, ClockType.WORK),
//   [ClockType.LONG_BREAK]: new Time(30, 0, ClockType.LONG_BREAK),
// };
// const DEFAULT_MAX_CYCLES = 4;

const DEFAULT_MAX_CYCLES = 2;

const DEFAULT_DURATION: Record<ClockType, Time> = {
  [ClockType.BREAK]: new Time(0, 5, ClockType.BREAK),
  [ClockType.WORK]: new Time(0, 4, ClockType.WORK),
  [ClockType.LONG_BREAK]: new Time(0, 3, ClockType.LONG_BREAK),
};

const createClockMap = (): Record<ClockType, Clock> => {
  const entries = Object.entries(DEFAULT_DURATION) as [ClockType, Time][];
  return Object.fromEntries(entries.map(([clockType, time]) => [clockType, new Clock(time)])) as Record<
    ClockType,
    Clock
  >;
};

const useClockStore = defineStore('clock', () => {
  const settingsStore = useSettingsStore();
  const db = useDB();

  const state = reactive<ClockStoreState>({
    clock: createClockMap(),
    durationSettings: DEFAULT_DURATION,
    activeClockType: ClockType.WORK,
    cycle: {
      current: 0,
      max: DEFAULT_MAX_CYCLES,
    },
  });

  watch(state, () => {
    db.saveState(state as ClockStoreState);
  });

  const activeClock = computed<Clock>(() => state.clock[state.activeClockType] as Clock);

  const getTime = computed(() => activeClock.value.readableTime);

  const getClockState = computed<ClockState>(() => activeClock.value.state);

  const getSetting = (type: ClockType) => state.durationSettings[type];

  const setClock = (type: ClockType, time: Time) => (state.clock[type] = new Clock(time));

  const restartClock = (clockType: ClockType) => setClock(clockType, getSetting(clockType));

  const restartAllClocks = () => Object.keys(state.clock).map(clockType => restartClock(clockType as ClockType));

  const setActiveClock = (type: ClockType) => (state.activeClockType = type);

  const setDefaultDurationSettings = (newTimer: Time) => {
    state.durationSettings[newTimer.type] = newTimer;
    restartClock(state.activeClockType);
  };

  const setMaxCycles = (newMaxCycles: number) => (state.cycle.max = newMaxCycles);

  const setNextCycle = () => {
    ++state.cycle.current;
    state.cycle.current %= state.cycle.max;
  };

  const changeClock = async () => {
    restartClock(state.activeClockType);
    activeClock.value.stop();
    await Haptics.vibrate();
    settingsStore.playSound();
    switch (state.activeClockType) {
      case ClockType.BREAK:
        if (!state.cycle.current) {
          setActiveClock(ClockType.LONG_BREAK);
          break;
        }
        setActiveClock(ClockType.WORK);
        break;
      case ClockType.WORK:
        setActiveClock(ClockType.BREAK);
        break;
      case ClockType.LONG_BREAK:
        restartAllClocks();
        setNextCycle();
        setActiveClock(ClockType.WORK);
    }
    activeClock.value.start();
  };

  return {
    state,
    activeClock,
    getTime,
    getClockState,
    getSetting,
    setClock,
    restartClock,
    restartAllClocks,
    setActiveClock,
    setDefaultDurationSettings,
    setMaxCycles,
    setNextCycle,
    changeClock,
  };
});

export default useClockStore;
