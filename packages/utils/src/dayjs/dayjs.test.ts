import { describe, expect, test } from 'vitest'

import {
  addDays,
  dateDifference,
  dayjs,
  endOfMonth,
  endOfWeek,
  formatDate,
  isDayjs,
  isFuture,
  isPast,
  isToday,
  startOfMonth,
  startOfWeek,
  subtractDays,
} from './dayjs'

describe('Date Utility Functions', () => {
  const today = dayjs()
  const pastDate = today.subtract(5, 'day')
  const futureDate = today.add(5, 'day')

  test('formatDate should format date correctly', () => {
    expect(formatDate(today)).toBe(today.format('YYYY-MM-DD'))
    expect(formatDate(today, 'DD/MM/YYYY')).toBe(today.format('DD/MM/YYYY'))
  })

  test('isToday should return true for today', () => {
    expect(isToday(today)).toBe(true)
  })

  test('isToday should return false for past and future dates', () => {
    expect(isToday(pastDate)).toBe(false)
    expect(isToday(futureDate)).toBe(false)
  })

  test('isPast should return true for past dates', () => {
    expect(isPast(pastDate)).toBe(true)
    expect(isPast(today)).toBe(false)
  })

  test('isFuture should return true for future dates', () => {
    expect(isFuture(futureDate)).toBe(true)
    expect(isFuture(today)).toBe(false)
  })

  test('dateDifference should calculate difference correctly', () => {
    expect(dateDifference(futureDate, today)).toBe(5)
    expect(dateDifference(today, pastDate)).toBe(5)
    expect(dateDifference(today, today)).toBe(0)
  })

  test('addDays should add days correctly', () => {
    expect(addDays(today, 3).format('YYYY-MM-DD')).toBe(
      today.add(3, 'day').format('YYYY-MM-DD'),
    )
  })

  test('subtractDays should subtract days correctly', () => {
    expect(subtractDays(today, 3).format('YYYY-MM-DD')).toBe(
      today.subtract(3, 'day').format('YYYY-MM-DD'),
    )
  })

  test('startOfWeek should return correct start of week', () => {
    expect(startOfWeek(today).format('YYYY-MM-DD')).toBe(
      today.startOf('week').format('YYYY-MM-DD'),
    )
  })

  test('endOfWeek should return correct end of week', () => {
    expect(endOfWeek(today).format('YYYY-MM-DD')).toBe(
      today.endOf('week').format('YYYY-MM-DD'),
    )
  })

  test('startOfMonth should return correct start of month', () => {
    expect(startOfMonth(today).format('YYYY-MM-DD')).toBe(
      today.startOf('month').format('YYYY-MM-DD'),
    )
  })

  test('endOfMonth should return correct end of month', () => {
    expect(endOfMonth(today).format('YYYY-MM-DD')).toBe(
      today.endOf('month').format('YYYY-MM-DD'),
    )
  })

  test('isDayjs should correctly identify Dayjs objects', () => {
    expect(isDayjs(today)).toBe(true)
    expect(isDayjs(new Date())).toBe(false)
    expect(isDayjs('2024-01-01')).toBe(false)
  })
})
