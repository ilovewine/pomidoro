import { describe, it, expect } from 'vitest';
import stringifyObject from '@/utils/stringifyObject';
import Time from '@/stores/clock/Time';
import { ClockType } from '@/types/clock/ClockType';

export const testData = {
  a: 1,
  b: {
    c: new Time(12, 2, ClockType.BREAK),
    d: {
      e: 3,
    },
    f: 'string value',
  },
  g: [1, 2, 3],
};

describe('stringifyObject', () => {
  it('should stringify object', () => {
    const result = stringifyObject(testData);

    const expectedResult = {
      a: 1,
      'b.c.minutes': 12,
      'b.c.seconds': 2,
      'b.c.type': ClockType.BREAK,
      'b.c.constructor': Time,
      'b.d.e': 3,
      'b.f': 'string value',
      'g.0': 1,
      'g.1': 2,
      'g.2': 3,
    };

    expect(result).toStrictEqual(expectedResult);
  });
});
