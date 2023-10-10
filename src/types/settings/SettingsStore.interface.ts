import { ClockType } from '../clock/ClockType';

type TomatoIconFill = 'primary' | 'secondary';

export default interface SettingsStore {
  isCentisecondsOn: boolean;
  isSoundsOn: boolean;
  sound: HTMLAudioElement;
  colors: Record<ClockType, string>;
}
