# Utils

This folder contains utility functions and helper modules that provide common functionality across the application. Utilities help keep your codebase DRY (Don't Repeat Yourself) and modular by centralizing reusable logic.

## Guidelines

- **Reusability:** Write generic functions that can be used in multiple places.
- **Separation of Concerns:** Keep utilities focused on a single responsibility (e.g., formatting, validation, calculations).
- **Documentation:** Add comments or documentation to explain the purpose and usage of each utility.
- **Testing:** Include unit tests for utility functions to ensure reliability.

## Typical Contents

- **Formatting Helpers:** e.g., date, number, and string formatting.
- **Validation Functions:** e.g., input validations, schema checks.
- **API Helpers:** e.g., query string builders, response parsers.
- **General Utilities:** e.g., debounce, throttle, deep clone.

## Usage

Import utility functions into your components, hooks, or services as needed to avoid code duplication and improve maintainability.

## Example Structure

```
src/
|
|-- utils/
|------ formatDate.js
|------ validateEmail.js
|------ buildQueryString.js
|------ debounce.js
```

---

## Implemented Utilities

Below are the utility modules currently implemented in this folder:

```
utils/
│
├── articleManipulation.tsx
├── CookieManagement.tsx
├── ProtectedRoute.tsx
└── README.md
```

### File Descriptions

- **articleManipulation.tsx**  
  Provides functions to sort arrays of objects (such as news, events, internships) by their date property, both in ascending and descending order.

- **CookieManagement.tsx**  
  Utility functions for managing cookies in the application, including setting, getting, and deleting cookies. Used for simple session and authentication management.

- **ProtectedRoute.tsx**  
  A higher-order component that restricts access to certain routes based on authentication status. Checks for a valid authentication cookie and redirects unauthenticated users to the login page.

---

Each utility is documented at the top of its file and is designed to be reusable across different parts of the application.