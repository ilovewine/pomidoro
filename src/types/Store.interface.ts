import Clock from '@/stores/clock/Clock';
import Time from '@/stores/clock/Time';
import { TimeType } from '@/types/Time.type';

export default interface State {
  clock: Record<TimeType, Clock>;
  durationSettings: Record<TimeType, Time>;
  activeClockType: TimeType;
  cycle: number;
}
