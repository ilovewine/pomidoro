import CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Storage, Drivers } from '@ionic/storage';
import useSettingsStore from '../stores/settings';
import useClockStore from '@/stores/clock';
import SettingsStoreState from '@/types/settings/SettingsStoreState.interface';
import ClockStoreState from '@/types/clock/ClockStoreState.interface';

export const CLOCK_STORE_KEY = 'ClockStore';
export const SETTINGS_STORE_KEY = 'SettingsStore';

const db = new Storage({
  name: '__pomidorodb',
  driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage],
});

const init = async () => {
  await db.defineDriver(CordovaSQLiteDriver);
  await db.create();
};

const set = async (key: string, value: unknown) => {
  console.log('SET', key, value);
  await db.set(key, value);
};

const get = async (key: string) => JSON.parse(await db.get(key));

const loadData = async () => {
  const settingsStore = useSettingsStore();
  const settings = await get(SETTINGS_STORE_KEY);
  if (settings) Object.assign(settingsStore.state, settings);

  const clockStore = useClockStore();
  const clock = await get(CLOCK_STORE_KEY);
  if (clock) Object.assign(clockStore.state, clock);
};

const saveState = (state: ClockStoreState | SettingsStoreState) => {
  Object.entries(state).map(async ([key, value]) => {
    await set(key, JSON.stringify(value));
  });
};

export default () => ({
  init,
  set,
  get,
  loadData,
  saveState,
});
