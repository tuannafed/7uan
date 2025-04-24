/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs, { Dayjs } from 'dayjs'

/**
 * Type guard to check if a value is a Dayjs object.
 *
 * @param value - The value to check.
 * @returns True if the value is a Dayjs object, false otherwise.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * if (isDayjs(value)) {
 *  // value is a Dayjs object
 * } else {
 * // value is not a Dayjs object
 * }
 * ```
 */
function isDayjs(value: any): value is Dayjs {
  return dayjs.isDayjs(value)
}

/**
 * Format a date to a specified format.
 *
 * @param date - The date to format, which can be a Dayjs object, string, or Date object.
 * @param format - The format string (default is 'YYYY-MM-DD').
 * @returns The formatted date as a string.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');
 * console.log(formattedDate); // "2021-01-01"
 * ```
 */
function formatDate(
  date: Dayjs | string | Date,
  format: string = 'YYYY-MM-DD',
): string {
  return dayjs(date).format(format)
}

/**
 * Check if a given date is today.
 *
 * @param date - The date to check, which can be a Dayjs object, string, or Date object.
 * @returns True if the date is today, false otherwise.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const today = isToday(new Date());
 * console.log(today); // true
 * ```
 */
function isToday(date: Dayjs | string | Date): boolean {
  return dayjs(date).isSame(dayjs(), 'day')
}

/**
 * Check if a given date is in the past.
 *
 * @param date - The date to check, which can be a Dayjs object, string, or Date object.
 * @returns True if the date is in the past, false otherwise.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const past = isPast(new Date());
 * console.log(past); // true
 * ```
 */
function isPast(date: Dayjs | string | Date): boolean {
  return dayjs(date).isBefore(dayjs(), 'day')
}

/**
 * Check if a given date is in the future.
 *
 * @param date - The date to check, which can be a Dayjs object, string, or Date object.
 * @returns True if the date is in the future, false otherwise.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const future = isFuture(new Date());
 * console.log(future); // true
 * ```
 */
function isFuture(date: Dayjs | string | Date): boolean {
  return dayjs(date).isAfter(dayjs(), 'day')
}

/**
 * Get the difference between two dates.
 *
 * @param date1 - The first date to compare, which can be a Dayjs object, string, or Date object.
 * @param date2 - The second date to compare, which can be a Dayjs object, string, or Date object.
 * @param unit - The unit of measurement for the difference (default is 'days').
 * @returns The difference between the two dates in the specified unit.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const difference = dateDifference(new Date(), new Date('2021-01-01'), 'days');
 * console.log(difference); // 100
 * ```
 */
function dateDifference(
  date1: Dayjs | string | Date,
  date2: Dayjs | string | Date,
  unit: dayjs.ManipulateType = 'days',
): number {
  return dayjs(date1).diff(dayjs(date2), unit)
}

/**
 * Add a specified number of days to a date.
 *
 * @param date - The date to which days will be added, which can be a Dayjs object, string, or Date object.
 * @param days - The number of days to add.
 * @returns A new Dayjs object with the added days.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const newDate = addDays(new Date(), 7);
 * console.log(newDate); // Date object for one week from now
 * ```
 */
function addDays(date: Dayjs | string | Date, days: number): Dayjs {
  return dayjs(date).add(days, 'day')
}

/**
 * Subtract a specified number of days from a date.
 *
 * @param date - The date from which days will be subtracted, which can be a Dayjs object, string, or Date object.
 * @param days - The number of days to subtract.
 * @returns A new Dayjs object with the subtracted days.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const newDate = subtractDays(new Date(), 7);
 * console.log(newDate); // Date object for one week ago
 * ```
 */
function subtractDays(date: Dayjs | string | Date, days: number): Dayjs {
  return dayjs(date).subtract(days, 'day')
}

/**
 * Get the start of the week for a given date.
 *
 * @param date - The date for which to find the start of the week, which can be a Dayjs object, string, or Date object.
 * @returns A new Dayjs object representing the start of the week.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const start = startOfWeek(new Date());
 * console.log(start); // Date object for the start of the week
 * ```
 */
function startOfWeek(date: Dayjs | string | Date): Dayjs {
  return dayjs(date).startOf('week')
}

/**
 * Get the end of the week for a given date.
 *
 * @param date - The date for which to find the end of the week, which can be a Dayjs object, string, or Date object.
 * @returns A new Dayjs object representing the end of the week.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const end = endOfWeek(new Date());
 * console.log(end); // Date object for the end of the week
 * ```
 */
function endOfWeek(date: Dayjs | string | Date): Dayjs {
  return dayjs(date).endOf('week')
}

/**
 * Get the start of the month for a given date.
 *
 * @param date - The date for which to find the start of the month, which can be a Dayjs object, string, or Date object.
 * @returns A new Dayjs object representing the start of the month.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const start = startOfMonth(new Date());
 * console.log(start); // Date object for the start of the month
 * ```
 */
function startOfMonth(date: Dayjs | string | Date): Dayjs {
  return dayjs(date).startOf('month')
}

/**
 * Get the end of the month for a given date.
 *
 * @param date - The date for which to find the end of the month, which can be a Dayjs object, string, or Date object.
 * @returns A new Dayjs object representing the end of the month.
 * @see [Documentation](https://domain.com/utility/dayjs)
 * @public
 * @example
 * ```tsx
 * const end = endOfMonth(new Date());
 * console.log(end); // Date object for the end of the month
 * ```
 */
function endOfMonth(date: Dayjs | string | Date): Dayjs {
  return dayjs(date).endOf('month')
}

// Exporting dayjs for external usage
export {
  Dayjs,
  dayjs,
  isDayjs,
  formatDate,
  isToday,
  isPast,
  isFuture,
  dateDifference,
  addDays,
  subtractDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
}
