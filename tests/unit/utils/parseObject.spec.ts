import { describe, expect, it } from 'vitest';
import parseObject, {
  convertClassConstructor,
  convertArraysInObject,
  mergeWithoutLoss,
  parseEntry,
} from '@/utils/parseObject';
import { testData } from './stringifyObject.spec';
import stringifyObject from '@/utils/stringifyObject';
import Time from '@/stores/clock/Time';
import { ClockType } from '@/types/clock/ClockType';
import Clock from '@/stores/clock/Clock';
import { createPinia, setActivePinia } from 'pinia';

describe('parseObject', () => {
  describe('convertClassConstructor', () => {
    it('should find and convert any class constructor', () => {
      setActivePinia(createPinia());
      const time = new Time(12, 2, ClockType.BREAK);
      const testData = {
        date: new Date(),
        time,
        clock: new Clock(time),
      };

      const result = convertClassConstructor(testData);
      expect(result.time instanceof Time).toStrictEqual(true);
      expect(result.date instanceof Date).toStrictEqual(true);
      expect(result.clock instanceof Clock).toStrictEqual(true);
    });

    it("should return the unmodified argument if it isn't an object", () => {
      const testData = [4, 'test string', () => {}, [1, 2, 3]];

      testData.map(value => {
        expect(convertClassConstructor(value as NonNullable<unknown>)).toStrictEqual(value);
      });
    });
  });

  it('should merge without any data loss', () => {
    const object1 = {
      key1: 'value1',
      key2: 'value2',
      deepObject: {
        key1: 'value1',
        key2: 'value2',
      },
    };

    const object2 = {
      key3: 'value3',
      key4: 'value4',
      deepObject: {
        key3: 'value3',
        key4: 'value4',
      },
    };

    const result = mergeWithoutLoss(object1, object2);

    expect(result).toStrictEqual({
      ...object1,
      ...object2,
      deepObject: {
        ...object1.deepObject,
        ...object2.deepObject,
      },
    });
  });

  it('should parse entry by destructuring stringified key and providing the result with the value', () => {
    const objectKeys = ['a', 'b', 'c'];
    const value = 'value';

    const result = parseEntry(objectKeys, value);

    expect(result).toStrictEqual({
      a: {
        b: {
          c: value,
        },
      },
    });
  });

  it('should convert arrays in object', () => {
    const data = {
      a: 1,
      b: { '0': 1, '1': 2, '2': 3 },
      c: {
        d: { '0': 1, '1': 2, '2': 3 },
      },
    };

    const result = convertArraysInObject(data);

    expect(result).toStrictEqual({
      a: 1,
      b: [1, 2, 3],
      c: {
        d: [1, 2, 3],
      },
    });
  });

  it.only('should parse object', () => {
    const stringifiedData = stringifyObject(testData);

    console.log('testData', testData);
    console.log('stringifiedData', stringifiedData);

    const result = parseObject(stringifiedData);
    console.log('result', result);
    expect(result).toStrictEqual(testData);
  });
});
