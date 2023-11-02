import SettingsStore from '@/types/settings/SettingsStore.interface';
import { defineStore } from 'pinia';
// @ts-ignore
import defaultBeep from '@/resources/audio/defaultBeep.wav';
import { ClockType } from '@/types/clock/ClockType';
import useClockStore from '@/stores/clock';
import { computed, reactive, watch } from 'vue';
import useDB from '@/services/useDB';

const audio = new Audio(defaultBeep);

const useSettingsStore = defineStore('settings', () => {
  const db = useDB();
  const clockStore = useClockStore();

  const state = reactive<SettingsStore>({
    isDarkModeOn: false,
    isCentisecondsOn: false,
    isSoundsOn: true,
    sound: audio,
    colors: {
      [ClockType.BREAK]: '#e0c111',
      [ClockType.WORK]: '#b90505',
      [ClockType.LONG_BREAK]: '#380808',
    },
  });

  watch(state, () => db.set('SettingsStore', state));

  const currentColor = computed(() => state.colors[clockStore.state.activeClockType]);

  const playSound = () => {
    if (state.isSoundsOn) {
      state.sound.play();
    }
  };

  return {
    state,
    currentColor,
    playSound,
  };
});

export default useSettingsStore;
