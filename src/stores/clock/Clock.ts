import ClockState from '@/types/stores/clock/ClockState.type';
import Time from './Time';

export default class Clock extends Time {
  private interval: number = 0;
  private _state: ClockState = ClockState.STOPPED;
  constructor(protected minutes: number, protected seconds: number) {
    super(minutes, seconds);
  }

  clear() {
    this.minutes = this.seconds = 0;
    this._state = ClockState.STOPPED;
  }

  set state(state: ClockState) {
    this._state = state;
  }

  startClock() {
    this.interval = setInterval(() => {
      --this.seconds;
      if (this.seconds < 0) {
        --this.minutes;
        if (this.minutes < 0) {
          clearInterval(this.interval);
          this.clear();
        } else this.seconds = Time.SECONDS_IN_ONE_MINUTE - 1;
      }
    }, 1000);
  }
}
