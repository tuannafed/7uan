# 7uan

A collection of React hooks and utilities, written in TypeScript, designed for modern web development.

## 💫 Introduction

7uan is a monorepo containing several packages for React development:

- **@7uan/hooks**: A comprehensive collection of React hooks for common use cases
- **@7uan/utils**: Utility functions and helpers for React development
- **@7uan/eslint-config**: ESLint configuration for React and TypeScript projects
- **@7uan/typescript-config**: TypeScript configuration for React projects
- **@7uan/cli**: Command-line tools for project management

The packages are designed to be minimal, performant, and fully tree-shakable. They are extensively tested and production-ready.

## 🚀 Installation

### Using npm

```bash
npm install @7uan/hooks @7uan/utils
```

### Using yarn

```bash
yarn add @7uan/hooks @7uan/utils
```

### Using pnpm

```bash
pnpm add @7uan/hooks @7uan/utils
```

## 📖 Usage

### Hooks Example

```tsx
import { useLocalStorage } from '@7uan/hooks'

function Component() {
  const [value, setValue] = useLocalStorage('my-key', 0)

  return (
    <div>
      <p>Stored value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  )
}
```

### Utils Example

```tsx
import { formatDate } from '@7uan/utils'

const formattedDate = formatDate(new Date(), 'yyyy-MM-dd')
```

## 📚 Features

- **TypeScript First**: Full TypeScript support with comprehensive type definitions
- **Tree-Shakable**: Import only what you need, reducing bundle size
- **Zero Dependencies**: Minimal external dependencies
- **Production Ready**: Thoroughly tested and used in production environments
- **Modern Tooling**: Built with the latest React and TypeScript features

## 🛠️ Development

### Prerequisites

- Node.js >= 18.17.0
- pnpm >= 10.9.0

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/tuannafed/7uan.git
   cd 7uan
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start development:
   ```bash
   pnpm run dev
   ```

### Available Scripts

- `pnpm run dev` - Start development mode
- `pnpm run build` - Build all packages
- `pnpm run test` - Run tests
- `pnpm run lint` - Run linting
- `pnpm run format` - Format code
- `pnpm run changeset` - Create a changeset
- `pnpm run generate-doc` - Generate documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Author: TuanNA
- Email: tuanna.fed@gmail.com
- GitHub: [@tuannafed](https://github.com/tuannafed)
