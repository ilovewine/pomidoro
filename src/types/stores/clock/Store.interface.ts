import Clock from '@/stores/clock/Clock';
import Time, { TimeType } from '@/stores/clock/Time';

export default interface State {
  clock: Record<TimeType, Clock>;
  durationSettings: Record<TimeType, Time>;
  activeClockType: TimeType;
}
