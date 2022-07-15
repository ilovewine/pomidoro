export default class Time {
  static SECONDS_IN_ONE_MINUTE = 60;
  static validSeconds = (seconds: number) =>
  seconds >= Time.SECONDS_IN_ONE_MINUTE
    ? Time.SECONDS_IN_ONE_MINUTE - 1
    : seconds;
  constructor(protected minutes: number, protected seconds: number) {
    this.seconds = Time.validSeconds(seconds);
  }

  get readableTime() {
    return `${this.minutes}:${this.seconds}`;
  }
}
