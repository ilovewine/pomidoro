import { ClockType } from '@/types/clock/ClockType';

export const convertToTimeElement = (time: number): string => time.toString().padStart(2, '0');

export default class Time {
  static SECONDS_IN_ONE_MINUTE = 60;
  static validateSeconds = (seconds: number) =>
    seconds >= Time.SECONDS_IN_ONE_MINUTE ? Time.SECONDS_IN_ONE_MINUTE - 1 : seconds;
  static now = () => new Date().getTime();

  public minutes: number = 0;
  public seconds: number = 0;
  public type: ClockType;

  constructor({ minutes, seconds, type }: { minutes: number; seconds: number; type: ClockType }) {
    this.minutes = minutes;
    this.seconds = Time.validateSeconds(seconds);
    this.type = type;
  }

  get readableTime() {
    return `${convertToTimeElement(this.minutes)}:${convertToTimeElement(this.seconds)}`;
  }
}
