import ClockState from '@/types/stores/clock/ClockState.type';
import Time from '@/stores/clock/Time';

const MILLISECONDS_INTERVAL_DURATION = 10;

export default class Clock {
  private interval = 0;
  public state: ClockState = ClockState.STOPPED;
  private milliseconds = 0;

  constructor(protected time: Time) {}

  clockTick() {
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

  stop() {
    this.state = ClockState.STOPPED;
    clearInterval(this.interval);
  }

  start() {
    this.state = ClockState.RUNNING;
    this.clockTick();
  }

  pause() {
    this.state = ClockState.PAUSED;
    clearInterval(this.interval);
  }

  get readableTime() {
    return this.time.readableTime;
  }
}
