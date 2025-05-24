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