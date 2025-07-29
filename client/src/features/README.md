# Features

This folder contains feature-specific modules, including UI components, logic, and state management related to individual features of the application.

## Guidelines

- **Encapsulation:** Keep all files related to a feature (components, hooks, slices, API calls, styles) within its own folder.
- **Separation:** Avoid mixing unrelated features in the same folder.
- **Reusability:** If a component or utility is used by multiple features, consider placing it in the `components` or `utils` folder instead.
- **Testing:** Include unit and integration tests for feature logic and UI.

## Typical contents

- **UI Components:** Feature-specific React components.
- **State Management:** Redux slices, context, or hooks for managing feature state.
- **API Logic:** Functions or services for interacting with backend endpoints.
- **Styles:** CSS or style files specific to the feature.

## Structure

Each subfolder within `features/` should represent a distinct feature or functionality. This helps keep related code organized and maintainable.

## Example Structure

```
src/
|
|-- features/
|------ chat/
|---------- Chat.jsx
|---------- chatSlice.js
|---------- chatAPI.js
|
|------ profile/
|---------- Profile.jsx
|---------- profileSlice.js
|---------- profileAPI.js
|
|------ notifications/
|---------- Notifications.jsx
|---------- notificationsSlice.js
|---------- notificationsAPI.js
```

Keep this folder organized by feature to improve maintainability and collaboration.

## Implemented Features

Below are the features currently implemented in this folder:

```
features/
│
├── ArticleFeedbackButtons/
│   ├── ArticleFeedbackButtons.tsx
│   └── ArticleFeedbackButtons.css
│
├── FAQ/
│   ├── Question.tsx
│   └── Question.css
│
├── LoginDropdown/
│   ├── LoginDropdown.tsx
│   └── LoginDropdown.css
│
└── UserDropdown/
    ├── UserDropdown.tsx
    └── UserDropdown.css
```

### Feature Descriptions

- **ArticleFeedbackButtons:**  
  Provides interactive feedback buttons (inside a spectrum of choice) for articles, allowing users to submit their reactions.

- **FAQ:**  
  Displays frequently asked questions in an interactive, collapsible format for easy access to common information.

- **LoginDropdown:**  
  A dropdown component for user authentication, presenting a compact login form.

- **UserDropdown:**  
  A dropdown menu for authenticated users, offering quick access to profile options and logout functionality.

---

Each subfolder contains all the necessary files for its feature, including React components, CSS styles, and any additional logic required for isolated functionality.