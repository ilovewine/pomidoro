import ClockState from '@/types/stores/clock/ClockState.type';
import Time from './Time';

export default class Clock {
  private interval: number = 0;
  public state: ClockState;
  constructor(protected time: Time) {
    this.state = ClockState.STOPPED;
  }

  clockTick() {
    --this.time.seconds;
    if (this.time.seconds < 0) {
      --this.time.minutes;
      if (this.time.minutes < 0) {
        clearInterval(this.interval);
        this.stop();
      } else this.time.seconds = Time.SECONDS_IN_ONE_MINUTE - 1;
    }
  }

  stop() {
    this.time.reset();
    this.state = ClockState.STOPPED;
  }

  start() {
    this.state = ClockState.RUNNING;
    this.clockTick();
    this.interval = setInterval(() => {
      this.clockTick();
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
    this.state = ClockState.PAUSED;
  }
  
  get readableTime() {
    return this.time.readableTime;
  }
}
