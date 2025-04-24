import { describe, expect, test } from 'vitest'

import { convertToSlug } from './convertToSlug'

describe('convertToSlug', () => {
  test('should convert text to a valid slug', () => {
    const result = convertToSlug('Hello World! This is a Test.')
    expect(result).toBe('hello-world-this-is-a-test')
  })

  test('should handle empty input', () => {
    const result = convertToSlug('')
    expect(result).toBe('')
  })

  test('should handle input with special characters', () => {
    const result = convertToSlug('Đây là một đoạn văn!')
    expect(result).toBe('day-la-mot-doan-van')
  })

  test('should handle input with spaces between words', () => {
    const result = convertToSlug('Hello     World')
    expect(result).toBe('hello-world')
  })

  test('should remove leading and trailing hyphens', () => {
    const result = convertToSlug('   Hello   World   ')
    expect(result).toBe('hello-world')
  })

  test('should replace multiple hyphens with a single hyphen', () => {
    const result = convertToSlug('Hello---World')
    expect(result).toBe('hello-world')
  })
})
