import Time, { convertToTimeElement } from '@/stores/clock/Time';
import ClockState from '@/types/clock/ClockState.type';
import useClockStore from '@/stores/clock';
import useSettingsStore from '@/stores/settings';

const MILLISECONDS_IN_CENTISECOND = 10;
const CENTISECONDS_IN_SECOND = 99;
const MILLISECONDS_IN_SECOND = MILLISECONDS_IN_CENTISECOND * CENTISECONDS_IN_SECOND;

export default class Clock {
  private interval = 0;
  public state: ClockState = ClockState.STOPPED;
  private milliseconds = MILLISECONDS_IN_SECOND;
  private centiseconds = CENTISECONDS_IN_SECOND;
  private store = useClockStore();
  private settings = useSettingsStore();

  constructor(public time: Time) {
    // de-reference the time object
    this.time = new Time(time);
  }

  clockTick() {
    this.interval = window.setInterval(async () => {
      this.milliseconds -= MILLISECONDS_IN_CENTISECOND;
      --this.centiseconds;
      if (this.milliseconds === 0) {
        if (this.time.seconds === 0) {
          if (this.time.minutes === 0) {
            await this.store.changeClock();
          } else {
            --this.time.minutes;
            this.time.seconds = Time.SECONDS_IN_ONE_MINUTE - 1;
            this.milliseconds = MILLISECONDS_IN_SECOND;
            this.centiseconds = CENTISECONDS_IN_SECOND;
          }
        } else {
          --this.time.seconds;
          this.milliseconds = MILLISECONDS_IN_SECOND;
          this.centiseconds = CENTISECONDS_IN_SECOND;
        }
      }
    }, MILLISECONDS_IN_CENTISECOND);
  }

  stop() {
    this.state = ClockState.STOPPED;
    clearInterval(this.interval);
  }

  start() {
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

  get readableTime(): string {
    return `${this.time.readableTime}${
      this.settings.state.isCentisecondsOn ? ':' + convertToTimeElement(this.centiseconds) : ''
    }`;
  }
}
