# `formatCurrency` Function Documentation

## Overview

The `formatCurrency` function is a JavaScript utility that formats numbers as currency strings based on a given locale and currency type. It uses JavaScript's built-in `Intl.NumberFormat` to format the currency values according to the specified locale, providing a flexible way to display monetary amounts in different regional formats.

## Function Signature

```javascript
formatCurrency(amount, (locale = 'en-US'), (currency = 'USD'))
```

### Parameters

- **`amount`** (`number`): The numeric value to format as currency (e.g., `1234567.89`).
- **`locale`** (`string`, optional): A string representing the locale for the formatting (e.g., `'en-US'`, `'de-DE'`). Defaults to `'en-US'`.
- **`currency`** (`string`, optional): A string representing the currency code (e.g., `'USD'`, `'EUR'`, `'JPY'`). Defaults to `'USD'`.

### Returns

- **`string`**: A string representing the formatted currency value.

## Usage Examples

### Example 1: Default Currency (USD)

```javascript
const result = formatCurrency(1234567.89)
console.log(result)
// Output: "$1,234,567.89"
```

### Example 2: Formatting as EUR (German Locale)

```javascript
const result = formatCurrency(1234567.89, 'de-DE', 'EUR')
console.log(result)
// Output: "1.234.567,89 €"
```

### Example 3: Formatting as JPY (Japanese Locale)

```javascript
const result = formatCurrency(1234567.89, 'ja-JP', 'JPY')
console.log(result)
// Output: "￥1,234,568"
```

### Example 4: Formatting as INR (Indian Locale)

```javascript
const result = formatCurrency(1234567.89, 'en-IN', 'INR')
console.log(result)
// Output: "₹12,34,567.89"
```

### Example 5: Negative Numbers

```javascript
const result = formatCurrency(-1234567.89)
console.log(result)
// Output: "-$1,234,567.89"
```

### Example 6: Zero Value

```javascript
const result = formatCurrency(0)
console.log(result)
// Output: "$0.00"
```

### Example 7: Large Numbers

```javascript
const result = formatCurrency(1000000000)
console.log(result)
// Output: "$1,000,000,000.00"
```

### Example 8: Custom Currency

```javascript
const result = formatCurrency(1234567.89, 'en-GB', 'GBP')
console.log(result)
// Output: "£1,234,567.89"
```

## Edge Cases

- **Zero**: If the number is `0`, it will be formatted as `$0.00` (or the appropriate currency symbol).
- **Negative Numbers**: Negative numbers will include a minus sign before the currency symbol.
- **Large Numbers**: The function handles large numbers with appropriate grouping separators (commas or periods depending on the locale).
- **Decimals**: It will round values to two decimal places as required by standard currency formatting.
