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

---

## Implemented Pages

Below are the page components currently implemented in this folder:

```
pages/
│
├── EventArticle.tsx
├── Events.tsx
├── FAQPage.tsx
├── Home.tsx
├── InternshipArticle.tsx
├── Internships.tsx
├── News.tsx
├── NewsArticle.tsx
├── NotFound.tsx
├── Profile.tsx
├── Spaces.tsx
└── README.md
```

### Page Descriptions

- **Home.tsx**  
  The main landing page of the application, displaying highlights such as recent news, events, and internships, and assembling the main layout.

- **News.tsx**  
  Displays a list of news articles, fetching data from the API and passing it to the news layout.

- **NewsArticle.tsx**  
  Shows the details of a single news article, including content, author, and feedback options.

- **Events.tsx**  
  Displays a list of events, fetching data from the API and passing it to the events layout.

- **EventArticle.tsx**  
  Shows the details of a single event, including content and feedback options.

- **Internships.tsx**  
  Displays a list of available internships, fetching data from the API and passing it to the internships layout.

- **InternshipArticle.tsx**  
  Shows the details of a specific internship opportunity.

- **Spaces.tsx**  
  Page dedicated to academic spaces and facilities, using the spaces layout.

- **FAQPage.tsx**  
  Frequently Asked Questions page, presenting common questions and answers for users.

- **Profile.tsx**  
  Displays the user's profile page, loading user data and rendering either the admin or user profile layout based on the user's role.

- **NotFound.tsx**  
  404 error page shown when a user navigates to a non-existent route.

---

Each page is responsible for fetching its own data (if needed), composing the appropriate layout, and serving as an entry point for a specific route in the application.