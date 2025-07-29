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

---

## Implemented Styles

Below are the files and folders currently implemented in this directory:

```
styles/
│
├── ArticlesLayout.css
├── EventArticleLayout.css
├── FAQPage.css
├── index.css
├── InternshipArticleLayout.css
├── NewsArticleLayout.css
├── ProfileAdminLayout.css
├── ProfileUserLayout.css
├── README.md
├── SpacesLayout.css
└── themes/
```

### File Descriptions

- **ArticlesLayout.css**  
  Styles for the articles listing layout, including grid, tags bar, and responsive adjustments.

- **EventArticleLayout.css**  
  Styles for the event article detail page, including layout, tags, and meta information.

- **FAQPage.css**  
  Styles for the FAQ (Frequently Asked Questions) page.

- **index.css**  
  Main global stylesheet, including font imports, body and html defaults, and enabling smooth scrolling.

- **InternshipArticleLayout.css**  
  Styles for the internship article detail page, including layout, details, and location section.

- **NewsArticleLayout.css**  
  Styles for the news article detail page, including layout, tags, and meta information.

- **ProfileAdminLayout.css**  
  Styles for the admin profile layout, including sidebar, main content, modals, and responsive adjustments.

- **ProfileUserLayout.css**  
  Styles for the user profile layout, including sidebar, main content, tabs, and responsive adjustments.

- **SpacesLayout.css**  
  Styles for the academic spaces layout, including headings, subtitles, and content containers.

- **themes/**  
  (Folder) Intended for theme-specific styles such as dark mode, light mode, or custom color schemes.

---

Each style file is scoped to a specific layout or global concern, helping maintain a clean and organized styling system across the application.