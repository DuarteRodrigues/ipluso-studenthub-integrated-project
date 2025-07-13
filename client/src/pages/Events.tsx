/**
 * @file Events.tsx
 * @description This file contains the Events page component, which displays a list of events
 *
 * @Page Events
 * @returns {JSX.Element} The rendered Events page component.
 */

// Import Packages
import React from "react";

// Import needed Layout
import EventsLayout from "../layouts/EventsLayout.tsx";

// Importing Components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

function EventsPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
        <div style={{ flex: "1" }}>
          <EventsLayout />
        </div>
      <Footer />
    </div>
  );
}

export default EventsPage;
