import Clock from '@/stores/clock/Clock';
import Time from '@/stores/clock/Time';
import { ClockType } from './ClockType';

interface Cycle {
  max: number;
  current: number;
}

export default interface ClockState {
  clock: Map<ClockType, Clock>;
  durationSettings: Record<ClockType, Time>;
  activeClockType: ClockType;
  sessions: Cycle;
  cycle: Cycle;
}
