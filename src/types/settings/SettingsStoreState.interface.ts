import { ClockType } from '../clock/ClockType';

export default interface SettingsStoreState {
  isDarkModeOn: boolean;
  isCentisecondsOn: boolean;
  isSoundsOn: boolean;
  sound: HTMLAudioElement;
  colors: Record<ClockType, string>;
}
