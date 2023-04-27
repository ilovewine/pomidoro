import Clock from '@/stores/clock/Clock';
import Time from '@/stores/clock/Time';
import { ClockType } from '@/types/Time.type';

export default interface State {
  clock: Map<ClockType, Clock>;
  durationSettings: Record<ClockType, Time>;
  activeClockType: ClockType;
  cycle: number;
}
