# Hooks

This folder contains custom React hooks that encapsulate shared logic and behaviors used across the application.

## Guidelines

- **Reusability:** Hooks should be generic and reusable in multiple components or features.
- **Separation or Concerns:** Each hook should focus on a single responsibility (e.g., data fetching, form handling, authentication).
- **Documentation:** Add comments or documentation for each hook to explain its purpose and usage.
- **Testing:** Include unit tests for hooks where possible.

## Typical Contents

- **Data Fetching Hooks:** e.g., `useFetch`, `useApi`.
- **Form Hooks:** e.g., `useForm`, `useInput`.
- **State Management:** e.g., `useToggle`, `useLocalStorage`.
- **Utility Hooks:** e.g., `useDebounce`, `usePrevious`.

## Usage

- Import hooks from this folder into your components and features as needed to keep logic modular and maintainable.

## Example Structure

```
src/
|
|-- hooks/
|------ useFetch.js
|------ useForm.js
|------ useToggle.js
|------ useDebounce.js
```