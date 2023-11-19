import { flattenValues } from './stringifyObject';

const mergeWithoutLoss = (obj1: Record<string, unknown>, obj2: Record<string, unknown>) => {
  const result: Record<string, unknown> = { ...obj1 };
  Object.keys(obj2).forEach(key => {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      result[key] = mergeWithoutLoss(obj1[key] as Record<string, unknown>, obj2[key] as Record<string, unknown>);
    } else {
      result[key] = obj2[key];
    }
  });
};

// TODO: connect mergeWithoutLoss with parseObject

const parseEntry = (path: string[], value: flattenValues): Record<string, unknown> => {
  if (path.length === 1) {
    return { [path[0]]: value };
  } else return { [path[0]]: parseEntry(path.slice(1), value) };
};

const parseObject = (data: Record<string, flattenValues>) => {
  const result = {};

  Object.entries(data).forEach(([key, value]) => {
    const path = key.split('.');
    console.log('PATH', path, parseEntry(path, value));
    Object.assign(result, parseEntry(path, value));
  });

  return result;
};

export default parseObject;
