import Clock from '@/stores/clock/Clock';
import Time from '@/stores/clock/Time';
import ClockState from '@/types/stores/clock/ClockState.type';

export default interface State {
  clock: Clock;
  durationSettings: {
    break: () => Time;
      base: () => Time;
    };
  }