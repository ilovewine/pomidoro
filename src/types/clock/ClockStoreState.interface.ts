import Clock from '@/stores/clock/Clock';
import Time from '@/stores/clock/Time';
import { ClockType } from './ClockType';

export default interface ClockStoreState {
  clock: Record<ClockType, Clock>;
  durationSettings: Record<ClockType, Time>;
  activeClockType: ClockType;
  cycle: {
    max: number;
    current: number;
  };
}
