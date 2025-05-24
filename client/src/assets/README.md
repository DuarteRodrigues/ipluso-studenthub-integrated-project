# Assets
This folder contains static files throughout the application. These files are typically not JS code, but are essential for rendering and branding the UI.

## Typical Contents

- **Images:** Logos, icons, backgrounds, and other image assets.
- **Fonts:** Custom font files used in the application.
- **Styles:** CSS, SCSS, or other style files that are not part of the main styles directory.
- **Other Static Files:** PDFs, SVGs, or any other recourses required by the UI.

## Usage

- Import assets from this folder into your components as needed.
- Organize files into sub-folders (e.g., `/images`, `/fonts`) for better maintainability.
- Avoid placing JavaScript or React components here.

## Example Structure

```
src/
|
|-- assets/
|------ images/
|---------- logo.png
|---------- background.jpg
|
|------ fonts/
|---------- OpenSans-Regular.ttf
|
|------ styles/
|---------- custom-theme.css
```

Keep this folder clean and only include files that are required for the application's presentation layer.