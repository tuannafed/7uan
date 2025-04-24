/**
 *  Formats a number into a currency string.
 * @param {number} amount The number to format.
 * @param {string} locale The locale to use. Default is `en-US`.
 * @param {string} currency The currency to use. Default is `USD`.
 * @returns {string} Returns the formatted currency string.
 * @see [Documentation](https://domain.com/utility/format-currency)
 * @public
 * @example
 * ```tsx
 * const amount = 1000;
 * const locale = 'en-US';
 * const currency = 'USD';
 * const result = formatCurrency(amount, locale, currency);
 * console.log(result);
 * // => $1,000.00
 * ```
 */
export const formatCurrency = (
  amount: number,
  locale = 'en-US',
  currency = 'USD',
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount)
}
