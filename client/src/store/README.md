# State Management

This folder contains the application's global state management logic. It typically includes store configuration, reducers, middleware, and any utilities related to managing state across the app.

## Guidelines

- **Centralization:** Keep all global state logic here to ensure a single source of truth.
- **Modularity:** Organize reducers, actions, and middleware into separate files or sub-folders for maintainability.
- **Scalability:** Use feature-based slices or modules to keep the store scalable as the application grows.
- **Testing:** Include unit tests for reducers, actions, and selectors.

## Typical Contents

- **Store Configuration:** Main file for setting up the Redux store or other state management library.
- **Reducers/Slices:** Logic for updating state based on dispatched actions.
- **Actions:** Action creators for dispatching changes to the store.
- **Middleware:** Custom middleware for handling side effects (e.g., logging, async operations).
- **Selectors:** Functions for selecting and deriving data from the state.

## Usage

Import the store into your application entry point and provide it to your app using a provider (e.g., `<Provider store={store}>` for Redux). Use hooks to connect functions to access and update global state within your components.

## Example Structure
```
src/
|
|-- store/
|------ index.js            # Store configuration
|------ rootReducer.js      # Combines all reducers
|------ userSlice.js        # Example feature slice
|------ middleware.js       # Custom middleware
|------ selectors.js        # Common selectors
```

---

## Implemented State Management

Below are the files currently implemented in this folder:

```
store/
│
├── UserContext.tsx
└── README.md
```

### File Descriptions

- **UserContext.tsx**  
  Implements a React Context for managing user state across the application.  
  - Stores the current user's information (`userId`, `username`) in state and persists it to `localStorage`.
  - Provides a `UserProvider` component to wrap the app and make user state available via context.
  - Exposes a `useUser` hook for accessing and updating the user state from any component.

---

This approach provides a simple and effective way to manage global user state without the complexity of Redux or other state management libraries, making it suitable for applications where only a few pieces of global state are required.