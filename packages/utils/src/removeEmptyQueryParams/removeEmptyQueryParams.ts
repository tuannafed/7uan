/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Removes empty query parameters from an object or array of objects.
 * @param {query: Record<string, any>} data The object or array of objects to process. It can be any object or array of objects.
 * @returns RemoveEmptyQueryParamsReturnType The transformed result, which is a string.
 * @see [Documentation](https://domain.com/utility/remove-empty-query-params)
 * @public
 * @example
 * ```tsx
 * const result = removeEmptyQueryParams([{ snake_case_key: 'value' }]);
 *
 * console.log(result); // "Processed output"
 * ```
 */
export const removeEmptyQueryParams = <T>(query: Record<string, any>): T => {
  const cleanedQuery = Object.fromEntries(
    Object.entries(query).filter(([_, value]) => value != null && value !== ''),
  )

  return cleanedQuery as T
}
