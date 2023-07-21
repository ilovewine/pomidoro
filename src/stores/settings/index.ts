import SettingsStore from '@/types/settings/SettingsStore.interface';
import { defineStore } from 'pinia';

const useSettingsStore = defineStore('settings', {
  state: (): SettingsStore => ({
    isDarkModeOn: false,
    isMillisecondsOn: false,
    isSoundsOn: false,
  }),
});

export default useSettingsStore;
