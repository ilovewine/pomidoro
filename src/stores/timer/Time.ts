export default class Time {
  static SECONDS_IN_ONE_MINUTE = 60;
  constructor(private minutes: number, private seconds: number = 0) {}

  get toSeconds() {
    return this.minutes * Time.SECONDS_IN_ONE_MINUTE + this.seconds;
  }

  get readableTime() {
    return `${this.minutes}:${this.seconds}`;
  }

  update(seconds: number) {
    this.minutes = seconds / Time.SECONDS_IN_ONE_MINUTE;
    this.seconds = seconds % Time.SECONDS_IN_ONE_MINUTE;
  }
}
