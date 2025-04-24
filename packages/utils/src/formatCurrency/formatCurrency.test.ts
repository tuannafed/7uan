import { describe, expect, test } from 'vitest'

import { formatCurrency } from './formatCurrency'

describe('formatCurrency function', () => {
  test('should format the number as USD currency by default', () => {
    const result = formatCurrency(1234567.89)
    expect(result).toBe('$1,234,567.89')
  })

  test('should format the number as EUR currency for de-DE locale', () => {
    const result = formatCurrency(1234567.89, 'de-DE', 'EUR')
    const cleanedResult = result.replace(/\s+/g, ' ').trim() // Normalize and trim spaces
    expect(cleanedResult).toBe('1.234.567,89 €')
  })

  test('should format the number as JPY currency for ja-JP locale', () => {
    const result = formatCurrency(1234567.89, 'ja-JP', 'JPY')
    expect(result).toBe('￥1,234,568')
  })

  test('should format the number as INR currency for en-IN locale', () => {
    const result = formatCurrency(1234567.89, 'en-IN', 'INR')
    expect(result).toBe('₹12,34,567.89')
  })

  test('should handle zero correctly', () => {
    const result = formatCurrency(0)
    expect(result).toBe('$0.00')
  })

  test('should format large numbers correctly', () => {
    const result = formatCurrency(1000000000)
    expect(result).toBe('$1,000,000,000.00')
  })

  test('should format negative numbers correctly', () => {
    const result = formatCurrency(-1234567.89)
    expect(result).toBe('-$1,234,567.89')
  })

  test('should handle very small decimal numbers', () => {
    const result = formatCurrency(0.01)
    expect(result).toBe('$0.01')
  })

  test('should format a number with more than two decimal places correctly', () => {
    const result = formatCurrency(1234567.899)
    expect(result).toBe('$1,234,567.90') // Rounds to two decimal places
  })

  test('should handle custom currency and locale', () => {
    const result = formatCurrency(1234567.89, 'en-GB', 'GBP')
    expect(result).toBe('£1,234,567.89')
  })
})
