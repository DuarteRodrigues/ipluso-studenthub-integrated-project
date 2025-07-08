/**
 * @file NewsEventsPanel.tsx
 * @description
 * 
 * @component NewsEventsPanel
 * @returns {JSX.Element} A panel displaying news and events.
 */

// Import Packages
import React from "react";

// Import Components
import NewsEventCard from "../NewsEventCard/NewsEventCard.tsx";

// Import Utilities
import {sortMostRecent} from "../../utils/articleManipulation.tsx";

// Import Styles
import "./NewsEventsPanel.css";

// Dummy data for testing
import news from "../../utils/NewsTestData.tsx";
import events from "../../utils/EventsTestData.tsx";

// Sort news and events by most recent
const sortedNews = sortMostRecent(news).slice(0, 3); // Get the 3 most recent news
const sortedEvents = sortMostRecent(events).slice(0, 3); // Get the 3 most recent events

const NewsEventsPanel:React.FC = () => {
  return (
    <div className="NewsEventsPanel">
        <div className="NewsEventsColumn">
            <div className="NewsEventsHeader">
                <h3>Notícias</h3>
                <a href="/news" className="NewsEventsMore">Ver Mais</a>
            </div>
            {sortedNews.map((item, idx) => (
                <NewsEventCard
                    key={idx}
                    {...item}
                />
            ))}
        </div>
        <div className="NewsEventsColumn">
            <div className="NewsEventsHeader">
                <h3>Eventos</h3>
                <a href="/events" className="NewsEventsMore">Ver Mais</a>
            </div>
            {sortedEvents.map((item, idx) => (
                <NewsEventCard
                    key={idx}
                    {...item}
                />
            ))}
        </div>
    </div>
  );
};

export default NewsEventsPanel;