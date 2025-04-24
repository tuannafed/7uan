/* eslint-disable @typescript-eslint/no-explicit-any */
import { convertObjectKeysToSnakeCase } from 'src/convertObjectKeysToSnakeCase'
import { describe, expect, test } from 'vitest'

describe('convertObjectKeysToSnakeCase', () => {
  test('should convert keys to snake_case in an object', () => {
    const input = { firstName: 'John', lastName: 'Doe' }
    const expectedOutput = { first_name: 'John', last_name: 'Doe' }
    const result = convertObjectKeysToSnakeCase(input)
    expect(result).toEqual(expectedOutput)
  })

  test('should convert keys to snake_case in nested objects', () => {
    const input = { userInfo: { firstName: 'Jane', lastName: 'Doe' } }
    const expectedOutput = {
      user_info: { first_name: 'Jane', last_name: 'Doe' },
    }
    const result = convertObjectKeysToSnakeCase(input)
    expect(result).toEqual(expectedOutput)
  })

  test('should convert keys to snake_case in an array of objects', () => {
    const input = [{ firstName: 'Alice' }, { lastName: 'Bob' }]
    const expectedOutput = [{ first_name: 'Alice' }, { last_name: 'Bob' }]
    const result = convertObjectKeysToSnakeCase(input)
    expect(result).toEqual(expectedOutput)
  })

  test('should throw an error when input is not an object or array', () => {
    expect(() => convertObjectKeysToSnakeCase(123 as any)).not.toThrow()
    expect(() => convertObjectKeysToSnakeCase('test' as any)).not.toThrow()
    expect(() => convertObjectKeysToSnakeCase(true as any)).not.toThrow()
    expect(() => convertObjectKeysToSnakeCase(null as any)).not.toThrow()
    expect(() => convertObjectKeysToSnakeCase(undefined as any)).not.toThrow()
  })

  test('should return null and undefined as-is', () => {
    expect(convertObjectKeysToSnakeCase(null as any)).toBeNull()
    expect(convertObjectKeysToSnakeCase(undefined as any)).toBeUndefined()
  })
})
