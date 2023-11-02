import CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Storage, Drivers } from '@ionic/storage';
import useSettingsStore from '../stores/settings';

const db = new Storage({
  name: '__pomidorodb',
  driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage],
});

const init = async () => {
  await db.defineDriver(CordovaSQLiteDriver);
  await db.create();
};

const set = async (key: string, value: unknown) => {
  await db.set(key, JSON.stringify(value));
  db.forEach(store => {
    console.log(store);
  });
};

const get = async (key: string) => JSON.parse(await db.get(key));

const loadSettings = async () => {
  const settingsStore = useSettingsStore();
  const settings = await get('settings');
  if (settings) {
    console.log('SETTINGS', settings);
    settingsStore.state.isDarkModeOn = { ...settings };
  }
};

export default () => ({
  init,
  set,
  get,
  loadSettings,
});
