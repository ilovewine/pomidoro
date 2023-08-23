import { ClockType } from '../clock/ClockType';

type TomatoIconFill = 'primary' | 'secondary';

export default interface SettingsStore {
  isDarkModeOn: boolean;
  isMillisecondsOn: boolean;
  isSoundsOn: boolean;
  sound: HTMLAudioElement;
  colors: Record<ClockType, Record<TomatoIconFill, string>>;
}
