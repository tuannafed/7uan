# @7uan/hooks

React hook, libs, utils, react UI framework, library, ready to use, written in TypeScript.

## 💫 Introduction

This is a React hooks library, written in TypeScript and easy to use. It provides a set of hooks that enables you to build your React applications faster. The hooks are built upon the principles of DRY (Don't Repeat Yourself). There are hooks for most common use cases you might need.

The library is designed to be as minimal as possible. It is fully tree-shakable (using the ESM version), meaning that you only import the hooks you need, and the rest will be removed from your bundle making the cost of using this library negligible. Most hooks are extensively tested and are being used in production environments.

## 🚀 Installation

To install the library, run:

```bash
npm install @7uan/hooks
```

or

```bash
yarn add @7uan/hooks
```

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

## 🪝 Available Hooks

<!-- HOOKS:START -->

- [`useBoolean`](https://domain.com//use-boolean) — handles boolean state with useful utility functions.
- [`useClickAnyWhere`](https://domain.com//use-click-any-where) — handles click events anywhere on the document.
- [`useCopyToClipboard`](https://domain.com//use-copy-to-clipboard) — copies text to the clipboard using the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).
- [`useCountdown`](https://domain.com//use-countdown) — manages countdown.
- [`useCounter`](https://domain.com//use-counter) — manages a counter with increment, decrement, reset, and setCount functionalities.
- [`useDarkMode`](https://domain.com//use-dark-mode) — returns the current state of the dark mode.
- [`useDebounceCallback`](https://domain.com//use-debounce-callback) — creates a debounced version of a callback function.
- [`useDebounceValue`](https://domain.com//use-debounce-value) — returns a debounced version of the provided value, along with a function to update it.
- [`useDocumentTitle`](https://domain.com//use-document-title) — sets the document title.
- [`useEventCallback`](https://domain.com//use-event-callback) — creates a memoized event callback.
- [`useEventListener`](https://domain.com//use-event-listener) — attaches event listeners to DOM elements, the window, or media query lists.
- [`useHover`](https://domain.com//use-hover) — tracks whether a DOM element is being hovered over.
- [`useIntersectionObserver`](https://domain.com//use-intersection-observer) — tracks the intersection of a DOM element with its containing element or the viewport using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
- [`useInterval`](https://domain.com//use-interval) — creates an interval that invokes a callback function at a specified delay using the [setInterval API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval).
- [`useIsClient`](https://domain.com//use-is-client) — determines if the code is running on the client side (in the browser).
- [`useIsMounted`](https://domain.com//use-is-mounted) — determines if the component is currently mounted.
- [`useIsomorphicLayoutEffect`](https://domain.com//use-isomorphic-layout-effect) — uses either useLayoutEffect or useEffect based on the environment (client-side or server-side).
- [`useLocalStorage`](https://domain.com//use-local-storage) — uses the [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to persist state across page reloads.
- [`useMap`](https://domain.com//use-map) — manages a key-value [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) state with setter actions.
- [`useMediaQuery`](https://domain.com//use-media-query) — tracks the state of a media query using the [Match Media API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).
- [`useOnClickOutside`](https://domain.com//use-on-click-outside) — handles clicks outside a specified element.
- [`usePrevious`](https://domain.com//use-previous) — stores the previous value of a state.
- [`useReadLocalStorage`](https://domain.com//use-read-local-storage) — reads a value from [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), closely related to [useLocalStorage()](https://domain.com//use-local-storage).
- [`useResizeObserver`](https://domain.com//use-resize-observer) — observes the size of an element using the [ResizeObserver API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
- [`useScreen`](https://domain.com//use-screen) — tracks the [screen](https://developer.mozilla.org/en-US/docs/Web/API/Window/screen) dimensions and properties.
- [`useScript`](https://domain.com//use-script) — dynamically loads scripts and tracking their loading status.
- [`useScrollLock`](https://domain.com//use-scroll-lock) — A custom hook that locks and unlocks scroll.
- [`useSessionStorage`](https://domain.com//use-session-storage) — uses the [sessionStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to persist state across page reloads.
- [`useStep`](https://domain.com//use-step) — manages and navigates between steps in a multi-step process.
- [`useTernaryDarkMode`](https://domain.com//use-ternary-dark-mode) — manages ternary (system, dark, light) dark mode with local storage support.
- [`useTimeout`](https://domain.com//use-timeout) — handles timeouts in React components using the [setTimeout API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout).
- [`useToggle`](https://domain.com//use-toggle) — manages a boolean toggle state in React components.
- [`useUnmount`](https://domain.com//use-unmount) — runs a cleanup function when the component is unmounted.
- [`useWindowSize`](https://domain.com//use-window-size) — tracks the size of the window.
<!-- HOOKS:END -->

## 🤝 Contributing

Contributions are welcome! If you have ideas, suggestions, or find bugs, feel free to open an issue or submit a pull request.

### Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/@7uan/hooks.git
   ```

2. Install dependencies:

   ```bash
   cd @7uan/hooks
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
