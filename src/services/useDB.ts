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
  console.log('INIT', await db.length());
  db.forEach((key, value) => {
    console.log([key, value]);
  });
};

const set = async (key: string, value: unknown) => await db.set(key, value);

const get = async (key: string) => await db.get(key);

const loadSettings = async () => {
  const settingsStore = useSettingsStore();
  const settings = await get('settings');
  console.log(settings);
  if (settings) {
    settingsStore.state.isDarkModeOn = settings.isDarkModeOn;
    settingsStore.state.isCentisecondsOn = settings.isCentisecondsOn;
    settingsStore.state.isSoundsOn = settings.isSoundsOn;
  }
};

export default () => ({
  init,
  set,
  get,
  loadSettings,
});
