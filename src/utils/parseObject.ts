import { flattenValues } from './stringifyObject';

export const convertClassConstructor = (value: NonNullable<unknown>) => {
  if (typeof value !== 'object') {
    return value;
  }
  if (value.hasOwnProperty('constructor')) {
    const { constructor, ...args } = value;
    return constructor(args);
  }
  return value;
};

export const mergeWithoutLoss = (obj1: Record<string, unknown>, obj2: Record<string, unknown>) => {
  const result: Record<string, unknown> = { ...obj1 };
  Object.keys(obj2).forEach(key => {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      result[key] = mergeWithoutLoss(obj1[key] as Record<string, unknown>, obj2[key] as Record<string, unknown>);
    } else {
      result[key] = obj2[key];
    }
  });
  return result;
};

export const parseEntry = (path: string[], value: flattenValues): Record<string, unknown> => {
  if (path.length === 1) {
    return { [path[0]]: value };
  }
  return { [path[0]]: parseEntry(path.slice(1), value) };
};

const parseObject = (data: Record<string, flattenValues>) => {
  const results: Record<string, unknown>[] = [];

  Object.entries(data).forEach(([key, value]) => {
    const path = key.split('.');
    results.push(parseEntry(path, value));
  });

  const mergedObject = results.reduce((accumulator, currentValue) => mergeWithoutLoss(accumulator, currentValue), {});

  return Object.fromEntries(
    Object.entries(mergedObject).map(([key, value]) => [key, convertClassConstructor(value as NonNullable<unknown>)]),
  );
};

export default parseObject;
