import { describe, it, expect } from 'vitest';
import { serialize, deserialize } from '@/utils/serialize';
import Time from '@/stores/clock/Time';
import { ClockType } from '@/types/clock/ClockType';

const testData = new Time({ minutes: 12, seconds: 2, type: ClockType.BREAK });

const serialized = serialize('test', testData);

describe('serialize', () => {
  it('should serialize', () => {
    expect(serialized).toStrictEqual({
      test: JSON.stringify(testData),
    });
  });

  it('should deserialize', () => {
    const deserialized = deserialize(serialized.test, Time);

    expect(deserialized).toStrictEqual(testData);
  });
});
