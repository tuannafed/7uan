<h1 align="center">
  @7uan/utils
  <br>
</h1>

<h4 align="center">A collection of utility functions to simplify common JavaScript/TypeScript operations.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@7uan/utils">
    <img src="https://img.shields.io/npm/v/@7uan/utils.svg" alt="npm version">
  </a>
  <a href="https://github.com/tuanna/@7uan/utils/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@7uan/utils.svg" alt="license">
  </a>
  <a href="https://bundlephobia.com/package/@7uan/utils">
    <img src="https://img.shields.io/bundlephobia/min/@7uan/utils" alt="bundle size">
  </a>
  <a href="https://github.com/tuanna/@7uan/utils">
    <img src="https://img.shields.io/github/stars/tuanna/@7uan/utils" alt="stars">
  </a>
</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
  - [convertObjectKeysToCamelCase](#convertobjectkeystocamelcase)
  - [convertObjectKeysToSnakeCase](#convertobjectkeystosnakecase)
  - [formatDate](#formatdate)
  - [isToday](#istoday)
  - [isPast](#ispast)
  - [isFuture](#isfuture)
  - [dateDifference](#datedifference)
  - [addDays](#adddays)
  - [subtractDays](#subtractdays)
  - [startOfWeek](#startofweek)
  - [endOfWeek](#endofweek)
  - [startOfMonth](#startofmonth)
  - [endOfMonth](#endofmonth)
  - [formatQueryString](#formatquerystring)
- [Contributing](#contributing)
- [License](#license)

## Installation

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

## Usage

```ts
import {
  formatQueryString,
  convertObjectKeysToSnakeCase,
  formatDate,
  isToday,
  // ... other functions
} from '@7uan/utils'
```

## Functions

### convertObjectKeysToCamelCase

Converts all keys in an object to camelCase format.

#### Example:

```ts
import { convertObjectKeysToCamelCase } from '@7uan/utils'

const snakeCaseObject = {
  first_name: 'John',
  last_name: 'Doe',
  user_age: 30,
}

const camelCaseObject = convertObjectKeysToCamelCase(snakeCaseObject)
// Result: { firstName: 'John', lastName: 'Doe', userAge: 30 }
```

### convertObjectKeysToSnakeCase

Converts all keys in an object to snake_case format.

#### Example:

```ts
import { convertObjectKeysToSnakeCase } from '@7uan/utils'

const camelCaseObject = {
  firstName: 'John',
  lastName: 'Doe',
  userAge: 30,
}

const snakeCaseObject = convertObjectKeysToSnakeCase(camelCaseObject)
// Result: { first_name: 'John', last_name: 'Doe', user_age: 30 }
```

### formatDate

Formats a date according to the specified format string.

#### Example:

```ts
import { formatDate } from '@7uan/utils'

const date = new Date('2024-03-20')
const formattedDate = formatDate(date, 'YYYY-MM-DD')
// Result: '2024-03-20'
```

### isToday

Checks if a given date is today.

#### Example:

```ts
import { isToday } from '@7uan/utils'

const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)

console.log(isToday(today)) // true
console.log(isToday(yesterday)) // false
```

### isPast

Checks if a given date is in the past.

#### Example:

```ts
import { isPast } from '@7uan/utils'

const pastDate = new Date('2023-01-01')
const futureDate = new Date('2025-01-01')

console.log(isPast(pastDate)) // true
console.log(isPast(futureDate)) // false
```

### isFuture

Checks if a given date is in the future.

#### Example:

```ts
import { isFuture } from '@7uan/utils'

const pastDate = new Date('2023-01-01')
const futureDate = new Date('2025-01-01')

console.log(isFuture(pastDate)) // false
console.log(isFuture(futureDate)) // true
```

### dateDifference

Calculates the difference between two dates in the specified unit (days, hours, minutes, etc.).

#### Example:

```ts
import { dateDifference } from '@7uan/utils'

const date1 = new Date('2024-01-01')
const date2 = new Date('2024-01-10')

const diffInDays = dateDifference(date1, date2, 'days')
// Result: 9
```

### addDays

Adds a specified number of days to a date.

#### Example:

```ts
import { addDays } from '@7uan/utils'

const date = new Date('2024-01-01')
const newDate = addDays(date, 5)
// Result: Date object for '2024-01-06'
```

### subtractDays

Subtracts a specified number of days from a date.

#### Example:

```ts
import { subtractDays } from '@7uan/utils'

const date = new Date('2024-01-10')
const newDate = subtractDays(date, 5)
// Result: Date object for '2024-01-05'
```

### startOfWeek

Returns the start of the week for a given date.

#### Example:

```ts
import { startOfWeek } from '@7uan/utils'

const date = new Date('2024-03-20')
const weekStart = startOfWeek(date)
// Result: Date object for the start of the week
```

### endOfWeek

Returns the end of the week for a given date.

#### Example:

```ts
import { endOfWeek } from '@7uan/utils'

const date = new Date('2024-03-20')
const weekEnd = endOfWeek(date)
// Result: Date object for the end of the week
```

### startOfMonth

Returns the start of the month for a given date.

#### Example:

```ts
import { startOfMonth } from '@7uan/utils'

const date = new Date('2024-03-20')
const monthStart = startOfMonth(date)
// Result: Date object for '2024-03-01'
```

### endOfMonth

Returns the end of the month for a given date.

#### Example:

```ts
import { endOfMonth } from '@7uan/utils'

const date = new Date('2024-03-20')
const monthEnd = endOfMonth(date)
// Result: Date object for '2024-03-31'
```

### formatQueryString

Formats an object into a query string.

#### Example:

```ts
import { formatQueryString } from '@7uan/utils'

const params = {
  name: 'John',
  age: 30,
  city: 'New York',
}

const queryString = formatQueryString(params)
// Result: 'name=John&age=30&city=New%20York'
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
