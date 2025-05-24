# Layouts

This folder contains layout components that define the structural organization of the application's pages. Layout components are responsible for arranging content, managing navigation, and providing consistent structure across different views.

## Guidelines

- **Reusability:** Layouts should be generic and reusable across multiple pages.
- **Separation of Concerns:** Keep layout logic (e.g., navigation, sidebars, headers, footers) separate from feature or UI components.
- **Composition:** Use layout components to wrap pages or sections, ensuring consistent structure and styling.
- **Customization:** Allow layouts to accept children and props for flexibility.

## Typical Contents

- **Main Layouts:** e.g., `MainLayout`, `DashboardLayout`, `AuthLayout`.
- **Structural Components:** e.g., `Header`, `Footer`, `Sidebar`, `NavigationBar`.
- **Responsive Layouts:** Components that handle responsiveness and adapt to different screen sizes.

## Usage

Import and use layout components to wrap your pages or major sections, ensuring a consistent look and feel throughout the application.

## Example Structure

```
src/
|
|-- layouts/
|------ MainLayout.jsx
|------ DashboardLayout.jsx
|------ AuthLayout.jsx
|------ Header.jsx
|------ Footer.jsx
|------ Sidebar.jsx
```