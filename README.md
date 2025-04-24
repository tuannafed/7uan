# 7uan

React hook library, ready to use, written in TypeScript.

## 💫 Introduction

This is a monorepo containing several packages for React development:

- **@7uan/hooks**: A collection of React hooks for common use cases, written in TypeScript
- **@7uan/utils**: Utility functions and helpers for React development
- **@7uan/eslint-config**: ESLint configuration for React and TypeScript projects
- **@7uan/typescript-config**: TypeScript configuration for React projects

The packages are designed to be as minimal as possible. They are fully tree-shakable (using the ESM version), meaning that you only import what you need, and the rest will be removed from your bundle making the cost of using these packages negligible. Most packages are extensively tested and are being used in production environments.

## 🚀 Installation

To install the hooks package, run:

```bash
npm install @7uan/hooks
```

or

```bash
yarn add @7uan/hooks
```

or

```bash
pnpm add @7uan/hooks
```

To install other packages, replace `hooks` with the package name you want to install.

## 📖 Usage

Here's an example of how to use one of the hooks:

```tsx
import { useLocalStorage } from '@7uan/hooks'

function Component() {
  const [value, setValue] = useLocalStorage('my-localStorage-key', 0)

  return (
    <div>
      <p>Stored value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  )
}
```

## 📚 Features

- **Easy to Use**: Minimal setup and easy integration.
- **TypeScript Support**: Fully typed for a great developer experience.
- **Tree-Shakable**: Import only what you need.
- **Production-Ready**: Extensively tested and used in production.

## 🤝 Contributing

Contributions are welcome! If you have ideas, suggestions, or find bugs, feel free to open an issue or submit a pull request.

### Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/tuannafed/7uan.git
   ```

2. Install dependencies:

   ```bash
   cd 7uan
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

## 📄 License

This project is licensed under the ISC License. See the LICENSE file for details.
