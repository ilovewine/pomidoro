import { describe, expect, it } from 'vitest';
import parseObject, { convertClassConstructor, mergeWithoutLoss, parseEntry } from '@/utils/parseObject';
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
      const testData = function* () {
        yield 4;
        yield null;
        yield undefined;
        yield 'test string',
          yield () => {},
          yield {
            a: 1,
          };
        yield [1, 2, 3];
      };

      // expect(convertClassConstructor(testData)).toStrictEqual(testData);
    });
  });

  it('should merge without any data loss', () => {});

  it('should parse entry by destructuring stringified key and providing the result with the value', () => {});

  it('should parse object', () => {
    const stringifiedData = stringifyObject(testData);

    const result = parseObject(stringifiedData);
    // console.log(result);
    // expect(result).toStrictEqual(testData);
  });
});
