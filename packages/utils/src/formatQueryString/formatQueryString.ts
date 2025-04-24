/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'qs'

/**
 * Formats a URL with path parameters and query parameters.
 * @param
 * - `baseUrl` (string): The base URL to which the pathParams and query parameters will be appended.
 * - `pathParams` (string | number | (string | number)[]): The path parameters to be appended to the baseUrl.
 * - `query` (Record<string, any>): The query parameters to be appended to the URL as a query string.
 * @returns FormatQueryStringReturnType The transformed result, which is a string.
 * @see [Documentation](https://domain.com/utility/format-query-string)
 * @public
 * @example
 * ```tsx
 * const result = formatQueryString([{ snake_case_key: 'value' }]);
 *
 * console.log(result); // "Processed output"
 * ```
 */

export function formatQueryString(
  baseUrl: string,
  pathParams?: string | number | (string | number)[],
  query?: Record<string, any>,
): string {
  let url = baseUrl

  // Handle pathParams: append them to the baseUrl
  if (pathParams) {
    const formattedPathParams = Array.isArray(pathParams)
      ? pathParams.filter(Boolean).join('/')
      : pathParams

    url = formattedPathParams ? `${baseUrl}/${formattedPathParams}` : baseUrl
  }

  // Handle query parameters: append as query string
  if (query && typeof query === 'object' && Object.keys(query).length > 0) {
    const cleanedQuery = Object.fromEntries(
      Object.entries(query).filter(
        ([_, value]) => value != null && value !== '',
      ),
    )

    const queryString = qs.stringify(cleanedQuery, {
      arrayFormat: 'repeat',
    })

    if (queryString) {
      url += `?${queryString}`
    }
  }

  return url
}
