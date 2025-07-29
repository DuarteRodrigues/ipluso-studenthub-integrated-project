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

## Implemented Hooks

Below are the custom hooks currently implemented in this folder:

- **useArticleFeedback.tsx**  
  Manages article feedback logic, including fetching, posting, and updating user feedback (like/dislike) for articles.

- **useDropdown.tsx**  
  Handles dropdown open/close state, toggling, and detects clicks outside the dropdown to close it automatically.

- **useImagesLoaded.tsx**  
  Checks if all images in a given array of URLs have finished loading, returning a boolean status.

- **useInteractedArticles.tsx**  
  Fetches and manages the list of articles (news or events) that a user has interacted with, based on user ID.

---

Each hook is documented at the top of its file and is designed to be reusable across different components and features in the application.