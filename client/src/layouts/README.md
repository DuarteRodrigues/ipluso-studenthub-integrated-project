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

## Implemented Layouts

Below are the layout components currently implemented in this folder

```
layouts/
│
├── ArticlesLayout.tsx
├── EventArticleLayout.tsx
├── EventsLayout.tsx
├── HomeLayout.tsx
├── InternshipArticleLayout.tsx
├── InternshipsLayout.tsx
├── NewsArticleLayout.tsx
├── NewsLayout.tsx
├── ProfileAdminLayout.tsx
├── ProfileUserLayout.tsx
├── SpacesLayout.tsx
└── README.md
```

### Layout Descriptions

- **ArticlesLayout.tsx**  
  Generic layout for displaying lists of articles (news, events, internships) with filtering, tags, and infinite scroll.

- **EventArticleLayout.tsx**  
  Layout for displaying the details of a single event article, including feedback and tags.

- **EventsLayout.tsx**  
  Layout for the events listing page, using `ArticlesLayout` to display all events.

- **HomeLayout.tsx**  
  Main landing page layout, assembling the title card, navigation bar, welcome message, news/events panel, internships panel, space panel, and contacts panel.

- **InternshipArticleLayout.tsx**  
  Layout for displaying the details of a single internship opportunity, including feedback, tags, and location.

- **InternshipsLayout.tsx**  
  Layout for the internships listing page, using `ArticlesLayout` to display all internships.

- **NewsArticleLayout.tsx**  
  Layout for displaying the details of a single news article, including feedback and tags.

- **NewsLayout.tsx**  
  Layout for the news listing page, using `ArticlesLayout` to display all news articles.

- **ProfileAdminLayout.tsx**  
  Admin profile layout, allowing management (CRUD) of news, events, and internships, with modals for editing and creating content.

- **ProfileUserLayout.tsx**  
  User profile layout, displaying user information and lists of news/events the user has interacted with.

- **SpacesLayout.tsx**  
  Layout for the "Espaços" (Spaces) section, presenting information about the institution's campuses and facilities.

---

Each layout is responsible for the overall structure and composition of a specific page or section, ensuring consistency and maintainability across the application.
