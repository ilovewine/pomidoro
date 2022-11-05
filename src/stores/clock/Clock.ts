import ClockState from '@/types/stores/clock/ClockState.type';
import Time from './Time';

const MILLISECONDS_INTERVAL_DURATION = 10;

export default class Clock {
  private interval: number = 0;
  public state: ClockState;
  private milliseconds: number = 0;
  constructor(protected time: Time) {
    this.state = ClockState.STOPPED;
  }

  stop() {
    clearInterval(this.interval);
    this.state = ClockState.STOPPED;
  }

  start() {
    this.state = ClockState.RUNNING;
    this.interval = setInterval(() => {
      this.milliseconds += MILLISECONDS_INTERVAL_DURATION;
      if (this.milliseconds === 1000) {
        this.milliseconds = 0;
        --this.time.seconds;
        if (this.time.seconds < 0) {
          --this.time.minutes;
          if (this.time.minutes < 0) {
            this.stop();
          } else this.time.seconds = Time.SECONDS_IN_ONE_MINUTE - 1;
        }
      }
    }, MILLISECONDS_INTERVAL_DURATION);
  }

  pause() {
    clearInterval(this.interval);
    this.state = ClockState.PAUSED;
  }

  get readableTime() {
    return this.time.readableTime;
  }
}
