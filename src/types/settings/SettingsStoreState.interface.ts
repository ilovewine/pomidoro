import { ClockType } from '../clock/ClockType';

export default interface SettingsStoreState {
  isDarkModeOn: boolean;
  isCentisecondsOn: boolean;
  isSoundsOn: boolean;
  soundSrc: string;
  colors: Record<ClockType, string>;
}
