export default class Time {
  static SECONDS_IN_ONE_MINUTE = 60;
  static validSeconds = (seconds: number) =>
    seconds >= Time.SECONDS_IN_ONE_MINUTE
      ? Time.SECONDS_IN_ONE_MINUTE - 1
      : seconds;
  constructor(public minutes: number, public seconds: number) {
    this.seconds = Time.validSeconds(seconds);
  }

  get readableTime() {
    return `${this.minutes}:${
      this.seconds < 10 ? '0' + this.seconds : this.seconds
    }`;
  }
  
  reset() {
    this.seconds = this.minutes = 0;
  }
}