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

Below is a summary of the main components available in this folder:

- **ContactsPanel:** Displays key contact information for the institution, including phone numbers, emails, and office locations.
- **CookieConsent:** Manages cookie consent banners, allowing users to accept or decline cookies and storing their preferences.
- **EventsCard:** Presents event details such as title, date, description, and location in a visually appealing card format.
- **EventsForm:** Provides a form interface for creating or editing event entries, supporting validation and submission.
- **Footer:** Renders the application’s footer, including copyright information and useful links.
- **Header:** Displays the top navigation/header bar, often including branding and quick access links.
- **InternshipsCard:** Showcases internship opportunities with details like position, company, and application deadline.
- **InternshipsForm:** Allows users to submit or edit internship listings, with fields for relevant information.
- **InternshipsPanel:** Lists available internships, supporting filtering and sorting options.
- **Navbar:** Implements the main navigation bar, enabling users to move between different sections of the app.
- **NewsCard:** Displays news articles with headline, summary, and publication date.
- **NewsEventCard:** Combines news and event information into a unified card for streamlined presentation.
- **NewsEventsPanel:** Aggregates and lists news and event items, often with pagination or filtering.
- **NewsForm:** Form for creating or editing news articles, including fields for title, content, and images.
- **ProfileInteractedList:** Shows a list of items (such as events or internships) the user has interacted with.
- **ProfileInteractedListItem:** Represents an individual item in the user’s interacted list, with quick actions.
- **SpacePanel:** Displays information about academic spaces and resources, such as classrooms or labs.
- **TitleCard:** Highlights the main title and image of the project, serving as a visual introduction.
- **WelcomeMessage:** Greets users with a customizable welcome message upon entry to the application.

---
