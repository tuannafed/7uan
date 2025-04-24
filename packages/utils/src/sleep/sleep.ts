/**
 * Sleep for the specified number of seconds.
 * @param {seconds: number} data The object or array of objects to process. It can be any object or array of objects.
 * @returns {Promise<void>} Returns a promise that resolves after the specified number of seconds.
 * @see [Documentation](https://domain.com/utility/sleep)
 * @public
 * @example
 * ```tsx
 * const result = sleep([{ snake_case_key: 'value' }]);
 *
 * console.log(result); // "Processed output"
 * ```
 */
export const sleep = (seconds: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * seconds)
  })
}
