export type flattenValues = string | number | boolean;

const stringifyObject = (data: {}, path = '') => {
  const result: Record<string, flattenValues> = {};

  const entries = Object.entries(data);

  for (const [key, value] of entries) {
    const translatedPath = path ? `${path}.${key}` : key;

    if (typeof value === 'object') {
      Object.assign(result, stringifyObject(value as Record<string, unknown>, translatedPath));
    } else {
      result[translatedPath] = value as flattenValues;
    }
  }

  return result;
};

export default stringifyObject;
