import ClockState from '@/types/stores/clock/ClockState.type';
import Time from './Time';

export default class Clock extends Time {
  private interval: number = 0;
  public state: ClockState;
  constructor(protected minutes: number, protected seconds: number) {
    super(minutes, seconds);
    this.state = ClockState.STOPPED;
  }

  stop() {
    this.minutes = this.seconds = 0;
    this.state = ClockState.STOPPED;
  }

  start() {
    this.interval = setInterval(() => {
      this.state = ClockState.RUNNING;
      --this.seconds;
      if (this.seconds < 0) {
        --this.minutes;
        if (this.minutes < 0) {
          clearInterval(this.interval);
          this.stop();
        } else this.seconds = Time.SECONDS_IN_ONE_MINUTE - 1;
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
    this.state = ClockState.PAUSED;
  }
}
