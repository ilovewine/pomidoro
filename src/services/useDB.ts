import CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Storage, Drivers } from '@ionic/storage';
import useSettingsStore from '../stores/settings';
import useClockStore from '@/stores/clock';
import SettingsStoreState from '@/types/settings/SettingsStoreState.interface';
import ClockStoreState from '@/types/clock/ClockStoreState.interface';
import stringifyObject from '@/utils/stringifyObject';
import parseObject from '@/utils/parseObject';

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

const testData = {
  a: 1,
  b: {
    c: true,
    d: {
      e: 3,
    },
    f: 'string value',
  },
};

console.log('STRINGIFY', stringifyObject(testData));
console.log('PARSED', parseObject(stringifyObject(testData)));

const saveState = (state: ClockStoreState | SettingsStoreState) => {
  // console.log(stringifyObject(state));
};

export default () => ({
  init,
  set,
  get,
  loadData,
  saveState,
});
