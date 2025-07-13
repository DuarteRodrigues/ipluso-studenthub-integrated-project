/**
 * @file Events.tsx
 * @description This file contains the Events page component, which displays a list of events
 *
 * @Page Events
 * @returns {JSX.Element} The rendered Events page component.
 */

// Import Packages
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Import needed Layout
import EventsLayout from "../layouts/EventsLayout.tsx";

// Importing Components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

// Import Services
import { fetchArticles } from "../services/api.tsx";

// Import Utilities
import { sortMostRecent } from "../utils/articleManipulation.tsx";

// Import API URL
const apiURL = process.env.REACT_APP_API_URL;

const fetchEvents = await fetchArticles(apiURL, "events");

function EventsPage() {

  const { data: events = [], isLoading: eventsLoading, error: eventsError } = useQuery({
    queryKey: ['events'],
    queryFn: () => fetchEvents,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true // (Default, but explicit for clarity)
  });
  
  const sortedEvents = sortMostRecent(events);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
        <div style={{ flex: "1" }}>
          <EventsLayout 
            events={sortedEvents}
            eventsLoading={eventsLoading}
            eventsError={eventsError}
          />
        </div>
      <Footer />
    </div>
  );
}

export default EventsPage;
