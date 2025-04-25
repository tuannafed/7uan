# 📦 @7uan/utils

A collection of utility functions to simplify common JavaScript/TypeScript operations.

## 📑 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
  - [convertObjectKeysToCamelCase](#convertobjectkeystocamelcase)
  - [convertObjectKeysToSnakeCase](#convertobjectkeystosnakecase)
  - [convertToSlug](#converttoslug)
  - [formatCurrency](#formatcurrency)
  - [formatQueryString](#formatquerystring)
  - [getFileInfo](#getfileinfo)
  - [getReasonPhrase](#getreasonphrase)
  - [getStatusCode](#getstatuscode)
  - [removeEmptyQueryParams](#removeemptyqueryparams)
  - [sleep](#sleep)
- [Contributing](#contributing)
- [License](#license)

## ⚙️ Installation

```sh
npm install @7uan/utils
```

or using Yarn:

```sh
yarn add @7uan/utils
```

or using pnpm:

```sh
pnpm add @7uan/utils
```

## 🚀 Usage

```ts
import {
  convertObjectKeysToCamelCase,
  convertObjectKeysToSnakeCase,
  convertToSlug,
  formatCurrency,
  formatQueryString,
  getFileInfo,
  getReasonPhrase,
  getStatusCode,
  removeEmptyQueryParams,
  sleep,
} from '@7uan/utils'
```

## 🔧 Functions

### convertObjectKeysToCamelCase

Convert object keys from snake_case to camelCase.

**Parameters:**

- data The object or array of objects to process. It can be any object or array of objects.

**Returns:** ConvertObjectKeysToCamelCaseReturnType The transformed result, which is a string.

**Example:**

```tsx
const result = convertObjectKeysToCamelCase([{ snake_case_key: 'value' }])

console.log(result) // "Processed output"
```

### convertObjectKeysToSnakeCase

Convert object keys to snake case.

**Parameters:**

- data The object or array of objects to process. It can be any object or array of objects.

**Returns:** ConvertObjectKeysToSnakeCaseReturnType The transformed result, which is a string.

**Example:**

```tsx
const result = convertObjectKeysToSnakeCase([{ snake_case_key: 'value' }])

console.log(result) // "Processed output"
```

### convertToSlug

Convert a string to a slug.

**Parameters:**

- text The text to be transformed.

**Returns:** The slug.

**Example:**

```tsx
const text = 'Hello World'
const slug = convertToSlug(text)
console.log(slug) // hello-world
```

### formatCurrency

Formats a number into a currency string.

**Parameters:**

- amount The number to format.
- locale The locale to use. Default is `en-US`.
- currency The currency to use. Default is `USD`.

**Returns:** Returns the formatted currency string.

**Example:**

```tsx
const amount = 1000
const locale = 'en-US'
const currency = 'USD'
const result = formatCurrency(amount, locale, currency)
console.log(result)
// => $1,000.00
```

### formatQueryString

Formats a URL with path parameters and query parameters.

- `pathParams` (string | number | (string | number)[]): The path parameters to be appended to the baseUrl.
- `query` (Record<string, any>): The query parameters to be appended to the URL as a query string.

**Parameters:**

- - `baseUrl` (string): The base URL to which the pathParams and query parameters will be appended.

**Returns:** FormatQueryStringReturnType The transformed result, which is a string.

**Example:**

```tsx
const result = formatQueryString([{ snake_case_key: 'value' }])

console.log(result) // "Processed output"
```

### getFileInfo

Type for file information result

**Example:**

```tsx
const file = new File(['content'], 'example.jpg')
const fileName = getFileInfo.name(file.name)
const extension = getFileInfo.extension(file.name)
const size = getFileInfo.size(file.size)
const { width, height } = await getFileInfo.dimensions(file)
const info = await getFileInfo.all(file)

console.log(info) // { name: 'example', extension: 'jpg', size: '8 Bytes', width: 0, height: 0 }
```

### getReasonPhrase

Returns the reason phrase for the given status code.
If the given status code does not exist, an error is thrown.

**Parameters:**

- statusCode The HTTP status code

**Returns:** The associated reason phrase (e.g. "Bad Request", "OK")

**Example:**

```ts
const reasonPhrase = getReasonPhrase(404)
console.log(reasonPhrase) // "Not Found"
```

### getStatusCode

Returns the status code for the given reason phrase.
If the given reason phrase does not exist, undefined is returned.

**Parameters:**

- reasonPhrase The HTTP reason phrase (e.g. "Bad Request", "OK")

**Returns:** The associated status code

**Example:**

```ts
const statusCode = getStatusCode('Not Found')
console.log(statusCode) // 404
```

### removeEmptyQueryParams

Removes empty query parameters from an object or array of objects.

**Parameters:**

- data The object or array of objects to process. It can be any object or array of objects.

**Returns:** RemoveEmptyQueryParamsReturnType The transformed result, which is a string.

**Example:**

```tsx
const result = removeEmptyQueryParams([{ snake_case_key: 'value' }])

console.log(result) // "Processed output"
```

### sleep

Sleep for the specified number of seconds.

**Parameters:**

- data The object or array of objects to process. It can be any object or array of objects.

**Returns:** Returns a promise that resolves after the specified number of seconds.

**Example:**

```tsx
const result = sleep([{ snake_case_key: 'value' }])

console.log(result) // "Processed output"
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

MIT
