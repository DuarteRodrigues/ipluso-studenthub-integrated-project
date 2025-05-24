# Services

This folder contains modules for API calls and integration with external services. Service files are responsible for handling communication between the frontend and backend, as well as with any third-party APIs.

## Guidelines 

- **Separation of Concerns:** Keep all API logic and external service integrations here, separate from  UI and business logic.
- **Reusability:** Write generic functions that can be reused across different features or components.
- **Error Handling:** Implement consistent error handling and response parsing.
- **Configuration:** Store base URIs and API keys in environment variables, not in the codebase.

## Typical Contents

- **API Modules:** Functions for HTTP requests (GET, POST, PUT, DELETE) to your backend.
- **Third-Party Integrations:** Logic for interacting with the external APIs (e.g., authentication, analytics, payment gateways).
- **Helpers:** Utility functions for request configuration, token management, etc.

## Usage

Import service functions into your features, hooks, or components to perform API request or interact with external services. Keep this folder focused on data fetching and external communication to maintain a clean separation of concerns.

## Example Structure
```
src/
|
|-- services/
|------ api.js
|------ authService.js
|------ userService.js
|------ analyticsService.js
```