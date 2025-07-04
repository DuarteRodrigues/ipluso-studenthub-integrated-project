# Components

This folder contains reusable and global UI components used throughout my application. Components here are designed to be modular, maintainable and easily shared across different parts of the project.

## Guidelines

- **Reusability:** Components should be generic and configurable via props.
- **Separation:** Avoid placing page-specific or business logic here; keep components focused on presentation and UI logic.
- **Organization:** Group related components into sub-folders if necessary (e.g., `Button`, `Modal`, `Form`).
- **Testing:** Include unit tests for each component where possible.

## Typical Contents

- **UI Elements:** Buttons, inputs, cards, modals, etc.
- **Layout Components:** Grids, containers, navigation bars.
- **Utility Components:** Loaders, error boundaries, etc.

## Usage

Import components from this folder into your pages or other components as needed.

## Example Structure

```
src/
|
|-- components/
|------ Button/
|---------- Button.jsx
|---------- Button.test.jsx
|---------- Button.css
|
|------ Modal/
|---------- Modal.jsx
|---------- Modal.test.jsx
|---------- Modal.css
|
|------ Navbar/
|---------- Navbar.jsx
|---------- Navbar.css
```

Keep this folder focused on UI building blocks to ensure consistency and maintainability across the application.

## Implemented Components

### Navbar

- **Files:** `Navbar.jsx`, `Navbar.css`
- **Description:** The main navigation bar for the application, includes navigation links and styled buttons with hover effects.

### Header

- **Files:** `Header.jsx`, `Header.css`
- **Description:** The top section of the app, typically includes the logo and dropdown menus for navigation.

### Footer

- **Files:** `Footer.jsx`, `Footer.css`
- **Description:** A simple footer that sits at the bottom of the page, ready for additional information or links.

### TitleCard

- **Files:** `TitleCard.jsx`, `TitleCard.css`
- **Description:** A full-width image card with a centered, animated title and optional subtitle, featuring a color overlay for readability.

---
