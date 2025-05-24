# Styles

This folder holds global styles and theming information for the application. Use it to define CSS/SCSS files that apply styles across multiple components or the entire app.

## Guidelines

- **Global Styles:** Place styles that should be available throughout the application (e.g., resets, typography, variables).
- **Theming:** Store theme variables (colors, fonts, spacing) in dedicated files for easy customization.
- **Modularity:** Organize styles into sub-folders (e.g., `base`, `themes`, `utils`) for maintainability.
- **Avoid Duplication:** Do not duplicate styles that belong to specific components; keep those in the component's folder.

## Typical Contents

- **Global CSS/SCSS:** e.g., `index.css`, `global.scss`.
- **Theme Files:** e.g., `variables.scss`, `dark-theme.scss`, `light-theme.scss`.
- **Utility Classes:** e.g., `helpers.scss`, `mixins.scss`.
- **Base Styles:** e.g., `reset.css`, `typography.scss`.

## Usage

Import global styles in your main entry file (e.g., `index.js` or `App.jsx`). Use theme and utility files to maintain a consistent look and feel across the application.

## Example Structure

```
src/
|
|-- styles/
|------ index.css
|------ variables.scss
|------ reset.css
|------ typography.scss
|
|------ themes/
|---------- dark-theme.scss
|---------- light-theme.scss
|
|------ utils/
|---------- mixins.scss
|----------helpers.scss
```