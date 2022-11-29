import Clock from '@/stores/clock/Clock';
import Time from '@/stores/clock/Time';

export default interface State {
  clock: Clock;
  durationSettings: {
    break: Time;
    base: Time;
  };
}
