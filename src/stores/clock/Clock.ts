import Time from '@/stores/clock/Time';
import ClockState from '@/types/ClockState.type';

const MILLISECONDS_INTERVAL_DURATION = 10;

export default class Clock {
  private interval = 0;
  public state: ClockState = ClockState.STOPPED;
  private milliseconds = 1000;
  public isClockZeroed = false;

  constructor(public time: Time) {
    // de-reference the time object
    this.time = new Time(time.minutes, time.seconds, time.type);
  }

  clockTick() {
    this.interval = setInterval(() => {
      this.milliseconds -= MILLISECONDS_INTERVAL_DURATION;
      if (this.milliseconds === 0) {
        if (this.time.seconds === 0) {
          if (this.time.minutes === 0) {
            console.log('stopping!');
            this.isClockZeroed = true;
            this.stop();
          } else {
            --this.time.minutes;
            this.time.seconds = Time.SECONDS_IN_ONE_MINUTE - 1;
          }
        } else {
          console.log('decrementing seconds');
          --this.time.seconds;
          this.milliseconds = 1000;
        }
      }
    }, MILLISECONDS_INTERVAL_DURATION);
  }

  stop() {
    this.state = ClockState.STOPPED;
    clearInterval(this.interval);
  }

  start() {
    this.isClockZeroed = false;
    this.state = ClockState.RUNNING;
    --this.time.seconds;
    this.clockTick();
  }

  continue() {
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
