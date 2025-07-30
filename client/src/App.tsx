/**
 * @file App.tsx
 * @description Main application component for the IPLuso StudentHub Integrated Project.
 * Sets up React Router for client-side navigation and provides global context and data fetching.
 * Defines routes for Home, FAQ, Events, Internships, News, Profile, Spaces, and NotFound pages.
 *
 * @returns {JSX.Element} The main application component with routing and providers.
 */

// Import Packages
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import needed Pages
import HomePage from "./pages/Home.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import EventsPage from "./pages/Events.tsx";
import InternshipsPage from "./pages/Internships.tsx";
import NewsPage from "./pages/News.tsx";
import NewsArticlePage from "./pages/NewsArticle.tsx";
import EventArticlePage from "./pages/EventArticle.tsx";
import InternshipArticlePage from "./pages/InternshipArticle.tsx";
import ProfilePage from "./pages/Profile.tsx";
import SpacesPage from "./pages/Spaces.tsx";
import NotFoundPage from "./pages/NotFound.tsx";

// Import Components
import CookieConsent from "./components/CookieConsent/CookieConsent.tsx";

// Import Contexts
import { UserProvider } from "./store/UserContext.tsx";

// Import Utilities
import ProtectedRoute from "./utils/ProtectedRoute.tsx";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <UserProvider>
        <BrowserRouter>
          <CookieConsent />
          {/* Define the main routes for the application */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/article/:id" element={<NewsArticlePage />} />
            <Route path="/events/article/:id" element={<EventArticlePage />} />
            <Route
              path="/internships/article/:id"
              element={<InternshipArticlePage />}
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/spaces/:campusId" element={<SpacesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
