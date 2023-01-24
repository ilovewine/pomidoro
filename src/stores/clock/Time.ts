import { TimeType } from '@/types/Time.type';

const convertToTimeElement = (time: number): string => time.toString().padStart(2, '0');

export default class Time {
  static SECONDS_IN_ONE_MINUTE = 60;
  static validateSeconds = (seconds: number) =>
    seconds >= Time.SECONDS_IN_ONE_MINUTE ? Time.SECONDS_IN_ONE_MINUTE - 1 : seconds;
  static now = () => new Date().getTime();

  constructor(public minutes: number, public seconds: number, public type: TimeType) {
    this.seconds = Time.validateSeconds(seconds);
  }

  get readableTime() {
    return `${convertToTimeElement(this.minutes)}:${convertToTimeElement(this.seconds)}`;
  }
}
