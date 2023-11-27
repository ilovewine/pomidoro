import Clock from '@/stores/clock/Clock';
import Time from '@/stores/clock/Time';

export type flattenValues = string | number | boolean | Time | Clock;

const stringifyObject = (data: {}, path = '') => {
  const result: Record<string, flattenValues> = {};

  const entries = Object.entries(data);

  for (const [key, value] of entries) {
    const translatedPath = path ? `${path}.${key}` : key;

    if (value && [Time, Clock].includes(value.constructor as typeof Clock | typeof Time)) {
      Object.assign(result, stringifyObject({ ...value, constructor: value.constructor }, translatedPath));
    } else if (typeof value === 'object') {
      Object.assign(result, stringifyObject(value as Record<string, unknown>, translatedPath));
    } else {
      result[translatedPath] = value as flattenValues;
    }
  }

  return result;
};

export default stringifyObject;
