# Pages

This folder contains page-level components that are used for routing within the application. Each file or sub-folder typically represents a route or view, and may compose multiple UI and feature components.

## Guidelines

- **Routing:** Each page corresponds to a route in your application's router (e.g., React Router).
- **Composition:** Pages should assemble and compose reusable components, features and layouts.
- **Minimal Logic:** Keep business logic in features or hooks; pages should focus on structure and composition.
- **Organization:** Group related pages in sub-folders if your app has nested routes or sections.

## Typical Contents

- **Page Components:** e.g., `HomePage.jsx`, `ProfilePAge.jsx`, `LoginPage.jsx`.
- **Section Pages:** e.g., `Dashboard/`, `Settings`.
- **Error Pages:** e.g., `NotFound.jsx`, `ErrorBoundary.jsx`.

## Usage

Import pages into your routing configuration to define the application's navigation structure. Pages serve as entry points for each route and should use layouts and features to build complete views.

## Example Structure

```
src/
|
|-- pages/
|------ HomePage.jsx
|------ ProfilePage.jsx
|------ LoginPage.jsx
|------ Dashboard/
|---------- DashboardHome.jsx
|---------- DashboardSettings.jsx
|------ NotFound.jsx
```