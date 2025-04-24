import { describe, expect, test } from 'vitest'

import { removeEmptyQueryParams } from './removeEmptyQueryParams'

describe('removeEmptyQueryParams', () => {
  test('should remove undefined, null, and empty string values', () => {
    const input = {
      name: 'John Doe',
      age: 30,
      email: '',
      address: null,
      phone: undefined,
      city: 'New York',
    }

    const expectedOutput = {
      name: 'John Doe',
      age: 30,
      city: 'New York',
    }

    expect(removeEmptyQueryParams(input)).toEqual(expectedOutput)
  })

  test('should return an empty object when all values are empty', () => {
    const input = {
      name: '',
      email: null,
      phone: undefined,
    }

    expect(removeEmptyQueryParams(input)).toEqual({})
  })

  test('should return the same object if there are no empty values', () => {
    const input = {
      name: 'Alice',
      age: 25,
      city: 'Paris',
    }

    expect(removeEmptyQueryParams(input)).toEqual(input)
  })

  test('should handle an empty object', () => {
    expect(removeEmptyQueryParams({})).toEqual({})
  })

  test('should not remove falsy but valid values (false, 0, NaN)', () => {
    const input = {
      isActive: false,
      count: 0,
      price: NaN,
      description: '',
    }

    const expectedOutput = {
      isActive: false,
      count: 0,
      price: NaN,
    }

    expect(removeEmptyQueryParams(input)).toEqual(expectedOutput)
  })
})
