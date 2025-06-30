/**
 * @file App.js
 * @description Main application component for the IPLuso StudentHub Integrated Project.
 * Sets up the React Router for client-side navigation and renders the Navbar and page components.
 * Defines routes for Home, FAQ, Contacts, News, Internships, and NotFound pages.
 *
 * @App
 * @returns {JSX.Element} The main application with routing.
 */

// Import Packages
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import needed Pages
import HomePage from "./pages/Home";
import FAQPage from "./pages/FAQPage";
import ContactsPage from "./pages/Contacts";
import EventsPage from "./pages/Events";
import InternshipsPage from "./pages/Internships";
import NewsPage from "./pages/News";
import SpacesPage from "./pages/Spaces";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/spaces" element={<SpacesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
