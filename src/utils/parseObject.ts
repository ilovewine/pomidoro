import { flattenObjectValue } from './stringifyObject';

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

export const parseEntry = (path: string[], value: flattenObjectValue): Record<string, unknown> => {
  if (path.length === 1) {
    return { [path[0]]: value };
  }
  return { [path[0]]: parseEntry(path.slice(1), value) };
};

export const convertArraysInObject = (data: Record<string, unknown>): Record<string, unknown> =>
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      if (Object.prototype.toString.call(value) === '[object Object]') {
        if (Object.keys(value as {}).every(key => typeof +key === 'number' && !isNaN(+key))) {
          return [key, Object.values(value as {})];
        }
        return [key, convertArraysInObject(value as Record<string, unknown>)];
      }
      return [key, value];
    }),
  );

const parseObject = (data: Record<string, flattenObjectValue>) => {
  const results: Record<string, unknown>[] = [];

  Object.entries(data).forEach(([key, value]) => {
    const path = key.split('.');
    results.push(parseEntry(path, value));
  });

  const mergedObject = results.reduce((accumulator, currentValue) => mergeWithoutLoss(accumulator, currentValue), {});

  console.log('mergedObject', mergedObject);

  const objectWithConvertedArrays = convertArraysInObject(mergedObject);

  return Object.fromEntries(
    Object.entries(objectWithConvertedArrays)
      .map(([key, value]) => {
        const number = +key;
        if (typeof number === 'number') {
        }

        return [key, value];
      })
      .map(([key, value]) => [key, convertClassConstructor(value as NonNullable<unknown>)]),
  );
};

export default parseObject;
